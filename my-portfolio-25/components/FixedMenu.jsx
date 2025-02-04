"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="fixed bottom-28 w-full z-50 flex justify-center">
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[90%] md:max-w-[1170px] mx-auto"
            >
              <div className="bg-white shadow-custom rounded-lg p-6 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Navigation */}
                  <Nav
                    containerStyles="flex-1"
                    listStyles="flex flex-col gap-y-6"
                    linkStyles="hover:text-accent transition-all duration-300 cursor-pointer capitalize"
                    spy={true}
                  />

                  {/* Contact Info */}
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-3">
                      <FiMapPin className="text-accent" />
                      <span>Nantes, France</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <FiPhoneCall className="text-accent" />
                      <span>+33 6 38 29 19 28 </span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <FiMail className="text-accent" />
                      <span>julien.alt.dev@gmail.com</span>
                    </div>
                  </div>

                  {/* Socials */}
                  <Socials
                    containerStyles="flex justify-center gap-x-4"
                    iconStyles="text-2xl hover:text-accent transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-[60] bottom-16 left-1/2 -translate-x-1/2 bg-accent hover:bg-accent-hover w-[54px] h-[54px] rounded-lg flex justify-center items-center shadow-custom transition-colors duration-300"
      >
        <CgMenuGridR className="text-4xl text-white" />
      </motion.button>
    </>
  );
};

export default FixedMenu;
