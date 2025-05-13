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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white">
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <ParticleEffect />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg"
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-bold px-8 py-6 text-lg"
            >
              Découvrir <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <AnimatedCards />
          </motion.div>
        </motion.div>
      </div>
    </section>
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
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, "-100px"],
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
