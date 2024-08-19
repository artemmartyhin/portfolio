import { FunctionComponent } from "react";

export type ExperienceSectionType = {
  className?: string;
};

const ExperienceSection: FunctionComponent<ExperienceSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[80.5px] max-w-full text-center text-2xl-7 text-primary-color font-poppins mq450:gap-[25px] ${className}`}
    >
      {/* IdeaSoft Experience */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10.7px] max-w-full">
          <img
            className="h-39 w-[39.1px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/ideasoft.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[393px] max-w-full mq750:min-w-full">
            <b className="w-[388.8px] relative flex items-center justify-center max-w-full mq450:text-mid">
              Blockchain Developer at IdeaSoft
            </b>
          </div>
          <div className="w-[150.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini-5 text-light-grey">
            <div className="self-stretch relative leading-[22px]">
              Apr 2023 - Present
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border max-w-full text-left text-mini-5 text-light-grey">
          <div className="h-[60px] flex-1 relative leading-[150%] flex items-center max-w-full pt-8">
            <ul className="list-disc">
              <li>
                Solidity smart contracts design, development, and deployment on
                Ethereum, Arbitrum, zkSync, Blast, CoreDAO, Rootstock, Hedera.
              </li>
              <li>Subgraphs design and development.</li>
              <li>
                Development of back-end applications and services on top of
                Bitcoin and Ordinals protocol.
              </li>
              <li>
                DeFi protocols engineering and maintenance. Integration of
                cross-chain solutions using Chainlink CCIP and LayzerZero.
              </li>
              <li>TON smart contracts development and integration.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ambisafe Experience */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15.7px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[35.1px] h-[35.1px] relative"
              loading="lazy"
              alt=""
              src="/ambisafe.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[387px] max-w-full mq750:min-w-full">
            <b className="w-[394.1px] relative flex items-center justify-center max-w-full mq450:text-mid">
              Blockchain Developer at Ambisafe
            </b>
          </div>
          <div className="w-[150.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini-5 text-light-grey">
            <div className="self-stretch relative leading-[22px]">
              May 2022 - Feb 2023
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border max-w-full text-left text-mini-5 text-light-grey">
          <div className="h-[60px] flex-1 relative leading-[150%] flex items-center max-w-full pt-8">
            <ul className="list-disc">
              <li>
                Solidity smart contracts development, testing, and security
                audit.
              </li>
              <li>Deployment on Ethereum and Celo.</li>
              <li>
                Researching and implementation of Celo Chain & Celo Protocol
                tools.
              </li>
              <li>Development of back-end applications and services.</li>
              <li>Integration of oracles.</li>
              <li>
                Writing client documentation and security audit reports.
              </li>
              <li>Team leading.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blaize Experience */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10.4px] max-w-full">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
            <img
              className="w-[32.3px] h-[32px] relative"
              loading="lazy"
              alt=""
              src="/blaize.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[390px] max-w-full mq750:min-w-full">
            <b className="w-[380.4px] relative flex items-center justify-center mq450:text-mid">
              Blockchain Developer at Blaize
            </b>
          </div>
          <div className="w-[150.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini-5 text-light-grey">
            <div className="self-stretch relative leading-[22px]">
              Mar 2021 - May 2022
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border max-w-full text-left text-mini-5 text-light-grey">
          <div className="h-[60px] flex-1 relative leading-[150%] flex items-center max-w-full pt-3">
            <ul className="list-disc">
              <li>
                Solidity smart contracts development, testing, and security
                audit.
              </li>
              <li>Deployment on Ethereum, BNB Chain, and Polygon.</li>
              <li>
                Integration of 3rd party DeFi platforms and Oracles.
              </li>
              <li>
                Writing client documentation and security audit reports.
              </li>
              <li>DeFi research.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
