export interface ActionLink {
  label: string;
  href: string;
  variant?: "primary";
  target?: string;
}

export const heroLinks: ActionLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nick-forshee-9233213b9",
    variant: "primary",
    target: "_blank",
  },
  {
    label: "GitHub",
    href: "https://github.com/nickforshee",
    target: "_blank",
  },
  {
    label: "Email Me",
    href: "mailto:nwforshee@gmail.com",
  },
];

export const contactLinks: ActionLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nick-forshee-9233213b9",
    target: "_blank",
  },
  {
    label: "GitHub",
    href: "https://github.com/nickforshee",
    target: "_blank",
  },
  {
    label: "Email",
    href: "mailto:nwforshee@gmail.com",
  },
];
