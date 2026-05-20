/**
 * Shared Tailwind class strings for page width and horizontal rhythm.
 * Keeps section alignment consistent between the nav bar and page content.
 */

/** Default max width for hero, about, projects, and footer. */
export const pageContainer =
  'mx-auto w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl';

/** Narrower column for contact copy and CTAs. */
export const pageContainerNarrow =
  'mx-auto w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl';

/** Caps hero paragraph line length without centering it (no mx-auto). */
export const readableMaxWidth = 'max-w-2xl lg:max-w-3xl xl:max-w-4xl';

/** Horizontal padding that scales up on large viewports. */
export const sectionPadding = 'px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16';
