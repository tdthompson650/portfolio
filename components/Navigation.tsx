import ThemeToggle from '@/components/ThemeToggle';
import { pageContainer, sectionPadding } from '@/lib/layout';
import { navLinkClassName } from '@/lib/styles';
import type { NavLink } from '@/types';

interface NavigationProps {
  name: string;
  links: NavLink[];
}

export default function Navigation({ name, links }: NavigationProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 z-50 w-full border-b border-slate-300 bg-slate-100/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95"
    >
      <div
        className={`${pageContainer} ${sectionPadding} flex items-center justify-between gap-2 py-3 sm:gap-4`}
      >
        <a
          href="#main-content"
          className="shrink-0 text-base font-bold whitespace-nowrap text-blue-800 sm:text-xl dark:text-blue-400"
        >
          {name}
        </a>

        <ul className="flex shrink-0 flex-nowrap items-center gap-0.5 sm:gap-2">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className={navLinkClassName}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="shrink-0 pl-0.5 sm:pl-1">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
