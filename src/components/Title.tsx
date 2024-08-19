import { FunctionComponent } from "react";

export type TitleType = {
  className?: string;
};

const Title: FunctionComponent<TitleType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-1.5 text-center text-36xl text-primary-color font-poppins ${className}`}
    >
      <h1 className="m-0 relative text-inherit leading-[63.36px] font-extrabold font-[inherit] mq450:text-14xl mq450:leading-[38px] mq1050:text-25xl mq1050:leading-[51px]">
        <p className="m-0">I do code and</p>
        <p className="m-0">
          <span>{`make content `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(115.69deg,_#ff8660,_#9a34ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            about it!
          </span>
        </p>
      </h1>
    </div>
  );
};

export default Title;
