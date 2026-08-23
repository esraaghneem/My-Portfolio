export interface SkillCategory {
  title: string;
  skills: string[];
  gradientClass: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "MVC Architecture",
      "Business Logic",
      "API Development",
    ],
    gradientClass: "bg-gradient-primary",
  },

  {
    title: "Database & Data",
    skills: [
      "MySQL",
      "Eloquent ORM",
      "Database Design",
      "Database Relationships",
      "SQL Queries",
      "Data Validation",
    ],
    gradientClass: "bg-gradient-secondary",
  },

  {
    title: "Authentication & Security",
    skills: [
      "Laravel Sanctum",
      "Authentication",
      "Authorization",
      "Roles & Permissions",
      "Middleware",
      "Request Validation",
    ],
    gradientClass: "bg-gradient-accent",
  },

  {
    title: "Software Engineering",
    skills: [
      "OOP",
      "SOLID Principles",
      "Design Patterns",
      "Service Layer",
      "Clean Architecture",
      "Reusable Components",
    ],
    gradientClass: "bg-gradient-primary",
  },

  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "REST API Testing",
      "Version Control",
    ],
    gradientClass: "bg-gradient-secondary",
  },

  {
    title: "Development Practices",
    skills: [
      "Problem Solving",
      "Debugging",
      "Error Handling",
      "Code Organization",
      "API Documentation",
      "Agile / Scrum",
    ],
    gradientClass: "bg-gradient-accent",
  },
];
