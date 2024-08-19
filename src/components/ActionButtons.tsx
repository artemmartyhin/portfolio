import { FunctionComponent } from "react";

export type ActionButtonsType = {
  className?: string;
};

const ActionButtons: FunctionComponent<ActionButtonsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[18px] max-w-full mq750:flex-wrap ${className}`}
    >
      <button className="cursor-pointer [border:none] py-4 pl-[30px] pr-[29px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl [background:linear-gradient(#fff,_#fff),_#fff] border-primary-color border-[1px] border-solid box-border" />
        <div className="relative text-2xl-4 font-semibold font-poppins text-background-color text-left [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] z-[1]">
          Get In Touch
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-4 px-7 bg-[transparent] flex flex-row items-start justify-start relative">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl border-primary-color border-[2px] border-solid box-border" />
        <div className="relative text-2xl-4 font-semibold font-poppins text-primary-color text-left [text-shadow:0.3px_0_0_#ff8660,_0_0.3px_0_#ff8660,_-0.3px_0_0_#ff8660,_0_-0.3px_0_#ff8660] z-[1] mq450:text-mid">
          Download CV
        </div>
      </button>
    </div>
  );
};

export default ActionButtons;
