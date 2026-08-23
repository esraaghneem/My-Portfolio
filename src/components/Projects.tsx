import React, { useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  ChevronRight,
  Images,
  X,
} from "lucide-react";

import { Project, projects } from "@/data/projects";
import { Stat, stats } from "@/data/stats";

// ==============================
// Animations
// ==============================

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

// ==============================
// Project Details Modal
// ==============================

const ProjectDetails: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(project.image);

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto glass-card rounded-3xl border border-white/10 bg-surface shadow-2xl"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all"
          aria-label="Close project details"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}

          <div className="mb-8 pr-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
                Backend Project
              </span>

              {project.role && (
                <span className="px-3 py-1 glass-card rounded-full text-sm text-muted-foreground">
                  {project.role}
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {project.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Main Image */}

          {galleryImages.length > 0 && (
            <div className="relative rounded-2xl overflow-hidden mb-5 bg-black/20">
              <img
                src={selectedImage}
                alt={project.title}
                className="w-full max-h-[500px] object-contain"
              />
            </div>
          )}

          {/* Gallery */}

          {galleryImages.length > 1 && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Images className="w-5 h-5 text-primary" />

                <h3 className="text-lg font-semibold text-foreground">
                  Project Screenshots
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === image
                        ? "border-primary scale-[1.02]"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-24 md:h-28 object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 text-center">
                      Screenshot {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Project Info */}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side */}

            <div className="space-y-6">
              {/* Duration */}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />

                  <h3 className="font-semibold text-foreground">
                    Duration
                  </h3>
                </div>

                <p className="text-muted-foreground">
                  {project.duration}
                </p>
              </div>

              {/* Role */}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-primary" />

                  <h3 className="font-semibold text-foreground">
                    Role
                  </h3>
                </div>

                <p className="text-muted-foreground">
                  {project.role}
                </p>
              </div>

              {/* Technologies */}

              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Key Features
              </h3>

              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge / Solution / Outcome */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {project.challenge && (
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-foreground mb-3">
                  Challenge
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-foreground mb-3">
                  Solution
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {project.outcome && (
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-foreground mb-3">
                  Outcome
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Links */}

          <div className="flex flex-wrap gap-4 mt-10 pt-6 border-t border-white/10">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl glass-card text-foreground flex items-center gap-2 hover-lift"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ==============================
// Project Card
// ==============================

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}> = ({ project, index, onOpen }) => (
  <Tilt
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    scale={1.03}
    transitionSpeed={250}
  >
    <motion.div
      className="glass-card rounded-3xl overflow-hidden group bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent border border-white/10 shadow-xl flex flex-col h-full"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Project Image */}

      {project.image && (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Screenshot Count */}

          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs flex items-center gap-2">
                <Images className="w-4 h-4" />

                {project.images.length} Screenshots
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}

      <div className="p-8 flex flex-col flex-1">
        {/* Title + Links */}

        <div className="flex items-start justify-between mb-4 gap-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <div className="flex gap-2 shrink-0">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 circle-secondary flex items-center justify-center hover-glow transition-all duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Duration + Role */}

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
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

        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 6 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* View Details */}

        <button
          onClick={() => onOpen(project)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-foreground font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
        >
          View Project Details

          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  </Tilt>
);

// ==============================
// Project Stats
// ==============================

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

// ==============================
// Main Projects Component
// ==============================

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="section-spacing bg-surface relative overflow-hidden"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />

          <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
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
              A selection of backend projects showcasing my experience
              in building RESTful APIs, database-driven systems,
              authentication, business logic, and scalable backend
              architectures.
            </p>
          </motion.div>

          {/* All Projects */}

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div>

          {/* Stats */}

          <ProjectStats stats={stats} />
        </div>
      </section>

      {/* Project Details Modal */}

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
