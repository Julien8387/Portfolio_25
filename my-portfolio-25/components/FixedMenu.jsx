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
