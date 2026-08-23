import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Server, Database, Code2, Terminal } from "lucide-react";
import ContactIconBar from "./ContactIconBar";

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
        {/* Backend Developer Visual */}
        <div
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]
                     relative rounded-[40px] overflow-hidden
                     bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950
                     border-4 border-primary/20 shadow-inner"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20" />

          {/* Decorative Code Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[75%] space-y-4 opacity-70">
              <div className="flex gap-3">
                <span className="text-purple-300 font-mono">
                  {"<"}
                </span>

                <div className="h-3 rounded-full bg-purple-400/50 w-32" />
              </div>

              <div className="flex gap-3 ml-6">
                <span className="text-indigo-300 font-mono">
                  {"{"}
                </span>

                <div className="h-3 rounded-full bg-indigo-400/40 w-40" />
              </div>

              <div className="flex gap-3 ml-12">
                <span className="text-purple-200 font-mono">
                  API
                </span>

                <div className="h-3 rounded-full bg-purple-300/40 w-24" />
              </div>

              <div className="flex gap-3 ml-6">
                <span className="text-indigo-300 font-mono">
                  {"}"}
                </span>

                <div className="h-3 rounded-full bg-indigo-400/40 w-36" />
              </div>

              <div className="flex gap-3">
                <span className="text-purple-300 font-mono">
                  {">"}
                </span>

                <div className="h-3 rounded-full bg-purple-400/50 w-28" />
              </div>
            </div>
          </div>

          {/* Center Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl
                            bg-purple-500/20 backdrop-blur-md
                            border border-purple-300/20
                            flex items-center justify-center
                            shadow-2xl"
            >
              <Server className="w-12 h-12 text-purple-200" />
            </div>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 rounded-2xl
                       bg-white/10 backdrop-blur-md
                       flex items-center justify-center
                       border border-white/10"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Code2 className="w-6 h-6 text-purple-200" />
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 rounded-2xl
                       bg-white/10 backdrop-blur-md
                       flex items-center justify-center
                       border border-white/10"
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
          >
            <Database className="w-6 h-6 text-indigo-200" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 w-12 h-12 rounded-2xl
                       bg-white/10 backdrop-blur-md
                       flex items-center justify-center
                       border border-white/10"
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
            }}
          >
            <Terminal className="w-6 h-6 text-purple-200" />
          </motion.div>
        </div>

        {/* Floating Social Card / Toolbar */}
        <ContactIconBar />
      </motion.div>
    </motion.div>
  );
};

export default HeroAvatarCard;
