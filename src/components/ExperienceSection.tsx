import { FunctionComponent } from "react";

export type ExperienceSectionType = {
  className?: string;
};

const ExperienceSection: FunctionComponent<ExperienceSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-8 text-center text-primary-color font-poppins ${className}`}
    >
      {/* IdeaSoft Experience */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full">
          <img
            className="h-10 w-10 shrink-0"
            loading="lazy"
            alt="IdeaSoft"
            src="/ideasoft.png"
          />
          <div className="flex-1 flex flex-col items-start">
            <b className="text-lg font-semibold text-left">
              Blockchain Developer at IdeaSoft
            </b>
            <div className="text-[15px] text-light-grey">
              Apr 2023 - Present
            </div>
          </div>
        </div>
        <div className="text-left text-[15px] text-light-grey leading-tight">
          <ul className="list-disc pl-5">
            <li>Solidity smart contracts design, development, and deployment on various blockchains.</li>
            <li>Subgraphs design and development.</li>
            <li>Development of back-end applications and services on top of Bitcoin and Ordinals protocol.</li>
            <li>DeFi protocols engineering and maintenance.</li>
            <li>TON smart contracts development and integration.</li>
          </ul>
        </div>
      </div>

      {/* Ambisafe Experience */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full">
          <img
            className="h-9 w-9"
            loading="lazy"
            alt="Ambisafe"
            src="/ambisafe.png"
          />
          <div className="flex-1 flex flex-col items-start">
            <b className="text-lg font-semibold text-left">
              Blockchain Developer at Ambisafe
            </b>
            <div className="text-[15px] text-light-grey">
              May 2022 - Feb 2023
            </div>
          </div>
        </div>
        <div className="text-left text-[15px] text-light-grey leading-tight">
          <ul className="list-disc pl-5">
            <li>Solidity smart contracts development, testing, and security audit.</li>
            <li>Deployment on Ethereum and Celo.</li>
            <li>Researching and implementation of Celo tools.</li>
            <li>Development of back-end applications and services.</li>
            <li>Integration of oracles.</li>
            <li>Writing client documentation and security audit reports.</li>
            <li>Team leading.</li>
          </ul>
        </div>
      </div>

      {/* Blaize Experience */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full">
          <img
            className="h-8 w-8"
            loading="lazy"
            alt="Blaize"
            src="/blaize.png"
          />
          <div className="flex-1 flex flex-col items-start">
            <b className="text-lg font-semibold text-left">
              Blockchain Developer at Blaize
            </b>
            <div className="text-[15px] text-light-grey">
              Mar 2021 - May 2022
            </div>
          </div>
        </div>
        <div className="text-left text-[15px] text-light-grey leading-tight">
          <ul className="list-disc pl-5">
            <li>Solidity smart contracts development, testing, and security audit.</li>
            <li>Deployment on Ethereum, BNB Chain, and Polygon.</li>
            <li>Integration of 3rd party DeFi platforms and Oracles.</li>
            <li>Writing client documentation and security audit reports.</li>
            <li>DeFi research.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
