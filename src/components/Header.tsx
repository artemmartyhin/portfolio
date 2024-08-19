import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-px px-5 pb-[1.2px] box-border sticky gap-64 top-[0] z-[99] max-w-full mq450:gap-16 mq1050:gap-32 ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4.4px_16px_-2.18px_rgba(0,_0,_0,_0.1)] bg-gray-200" />
      <img
        className="h-20 w-20 relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <nav className="m-0 w-[473.7px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full mq750:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-5 z-[1] text-center text-mini text-primary-color font-plus-jakarta-sans">
          <a className="[text-decoration:none] w-12 relative tracking-[0.02em] font-semibold text-[inherit] flex items-center justify-center shrink-0 min-w-[48px]">
            Home
          </a>
          <a className="[text-decoration:none] relative tracking-[0.02em] font-semibold text-[inherit] inline-block min-w-[64px]">
            Projects
          </a>
          <a className="[text-decoration:none] relative tracking-[0.02em] font-semibold text-[inherit] inline-block min-w-[85px]">
            Experience
          </a>
          <a className="[text-decoration:none] w-[64.6px] relative tracking-[0.02em] font-semibold text-[inherit] flex items-center justify-center shrink-0 min-w-[64.6px]">
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
