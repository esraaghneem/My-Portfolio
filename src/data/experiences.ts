// ==============================
// Experience
// ==============================

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
    title: "Full-Stack Developer | Freelance",
    company: "Self-Employed",
    period: "Sep 2024 - Present",
    location: "Remote",

    description:
      "Developing modern full-stack web applications using Laravel, PHP, React, and MySQL, with a focus on RESTful APIs, database design, authentication, authorization, business logic, reusable components, clean architecture, and maintainable application development.",

    achievements: [
      "Developed full-stack web applications using Laravel and React",
      "Built RESTful APIs using PHP and Laravel for frontend-backend integration",
      "Developed reusable React components and integrated frontend interfaces with REST APIs",
      "Designed relational databases using MySQL and Eloquent ORM",
      "Implemented authentication, authorization, roles, and permissions",
      "Developed complex business logic using service-layer architecture",
      "Implemented middleware, request validation, error handling, and secure API access",
      "Built automated task assignment and workload-based distribution logic",
      "Managed database relationships, transactions, and data integrity",
      "Applied MVC, separation of concerns, clean code, and maintainable architecture principles",
      "Used Git and GitHub for version control and project management",
      "Used Postman for REST API testing and debugging",
      "Worked with Agile development practices and iterative development workflows",
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/esraaghneem",
      },
    ],
  },
];
