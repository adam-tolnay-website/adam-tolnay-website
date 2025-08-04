import { title } from "process";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Adam Tolnay",
  title: "Adam Tolnay - Private Coaching",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  navItems: [
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Who am I",
      href: "#bio",
    },
    {
      label: "Subjects",
      href: "#subjects",
    },
  ],
  links: {
    email: "mailto:adamtolnay@gmail.com",
    book: "https://calendly.com/adamtolnay/30min", // replace with booking link
    zoom: "https://calendly.com/adamtolnay/zoom", // replace with Zoom link
    linkedin: "https://www.linkedin.com/in/adamtolnay/", // replace with LinkedIn profile
  },
};
