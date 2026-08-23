import React from "react";
import { motion } from "framer-motion";
import { Zap, Download } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { DynamicCodeSnippet } from "./DynamicCodeSnippet";

import cvFile from "../../../assets/Esraa_Ghneem.pdf";

interface HeroContentProps {
  scrollToSection: (sectionId: string) => void;
  coreTechs: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({
  scrollToSection,
  coreTechs,
}) => (
  <motion.div
    className="text-center lg:text-left order-2 lg:order-1"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p className="text-xl text-primary font-semibold mb-3 tracking-wider">
      Hello, I'm
    </p>

    <motion.h1
      className="text-2xl md:text-6xl font-extrabold font-serif leading-none tracking-tighter mb-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Esraa <span className="gradient-text">Ghneem</span>
    </motion.h1>

    <motion.h2
      className="text-3xl text-foreground/80 mb-6 font-light font-serif"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Backend Developer
    </motion.h2>

    <motion.p
      className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 border-l-4 border-primary/50 pl-4 italic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Backend Developer specializing in PHP and Laravel, focused on building
      reliable RESTful APIs, database-driven applications, and scalable
      backend systems with clean and maintainable architecture.
    </motion.p>

    {/* Creative Element: Dynamic Code Snippet */}
    <DynamicCodeSnippet techs={coreTechs} />

    {/* Action Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 mb-10"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 1.8,
          },
        },
      }}
    >
      <ActionButton
        label="Get In Touch"
        onClick={() => scrollToSection("contact")}
        icon={Zap}
        variant="primary"
      />

      <ActionButton
        label="Download CV"
        icon={Download}
        variant="secondary"
        href={cvFile}
      />
    </motion.div>
  </motion.div>
);

export default HeroContent;
