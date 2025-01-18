"use client";

import React from "react";
import { motion } from "framer-motion";

const RotatingShape = ({ content, direction = "right", duration = 2 }) => {
  // Vérifiez si `content` contient bien des données rendables
  if (typeof content !== "string" && !React.isValidElement(content)) {
    console.error("Invalid content passed to RotatingShape:", content);
    return null; // Empêche le rendu si `content` est invalide
  }

  // Définir l'animation de rotation
  const rotationAnimation = {
    animate: {
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
    },
    transition: {
      duration: duration, // Durée d'une rotation complète
      repeat: Infinity,
      ease: "linear", // Rotation fluide
    },
  };

  return (
    <motion.div
      animate={rotationAnimation.animate}
      transition={rotationAnimation.transition}
    >
      {content}
    </motion.div>
  );
};

export default RotatingShape;


// youtube 35:32
