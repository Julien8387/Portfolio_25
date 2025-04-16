import React from "react";
import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 9,
    endCountText: "",
    text: "Mois de formation",
  },
  {
    endCountNum: 8,
    endCountText: "",
    text: "Projets collectifs",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Positif",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => (
        <StatsItem
          endCountNum={item.endCountNum}
          endCountText={item.endCountText}
          text={item.text}
          key={index}
        />
      ))}
    </section>
  );
};

export default Stats;
