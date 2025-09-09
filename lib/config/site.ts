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
      label: "About Me",
      href: "#bio",
    },
    {
      label: "Courses and Journeys",
      href: "#subjects",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
  links: {
    email: "mailto:adamtolnay@gmail.com",
    book: "https://calendly.com/", // replace with booking link
    zoom: "https://calendly.com/", // replace with Zoom link
    linkedin: "https://www.linkedin.com/in/adam-tolnay-072b491a9/", // replace with LinkedIn profile
  },
};
