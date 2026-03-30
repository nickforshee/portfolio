export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  tag: string;
  description: string;
  bullets?: string[];
  links?: ProjectLink[];
  muted?: boolean;
}

export const projects: Project[] = [
  {
    title: "Airport Maps",
    tag: "Open-source fork + enhancements",
    description:
      "Adapted and extended an existing open-source visualization project into an aviation-focused mapping tool that renders airport infrastructure from OpenStreetMap data using ICAO-based lookup.",
    bullets: [
      "Reworked the project from city-road visualization to airport infrastructure mapping",
      "Added airport-focused search and rendering behavior",
      "Used OpenStreetMap / Overpass data and deployed publicly",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nickforshee/airport-maps",
      },
      {
        label: "Live Demo",
        href: "https://airport-maps-forshee.vercel.app",
      },
    ],
  },
  {
    title: "Git Branch Pruner",
    tag: "Developer tooling",
    description:
      "Bash scripts that mimic PHPStorm's branch cleanup flow by identifying stale local branches and safely pruning them with dry-run, delete, and force flags.",
    bullets: [
      "Fetches remotes, analyzes branch divergences, and highlights branches that no longer exist upstream before deleting anything",
      "Dry run is the default experience, with safety checks for the current branch, confirmation prompts, and optional --force overrides",
      "Installer script copies binaries to ~/git-branch-pruner, makes them executable, and wires up PATH/alias helpers for Bash and Zsh",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nickforshee/git-branch-pruner",
      },
      {
        label: "Docs & Install",
        href: "https://github.com/nickforshee/git-branch-pruner#readme",
      },
    ],
  },
  {
    title: "More Projects Coming",
    tag: "In progress",
    description:
      "I'm currently building out additional portfolio projects focused on workflow systems, developer tooling, and AI-integrated applications.",
    muted: true,
  },
];
