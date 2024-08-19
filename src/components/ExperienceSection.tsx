import { FunctionComponent } from "react";

export type ExperienceSectionType = {
  className?: string;
};

const ExperienceSection: FunctionComponent<ExperienceSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[49.5px] max-w-full text-center text-2xl-7 text-primary-color font-poppins mq450:gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10.7px] max-w-full">
          <img
            className="h-8 w-[34.1px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/googlelogo.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[393px] max-w-full mq750:min-w-full">
            <b className="w-[388.8px] relative flex items-center justify-center max-w-full mq450:text-mid">
              Lead Software Engineer at Google
            </b>
          </div>
          <div className="w-[150.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini-5 text-light-grey">
            <div className="self-stretch relative leading-[22px]">
              Nov 2019 - Present
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border max-w-full text-left text-mini-5 text-light-grey">
          <div className="h-[60px] flex-1 relative leading-[150%] flex items-center max-w-full">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15.7px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[27.1px] h-[30.9px] relative"
              loading="lazy"
              alt=""
              src="/applelogo.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[387px] max-w-full mq750:min-w-full">
            <b className="w-[394.1px] relative flex items-center justify-center max-w-full mq450:text-mid">
              Junior Software Engineer at Apple
            </b>
          </div>
          <div className="w-[150.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini-5 text-light-grey">
            <div className="self-stretch relative leading-[22px]">
              Jan 2016 - Dec 2017
            </div>
          </div>
        </div>
        <div className="self-stretch h-[60px] relative text-mini-5 leading-[150%] text-light-grey text-left flex items-center shrink-0">
          During my tenure at Apple, I held the role of Software Architect,
          where I played a key role in shaping the architecture of
          mission-critical software projects. Responsible for designing scalable
          and efficient systems, I provided technical leadership to a
          cross-functional team.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[10.4px] max-w-full">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <img
                className="w-[32.3px] h-[22px] relative"
                loading="lazy"
                alt=""
                src="/metalogo.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[390px] max-w-full mq750:min-w-full">
              <b className="w-[305.4px] relative flex items-center justify-center mq450:text-mid">
                Software Engineer at Meta
              </b>
            </div>
            <div className="w-[150.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border text-mini-5 text-light-grey">
              <div className="self-stretch relative leading-[22px]">
                Jan 2017 - Oct 2019
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[60px] relative text-mini-5 leading-[150%] text-secondary-text whitespace-pre-wrap text-left flex items-center shrink-0">
          At Meta, I served as a Software Engineer, focusing on the design and
          implementation of backend systems for the social media giant's dynamic
          platform. Working on projects that involved large-scale data
          processing and user engagement features, I leveraged my expertise to
          ensure seamless functionality and scalability.
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
