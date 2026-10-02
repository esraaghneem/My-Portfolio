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
    title: "Backend Developer | Freelance",
    company: "Self-Employed",
    period: "Sep 2024 - Present",
    location: "Remote",

    description:
      "Developing robust backend systems and RESTful APIs using PHP, Laravel, and MySQL, with a focus on database design, authentication, authorization, business logic, security, and scalable application architecture.",

    achievements: [
      "Developed complete backend systems using PHP and Laravel",
      "Built RESTful APIs for web applications and frontend integration",
      "Designed relational databases using MySQL and Eloquent ORM",
      "Implemented authentication, authorization, roles, and permissions",
      "Developed complex business logic and service-layer architecture",
      "Implemented middleware, request validation, error handling, and secure API access",
      "Built automated task assignment and workload-based distribution logic",
      "Managed database relationships, transactions, and data integrity",
      "Applied MVC, separation of concerns, clean code, and maintainable architecture principles",
      "Tested and debugged REST APIs using Postman",
      "Used Git and GitHub for version control and project management",
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/esraaghneem",
      },
    ],
  },

  {
    title: "Frontend Developer | React",
    company: "Personal Projects",
    period: "2024 - Present",
    location: "Remote",

    description:
      "Building modern and responsive frontend applications using React and JavaScript, with a focus on reusable components, REST API integration, dynamic interfaces, clean code, and maintainable frontend architecture.",

    achievements: [
      "Developed responsive web interfaces using React and JavaScript",
      "Built reusable and modular React components",
      "Integrated React applications with RESTful APIs",
      "Managed application state and user interactions",
      "Implemented dynamic data rendering from backend APIs",
      "Created reusable UI sections and interactive components",
      "Worked with forms, authentication flows, and frontend validation",
      "Connected frontend applications with Laravel backend services",
      "Applied component-based architecture and separation of concerns",
      "Used Git and GitHub for version control and project development",
    ],
  },

  {
    title: "Full-Stack Developer | Freelance",
    company: "Self-Employed",
    period: "2024 - Present",
    location: "Remote",

    description:
      "Developing complete web applications across both frontend and backend using Laravel, PHP, React, and MySQL, with a focus on reliable API integration, database-driven features, authentication, business logic, and maintainable application architecture.",

    achievements: [
      "Developed full-stack web applications using Laravel and React",
      "Connected React frontend applications with Laravel RESTful APIs",
      "Designed and implemented database-driven application features",
      "Implemented authentication and secure communication between frontend and backend",
      "Developed reusable React components and integrated dynamic API data",
      "Implemented backend business logic, validation, and database relationships",
      "Worked across frontend, backend, database, and API layers",
      "Applied clean architecture, separation of concerns, and maintainable coding practices",
      "Used Git and GitHub throughout the development process",
      "Tested backend APIs and frontend-backend integration using Postman",
    ],
  },
];
