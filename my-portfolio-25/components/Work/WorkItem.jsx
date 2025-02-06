import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

const WorkItem = ({ href, category, img, title }) => {
  return (
    <Link href="/" className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#4E614FFF]">
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-cover group-hover:scale-105 transition-all duration-500"
          alt="alt"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[48px] h-[48px] items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};
export default WorkItem;
