import React from "react";
import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";
const Journey = () => {
  return (
    <section id="journey">
      <div>
        <AnimatedText
          text="My professional journey"
          textStyles="h2 mb-[38px] text-center"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
