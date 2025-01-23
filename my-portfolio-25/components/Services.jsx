import React from "react";
import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-1.svg",
    title: "UI UX Design",
    description: "Designing compelling engaging user experences.",
  },
  {
    icon: "assets/services/icon-2.svg",
    title: "Web developpement",
    description: "Deveoping robust, scalable websites for all devices.",
  },
  {
    icon: "assets/services/icon-3.svg",
    title: "E-commerce Soutions",
    description: "Building secure, user friendly online stores to drive sales.",
  },
  {
    icon: "assets/services/icon-4.svg",
    title: "Care & Support",
    description: "Providing updates, security and suport for performance.",
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
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={services.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-4"
                />
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
