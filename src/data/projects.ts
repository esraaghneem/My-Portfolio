// ==============================
// projects.ts
// ==============================

export interface ProjectImageGroup {
  title: string;
  images: string[];
}

export interface Project {
  id: number;
  title: string;
  category: "web";
  duration: string;
  role: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  image: string;
  imageGroups?: ProjectImageGroup[];
  liveUrl?: string;
  githubUrl?: string;
}

// ==============================
// Project Images
// ==============================

// ------------------------------
// Hotel Management System
// ------------------------------

import hotelDashboardManager from "../assets/hotel-dashboard-manager.png";
import hotelDashboardDepartment from "../assets/hotel-department-dashboard.png";
import hotelRoomBooking from "../assets/hotel-room-booking.png";
import hotelServiceRequest from "../assets/hotel-service-request.png";

// IMPORTANT:
// File name on your computer:
// hotel-staff-tasks
import hotelStaffTasks from "../assets/hotel-staff-tasks.png";

// ------------------------------
// Other Projects
// ------------------------------

import charityImage from "../assets/compliants.png";
import ecommerceImage from "../assets/Screenshot 2025-11-03 122320.png";

// ==============================
// Projects
// ==============================

export const projects: Project[] = [

  // =========================================================
  // 1. INTEGRATED HOTEL MANAGEMENT SYSTEM
  // =========================================================

  {
    id: 1,

    title: "Integrated Hotel Management System",

    category: "web",

    duration: "2 months",

    role: "Backend Developer",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer",
      "Role-Based Access Control",
      "Middleware",
      "Request Validation",
      "Database Transactions",
      "Task Assignment Algorithm",
      "Workload-Based Distribution",
      "Staff Shift Validation",
    ],

    description:
      "An integrated hotel management system developed to connect customers, hotel management, departments, and staff through one unified platform. My main responsibility was designing and developing the backend architecture, RESTful APIs, authentication, business logic, database relationships, and automated task distribution.",

    challenge:
      "The system needed to manage different user roles, room bookings, customer service requests, staff shifts, daily tasks, department workflows, and workload distribution while ensuring that tasks were assigned only to suitable and available employees.",

    solution:
      "Developed the backend using Laravel and MySQL with separate authentication for customers and staff, Laravel Sanctum, role-based access control, request validation, middleware, service-layer architecture, database transactions, booking management, service request workflows, staff shift validation, and an automated task assignment algorithm based on employee availability, workload, status, department, and maximum capacity.",

    outcome:
      "Built a complete backend system that connects customers with hotel departments and supports hotel management in controlling staff, monitoring operations, managing requests, and distributing tasks according to employee availability and workload.",

    features: [
      "Customer registration and authentication",
      "Separate customer and staff authentication",
      "Room booking management",
      "Customer service request management",
      "Staff and department management",
      "Role-based access control",
      "Staff shift management",
      "Shift-based task eligibility",
      "Employee availability validation",
      "Automated task assignment",
      "Workload-based task distribution",
      "Maximum workload validation",
      "Department-based task assignment",
      "Fixed task management",
      "Dynamic customer request tasks",
      "Task status management",
      "Staff workload tracking",
      "General manager management",
      "Department supervisor management",
      "RESTful API architecture",
      "Request validation and error handling",
      "Database transactions",
      "Service-layer business logic",
    ],

    // Main image shown on the project card
    image: hotelDashboardManager,

    // Separate screenshot groups
    imageGroups: [
      {
        title: "Customer Application",
        images: [
          hotelRoomBooking,
          hotelServiceRequest,
        ],
      },

      {
        title: "Management Dashboard",
        images: [
          hotelDashboardManager,
          hotelDashboardDepartment,
        ],
      },

      {
        title: "Staff Application",
        images: [
          hotelStaffTasks,
        ],
      },
    ],

    // Keep Live Demo hidden because there is no real deployed demo
    liveUrl: "#",

    githubUrl: "https://github.com/esraaghneem",
  },

  // =========================================================
  // 2. CHARITY MANAGEMENT SYSTEM
  // =========================================================

  {
    id: 2,

    title: "Charity Management System",

    category: "web",

    duration: "1.5 months",

    role: "Backend Developer",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer",
      "Role-Based Access Control",
      "Database Design",
    ],

    description:
      "A scalable charity management system designed to organize beneficiaries, donations, campaigns, users, and administrative operations through a centralized backend platform.",

    challenge:
      "The system required secure management of different users and permissions while handling charity data, donations, beneficiaries, campaigns, and administrative workflows.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, authentication, role-based permissions, structured business logic, database relationships, and service-layer architecture.",

    outcome:
      "Delivered a structured and scalable backend system that helps organize charity operations, manage data efficiently, and provide secure access based on user roles.",

    features: [
      "User authentication",
      "Role and permission management",
      "Beneficiary management",
      "Donation management",
      "Campaign management",
      "Administrative operations",
      "Secure REST APIs",
      "Database relationship management",
      "Service-layer architecture",
    ],

    image: charityImage,

    // No GitHub because the project is not uploaded
    liveUrl: "#",
  },

  // =========================================================
  // 3. E-COMMERCE PLATFORM
  // =========================================================

  {
    id: 3,

    title: "E-Commerce Platform",

    category: "web",

    duration: "1.5 months",

    role: "Backend Developer",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer",
      "Database Design",
    ],

    description:
      "A web-based e-commerce platform focused on building a structured backend for products, customers, shopping operations, and order management.",

    challenge:
      "The platform needed reliable product and order management, secure authentication, database relationships, and well-structured APIs to support the main shopping workflows.",

    solution:
      "Developed the backend using Laravel and MySQL, implementing RESTful APIs, authentication, product management, category management, shopping cart workflows, order processing, database relationships, and service-based business logic.",

    outcome:
      "Delivered a structured e-commerce backend that supports the core shopping operations and provides a scalable foundation for the application.",

    features: [
      "Customer authentication",
      "Product management",
      "Category management",
      "Shopping cart APIs",
      "Order management",
      "User management",
      "Secure REST APIs",
      "Database relationship management",
      "Service-layer architecture",
    ],

    image: ecommerceImage,

    // No GitHub because the project is not uploaded
    liveUrl: "#",
  },
];
