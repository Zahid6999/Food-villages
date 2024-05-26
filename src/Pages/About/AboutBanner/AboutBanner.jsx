import React from "react";
import { ReactComponent as LeftSide } from "../../../assets/AboutImages/Images/left side.svg";
import { ReactComponent as RightSide } from "../../../assets/AboutImages/Images/right side.svg";
import { ReactComponent as Star } from "../../../assets/logo/Vector (4).svg";
import { ReactComponent as WaterWave } from "../../../assets/logo/Water wave (1).svg";
import { ReactComponent as ArrowDown } from "../../../assets/logo/arrow_down.svg";

const AboutBanner = () => {
  return (
    <section className="bg-[#061019] relative h-[565px]">
      <div className="pt-[98px]">
        <h1 className="flex items-center gap-2 text-[22px] leading-[28.6px] tracking-[0.22px] justify-center text-[#97B1CB]">
          <span>
            <WaterWave />
          </span>
          About
          <span>
            <Star />
          </span>
        </h1>
        <h2 className="robotoVariant text text-[46px] font-semibold leading-[43.7px] text-white text-center pt-4 pb-6">
          We are a small team <br /> but Effective
        </h2>
        <p className="text-[18px] text-[#A1ADCB] leading-[23.4px] tracking-[0.18px text-center">
          You just tell us what you want & get a relax. We handle <br /> all UX,
          design, and development issues
        </p>
        <span className="flex justify-center pt-[52px]">
          <ArrowDown />
        </span>
      </div>

      <span className="absolute  hidden lg:block lg:top-[124px]  left-0">
        <LeftSide />
      </span>

      <span className="absolute top-12 hidden lg:block right-0">
        <RightSide />
      </span>
    </section>
  );
};

export default AboutBanner;
