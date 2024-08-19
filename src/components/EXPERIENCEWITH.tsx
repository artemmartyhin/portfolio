import { FunctionComponent } from "react";

export type EXPERIENCEWITHType = {
  className?: string;
};

const EXPERIENCEWITH: FunctionComponent<EXPERIENCEWITHType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-0 text-left text-xl text-secondary-text font-poppins ${className}`}
    >
      <div className="relative tracking-[0.12em] font-semibold shrink-0 mq450:text-base">
        EXPERIENCE WITH
      </div>
    </div>
  );
};

export default EXPERIENCEWITH;
