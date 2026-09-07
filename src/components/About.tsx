```tsx
import React from "react";
import { motion, Transition, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Server,
  Database,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const defaultTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  children,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={250}
    >
      <div className="glass-card p-6 rounded-2xl h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>

          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>

        <div className="text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </Tilt>
  );
};

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="glass-card p-6 rounded-2xl hover-lift"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full top-0 left-0" />
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full bottom-0 right-0" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-display gradient-text mb-6">About Me</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build reliable web applications with a strong focus on clean
            architecture, database design, security, and maintainable code.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <InfoCard icon={Code} title="Development">
            I develop web applications using PHP and Laravel, focusing on
            structured code, reusable components, RESTful APIs, and clear
            business logic.
          </InfoCard>

          <InfoCard icon={Server} title="Backend & APIs">
            I design server-side systems and REST APIs with authentication,
            authorization, validation, middleware, and service-based business
            logic.
          </InfoCard>

          <InfoCard icon={Database} title="Database Design">
            I work with MySQL and Eloquent ORM to design relational databases,
            relationships, transactions, and efficient data access.
          </InfoCard>

          <InfoCard icon={ShieldCheck} title="Security">
            I implement authentication, authorization, roles and permissions,
            request validation, and secure API access using Laravel tools.
          </InfoCard>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HighlightCard
            icon={Code}
            title="Backend Development"
            description="Building structured applications and APIs with PHP and Laravel."
          />

          <HighlightCard
            icon={Database}
            title="Database Design"
            description="Designing relational databases and managing complex data relationships."
          />

          <HighlightCard
            icon={ShieldCheck}
            title="Secure Systems"
            description="Applying authentication, authorization, validation, and secure API practices."
          />
        </motion.div>

        <motion.div
          className="glass-card p-8 rounded-3xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Information Technology Engineering
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                University
              </p>
              <p className="font-semibold text-foreground">
                Damascus University
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Graduation
              </p>
              <p className="font-semibold text-foreground">2027</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Study Period
              </p>
              <p className="font-semibold text-foreground">2022 - 2027</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">GPA</p>
              <p className="font-semibold text-foreground">83%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-8 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="3" label="Featured Projects" />
            <StatCard value="100%" label="Backend Focus" />
            <StatCard value="MySQL" label="Primary Database" />
            <StatCard value="2027" label="Graduation" />
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Languages
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 rounded-full bg-primary/10 text-primary">
              Arabic — Native
            </span>

            <span className="px-5 py-2 rounded-full bg-primary/10 text-primary">
              English — Advanced
            </span>

            <span className="px-5 py-2 rounded-full bg-primary/10 text-primary">
              Turkish — Very Strong
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
```
