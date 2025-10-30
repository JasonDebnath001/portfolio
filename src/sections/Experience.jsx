import React from "react";
import Title from "../components/Title";
import { expCards } from "../constants";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
      </div>
      <div className="mt-32 relative">
        <div className="relative z-50 xl:space-y-32 space-y-10 xl:px-20 px-5">
          {expCards.map((card) => (
            <div
              key={card.title}
              className="card-border rounded-xl bg-black-100 p-8 md:p-12 flex flex-col gap-8 shadow-lg transition-all duration-300 w-full max-w-5xl mx-auto"
            >
              <div className="expText flex flex-col gap-5 relative z-20">
                <h1 className="font-semibold text-2xl md:text-3xl text-white">{card.title}</h1>
                <p className="my-2 text-white-50 text-base md:text-lg">📅 {card.date}</p>
                <p className="text-[#839cb5] italic text-base md:text-lg">Responsibilities</p>
                <ul className="list-disc ms-5 mt-3 flex flex-col gap-3 text-white-50">
                  {card.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-base md:text-lg">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
