import { FunctionComponent } from "react";

export type LogosType = {
  className?: string;
};

const Logos: FunctionComponent<LogosType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 ${className}`}
    >
      {/* Programming Languages */}
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          className="h-[45px] w-[45px] relative"
          alt=""
          src="/solidity.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/typescript.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/javascript.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/c.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/r.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/go.svg"
        />
      </div>

      {/* Frameworks */}
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/nodejs.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/nestjs.svg"
        />

        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/react.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/hardhat.svg"
        />
        <img
          className="h-[40px] w-[40px] relative"
          loading="lazy"
          alt=""
          src="/cmake.svg"
        />
        <img
          className="h-[48px] w-[48px] relative"
          loading="lazy"
          alt=""
          src="/docker.svg"
        />

        <img
          className="h-[40px] w-[42px] relative"
          loading="lazy"
          alt=""
          src="/git.svg"
        />
      </div>

      {/* Blockchain Networks */}
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/ethereum.svg"
        />
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/bitcoin.svg"
        />
        <img
          className="h-[41px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/ton.svg"
        />
        <img
          className="h-[41px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/graph.svg"
        />
      </div>

      {/* Databases */}
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/mongo.svg"
        />

        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/postgresql.svg"
        />

        <img
          className="h-[45px] w-[45px] relative"
          loading="lazy"
          alt=""
          src="/redis.svg"
        />
      </div>
    </div>
  );
};

export default Logos;
