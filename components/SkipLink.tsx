/** WCAG bypass block: visible on keyboard focus, hidden otherwise. */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-slate-50 focus:px-4 focus:py-3 focus:text-base focus:font-semibold focus:text-slate-900 focus:shadow-lg dark:focus:bg-slate-900 dark:focus:text-slate-50"
    >
      Skip to main content
    </a>
  );
}
