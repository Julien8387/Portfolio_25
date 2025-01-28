"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div data-scroll-container>
      <Hero />

      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <FixedMenu />
      {/*Tempory div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};
export default Home;
