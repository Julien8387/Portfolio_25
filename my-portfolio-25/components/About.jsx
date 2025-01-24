import React from "react";
import { motion } from "framer-motion";
//composents
import AnimatedText from "./AnimatedText";
import Image from "next/image";
const About = () => {
  return (
    <section className="realtive pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/*Image + Shape */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {" "}
              {/*Shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/*Image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/img.png"
                  width={350}
                  height={478}
                  quality={100}
                  alt="alt"
                />
              </div>
              {/* Rotating shape*/}
              <div className="absolute top-2/4 -right-[65px] ">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt="alt"
                  />
                </motion.div>
                {/* Le texte en dehors du motion.div mais dans le même conteneur parent */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-primary">
                    <div className="text-5xl font-bold leading-none">10+</div>
                    <div className="leading-none">
                      Years of <br /> Expériences
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** text  */}
          <div>
            <div>
              <AnimatedText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
