import React from "react";
import Link from "next/link";
import  {FaLinkedinIn, FaGithub,}  from "react-icons/fa";

const socials = [
  
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/julien-bellazini/" },
  { icon: <FaGithub />, path: "https://github.com/Julien8387" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} 
          target="_blank"  
          
          className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
