const baseUrl = import.meta.env.BASE_URL;

export const publicAsset = (path: string) => `${baseUrl}${path.replace(/^\//, "")}`;

export const links = {
  partnerForm: "https://forms.gle/6JWYVZzstsXab9P18",
  email: "info.attune.care@gmail.com",
  mailto: (subject: string) =>
    `mailto:info.attune.care@gmail.com?subject=${encodeURIComponent(subject)}`,
};

export const navItems = [
  { href: "#story", label: "Story" },
  { href: "#product", label: "How it works" },
  { href: "#opportunity", label: "Why Attune" },
  { href: "#team", label: "Team" },
];

export type TeamMember = {
  name: string;
  role: string;
  discipline: string;
  photo: string;
  linkedin: string;
  lead?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Ashley Yang",
    role: "Founder & Team Lead",
    discipline: "Product · Computer Science & Psychology",
    photo: publicAsset("/img/ashley-yang.jpg"),
    linkedin: "https://www.linkedin.com/in/ashleyyang2027/",
    lead: true,
  },
  {
    name: "Barnabas Pasztor",
    role: "Business Development & Neurophysiology",
    discipline: "Biotechnology & Molecular Biosciences",
    photo: publicAsset("/img/barnabas-pasztor.jpg"),
    linkedin: "https://www.linkedin.com/in/barnabas-pasztor",
  },
  {
    name: "Taylor Foster",
    role: "Product & Human Factors",
    discipline: "Human Systems Engineering",
    photo: publicAsset("/img/taylor-foster.jpg"),
    linkedin: "https://www.linkedin.com/in/taylor-foster-human-centered-design/",
  },
  {
    name: "Tanisha Dalwadi",
    role: "Software & UX",
    discipline: "Human-Computer Interaction",
    photo: publicAsset("/img/tanisha-dalwadi.jpg"),
    linkedin: "https://www.linkedin.com/in/tanisha-dalwadi",
  },
  {
    name: "Joshua Perez",
    role: "Hardware",
    discipline: "Electrical Engineering",
    photo: publicAsset("/img/joshua-perez.jpg"),
    linkedin: "https://www.linkedin.com/in/joshua-perez-40b64a271/",
  },
  {
    name: "Alexander Lumala",
    role: "Software",
    discipline: "Computer Science",
    photo: publicAsset("/img/alexander-lumala.jpg"),
    linkedin: "https://www.linkedin.com/in/alexander-lumala-9523b2256",
  },
  {
    name: "Nathaniel Teo",
    role: "Software",
    discipline: "Computer Systems Engineering",
    photo: publicAsset("/img/nathaniel-teo.jpg"),
    linkedin: "https://www.linkedin.com/in/nathaniel-teo-10006124a",
  },
];

export const sources = [
  {
    id: 1,
    text: "Caruso M, Harrington S. Prevalence of limb loss and limb difference in the United States: implications for public policy. Archives of Physical Medicine and Rehabilitation, 2024.",
  },
  {
    id: 2,
    text: "Spencer et al., 2019. Estimated annual incidence of amputation in the United States.",
  },
  {
    id: 3,
    text: "Biddiss E, Chau T. Upper limb prosthesis use and abandonment: a survey of the last 25 years. Prosthetics and Orthotics International, 2007;31(3):236–257.",
  },
  {
    id: 4,
    text: "Salminger S, et al. Current rates of prosthetic usage in upper-limb amputees: have innovations had an impact on device acceptance? Disability and Rehabilitation, 2022;44(14):3708–3713.",
  },
];
