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
              to="link.name"
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

export default Nav;
