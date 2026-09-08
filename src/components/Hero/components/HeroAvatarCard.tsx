import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import ContactIconBar from "./ContactIconBar";

import ghImage from "../../../assets/gh.jpg";

// ----------------- Custom Tilt Hook -----------------
const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = {
    damping: 10,
    stiffness: 100,
  };

  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;

    x.set(mouseX / 3);
    y.set(mouseY / 3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    rotateX: springX,
    rotateY: springY,
    handleMouseMove,
    handleMouseLeave,
  };
};

// ----------------- Hero Avatar Card Component -----------------
const HeroAvatarCard: React.FC = () => {
  const tilt = useTilt();

  return (
    <motion.div
      className="flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        ref={tilt.ref}
        onMouseMove={tilt.handleMouseMove}
        onMouseLeave={tilt.handleMouseLeave}
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        className="relative p-4 sm:p-6 bg-card rounded-[50px] shadow-2xl glass-card border border-border/50 hover:shadow-primary/50 transition-shadow duration-500 will-change-transform max-w-fit mx-auto transform-style-preserve-3d"
      >
        {/* Profile Image */}
        <div
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]
                     relative rounded-[40px] overflow-hidden
                     bg-card border-4 border-primary/20 shadow-inner"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={ghImage}
            alt="Esraa Ghneem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Social Card / Toolbar */}
        <ContactIconBar />
      </motion.div>
    </motion.div>
  );
};

export default HeroAvatarCard;
