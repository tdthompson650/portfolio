'use client';

import { useSyncExternalStore } from 'react';

import {
  applyTheme,
  getServerTheme,
  getTheme,
  subscribeToTheme,
} from '@/lib/theme';
import type { Theme } from '@/types';

/** No-op subscription so we can detect client mount without useEffect setState. */
function subscribeClientOnly() {
  return () => {};
}

function getMountedOnClient() {
  return true;
}

function getMountedOnServer() {
  return false;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );
  const mounted = useSyncExternalStore(
    subscribeClientOnly,
    getMountedOnClient,
    getMountedOnServer,
  );

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  // Placeholder avoids hydration mismatch before client theme is read.
  if (!mounted) {
    return <div className="h-11 w-11 shrink-0" aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-400 bg-slate-50 text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
