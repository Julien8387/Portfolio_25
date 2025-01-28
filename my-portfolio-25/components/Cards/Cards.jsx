"use client";
import React from "react";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaAngular,
} from "react-icons/fa";
import { Type } from "lucide-react";

const journey = [
  //experience
  {
    type: "experience",
    company: "Odea Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Odea Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Odea Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Odea Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  //Education
  {
    type: "education",
    institution: "Odea Labs",
    logoUrl: "/assets/journey/education/logo-1.svg",
    position: "Web Developer",
    qualification: "Jul 2021 - Present",
    description: "Lerning by doing",
  },
  {
    type: "experience",
    institution: "Odea Labs",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Jul 2021 - Present",

    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    institution: "Odea Labs",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Jul 2021 - Present",

    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  //Skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,

    duration: "Learned in 2023",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility.",
  },
  {
    type: "skill",
    name: "Angular",
    icon: <FaAngular />,
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "skill",
    name: "Java",
    icon: <FaJava />,
    duration: "Jul 2021 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    duration: "Learned in 2023",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => (
                  <Card key={index} {...card} />
                  //{...card} permet de passer toutes les propriétés de l'objet card comme props individuelles au composant Card.
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => (
                  <Card key={index} {...card} />
                  //{...card} permet de passer toutes les propriétés de l'objet card comme props individuelles au composant Card.
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => (
                  <Card key={index} {...card} />
                  //{...card} permet de passer toutes les propriétés de l'objet card comme props individuelles au composant Card.
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
