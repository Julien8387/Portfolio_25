import React from "react";
import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Ans d'expérience",
  },
  {
    endCountNum: 100,
    endCountText: "+",
    text: "Sites créés",
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Clients satisfaits",
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
