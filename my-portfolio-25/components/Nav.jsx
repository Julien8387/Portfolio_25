"use client";
import React from "react";
import { Link as ScollLink } from "react-scroll";

const Links = [
  { name: "home" },
  { name: "about" },
  { name: "journey" },
  { name: "work" },
  { name: "contact" },
];
const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {Links.map((link, index) => {
          return (
            <ScollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              className={linkStyles}
            >
              {link.name}
            </ScollLink>
          );
        })}
      </ul>
    </nav>
  );
};
const DownloadButton = ({ fileName }) => {
  return (
    <a
      href={`/${fileName}`}
      download
      className="
        flex items-center gap-2 
        bg-[#85A593] 
        text-white 
        px-4 py-2.5 
        rounded-md 
        font-medium
        shadow-sm
        hover:bg-[#748e80]
        active:transform active:scale-95
        transition-all duration-300
      "
    >
      <FiDownload className="w-5 h-5" />
      <span>Télécharger</span>
    </a>
  );
};
export default Nav;
