import React from "react";
import Logo from "./Logo";
const footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <div className="text-white/70 font-light">2025</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
