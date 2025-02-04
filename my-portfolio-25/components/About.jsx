import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col xl:flex-row items-center justify-center gap-x-6">
          {/*Image + Shape */}
          <div className="hidden xl:flex flex-1">
            <div className="relative w-full max-w-[380px]">
              {/*Shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/*Image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#85A593FF] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/hero/dev2.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="Profile picture"
                />
              </div>
              {/* Rotating shape
              <div className="absolute top-2/4 -right-[65px]">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt="Decorative rotating shape"
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
                  <div className="text-primary z-10">
                    <div className="text-5xl font-bold leading-none">10+</div>
                    <div className="leading-none">
                      Years of <br /> Expériences
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/** text */}
          <div className="flex-1">
            <div className="text-center xl:text-left max-w-[600px] mx-auto xl:mx-0">
              <div className="mb-4">
                <AnimatedText text="My name is Julien" textStyles="h2 mb-2" />
                <p className="text-lg text-secondary">
                  Apprenant Dev Full-Stack
                </p>
              </div>
              <p className="text-secondary max-w-[680px] mx-auto xl:mx-0 mb-2">
                Après 9 mois de formation au sein d'Ada tech school, ou j'ai pu
                explorer plusieurs langages et framework.
                <br /> Un jour, un encadrant a suggéré un atelier de
                cybersécurité sur la plateforme Root-me, et cela a généré pour
                moi un réel intérêt pour ce domaine, m'encourageant ainsi à axer
                ma recherche d'alternance dans cette direction.
              </p>
              {/** Info items */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                {/** Item 1 */}
                <div className="text-center lg:text-left">
                  <div className="uppercase font-bold text-primary mb-2">
                    Age
                  </div>
                  <div>37 ans</div>
                </div>
                {/** Item 2 */}
                <div className="text-center lg:text-left">
                  <div className="uppercase font-bold text-primary mb-2">
                    Né à
                  </div>
                  <div>La Seyne s/Mer, 83500 Var, France</div>
                </div>
                {/** Item 3 - Phone La classe whitespace-nowrap empêchera le numéro de téléphone de se couper sur plusieurs lignes*/}
                <div className="text-center lg:text-left">
                  <div className="uppercase font-bold text-primary mb-2">
                    Téléphone
                  </div>
                  <div className="whitespace-nowrap">+33 6 38 29 19 28</div>
                </div>

                {/** Item 4 */}
                <div className="text-center lg:text-left">
                  <div className="uppercase font-bold text-primary mb-2">
                    Email
                  </div>
                  <div>julien.alt.dev@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
