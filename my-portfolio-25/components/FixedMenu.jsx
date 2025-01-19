import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMaPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components

import Nav from "./Nav";
import Socials from "./Socials";

const [shoMenuButton, setShowMenuButton] = useState(false);
const [showMenu, setShowMenu] = useState(false);
const [isMounted, setIsMounted] = useState(false); //ensure comonent is mounted

const isMobile = useMediaQuery({
  query: "(max-width: 640px)",
});
// check if the component is mounted to prevent SSR missmatches
useEffect(() => {
  setIsMounted(true);
}, []);

useEffect(() => {
  if (isMounted) {
    const handleScroll = () => {
      setShowMenuButton(window.scrollY > 150); // show buton after scrolling 150px
    };
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    //always show button on mobile
    else {
      setShowMenuButton(true);
    }
  }
}, [isMobile, isMounted]);
// prevent rendering until mounted
if (!isMounted) return null;

const FixedMenu = () => {
  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent  ">
      {/*MENU*/}
      <div>Menu</div>
      {/*MENU_Button*/}
      {/* Render button without animations on mobile */}
      {isMobile ? (
        <div>
          <button>
            <CgMenuGridR></CgMenuGridR>
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {shoMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            ></motion.div>
          )}
        </AnimatePresence>
      )}{" "}
    </div>
  );
};

export default FixedMenu;
