import React from "react";
import Image from "next/image";

const services = [
  {
    // icon: "assets/services/icon-1.svg",
    title: "Front",
    description: "",
  },
  {
    // icon: "assets/services/icon-2.svg",
    title: "Back",
    description: "",
  },
  {
    // icon: "assets/services/icon-3.svg",
    title: "Bases de donées",
    description:
      "Création d'une BDD sur la powerplatform et de sa schématisation",
  },
  {
    // icon: "assets/services/icon-4.svg",
    title: "Cybersécurité",
    description: "Formation Google Career Certificates France en cours",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((services, index) => {
            return (
              <li
                key={index}
                className="bg-[#85A593FF] shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                {/* <Image
                  src={services.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-4"
                /> */}
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {services.title}
                </h3>
                <p className="text-[15px]">{services.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
