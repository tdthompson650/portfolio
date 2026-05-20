import Image from 'next/image';

import { externalLinkClassName } from '@/lib/styles';
import type { Project } from '@/types';

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
}: Project) {
  const titleId = `project-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50"
    >
      {image ? (
        <div className="relative mb-4 aspect-video shrink-0 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`Screenshot of the ${title} website`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
          />
        </div>
      ) : (
        <div
          className="mb-4 flex aspect-video shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
          role="img"
          aria-label={`No preview image available for ${title}`}
        >
          <span aria-hidden="true">No image</span>
        </div>
      )}

      <h3
        id={titleId}
        className="mb-2 shrink-0 text-xl font-semibold text-slate-900 dark:text-slate-50"
      >
        {title}
      </h3>
      {/* min-height keeps card bodies aligned when descriptions differ in length. */}
      <p className="mb-4 min-h-[7.5rem] flex-grow leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      <ul
        aria-label={`Technologies used in ${title}`}
        className="mb-4 flex min-h-[7rem] shrink-0 flex-wrap content-start gap-2"
      >
        {tags.map((tag) => (
          <li key={tag}>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      {(link || github) && (
        <div className="mt-auto flex min-h-[5.5rem] shrink-0 flex-col justify-end">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClassName}
              aria-label={`View ${title} live site (opens in new tab)`}
            >
              View Project
              <span aria-hidden="true"> →</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${externalLinkClassName} mt-1`}
              aria-label={`View ${title} source code on GitHub (opens in new tab)`}
            >
              GitHub
              <span aria-hidden="true"> →</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
