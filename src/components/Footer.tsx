import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`ml-[-9px] self-stretch flex flex-col items-start justify-start pt-[82.6px] px-[324px] pb-[101.6px] box-border relative gap-[34.4px] max-w-[101%] shrink-0 text-left text-4xl-5 text-primary-color font-poppins lg:pl-[162px] lg:pr-[162px] lg:box-border mq750:gap-[17px] mq750:pl-[81px] mq750:pr-[81px] mq750:box-border mq450:pt-[54px] mq450:px-5 mq450:pb-[66px] mq450:box-border ${className}`}
    >
      <section id="contact"> </section>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100" />
      <b className="relative tracking-[0.02em] inline-block min-w-[102px] z-[1] mq450:text-lgi">
        Contact
      </b>
      <div className="flex flex-col items-start justify-start gap-[41.2px] max-w-full text-mini-1 text-secondary-text mq750:gap-[21px]">
        <div className="flex flex-col items-start justify-start gap-[22px]">
          <div className="relative tracking-[0.02em] font-light z-[1]">
            <p className="m-0">
              A proficient software developer with over 3 years of experience
              and integration of decentralized applications and blockchain
              solutions.
            </p>
            <p className="m-0">
              Highly skilled in building, testing and deploying smart contracts,
              performing security audits.
            </p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.5px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[16.5px] h-[16.5px] relative overflow-hidden shrink-0 object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/email-icon.svg"
              />
            </div>
            <div className="relative tracking-[0.02em] font-semibold whitespace-nowrap z-[1]">
              artemmartyhin@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[27px] z-[1]">
          <a
            href="https://www.linkedin.com/in/temmartik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[37px] w-[37px] relative min-h-[18px]"
              loading="lazy"
              alt="LinkedIn"
              src="/linkedin.svg"
            />
          </a>
          <a
            href="https://x.com/martiukhin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 pt-1.5 box-border w-[32px] h-[32px]">
              <img
                className="w-[28px] relative"
                loading="lazy"
                alt="X (Twitter)"
                src="/x.svg"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
