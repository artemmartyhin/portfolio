import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import Title from "./Title";
import ActionButtons from "./ActionButtons";
import EXPERIENCEWITH from "./EXPERIENCEWITH";
import Logos from "./Logos";
import StProject from "./StProject";
import NdProject from "./NdProject";
import ExperienceSection from "./ExperienceSection";

export type ProfileContainerType = {
  className?: string;
};

const ProfileContainer: FunctionComponent<ProfileContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[810px] flex flex-col items-end justify-start gap-[88px] max-w-full text-left text-16xl text-primary-color font-poppins mq450:gap-[22px] mq1050:gap-11 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[69px] pr-[62px] box-border max-w-full text-center text-36xl mq1050:pl-[34px] mq1050:pr-[31px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 mq750:gap-5">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <Avatar />
            </div>
            <Title />
            <div className="self-stretch flex flex-row items-start justify-start text-lg text-secondary-text">
              <div className="w-[679px] relative tracking-[0.02em] font-light inline-block">
                <p className="m-0">{`I am a seasoned full-stack software engineer with over `}</p>
                <p className="m-0">{`8 years of professional experience, specializing in backend development. `}</p>
                <p className="m-0">{`My expertise lies in crafting robust and scalable SaaS-based `}</p>
                <p className="m-0">architectures on the Amazon AWS platform.</p>
              </div>
            </div>
          </div>
          <div className="w-[641px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <ActionButtons />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[11px] pl-5 pr-[21px] box-border max-w-full text-xl text-secondary-text">
        <div className="w-[446.8px] flex flex-col items-start justify-start gap-12 max-w-full mq450:gap-6">
          <div className="w-[432px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <EXPERIENCEWITH />
          </div>
          <Logos />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[27px] max-w-full text-secondary-text">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7">
          <div className="flex flex-row items-start justify-start">
            <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-extrabold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ff8660,_#d5491d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[29px]">
              Projects
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-3xs">
          <StProject />
          <NdProject />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[57px] max-w-full mq450:gap-7">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
          <div className="flex flex-row items-start justify-start">
            <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-extrabold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#5badff,_#1372d1)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[29px]">
              Experience
            </h1>
          </div>
        </div>
        <ExperienceSection />
      </div>
    </section>
  );
};

export default ProfileContainer;
