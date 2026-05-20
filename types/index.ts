/** Portfolio project shown in the projects grid. */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

/** In-page anchor link for the fixed navigation bar. */
export interface NavLink {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';
