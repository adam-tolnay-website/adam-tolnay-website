export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Adam Tolnay",
  description:
    "The open source resource hub for hackathoners. Free. Community Driven.",
  navItems: [
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Subjects",
      href: "#subjects",
    },
    {
      label: "Who am I",
      href: "#bio",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Explore",
      href: "/explore",
    },
    {
      label: "Hackathon!",
      href: "https://hackathon.hackpost.guide",
    },
    {
      label: "Login / Sign Up",
      href: "/enter",
    },
  ],
  links: {
    email: "mailto:adamtolnay@pm.me",
    book: "https://calendly.com/adamtolnay/30min",
    zoom: "https://calendly.com/adamtolnay/zoom",
  },
};
