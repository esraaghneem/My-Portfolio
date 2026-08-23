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

  // Optional because not every project has screenshots
  image?: string;

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

import hotelStaffTasks from "../assets/hotel-staff-tasks.png";
import hotelStaffRequests from "../assets/hotel-staff-requests.png";

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

    // ==============================
    // Main Card Image
    // ==============================

    image: hotelDashboardManager,

    // ==============================
    // Screenshot Groups
    // ==============================

    imageGroups: [

      // ------------------------------
      // Customer Website
      // ------------------------------

      {
        title: "Customer Website",

        images: [
          hotelRoomBooking,
          hotelServiceRequest,
        ],
      },

      // ------------------------------
      // Management Dashboard
      // ------------------------------

      {
        title: "Management Dashboard",

        images: [
          hotelDashboardManager,
          hotelDashboardDepartment,
        ],
      },

      // ------------------------------
      // Staff Application
      // ------------------------------

      {
        title: "Staff Application",

        images: [
          hotelStaffTasks,
          hotelStaffRequests,
        ],
      },
    ],

    // No deployed demo
    liveUrl: "#",

    // Hotel project is available on GitHub
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
      "Request Validation",
    ],

    description:
      "A scalable charity management system designed to organize beneficiaries, donations, campaigns, users, and administrative operations through a centralized backend platform. My main contribution focused on backend development, API design, database relationships, authentication, authorization, and business logic.",

    challenge:
      "The system required secure management of different users and permissions while handling charity data, beneficiaries, donations, campaigns, and administrative workflows in a structured and maintainable way.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, authentication, role-based permissions, request validation, structured business logic, database relationships, and service-layer architecture.",

    outcome:
      "Delivered a structured and scalable backend system that organizes charity operations, manages data efficiently, and provides secure access based on user roles and permissions.",

    features: [
      "User authentication",
      "Role and permission management",
      "Beneficiary management",
      "Donation management",
      "Campaign management",
      "Administrative operations",
      "Secure REST APIs",
      "Request validation",
      "Database relationship management",
      "Service-layer architecture",
      "Authorization and access control",
    ],

    // No image for now
    // No GitHub because the project is not uploaded
    liveUrl: "#",
  },

  // =========================================================
  // 3. E-COMMERCE APPLICATION & ADMIN DASHBOARD
  // =========================================================

  {
    id: 3,

    title: "E-Commerce Application & Admin Dashboard",

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
      "Request Validation",
      "Authorization",
    ],

    description:
      "An e-commerce system consisting of a customer-facing application and an administrative dashboard. My work focused on developing the backend APIs, database structure, authentication, product and category management, shopping workflows, order processing, and the business logic connecting the application with the admin dashboard.",

    challenge:
      "The system needed to support the main shopping workflow for customers while providing administrators with the ability to manage products, categories, users, and orders through a centralized dashboard.",

    solution:
      "Developed the backend using Laravel and MySQL, implementing RESTful APIs, authentication, authorization, product and category management, shopping cart workflows, order processing, database relationships, request validation, and service-based business logic for both the customer application and administrative dashboard.",

    outcome:
      "Built a structured e-commerce backend that connects the customer application with the admin dashboard and supports the core shopping, product, and order management workflows.",

    features: [
      "Customer authentication",
      "Product management",
      "Category management",
      "Shopping cart APIs",
      "Order management",
      "User management",
      "Admin dashboard APIs",
      "Product and category administration",
      "Order administration",
      "Secure REST APIs",
      "Request validation",
      "Authorization",
      "Database relationship management",
      "Service-layer architecture",
    ],

    // No image for now
    // No GitHub because the project is not uploaded
    liveUrl: "#",
  },

  // =========================================================
  // 4. CINEMA BOOKING SYSTEM
  // =========================================================

  {
    id: 4,

    title: "Cinema Booking System",

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
      "Request Validation",
      "Authorization",
    ],

    description:
      "A cinema booking system developed to manage movies, showtimes, customers, and booking workflows through a structured backend. My work focused on developing the backend APIs, database relationships, authentication, validation, and the business logic required to manage the booking process.",

    challenge:
      "The system needed to organize movies and showtimes while allowing customers to interact with the booking system securely and ensuring that booking operations followed the required business rules.",

    solution:
      "Developed the backend using Laravel and MySQL with RESTful APIs, authentication, authorization, database relationships, request validation, and service-layer business logic to manage cinema data and booking workflows.",

    outcome:
      "Built a structured cinema booking backend that provides the APIs and business logic required to support movie browsing, showtime management, customer interactions, and booking operations.",

    features: [
      "Customer authentication",
      "Movie management",
      "Showtime management",
      "Cinema booking workflows",
      "Booking management",
      "RESTful API architecture",
      "Request validation",
      "Authorization",
      "Database relationship management",
      "Service-layer business logic",
    ],

    // No image for now
    // No GitHub because the project is not uploaded
    liveUrl: "#",
  },
];
