export interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "My first personal portfolio site, built to showcase my early projects and skills as I started learning web development.",
    link: "https://portfolio-of-daisy.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    description: "An updated version of my portfolio with improved design and structure, reflecting what I've learned since my first build.",
    link: "https://totskie-s-portfolio.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
  {
    slug: "film-rating-app",
    title: "Film Rating App",
    description: "A web app where users can browse films and rate them, built to practice working with dynamic data and interactive UI.",
    link: "https://film-rating-three.vercel.app/",
    tags: ["React", "JavaScript"],
  },
  {
    slug: "filipino-breakfast-ordering",
    title: "Filipino Breakfast Ordering",
    description: "An online ordering site for traditional Filipino breakfast (\"almusal\") dishes, letting users browse a menu and place orders.",
    link: "https://homo-sapienss.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
];