import React from "react";
import { motion, Transition, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Server,
  Database,
  ShieldCheck,
  GitBranch,
  GraduationCap,
} from "lucide-react";

// =================== Animations ===================
const defaultTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, delay: i * 0.2 },
  }),
};

// =================== Reusable Components ===================
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <Tilt
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    scale={1.03}
    transitionSpeed={250}
  >
    <motion.div
      className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10
                 bg-gradient-to-br from-white/10 to-white/5 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-lg font-semibold text-foreground mb-3">
        {title}
      </h4>
      {children}
    </motion.div>
  </Tilt>
);

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Tilt
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    scale={1.05}
    transitionSpeed={300}
  >
    <motion.div
      className="glass-card p-6 rounded-2xl hover:shadow-2xl bg-gradient-to-br
                 from-blue-500/20 via-indigo-500/10 to-purple-500/10 border border-white/10"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h4>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Tilt
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    scale={1.05}
    transitionSpeed={300}
  >
    <motion.div
      className="glass-card p-6 rounded-2xl text-center bg-gradient-to-br
                 from-blue-500/20 to-purple-500/20 border border-white/10 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <div className="text-2xl font-bold gradient-text mb-2">
        {value}
      </div>

      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </motion.div>
  </Tilt>
);

// =================== Main Component ===================
const About: React.FC = () => {
  const stats = [
    {
      icon: Code,
      label: "Featured Projects",
      value: "3",
    },
    {
      icon: Server,
      label: "Backend Focus",
      value: "100%",
    },
    {
      icon: Database,
      label: "Primary Database",
      value: "MySQL",
    },
    {
      icon: GraduationCap,
      label: "Graduation",
      value: "2026",
    },
  ];

  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building reliable backend systems and RESTful APIs using PHP and Laravel.",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing structured relational databases and implementing efficient data access with MySQL and Eloquent.",
    },
    {
      icon: ShieldCheck,
      title: "Authentication & Authorization",
      description:
        "Implementing secure authentication, role-based access control, permissions, and business rules.",
    },
  ];

  return (
    <section
      id="about"
      className="relative section-spacing bg-surface overflow-hidden"
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />

        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-2000" />
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
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a Backend Developer specializing in PHP and Laravel,
            with a strong focus on building RESTful APIs, database-driven
            applications, authentication systems, and reliable backend
            architectures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-heading text-foreground">
              Building Reliable Backend Systems
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My experience focuses on developing backend applications
                using PHP and Laravel, with an emphasis on clean architecture,
                business logic, RESTful APIs, and database design.
              </p>

              <p>
                I enjoy solving complex backend problems and building systems
                that handle authentication, roles and permissions, service
                requests, task management, and automated business processes.
              </p>

              <p>
                I am continuously developing my software engineering skills
                through real-world projects and applying principles such as
                OOP, SOLID, design patterns, and structured database design.
              </p>
            </div>

            {/* Education */}
            <InfoCard title="Education">
              <div className="space-y-2">
                <p className="font-medium text-foreground">
                  Bachelor of Information Technology Engineering
                </p>

                <p className="text-sm text-muted-foreground">
                  Damascus University • 2021 - 2026
                </p>

                <p className="text-sm text-muted-foreground">
                  GPA: 83%
                </p>
              </div>
            </InfoCard>

            {/* Languages */}
            <InfoCard title="Languages">
              <div className="grid grid-cols-3 gap-4">

                <div>
                  <p className="font-medium text-foreground">
                    Arabic
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Native
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    English
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Advanced
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Turkish
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Very Strong
                  </p>
                </div>

              </div>
            </InfoCard>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                >
                  <HighlightCard {...item} />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
