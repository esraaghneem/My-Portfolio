// components/Experience/Experience.tsx

import React from "react";

import { experiences } from "@/data/experiences";
import { Certificate } from "./components/types";
import ExperienceCard from "./components/ExperienceCard";
import CertificatesAndAwards from "./components/CertificatesAndAwards";

// ==============================
// Certificates
// ==============================

const certificates: Certificate[] = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (via Coursera)",
    year: 2025,
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    name: "IBM Front-End Development Certificate",
    issuer: "IBM",
    year: 2024,
    url: "https://www.coursera.org/professional-certificates/ibm-frontend-developer",
  },
];

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
            Experience & Certifications
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional experience, technical growth, and continuous
            development in software engineering.
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

          {/* =========================
              Certifications
          ========================== */}

          <div className="max-w-3xl mx-auto">
            <CertificatesAndAwards
              certificates={certificates}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
