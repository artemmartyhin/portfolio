import { FunctionComponent } from "react";
import Header from "../components/Header";
import ProfileContainer from "../components/ProfileContainer";
import Footer from "../components/Footer";

const WebDesign: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-color overflow-hidden flex flex-col items-start justify-start pt-0 px-px pb-[0.2px] box-border gap-[97.8px] leading-[normal] tracking-[normal] mq750:gap-[49px] mq450:gap-6">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[9.2px] box-border max-w-full">
        <ProfileContainer />
      </main>
      <Footer />
    </div>
  );
};

export default WebDesign;
