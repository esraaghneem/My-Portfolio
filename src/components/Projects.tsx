import React, { useState } from "react";
import { motion, Variants, Transition, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  ChevronRight,
  Filter,
  Images,
  X,
  ShieldCheck,
  Users,
  ClipboardList,
  BedDouble,
  Bell,
} from "lucide-react";

import { Project, projects } from "@/data/projects";
import { Stat, stats } from "@/data/stats";

// ================= Animations =================

const transition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
      delay: i * 0.15,
    },
  }),
};

// =========================================================
// Hotel Screenshot Descriptions
// =========================================================

const hotelImageDescriptions = [
  {
    title: "General Manager Dashboard",
    description:
      "Centralized dashboard for monitoring hotel operations, managing departments, staff, bookings, and system-wide activities according to management permissions.",
    icon: ShieldCheck,
  },
  {
    title: "Department Dashboard",
    description:
      "Department-specific workspace where managers can monitor their team's operations and access features according to their assigned role and department.",
    icon: Users,
  },
  {
    title: "Room Booking",
    description:
      "Customer-facing room booking workflow for browsing available rooms and creating hotel reservations.",
    icon: BedDouble,
  },
  {
    title: "Customer Service Request",
    description:
      "Customers can submit service requests related to their active booking, which are routed to the appropriate hotel department.",
    icon: Bell,
  },
  {
    title: "Staff Tasks",
    description:
      "Employees receive assigned tasks generated from customer requests and operational workflows, with task distribution based on availability, workload, department, and shift status.",
    icon: ClipboardList,
  },
];

// =========================================================
// Hotel Gallery
// =========================================================

const HotelGallery: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = project.images || [project.image];

  return (
    <motion.div
      className="mt-8 border-t border-white/10 pt-8"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      {/* Gallery Header */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xl font-bold text-foreground">
            System Screenshots
          </h4>

          <p className="text-sm text-muted-foreground mt-1">
            A look at the main workflows and dashboards.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover-scale"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image */}

      <motion.div
        key={activeImage}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 mb-5"
      >
        <img
          src={images[activeImage]}
          alt={
            hotelImageDescriptions[activeImage]?.title ||
            `${project.title} screenshot`
          }
          className="w-full max-h-[500px] object-cover"
        />
      </motion.div>

      {/* Thumbnails */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              activeImage === index
                ? "border-primary scale-[1.02]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Screenshot Description */}

      {hotelImageDescriptions[activeImage] && (
        <motion.div
          key={`description-${activeImage}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            {React.createElement(
              hotelImageDescriptions[activeImage].icon,
              {
                className: "w-6 h-6 text-primary mt-1 shrink-0",
              }
            )}

            <div>
              <h5 className="font-bold text-foreground mb-1">
                {hotelImageDescriptions[activeImage].title}
              </h5>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {hotelImageDescriptions[activeImage].description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// =========================================================
// ProjectCard
// =========================================================

const ProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const [showGallery, setShowGallery] = useState(false);

  const isHotel = project.id === 1;

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.03}
      transitionSpeed={250}
    >
      <motion.div
        className={`glass-card rounded-3xl overflow-hidden group
        bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-transparent
        border border-white/10 shadow-xl flex flex-col h-full
        ${isHotel ? "lg:col-span-2" : ""}`}
        custom={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* =====================================================
            Project Image
        ===================================================== */}

        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isHotel ? "h-80" : "h-64"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Category */}

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full text-sm font-medium shadow-md">
              {project.category === "web" ? "Web App" : "Mobile App"}
            </span>
          </div>

          {/* Featured Badge */}

          {isHotel && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20">
                Featured Project
              </span>
            </div>
          )}
        </div>

        {/* =====================================================
            Content
        ===================================================== */}

        <div className="p-8 flex flex-col flex-1">
          {/* Title + Links */}

          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex gap-2 shrink-0">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live project"
                  className="w-10 h-10 circle-primary flex items-center justify-center hover-glow transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="w-10 h-10 circle-secondary flex items-center justify-center hover-glow transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Duration + Role */}

          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>

            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{project.role}</span>
            </div>
          </div>

          {/* Description */}

          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="flex flex-wrap gap-2 mb-7">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* =====================================================
              Hotel Gallery Button
          ===================================================== */}

          {isHotel && project.images && project.images.length > 0 && (
            <button
              onClick={() => setShowGallery((prev) => !prev)}
              className="w-full mb-7 px-5 py-3 rounded-xl
              bg-gradient-to-r from-purple-500 to-fuchsia-500
              text-white font-semibold flex items-center justify-center
              gap-2 hover:opacity-90 transition-all duration-300"
            >
              <Images className="w-5 h-5" />

              {showGallery
                ? "Hide System Screenshots"
                : `View System Screenshots (${project.images.length})`}
            </button>
          )}

          {/* =====================================================
              Challenge / Solution / Outcome
          ===================================================== */}

          <div className="space-y-5 mt-auto">
            {project.challenge && (
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Challenge
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Solution
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {project.solution}
                </p>
              </div>
            )}

            {project.outcome && (
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Outcome
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* =====================================================
              Hotel Gallery
          ===================================================== */}

          <AnimatePresence>
            {isHotel && showGallery && (
              <HotelGallery
                project={project}
                onClose={() => setShowGallery(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Tilt>
  );
};

// =========================================================
// ProjectFilters
// =========================================================

const ProjectFilters: React.FC<{
  filters: { id: string; label: string }[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filters, activeFilter, setActiveFilter }) => (
  <motion.div
    className="flex flex-wrap justify-center gap-4 mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {filters.map((filter) => (
      <button
        key={filter.id}
        onClick={() => setActiveFilter(filter.id)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
          activeFilter === filter.id
            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg"
            : "glass-card text-foreground hover-lift"
        }`}
      >
        <Filter className="w-4 h-4" />

        {filter.label}
      </button>
    ))}
  </motion.div>
);

// =========================================================
// ProjectStats
// =========================================================

const ProjectStats: React.FC<{
  stats?: Stat[];
}> = ({ stats = [] }) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className="text-center glass-card p-6 rounded-2xl hover-scale"
        custom={index}
        variants={fadeUp}
      >
        <div className="text-3xl font-bold gradient-text mb-2">
          {stat.value}
        </div>

        <div className="text-sm text-muted-foreground">
          {stat.label}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// =========================================================
// Main Projects Component
// =========================================================

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("all");

  const [activeTech, setActiveTech] =
    useState<string>("all");

  // ================= Filters =================

  const categoryFilters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "web",
      label: "Web Apps",
    },
    {
      id: "mobile",
      label: "Mobile Apps",
    },
  ];

  const techFilters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "react",
      label: "React",
    },
    {
      id: "vanilla",
      label: "Vanilla JS",
    },
  ];

  // ================= Filtering =================

  let filteredProjects = projects;

  if (activeCategory !== "all") {
    filteredProjects = filteredProjects.filter(
      (project) => project.category === activeCategory
    );
  }

  if (
    activeCategory === "web" &&
    activeTech !== "all"
  ) {
    filteredProjects = filteredProjects.filter(
      (project) => project.techType === activeTech
    );
  }

  // ================= Render =================

  return (
    <section
      id="projects"
      className="section-spacing bg-surface relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />

        <div className="absolute w-96 h-96 bg-fuchsia-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">

        {/* Section Header */}

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-display gradient-text mb-6">
            My Projects
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects showcasing my experience in
            backend development, API design, software architecture,
            and modern application development.
          </p>
        </motion.div>

        {/* Category Filters */}

        <ProjectFilters
          filters={categoryFilters}
          activeFilter={activeCategory}
          setActiveFilter={(id) => {
            setActiveCategory(id);
            setActiveTech("all");
          }}
        />

        {/* Web Technology Filters */}

        {activeCategory === "web" && (
          <ProjectFilters
            filters={techFilters}
            activeFilter={activeTech}
            setActiveFilter={setActiveTech}
          />
        )}

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}
        </div>

        {/* Stats */}

        <ProjectStats stats={stats} />
      </div>
    </section>
  );
};

export default Projects;
