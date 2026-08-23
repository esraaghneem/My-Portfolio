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

// Hotel Management System
import hotelDashboardManager from "../assets/hotel-dashboard-manager.png";
import hotelDashboardDepartment from "../assets/hotel-department-dashboard.png";
import hotelRoomBooking from "../assets/hotel-room-booking.png";
import hotelServiceRequest from "../assets/hotel-service-request.png";
import hotelStaffTasks from "../assets/hotel-staff-requests.png";

// Other Projects
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

    duration: "6+ months",

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
      "Task Assignment Algorithm",
    ],

    description:
      "An integrated hotel management system designed to connect customers, hotel management, departments, and staff through one unified platform.",

    challenge:
      "The system needed to handle different user roles, room bookings, customer service requests, staff shifts, tasks, and department workflows while keeping hotel operations organized and secure.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, separate authentication for customers and staff, role-based access control, booking management, service request handling, staff shift validation, and automated task assignment based on staff availability and workload.",

    outcome:
      "Built a complete hotel management backend that connects customers with hotel departments and helps managers manage staff, monitor operations, and distribute service requests efficiently.",

    features: [
      "Customer registration and authentication",
      "Room booking management",
      "Customer service requests",
      "Staff and department management",
      "Role-based access control",
      "Staff shift management",
      "Automated task assignment",
      "Workload-based task distribution",
      "General manager dashboard",
      "Department management",
      "Employee task management",
      "RESTful API architecture",
    ],

    image: hotelDashboardManager,

    imageGroups: [
      {
        title: "Management Dashboard",
        images: [
          hotelDashboardManager,
          hotelDashboardDepartment,
        ],
      },
      {
        title: "Customer & Staff Applications",
        images: [
          hotelRoomBooking,
          hotelServiceRequest,
          hotelStaffTasks,
        ],
      },
    ],

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

    duration: "3+ months",

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
    ],

    description:
      "A scalable charity management system designed to organize beneficiaries, donations, campaigns, users, and administrative operations through a centralized platform.",

    challenge:
      "The system required secure management of different users and permissions while handling charity data, donations, beneficiaries, and administrative workflows.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, authentication, role-based permissions, structured business logic, and database relationships to provide a reliable and maintainable system.",

    outcome:
      "Delivered a scalable backend system that helps organize charity operations, manage data efficiently, and provide secure access based on user roles.",

    features: [
      "User authentication",
      "Role and permission management",
      "Beneficiary management",
      "Donation management",
      "Campaign management",
      "Administrative dashboard APIs",
      "Secure REST APIs",
      "Database relationship management",
    ],

    image: charityImage,

    liveUrl: "#",
  },

  // =========================================================
  // 3. E-COMMERCE PLATFORM
  // =========================================================

  {
    id: 3,

    title: "E-Commerce Platform",

    category: "web",

    duration: "2+ months",

    role: "Backend Developer",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer",
    ],

    description:
      "A web-based e-commerce platform designed to manage products, customers, shopping operations, and orders through a structured backend system.",

    challenge:
      "The platform needed reliable product and order management, secure authentication, and well-structured APIs to support the main shopping workflows.",

    solution:
      "Developed the backend using Laravel and MySQL, implementing RESTful APIs, authentication, product management, order workflows, database relationships, and organized business logic through service-based architecture.",

    outcome:
      "Delivered a structured e-commerce backend that supports core shopping operations and provides a scalable foundation for the application.",

    features: [
      "Customer authentication",
      "Product management",
      "Category management",
      "Shopping cart APIs",
      "Order management",
      "User management",
      "Secure REST APIs",
      "Database relationship management",
    ],

    image: ecommerceImage,

    liveUrl: "#",
  },
];
