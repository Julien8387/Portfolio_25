import React from "react";
import { motion } from "framer-motion";

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] },
  }),
};

const getLetter = (text) => {
  if (!text || typeof text !== "string") return [];
  const letters = [];

  text.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (text.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

const AnimatedText = ({ text, textStyles }) => {
  return <div className={`${textStyles}`}>{getLetter(text)}</div>;
};

export default AnimatedText;
