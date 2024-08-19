import { FunctionComponent } from "react";

export type AvatarType = {
  className?: string;
};

const Avatar: FunctionComponent<AvatarType> = ({ className = "" }) => {
  return (
      <div className={`h-[223px] w-[251px] relative ${className}`}>
        <div className="absolute h-[95.52%] w-[84.86%] top-[4.04%] right-[11.55%] bottom-[0.45%] left-[3.59%] rounded-[50%] [background:linear-gradient(137.59deg,_#ff8660,_#8000ff_98.96%)]" />
        <img
          className="absolute h-[95.52%] w-[84.86%] top-[4.04%] right-[11.55%] bottom-[0.45%] left-[3.59%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/avatar@2x.png"
        />
      </div>
  );
};

export default Avatar;
