import EmailContactButton from '@/components/EmailContactButton';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import TechnologyList from '@/components/TechnologyList';
import { navLinks, projects } from '@/lib/content';
import {
  pageContainer,
  pageContainerNarrow,
  readableMaxWidth,
  sectionPadding,
} from '@/lib/layout';
import { siteConfig } from '@/lib/site';
import {
  contactButtonClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
} from '@/lib/styles';

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-950 dark:to-slate-900"
    >
      <Navigation name={siteConfig.name} links={navLinks} />

      <section className={`${sectionPadding} pb-20 pt-32`} aria-labelledby="hero-heading">
        <div className={pageContainer}>
          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="text-5xl font-bold text-slate-900 md:text-6xl xl:text-7xl dark:text-slate-50"
            >
              Hi, I&apos;m{' '}
              <span className="text-blue-800 dark:text-blue-400">{siteConfig.name}</span>
            </h1>

            <p
              className={`${readableMaxWidth} text-xl text-slate-700 lg:text-2xl dark:text-slate-300`}
            >
              Full-stack developer building clean, responsive, secure, and accessible web
              applications. I recently completed my Bachelor of Science in Computer Science at
              California State University, Monterey Bay (CSUMB).
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className={primaryButtonClassName}>
                View Projects
              </a>
              <a href="#contact" className={secondaryButtonClassName}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`${sectionPadding} bg-slate-100 py-20 dark:bg-slate-900`}
        aria-labelledby="about-heading"
      >
        <div className={pageContainer}>
          <h2
            id="about-heading"
            className="mb-8 text-3xl font-bold text-slate-900 xl:text-4xl dark:text-slate-50"
          >
            About Me
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-slate-700 lg:text-xl dark:text-slate-300">
              I build web applications that are easy to use and hold up in the real world—from
              customer-facing sites to secure sign-in and data-backed features. I like taking
              complex requirements and turning them into straightforward experiences.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 lg:text-xl dark:text-slate-300">
              Recent work includes a live e-commerce marketing site for a lighting business, a
              photo community demo, and a from-scratch notes app focused on security fundamentals
              and accessibility. My CSUMB degree gave me a strong foundation in software
              engineering; these projects show how I apply that in production-ready builds.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 sm:text-2xl dark:text-slate-50">
              Core technologies
            </h3>
            <TechnologyList />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`${sectionPadding} py-20`}
        aria-labelledby="projects-heading"
      >
        <div className={pageContainer}>
          <h2
            id="projects-heading"
            className="mb-12 text-3xl font-bold text-slate-900 xl:text-4xl dark:text-slate-50"
          >
            Projects
          </h2>

          <ul className="grid list-none items-stretch gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-12">
            {projects.map((project) => (
              <li key={project.title} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className={`${sectionPadding} bg-slate-100 py-20 dark:bg-slate-900`}
        aria-labelledby="contact-heading"
      >
        <div className={`${pageContainerNarrow} text-center`}>
          <h2
            id="contact-heading"
            className="mb-4 text-3xl font-bold text-slate-900 xl:text-4xl dark:text-slate-50"
          >
            Get In Touch
          </h2>
          <p className="mb-8 text-slate-700 dark:text-slate-300">
            Interested in working together? Feel free to reach out!
          </p>
          <ul className="flex list-none flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-stretch">
            <li className="w-full sm:w-auto">
              <EmailContactButton
                email={siteConfig.email}
                className={`${contactButtonClassName} bg-blue-800 text-white hover:bg-blue-900`}
              />
            </li>
            <li className="w-full sm:w-auto">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButtonClassName} bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600`}
              >
                GitHub
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li className="w-full sm:w-auto">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButtonClassName} bg-blue-800 text-white hover:bg-blue-900`}
              >
                LinkedIn
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className={`border-t border-slate-300 ${sectionPadding} py-8 dark:border-slate-800`}>
        <div className={`${pageContainer} text-center text-sm text-slate-700 dark:text-slate-400`}>
          <p>
            © 2026 {siteConfig.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
