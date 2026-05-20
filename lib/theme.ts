/**
 * Client-side theme persistence and a blocking init script for the root layout.
 * The script runs before paint to avoid a flash of the wrong color scheme.
 */

import type { Theme } from '@/types';

export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEME_CHANGE_EVENT = 'portfolio-theme-change';

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark';
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (isTheme(stored)) return stored;

  return getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

/** Notifies React when OS theme, storage, or in-tab theme changes occur. */
export function subscribeToTheme(onStoreChange: () => void): () => void {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = () => onStoreChange();

  media.addEventListener('change', handleChange);
  window.addEventListener('storage', handleChange);
  window.addEventListener(THEME_CHANGE_EVENT, handleChange);

  return () => {
    media.removeEventListener('change', handleChange);
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
  };
}

/** Stable server snapshot for useSyncExternalStore (toggle is client-only). */
export function getServerTheme(): Theme {
  return 'light';
}

/**
 * Inline script injected in <head> so the first paint matches stored or OS theme.
 * Must stay in sync with getTheme() / applyTheme() logic.
 */
export const themeInitScript = `
(function () {
  try {
    var key = '${THEME_STORAGE_KEY}';
    var stored = localStorage.getItem(key);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (stored !== 'light' && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (e) {}
})();
`;
