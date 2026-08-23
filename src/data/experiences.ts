export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  links?: { label: string; url: string }[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Backend Developer | Freelance",
    company: "Self-Employed",
    period: "Sep 2024 - Present",
    location: "Remote",
    description:
      "Developing backend systems and RESTful APIs using PHP and Laravel, with a focus on database design, authentication, authorization, business logic, and scalable application architecture.",
    achievements: [
      "Developed RESTful APIs using PHP and Laravel",
      "Designed relational databases using MySQL and Eloquent ORM",
      "Implemented authentication, authorization, roles, and permissions",
      "Developed complex business logic and service-layer architecture",
      "Built automated task assignment and workload-based distribution logic",
      "Implemented API validation, middleware, and error handling",
      "Used Git, GitHub, Postman, and Agile development workflows",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/esraaghneem",
      },
    ],
  },
];
