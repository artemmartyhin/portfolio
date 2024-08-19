import { FunctionComponent } from "react";

export type LogosType = {
  className?: string;
};

const Logos: FunctionComponent<LogosType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center ${className}`}
    >
      <img
        className="h-[42px] w-[42px] relative min-h-[42px]"
        alt=""
        src="/javascript.svg"
      />
      <img
        className="h-[42px] w-[42px] relative min-h-[42px]"
        loading="lazy"
        alt=""
        src="/nodejs.svg"
      />
      <img
        className="h-[42px] w-[37px] relative min-h-[42px]"
        loading="lazy"
        alt=""
        src="/html.svg"
      />
      <img
        className="h-[42px] w-[37px] relative min-h-[42px]"
        loading="lazy"
        alt=""
        src="/css.svg"
      />
      <img
        className="h-[42px] w-[47px] relative min-h-[42px]"
        loading="lazy"
        alt=""
        src="/reactjs.svg"
      />
    </div>
  );
};

export default Logos;
