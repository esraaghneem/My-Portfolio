import React from "react";

import ScrollIndicator from "./components/ScrollIndicator";
import ParticleSystem from "./components/FloatingParticles";
import HeroContent from "./components/HeroContent";
import HeroAvatarCard from "./components/HeroAvatarCard";

// Scroll smoothly to a specific section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

// Esraa's core backend technologies
const coreTechs = ["PHP", "Laravel", "MySQL", "REST APIs"];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
    >
      <ParticleSystem />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent
            scrollToSection={scrollToSection}
            coreTechs={coreTechs}
          />

          <HeroAvatarCard />
        </div>

        <ScrollIndicator
          scrollToSection={scrollToSection}
          targetId="about"
        />
      </div>
    </section>
  );
};

export default Hero;
