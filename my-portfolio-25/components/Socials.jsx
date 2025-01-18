import React from "react";
import Link from "next/link";
import  {FaLinkedinIn, FaGithub,}  from "react-icons/fa";

const socials = [
  
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaGithub />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
