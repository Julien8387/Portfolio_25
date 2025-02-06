"use client";
import React from "react";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaAngular,
  FaGoogle,
} from "react-icons/fa";
import { Type } from "lucide-react";

const journey = [
  //experiences
  {
    type: "experience",
    company: "***titre***",

    position: "***poste***",
    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "experience",
    company: "***titre***",

    position: "***poste***",
    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "experience",
    company: "***titre***",

    position: "***poste***",
    duration: "***Date***",
    description: "***Description***",
  },
  {
    type: "experience",
    company: "***titre***",

    position: "***poste***",
    duration: "***Date***",
    description: "***description",
  },
  //Formations
  {
    type: "education",
    institution: "***titre***",
    position: "Web Developer",
    qualification: "***Date***",
    description: "Lerning by doing",
  },
  {
    type: "experience",
    institution: "***titre***",
    qualification: "Jul 2021 - Present",

    duration: "***Date",
    description: "***description***",
  },
  {
    type: "experience",
    institution: "***titre***",
    qualification: "Jul 2021 - Present",

    duration: "***Date***",
    description: "***description***",
  },
  //Compétences
  {
    type: "skill",
    name: "React",
    icon: <FaGoogle />,
    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,

    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "skill",
    name: "Angular",
    icon: <FaAngular />,
    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "skill",
    name: "Java",
    icon: <FaJava />,
    duration: "***Date***",
    description: "***description***",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    duration: "***Date***",
    description: "***description***",
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
          <TabsTrigger value="experience">Expériences</TabsTrigger>
          <TabsTrigger value="education">Formations</TabsTrigger>
          <TabsTrigger value="skills">Compétences</TabsTrigger>
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
