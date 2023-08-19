export const socials = [
  {
    id: 1,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sukrit-saha-b6117a242/",
  },
  {
    id: 2,
    label: "GitHub",
    href: "https://github.com/Sukrittt",
  },
  {
    id: 3,
    label: "Twitter",
    href: "https://twitter.com/SukritSaha11",
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/sukrit_04/",
  },
];

export const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const socialItemMotion = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
