import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import {
  Code,
  Database,
  Server,
  ShieldCheck,
  GitBranch,
  Layers,
} from "lucide-react";
import Tilt from "react-parallax-tilt";

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

// ================= Component =================
const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        "PHP",
        "Laravel",
        "RESTful APIs",
        "MVC Architecture",
        "Business Logic",
        "API Development",
      ],
    },
    {
      icon: Database,
      title: "Database & Data",
      skills: [
        "MySQL",
        "Eloquent ORM",
        "Database Design",
        "Relationships",
        "Queries",
        "Data Validation",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Authentication & Security",
      skills: [
        "Laravel Sanctum",
        "Authentication",
        "Authorization",
        "Roles & Permissions",
        "Middleware",
        "Request Validation",
      ],
    },
    {
      icon: Layers,
      title: "Software Engineering",
      skills: [
        "OOP",
        "SOLID Principles",
        "Design Patterns",
        "Service Layer",
        "Clean Architecture",
        "Reusable Components",
      ],
    },
    {
      icon: GitBranch,
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Jira",
        "REST API Testing",
        "Version Control",
      ],
    },
    {
      icon: Code,
      title: "Development Practices",
      skills: [
        "Problem Solving",
        "Debugging",
        "Code Organization",
        "Error Handling",
        "API Documentation",
        "Agile / Scrum",
      ],
    },
  ];

  const getGradientClass = (index: number) => {
    const gradients = [
      "bg-gradient-to-r from-purple-500 to-fuchsia-500",
      "bg-gradient-to-r from-violet-500 to-indigo-500",
      "bg-gradient-to-r from-fuchsia-500 to-purple-500",
    ];

    return gradients[index % gradients.length];
  };

  return (
    <section
      id="skills"
      className="section-spacing relative overflow-hidden"
    >
      {/* Subtle floating glow */}
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
            Skills & Expertise
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Backend technologies and software engineering practices I use to
            build reliable, scalable, and maintainable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.03}
                transitionSpeed={250}
              >
                <div
                  className="glass-card p-8 rounded-3xl hover-lift
                             bg-gradient-to-br from-white/5 to-white/10
                             border border-white/10 shadow-xl"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 ${getGradientClass(
                        categoryIndex
                      )} rounded-2xl flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                    {category.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "PHP",
              "Laravel",
              "MySQL",
              "Eloquent",
              "Laravel Sanctum",
              "REST APIs",
              "Postman",
              "Git",
              "GitHub",
              "Jira",
              "JSON",
              "MVC",
              "OOP",
              "SOLID",
              "Design Patterns",
              "API Validation",
              "Database Relationships",
              "Middleware",
            ].map((tech, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={fadeUp}
                className="px-4 py-2 glass-card rounded-full
                           text-sm font-medium text-foreground
                           hover-scale transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            {
              label: "Backend Technologies",
              value: "10+",
              icon: Server,
            },
            {
              label: "Development Tools",
              value: "5+",
              icon: GitBranch,
            },
            {
              label: "Software Engineering",
              value: "6+",
              icon: Layers,
            },
            {
              label: "Core Focus",
              value: "Backend",
              icon: Code,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center glass-card p-6 rounded-2xl
                         hover-scale bg-gradient-to-br from-white/5
                         to-white/10 border border-white/10"
            >
              <div
                className={`w-12 h-12 ${getGradientClass(
                  index
                )} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-2xl font-bold gradient-text mb-2">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
