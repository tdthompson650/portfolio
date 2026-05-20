import type { IconType } from 'react-icons';
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

/** Core stack shown in the about section (order is display order). */
const technologies: { name: string; Icon: IconType }[] = [
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Git', Icon: SiGit },
  { name: 'Vercel', Icon: SiVercel },
];

export default function TechnologyList() {
  return (
    <ul className="flex flex-wrap gap-3 sm:gap-4 xl:gap-5">
      {technologies.map(({ name, Icon }) => (
        <li key={name}>
          <span className="inline-flex items-center gap-2.5 rounded-xl bg-slate-100 px-4 py-2.5 text-base font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200 sm:gap-3 sm:px-5 sm:py-3 sm:text-lg md:px-6 md:py-3.5 xl:px-7 xl:py-4 xl:text-xl">
            <Icon
              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
              aria-hidden="true"
            />
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}
