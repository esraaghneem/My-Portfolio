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
    title: "Frontend Developer Trainee",
    company: "IXCoders",
    period: "Oct 2025 - Present",
    location: "On-site",
    description:
      "Participating in a professional development environment and contributing to collaborative software projects. Gaining practical experience in modern web development, application architecture, API integration, and building responsive interfaces while following software engineering best practices.",
    achievements: [
      "Worked with React, JavaScript, HTML, and CSS",
      "Contributed to collaborative software development projects",
      "Integrated frontend applications with REST APIs",
      "Built responsive and interactive web interfaces",
      "Strengthened teamwork and Agile development practices",
    ],
    links: [
      {
        label: "IXCoders",
        url: "https://ixcoders.com",
      },
    ],
  },

  {
    title: "Frontend Development Trainee",
    company: "Sanad Youth",
    period: "Aug 2025 - Present",
    location: "Damascus, Syria · On-site",
    description:
      "Gained practical experience in modern web application development through real-world projects. Worked with React and TypeScript while developing a strong understanding of application structure, API integration, reusable components, and responsive user interfaces.",
    achievements: [
      "Worked with React.js, TypeScript, Redux, and Tailwind CSS",
      "Integrated frontend applications with REST APIs",
      "Built reusable and responsive application components",
      "Applied clean code and software development practices",
      "Contributed to real-world collaborative projects",
    ],
    links: [
      {
        label: "Sanad Youth",
        url: "https://sanadyouth.org",
      },
    ],
  },

  {
    title: "Backend Developer | Freelance",
    company: "Self-Employed",
    period: "Sep 2024 - Present",
    location: "Remote",
    description:
      "Developing backend systems and RESTful APIs using PHP and Laravel, with a focus on database design, authentication, authorization, business logic, and scalable application architecture. Also experienced in frontend development, enabling effective integration between backend services and user interfaces.",
    achievements: [
      "Developed RESTful APIs using PHP and Laravel",
      "Designed relational databases using MySQL and Eloquent ORM",
      "Implemented authentication, authorization, roles, and permissions",
      "Developed complex business logic and service-layer architecture",
      "Built automated task assignment and workload-based distribution logic",
      "Worked with API validation, middleware, and error handling",
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
