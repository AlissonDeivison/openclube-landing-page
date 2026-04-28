"use client";

import { motion } from "framer-motion";

interface ImpactPhraseProps {
  phrase: string;
  variant?: "primary" | "surface";
}

export default function ImpactPhrase({ phrase, variant = "primary" }: ImpactPhraseProps) {
  const isPrimary = variant === "primary";
  
  return (
    <div className={`${isPrimary ? "bg-primary-container" : "bg-surface-tint/5 border-y border-outline-variant/20"} py-8 overflow-hidden`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container-max mx-auto px-6 text-center"
      >
        <p className={`font-headline-md text-headline-md ${isPrimary ? "text-white/90" : "text-primary-container"}`}>
          "{phrase}"
        </p>
      </motion.div>
    </div>
  );
}
