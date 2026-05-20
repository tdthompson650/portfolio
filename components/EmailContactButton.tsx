'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const TOAST_DURATION_MS = 3500;

interface EmailContactButtonProps {
  email: string;
  className: string;
}

/**
 * Contact CTA: copies email to clipboard, shows a toast, and keeps mailto: behavior.
 */
export default function EmailContactButton({ email, className }: EmailContactButtonProps) {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showMessage = useCallback((text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(text);
    timeoutRef.current = setTimeout(() => setMessage(null), TOAST_DURATION_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showMessage(`Email copied to clipboard: ${email}`);
    } catch {
      showMessage('Could not copy email. Your mail app will still open.');
    }
  };

  return (
    <>
      <a
        href={`mailto:${email}`}
        className={className}
        aria-label={`Send email to ${email}. Copies the address to your clipboard when clicked.`}
        onClick={() => {
          void handleClick();
        }}
      >
        Send me an email
      </a>

      {message ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 max-w-sm -translate-x-1/2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-900 shadow-lg motion-safe:transition-opacity dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          {message}
        </div>
      ) : null}
    </>
  );
}
