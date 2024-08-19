import { FunctionComponent } from "react";

export type LogosType = {
  className?: string;
};

const Logos: FunctionComponent<LogosType> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-8 ${className}`}>
      {/* Programming Languages */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img className="h-[45px] w-[45px]" alt="Solidity" src="/solidity.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="TypeScript" src="/typescript.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="JavaScript" src="/javascript.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="C" src="/c.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="R" src="/r.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Go" src="/go.svg" />
      </div>

      {/* Frameworks */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Node.js" src="/nodejs.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="NestJS" src="/nestjs.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="React" src="/react.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Hardhat" src="/hardhat.svg" />
        <img className="h-[40px] w-[40px]" loading="lazy" alt="CMake" src="/cmake.svg" />
        <img className="h-[48px] w-[48px]" loading="lazy" alt="Docker" src="/docker.svg" />
        <img className="h-[40px] w-[42px]" loading="lazy" alt="Git" src="/git.svg" />
      </div>

      {/* Blockchain Networks */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Ethereum" src="/ethereum.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Bitcoin" src="/bitcoin.svg" />
        <img className="h-[41px] w-[45px]" loading="lazy" alt="TON" src="/ton.svg" />
        <img className="h-[41px] w-[45px]" loading="lazy" alt="The Graph" src="/graph.svg" />
      </div>

      {/* Databases */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img className="h-[45px] w-[45px]" loading="lazy" alt="MongoDB" src="/mongo.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="PostgreSQL" src="/postgresql.svg" />
        <img className="h-[45px] w-[45px]" loading="lazy" alt="Redis" src="/redis.svg" />
      </div>
    </div>
  );
};

export default Logos;
