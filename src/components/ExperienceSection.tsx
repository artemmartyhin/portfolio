import { FunctionComponent } from "react";

export type ExperienceSectionType = {
  className?: string;
};

const ExperienceSection: FunctionComponent<ExperienceSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 text-left text-primary-color font-poppins w-full ${className}`}
    >
      {experiences.map((experience) => (
        <div
          key={experience.company}
          className="group w-full max-w-4xl flex flex-col items-start p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 mx-auto"
        >
          <div className="flex flex-wrap items-center gap-2 w-full">
            <img
              className="h-8 w-8 rounded-full shadow-md transition-transform duration-300 transform group-hover:scale-105"
              loading="lazy"
              alt={experience.company}
              src={experience.logo}
            />
            <div className="flex-1 flex flex-col items-start">
              <b className="text-[20px] font-semibold text-white">
                {experience.title}
              </b>
              <div className="text-xs text-white text-[11px]">
                {experience.dates}
              </div>
            </div>
          </div>
          <div className="mt-2 text-gray-100 text-[17px] leading-snug">
            <ul className="list-disc pl-4 space-y-2 text-[14px]">
              {experience.responsibilities.map((item, index) => (
                <li key={index} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

// Data for experiences
const experiences = [
  {
    company: "IdeaSoft",
    logo: "/ideasoft.png",
    title: "Blockchain Developer at IdeaSoft",
    dates: "Apr 2023 - Present",
    responsibilities: [
      "Solidity smart contracts design, development, and deployment on various blockchains.",
      "Subgraphs design and development.",
      "Development of back-end applications and services on top of Bitcoin and Ordinals protocol.",
      "DeFi protocols engineering and maintenance.",
      "TON smart contracts development and integration.",
    ],
  },
  {
    company: "Ambisafe",
    logo: "/ambisafe.png",
    title: "Blockchain Developer at Ambisafe",
    dates: "May 2022 - Feb 2023",
    responsibilities: [
      "Solidity smart contracts development, testing, and security audit.",
      "Deployment on Ethereum and Celo.",
      "Researching and implementation of Celo tools.",
      "Development of back-end applications and services.",
      "Integration of oracles.",
      "Writing client documentation and security audit reports.",
      "Team leading.",
    ],
  },
  {
    company: "Blaize",
    logo: "/blaize.png",
    title: "Blockchain Developer at Blaize",
    dates: "Mar 2021 - May 2022",
    responsibilities: [
      "Solidity smart contracts development, testing, and security audit.",
      "Deployment on Ethereum, BNB Chain, and Polygon.",
      "Integration of 3rd party DeFi platforms and Oracles.",
      "Writing client documentation and security audit reports.",
      "DeFi research.",
    ],
  },
];

export default ExperienceSection;
