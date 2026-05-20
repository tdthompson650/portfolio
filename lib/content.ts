/**
 * Editable page content: navigation, projects, and outbound profile links.
 */

import type { NavLink, Project } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    title: 'Dragonflys & Co',
    description:
      'A marketing website for a fine Italian lighting business. Visitors browse collections, view products, and request quotes. I built the public site and a private admin area for managing quotes—the site is live and used by the business every day.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Drizzle',
      'PostgreSQL',
      'Tailwind CSS',
      'Redis',
      'Resend',
      'Sentry',
      'Plausible',
      'Vercel',
    ],
    image: '/projects/dragonflys.webp',
    link: 'https://www.dragonflysco.com',
  },
  {
    title: 'PhotoSharify',
    description:
      'A demo photography community where people explore a slideshow and photo grid, then open individual photo pages. The live version focuses on browsing and layout; uploading is turned off on purpose. I built it to practice clean design and loading content from a database.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    image: '/projects/photo-sharify.webp',
    link: 'https://photo-sharify-deploy.vercel.app/',
    github: 'https://github.com/tdthompson650/photo-sharify',
  },
  {
    title: 'Frameworkless Notes App',
    description:
      'A notes app where users sign up, log in, and keep private notes. It runs without a major web framework so I could work closer to how the web actually handles forms, sessions, and security. Includes encrypted passwords and protections against common sign-in attacks.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Argon2', 'Render'],
    image: '/projects/frameworkless-notes-app.webp',
    link: 'https://frameworkless-notes-app.onrender.com/',
    github: 'https://github.com/tdthompson650/frameworkless-notes-app',
  },
];
