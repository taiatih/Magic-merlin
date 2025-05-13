import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Magic Merlin",
  subtitle = "Magicien professionnel au Havre pour vos événements, spectacles pour enfants et adultes",
  ctaText = "Réserver un spectacle",
  onCtaClick = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1576074972488-0e41a90d4418?w=1200&q=80",
}: HeroSectionProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated particles */}
      <ParticleEffect />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex items-center justify-center mb-4"
          >
            <Sparkles className="h-10 w-10 text-yellow-400 mr-2" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-6"
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated cards at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <AnimatedCards />
      </div>
    </div>
  );
};

// Particle effect component
const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 z-0">
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-yellow-300 opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Animated playing cards component
const AnimatedCards = () => {
  return (
    <div className="relative h-32">
      {[1, 2, 3, 4, 5].map((card) => (
        <motion.div
          key={card}
          className="absolute bottom-[-20px] h-32 w-24 bg-white rounded-md shadow-lg"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1567448400815-59d5a71b1c2e?w=200&q=80)`,
            backgroundSize: "cover",
            left: `${(card - 1) * 20 + 10}%`,
          }}
          initial={{ y: 100, rotate: (card - 3) * 10 }}
          animate={{
            y: [100, 0, 20, 0],
            rotate: [(card - 3) * 10, (card - 3) * 5],
          }}
          transition={{
            duration: 1.5,
            delay: card * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;
