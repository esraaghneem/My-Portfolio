```tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code,
  Database,
  Server,
  ShieldCheck,
  GitBranch,
  Layers,
} from "lucide-react";
import Tilt from "react-parallax-tilt";

// =================== Animations ===================

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

// =================== Main Component ===================

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Languages & Frameworks",
      skills: ["PHP", "Laravel"],
    },

    {
      icon: Code,
      title: "APIs & Development",
      skills: [
        "REST APIs",
        "MVC Architecture",
        "Business Logic",
        "Service Layer",
      ],
    },

    {
      icon: Database,
      title: "Database",
      skills: [
        "MySQL",
        "Eloquent ORM",
        "Database Design",
        "Relationships",
        "Transactions",
      ],
    },

    {
      icon: ShieldCheck,
      title: "Security",
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
        "Clean Architecture",
        "Separation of Concerns",
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
        "API Testing",
        "Agile / Scrum",
      ],
    },
  ];

  const gradients = [
    "bg-gradient-to-r from-purple-500 to-fuchsia-500",
    "bg-gradient-to-r from-violet-500 to-indigo-500",
    "bg-gradient-to-r from-fuchsia-500 to-purple-500",
  ];

  return (
    <section
      id="skills"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />

        <div className="absolute w-96 h-96 bg-fuchsia-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">

        {/* Header */}

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
            Technologies and practices I use to build reliable, scalable, and
            maintainable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                  <div className="glass-card p-8 rounded-3xl hover-lift bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl h-full">

                    {/* Card Header */}

                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 ${
                          gradients[categoryIndex % gradients.length]
                        } rounded-2xl flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}

                    <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />

                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```
