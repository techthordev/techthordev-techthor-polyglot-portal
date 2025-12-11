import { ProjectItem } from '../features/projects/projects';

export const PROJECT_DATA: ProjectItem[] = [
  {
    name: 'Polyglot Portal',
    category: 'Portal Documentation',
    description:
      'High‑gloss reference site built with Angular 21+ and TailwindCSS v4+. It presents stacks, tracks, and ideas in a professional, unified way. Still evolving, but already a showcase of modern web design and implementation.',
    iconPath: 'assets/icons/angular-logo.png',
    repoUrl: 'https://docs.techthordev.com.br/',
    repoLabel: 'Read the Docs'
  },
  {
    name: 'LeetCode Database Extension',
    category: 'Proof of Work',
    description:
      'Dedicated GitHub repository and GitHub Page (techthordev.github.io/leetcode). Spring Boot backend (Docker/Podman on OCI VM) reads SQL solution files from GitHub, generates API endpoints, executes queries against PostgreSQL, and returns results as JSON. Frontend built with Angular 21+ and TailwindCSS v4+.',
    iconPath: 'assets/icons/postgresql-logo.png',
    repoUrl: 'https://leetcode.techthordev.com.br',
    repoLabel: 'Go to the LeetCode - TechThorDev'
  },
];

export const getGroupedProjects = (data: ProjectItem[]) => {
  return data.reduce(
    (acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    },
    {} as Record<ProjectItem['category'], ProjectItem[]>,
  );
};
