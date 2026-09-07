```tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display gradient-text mb-6">About Me</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build reliable web applications with a focus on clean
            architecture, database design, security, and maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="glass-card p-8 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Development
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I develop web applications using PHP and Laravel, with a focus
              on structured code, RESTful APIs, reusable components, and clear
              business logic.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground">
                APIs & Systems
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I design server-side systems and REST APIs with authentication,
              authorization, validation, middleware, and organized business
              logic.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Database Design
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I work with MySQL and Eloquent ORM to design relational
              databases, relationships, transactions, and efficient data
              access.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Security
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I implement authentication, authorization, roles and
              permissions, request validation, middleware, and secure API
              access.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="glass-card p-8 rounded-3xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">
                Education
              </h3>

              <p className="text-muted-foreground">
                Bachelor of Information Technology Engineering
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">University</p>
              <p className="font-semibold text-foreground">
                Damascus University
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Study Period
              </p>
              <p className="font-semibold text-foreground">2022 - 2027</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Graduation</p>
              <p className="font-semibold text-foreground">2027</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">GPA</p>
              <p className="font-semibold text-foreground">83%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-1">3</div>
              <div className="text-sm text-muted-foreground">
                Featured Projects
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold gradient-text mb-1">
                PHP
              </div>
              <div className="text-sm text-muted-foreground">
                Main Language
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold gradient-text mb-1">
                MySQL
              </div>
              <div className="text-sm text-muted-foreground">
                Primary Database
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold gradient-text mb-1">
                2027
              </div>
              <div className="text-sm text-muted-foreground">
                Graduation
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
