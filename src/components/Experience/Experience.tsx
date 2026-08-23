// components/Experience/Experience.tsx

import React from "react";

import { experiences } from "@/data/experiences";
import ExperienceCard from "./components/ExperienceCard";

// ==============================
// Experience Component
// ==============================

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">

        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">
            Experience
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional experience, technical growth, and development
            as a Backend Developer.
          </p>
        </div>

        <div className="space-y-16">

          {/* =========================
              Professional Experience
          ========================== */}

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                experience={exp}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
