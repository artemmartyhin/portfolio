import { FunctionComponent } from "react";

export type ActionButtonsType = {
  className?: string;
};

const ActionButtons: FunctionComponent<ActionButtonsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-[18px] w-full ${className}`}
    >
      <a
        href="https://www.linkedin.com/in/temmartik/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer [border:none] py-4 px-7 bg-[transparent] flex items-center justify-center [text-decoration:none]"
      >
        <button className="cursor-pointer [border:none] py-4 px-[30px] bg-[transparent] flex items-center justify-center relative whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="absolute inset-0 rounded-31xl border-primary-color border-[1px] box-border bg-white" />
          <div className="relative text-2xl-4 font-semibold font-poppins text-background-color z-[1]">
            Get In Touch
          </div>
        </button>
      </a>
      <a
        href="/cvl.pdf"
        download="Artem_Martiukhin_CV.pdf"
        className="cursor-pointer [border:none] py-4 px-7 bg-[transparent] flex items-center justify-center [text-decoration:none]"
      >
        <button className="cursor-pointer [border:none] py-4 px-[30px] bg-[transparent] flex items-center justify-center relative whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="absolute inset-0 rounded-31xl border-primary-color border-[2px] box-border border-solid" />
          <div className="relative text-2xl-4 font-semibold font-poppins text-primary-color z-[1] mq450:text-mid">
            Download CV
          </div>
        </button>
      </a>
    </div>
  );
};

export default ActionButtons;
