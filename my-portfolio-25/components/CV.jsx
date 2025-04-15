import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadButton = ({}) => {
  return (
    <a
      href="/CV_04_25.pdf"
      download
      className="
          flex items-center gap-2 
          bg-[#4E614FFF] 
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
      <span>Mon CV</span>
    </a>
  );
};
const CV = () => {
  return (
    <div>
      <DownloadButton />
    </div>
  );
};

export default CV;
