export type MenuItem = {
  key: string;
} & (
  | {
      link: string;
      to?: never;
    }
  | {
      link?: never;
      to: string;
    }
) &
  (
    | {
        label: string;
        icon?: never;
      }
    | {
        label?: never;
        icon: string;
      }
  );

export const mobileMenuPrimary: MenuItem[] = [];
export const mobileMenu: MenuItem[] = [
  { key: "m-home", to: "home", label: "Home" },
  { key: "m-about", to: "about", label: "About Me" },
  { key: "m-projects", to: "showcase", label: "Projects" },
  { key: "m-contact", to: "contact", label: "Contact" },
  {
    key: "m-resume",
    link: "https://alenbasar.s3.ap-southeast-2.amazonaws.com/Resume.pdf",
    label: "Resume",
  },
];

export const navLogo: MenuItem[] = [];
export const desktopMenu: MenuItem[] = [
  { key: "home", to: "home", label: "Home" },
  { key: "about", to: "about", label: "About" },
  { key: "projects", to: "showcase", label: "Projects" },
  { key: "contact", to: "contact", label: "Contact" },
  {
    key: "resume",
    link: "https://alenbasar.s3.ap-southeast-2.amazonaws.com/Resume.pdf",
    label: "Resume",
  },
];

export const footerMenu: MenuItem[] = [
  { key: "f-github", link: "https://github.com/alenbasar", label: "GitHub" },
  {
    key: "f-linkedin",
    link: "https://www.linkedin.com/in/alenbasar/",
    label: "LinkedIn",
  },
  {
    key: "f-resume",
    link: "https://alenbasar.s3.ap-southeast-2.amazonaws.com/Resume.pdf",
    label: "My Resume",
  },
];
