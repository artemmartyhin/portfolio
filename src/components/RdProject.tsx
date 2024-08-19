import { FunctionComponent } from "react";

export type RdProjectType = {
  className?: string;
};

const RdProject: FunctionComponent<RdProjectType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border relative gap-3 min-w-[253px] max-w-full text-left text-3xs text-secondary-text font-inter ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-card-color" />
      <img
        className="self-stretch h-[235px] relative rounded-t-lg rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/projectthumbnail2@3x.jpg"
      />
      <div className="flex flex-row items-start justify-start py-0 px-[23px]">
        <div className="flex flex-col items-start justify-start gap-px z-[1]">
          <div className="relative leading-[19px] uppercase font-extrabold inline-block min-w-[109.8px]">
            Token exchange and ICO
          </div>
          <div className="relative text-lgi leading-[20px] uppercase font-extrabold text-primary-color">
            Orderbook
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdProject;
