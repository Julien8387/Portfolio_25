"use client";

import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  return (
    <section
      className="h-[800px] sm:h-[600px] relative bg-accent/10 xl:bg-white"
      id="home"
    >
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h2 mb-2 max-w-[320px] xl:max-w-none">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Bonjour,", 4000, "Hello,", 4000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className=""
              aria-label="Animated text showing Websites and Apps"
            />
            <span className="text-accent">
              <br /> Bienvenue
            </span>
            <br /> sur mon portfolio
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Actuellement en recherche d'une alternance en vue du passage de mon
            titre RNCP concepteur d'applications (code de la fiche: RNCP37873)
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact</button>
          </ScrollLink>
          <Stats />
        </div>

        {/* Image section */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          {/* Main dev image */}
          <div className="absolute w-[900px] h-[900px] bottom-0 z-40 left-[6.5vw]">
            {/*  */}
            <Image
              src="/assets/hero/dev2.png"
              alt="Photo de Julien"
              fill
              sizes="(max-width: 15800px) 100vw, 55vw"
              quality={100}
              priority
              className="object-contain"
            />
          </div>

          {/* Arrow shape*/}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw] w-[160px] h-[160px] "
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              alt="Arrow decoration"
              width={160}
              height={160}
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Shape 1 */}
          <div
            className="absolute top-[600px] xl:left-[3vw]"
            data-scroll
            data-scroll-speed="0.02"
          >
            <RotatingShape
              content={
                <div className="relative w-[38px] h-[38px]">
                  <Image
                    src="/assets/hero/shape-1.svg"
                    alt="Decorative shape 1"
                    fill
                    sizes="38px"
                  />
                </div>
              }
              direction="left"
              duration={6}
            />
          </div>

          {/* Shape 2 */}
          <div
            className="absolute top-[140px] left-[50vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <RotatingShape
              content={
                <div className="relative w-[34px] h-[34px]">
                  <Image
                    src="/assets/hero/shape-2.svg"
                    alt="Decorative shape 2"
                    fill
                    sizes="34px"
                  />
                </div>
              }
              direction="right"
              duration={5}
            />
          </div>

          {/* Shape 3 */}
          <div
            className="absolute top-[380px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  alt="Decorative shape 3"
                  width={36}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
