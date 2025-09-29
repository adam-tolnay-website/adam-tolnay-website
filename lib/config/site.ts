export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Adam Tolnay",
  title: "Adam Tolnay - Ivy League Mentor",
  description:
    "I am a Harvard educated mentor committed to passing on the content and spirit of the personalized advising and guidance that I received during the entire arc of my own academic, intellectual and life journey.",
  navItems: [ 
    {
      label: "Courses",
      href: "#subjects",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "About Me",
      href: "#bio",
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
    linkedin: "https://www.linkedin.com/in/adam-tolnay-072b491a9/",
  },
};
