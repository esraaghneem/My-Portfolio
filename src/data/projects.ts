// ==============================
// projects.ts
// ==============================

export interface Project {
  id: number;
  title: string;
  category: "web" | "mobile";
  techType?: "react" | "vanilla";
  duration: string;
  role: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  image: string;
  images?: string[];
  liveUrl: string;
  githubUrl: string;
}

// ==============================
// Project Images
// ==============================

import ecomScreenshot from "../assets/Screenshot 2025-11-03 122320.png";
import travel from "../assets/Screenshot 2025-11-03 122926.png";
import dwello from "../assets/dwello.png";
import mercation from "../assets/Screenshot 2025-11-04 105301.png";
import umbra from "../assets/Screenshot 2025-11-13 203657.png";
import complaintsImg from "../assets/compliants.png";

// Hotel Management System
import hotelDashboardManager from "../assets/hotel-dashboard-manager.png";
import hotelDashboardDepartment from "../assets/hotel-dashboard-department.png";
import hotelRoomBooking from "../assets/hotel-room-booking.png";
import hotelServiceRequest from "../assets/hotel-service-request.png";
import hotelStaffTasks from "../assets/hotel-staff-tasks.png";

// ==============================
// Projects
// ==============================

export const projects: Project[] = [

  // =========================================================
  // 1. HOTEL MANAGEMENT SYSTEM
  // =========================================================

  {
    id: 1,

    title: "Integrated Hotel Management System",

    category: "web",

    techType: "react",

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
      "Task Assignment Algorithm"
    ],

    description:
      "An integrated hotel management system connecting customers, hotel management, departments, and staff through a unified platform.",

    challenge:
      "The system needed to manage different user roles, room bookings, customer service requests, staff shifts, tasks, and department workflows while keeping hotel operations organized and secure.",

    solution:
      "Designed and developed the backend using Laravel and MySQL with RESTful APIs, separate authentication for customers and staff, role-based access control, booking management, service request handling, staff shift validation, and automated task assignment based on staff availability, workload, and department.",

    outcome:
      "Built a complete hotel management platform that connects customers with hotel departments and helps managers monitor operations, manage staff, and distribute service requests efficiently.",

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
      "Department management dashboards",
      "Employee task management",
      "RESTful API architecture"
    ],

    image: hotelDashboardManager,

    images: [
      hotelDashboardManager,
      hotelDashboardDepartment,
      hotelRoomBooking,
      hotelServiceRequest,
      hotelStaffTasks
    ],

    liveUrl: "#",

    githubUrl: "https://github.com/esraaghneem"
  },

  // =========================================================
  // 2. UMBRA
  // =========================================================

  {
    id: 2,

    title: "Umbra – Comprehensive Visitor Management Platform",

    category: "web",

    techType: "react",

    duration: "4 months",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Pusher",
      "REST API",
      "Face Recognition API",
      "Fingerprint Scanner API"
    ],

    description:
      "A real-time IoT-enabled visitor management platform for university entrepreneurship centers.",

    challenge:
      "Needed a secure and scalable platform for managing visitors, events, and access control.",

    solution:
      "Built an interactive frontend using React and TypeScript with real-time dashboards and Pusher integration.",

    outcome:
      "Delivered a fully functional visitor management system designed for deployment at Digit Innovation Center.",

    features: [
      "Real-time visitor tracking",
      "Dynamic dashboards",
      "Event management",
      "Access control",
      "Responsive UI/UX"
    ],

    image: umbra,

    liveUrl: "#",

    githubUrl: "#"
  },

  // =========================================================
  // 3. COMPLAINTS MANAGEMENT SYSTEM
  // =========================================================

  {
    id: 3,

    title: "Complaints Management System",

    category: "web",

    techType: "react",

    duration: "2 months",

    role: "Frontend Developer",

    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Yup",
      "i18next",
      "Axios"
    ],

    description:
      "A modern and scalable complaints management system for government entities, providing complaint handling, user management, analytics, and activity tracking.",

    challenge:
      "Building a large-scale role-based system with high performance, multi-language support, and maintainable architecture while handling complex workflows and data updates.",

    solution:
      "Implemented a feature-based React architecture with TypeScript, React Query for caching and synchronization, lazy loading, protected routes, and role-based access control.",

    outcome:
      "Delivered a scalable complaints management platform with clean architecture, responsive design, and an efficient user experience.",

    features: [
      "Complaints lifecycle management",
      "Complaint assignment and tracking",
      "Role-based authentication",
      "Protected routes",
      "Statistics dashboard",
      "Charts and KPIs",
      "Government units management",
      "User management",
      "Activity logs",
      "Filtering and export",
      "English and Arabic support",
      "Dark and Light themes",
      "Responsive UI"
    ],

    image: complaintsImg,

    liveUrl: "#",

    githubUrl: "https://github.com/esraaghneem"
  },

  // =========================================================
  // 4. KEY-WORK E-COMMERCE
  // =========================================================

  {
    id: 4,

    title: "Key-Work – E-Commerce Website",

    category: "web",

    techType: "react",

    duration: "2 weeks",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "TypeScript",
      "Material-UI",
      "Framer Motion",
      "Axios",
      "React Router",
      "LocalStorage"
    ],

    description:
      "A modern, responsive e-commerce web application designed to provide a smooth online shopping experience.",

    challenge:
      "Develop an engaging shopping interface with product browsing, cart management, and checkout flows.",

    solution:
      "Implemented the frontend using React, TypeScript, Material-UI, React Router, Axios, and Framer Motion.",

    outcome:
      "Delivered a functional e-commerce prototype with responsive design and smooth user interactions.",

    features: [
      "Dynamic product listings",
      "Shopping cart",
      "Checkout flow",
      "Authentication",
      "Responsive design",
      "Smooth animations"
    ],

    image: ecomScreenshot,

    liveUrl: "#",

    githubUrl: "#"
  },

  // =========================================================
  // 5. HOTEL & TRAVEL BOOKING APP
  // =========================================================

  {
    id: 5,

    title: "Hotel & Travel Booking App",

    category: "mobile",

    duration: "4 months",

    role: "Frontend Developer",

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Google Maps API",
      "BLoC"
    ],

    description:
      "A cross-platform mobile application for hotel and flight booking with integrated maps and user services.",

    challenge:
      "Integrate booking workflows, maps, user interactions, and secure application services into one mobile experience.",

    solution:
      "Built the mobile frontend using Flutter and Dart with BLoC for state management and Firebase integration.",

    outcome:
      "Delivered a responsive cross-platform mobile application with a smooth booking experience.",

    features: [
      "Cross-platform application",
      "Hotel booking",
      "Flight booking",
      "Google Maps integration",
      "Admin dashboard",
      "User reviews"
    ],

    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",

    liveUrl: "#",

    githubUrl: "#"
  },

  // =========================================================
  // 6. MERCATINO
  // =========================================================

  {
    id: 6,

    title: "Mercatino – E-Commerce Web App",

    category: "web",

    techType: "vanilla",

    duration: "3 days",

    role: "Frontend Developer",

    technologies: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Swiper.js",
      "LocalStorage"
    ],

    description:
      "A lightweight and responsive e-commerce web application focused on a clean shopping experience.",

    challenge:
      "Design a responsive storefront with interactive shopping features without a backend.",

    solution:
      "Implemented the frontend using Tailwind CSS and Vanilla JavaScript with LocalStorage for cart persistence.",

    outcome:
      "Delivered a mobile-friendly e-commerce experience with interactive components.",

    features: [
      "Responsive shopping interface",
      "Product sliders",
      "LocalStorage cart",
      "Interactive modals",
      "Responsive Tailwind design"
    ],

    image: mercation,

    liveUrl: "https://mercatino-nine.vercel.app/",

    githubUrl: "https://github.com/esraaghneem/Mercatino.git"
  },

  // =========================================================
  // 7. TRAVEL LANDING PAGE
  // =========================================================

  {
    id: 7,

    title: "Travel Landing Page",

    category: "web",

    techType: "vanilla",

    duration: "2 days",

    role: "Frontend Developer",

    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Swiper.js",
      "JavaScript ES6+"
    ],

    description:
      "A modern travel landing page with responsive design, theme switching, and multi-language support.",

    challenge:
      "Create a compelling landing page with theme switching and multilingual content.",

    solution:
      "Implemented theme toggling and translations using JSON and Vanilla JavaScript.",

    outcome:
      "Delivered a responsive landing page with polished user experience.",

    features: [
      "Light and Dark theme",
      "Multi-language support",
      "Swiper testimonial slider",
      "Responsive Bootstrap layout",
      "Optimized UX"
    ],

    image: travel,

    liveUrl: "https://travel-landing-page-test.netlify.app/",

    githubUrl: "https://github.com/esraaghneem/travel-test.git"
  },

  // =========================================================
  // 8. DWELLO
  // =========================================================

  {
    id: 8,

    title: "Dwello – Real Estate Landing Page",

    category: "web",

    techType: "vanilla",

    duration: "2 days",

    role: "Frontend Developer",

    technologies: [
      "HTML5",
      "Tailwind CSS",
      "Swiper.js",
      "JavaScript ES6+"
    ],

    description:
      "A responsive real estate landing page designed for real estate agencies.",

    challenge:
      "Maintain an elegant and consistent user interface across different languages and screen sizes.",

    solution:
      "Developed the interface using Tailwind CSS and Vanilla JavaScript with bilingual support.",

    outcome:
      "Delivered a fast, responsive, and user-friendly real estate landing page.",

    features: [
      "Multi-language support",
      "Responsive Tailwind layout",
      "Interactive testimonials",
      "High-performance UI",
      "Clear content structure"
    ],

    image: dwello,

    liveUrl: "https://dwello-landing-page.vercel.app/",

    githubUrl: "https://github.com/esraaghneem/Dwello-landing-page-"
  }

];
