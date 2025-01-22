"use client";
import React, { useState, useEffect } from "react"; // Importation des hooks ici
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMaPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // assure que le composant est monté

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  // Vérifie si le composant est monté pour éviter des erreurs avec le rendu côté serveur
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150); // Afficher le bouton après un défilement de 150px
      };
      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
      // Toujours afficher le bouton sur mobile
      else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  // Empêcher le rendu tant que le composant n'est pas monté
  if (!isMounted) return null;

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      {/* MENU */}
      <AnimatePresence>
        { showMenu && showMenuButton && (
                  <motion.div className="relative w-full max-w-md md:max-w-none h-[400px] bottom-28 xl:bottom-[21.2rm] px-4 pointer-events-auto ">
                       Menu 
                  </motion.div>
        )}
      </AnimatePresence>

      {/* MENU Button */}
      {/* Render button without animations on mobile */}
      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex justify-center items-center select-none"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex justify-center items-center select-none pointer-events-none "
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

// "use client"

// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { CgMenuGridR } from "react-icons/cg";
// import { useMediaQuery } from "react-responsive";
// import { FiMaPin, FiPhoneCall, FiMail } from "react-icons/fi";

// // components

// import Nav from "./Nav";
// import Socials from "./Socials";

// const [shoMenuButton, setShowMenuButton] = useState(false);
// const [showMenu, setShowMenu] = useState(false);
// const [isMounted, setIsMounted] = useState(false); //ensure comonent is mounted

// const isMobile = useMediaQuery({
//   query: "(max-width: 640px)",
// });
// // check if the component is mounted to prevent SSR missmatches
// useEffect(() => {
//   setIsMounted(true);
// }, []);

// useEffect(() => {
//   if (isMounted) {
//     const handleScroll = () => {
//       setShowMenuButton(window.scrollY > 150); // show buton after scrolling 150px
//     };
//     if (!isMobile) {
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//     //always show button on mobile
//     else {
//       setShowMenuButton(true);
//     }
//   }
// }, [isMobile, isMounted]);
// // prevent rendering until mounted
// if (!isMounted) return null;

// const FixedMenu = () => {
//   return (
//     <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent  ">
//       {/*MENU*/}
//       <div>Menu</div>
//       {/*MENU_Button*/}
//       {/* Render button without animations on mobile */}
//       {isMobile ? (
//         <div>
//           <button>
//             <CgMenuGridR></CgMenuGridR>
//           </button>
//         </div>
//       ) : (
//         <AnimatePresence>
//           {shoMenuButton && (
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               transition={{
//                 type:"spring",
//                 stiffness: 400,
//                 damping: 40,

//               }}
//               className="fixed z-50 bottom-16 pointer-events-auto "
//             >
//                 <button className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center select-none  "> <CgMenuGridR className="text-4xl text-white  "></CgMenuGridR></button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       )}{" "}
//     </div>
//   );
// };

//_____________________TEST______________________
// const FixedMenu = () => {
//     const [shoMenuButton, setShowMenuButton] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//       setIsMounted(true); // Assure-toi que c'est exécuté côté client
//     }, []);

//     if (!isMounted) return null; // Empêche le rendu côté serveur

//     return (
//       <div>
//         <button onClick={() => setShowMenu(!showMenu)}>
//           Toggle Menu
//         </button>
//         {/* ton JSX ici */}
//       </div>
//     );
//   };

export default FixedMenu;
