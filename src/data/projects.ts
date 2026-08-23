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
import hotelStaffTasks from "../assets/hotel-staff-requests.png";

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

    duration: "6+ months",

    role: "Backend Developer",

    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer Architecture",
      "Authentication & Authorization",
      "Role-Based Access Control",
      "API Validation",
      "Middleware",
      "Staff Shift Management",
      "Task Management",
      "Task Assignment Algorithm",
      "Workload-Based Distribution",
    ],

    description:
      "A complete hotel management system that connects customers, hotel management, departments, and staff through one integrated platform. The system manages room bookings, customer service requests, staff operations, shifts, tasks, and automated task distribution.",

    challenge:
      "The system needed to manage multiple user roles and departments while ensuring that customer requests were securely processed and assigned to suitable employees based on department, availability, workload, maximum capacity, and working shifts.",

    solution:
      "Developed the backend using PHP and Laravel with MySQL and RESTful APIs. Implemented separate authentication for customers and staff using Laravel Sanctum, role-based access control, middleware, request validation, booking management, service request workflows, staff shift validation, workload tracking, and an automated task assignment algorithm.",

    outcome:
      "Built an integrated backend system that connects customers with hotel departments and automates important operational workflows, helping managers monitor staff, manage tasks, and distribute service requests efficiently.",

    features: [

      // Customer
      "Customer registration and authentication",
      "Secure customer login",
      "Room availability and booking management",
      "Customer booking management",
      "Hotel service request creation",
      "Service request status tracking",

      // Management
      "General manager dashboard",
      "Department management",
      "Staff management",
      "Role-based access control",
      "Supervisor and employee management",
      "Department workflow management",

      // Staff
      "Staff authentication",
      "Employee task management",
      "Staff shift management",
      "Task status management",
      "Workload tracking",
      "Employee availability management",

      // Backend Logic
      "RESTful API architecture",
      "Authentication and authorization",
      "API request validation",
      "Middleware-based access control",
      "Service Layer architecture",
      "Database relationship management",
      "Automated task assignment",
      "Workload-based task distribution",
      "Maximum workload validation",
      "Staff shift validation",
      "Availability-based assignment",
      "Department-based task routing",
      "Waiting request handling",
      "Automatic workload recalculation",
      "Transaction-based task assignment",
      "Concurrency-safe task distribution",
    ],

    // Main image shown on the project card
    image: hotelDashboardManager,

    // ------------------------------
    // Hotel Screenshots
    // ------------------------------

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
      "PHP",
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer Architecture",
      "Role-Based Access Control",
      "Authentication & Authorization",
    ],

    description:
      "A scalable charity management system designed to organize beneficiaries, donations, campaigns, users, and administrative operations through a centralized backend platform.",

    challenge:
      "The system required secure management of different users and permissions while handling charity data, beneficiaries, donations, campaigns, and administrative workflows.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, authentication, role-based permissions, structured business logic, database relationships, and service-based architecture.",

    outcome:
      "Delivered a structured backend system that helps organize charity operations, manage data efficiently, and provide secure access based on user roles.",

    features: [
      "User authentication",
      "Role and permission management",
      "Beneficiary management",
      "Donation management",
      "Campaign management",
      "Administrative dashboard APIs",
      "Secure REST APIs",
      "Database relationship management",
      "Business logic implementation",
      "Backend validation",
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
      "PHP",
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Laravel Sanctum",
      "Eloquent ORM",
      "Service Layer Architecture",
      "Authentication & Authorization",
    ],

    description:
      "A web-based e-commerce platform designed to manage products, customers, shopping operations, and orders through a structured backend system.",

    challenge:
      "The platform needed reliable product and order management, secure authentication, and well-structured APIs to support the main shopping workflows.",

    solution:
      "Developed the backend using Laravel and MySQL, implementing RESTful APIs, authentication, product management, order workflows, database relationships, validation, and organized business logic through service-based architecture.",

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
      "Backend validation",
      "Business logic implementation",
    ],

    image: ecommerceImage,

    liveUrl: "#",
  },
];
