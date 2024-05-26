import React from "react";
import { ReactComponent as Group } from "../../../assets/logo/Group 24.svg";
import { ReactComponent as Vector } from "../../../assets/logo/Vector.svg";
import patten from "../../../assets/logo/pattern (1).png";
import futureImg from "../../../assets/Images/Feature image.png";
const AboutUs = () => {
  return (
    <div className="bg-[#061019] pb-[98px]">
      <section className="lg:flex justify-between">
        <div>
          <h1 className="text-[22px] leading-7 font-semibold flex items-center gap-2  text-[#EBF1FF] pt-[120px] ml-20 lg:ml-[180px]">
            <span>
              <Group />
            </span>{" "}
            Happy Clients{" "}
            <span>
              <Vector />
            </span>
          </h1>
          <h2 className="text-[46px] leading-[50px] font-semibold text-white robotoVariant mt-6 ml-7 lg:ml-[180px]">
            We are a small team <br /> but effective
          </h2>
        </div>
        <img
          src={patten}
          alt="Show Now late"
          className="hidden lg:block w-[258px]"
        />
      </section>

      <section className="mt-5 lg:ml-[180px] lg:flex ">
        <img src={futureImg} alt="Future Images" />
        <div className="lg:w-[600px] lg:ml-16 mt-10 lg:mt-0">
          <p className="text-[#EBF1FF] text-xl leading-[26px] tracking-wide font-normal px-3 lg:px-0 mb-10 ">
            We are Seative Digital. Strong visual culture. Unique processes.
            Pure fails. Mostly on Mondays. Design that tells a story. Risk over
            comfort. Ever-changing approaches. Different backgrounds converging
            as one. Unconventional solutions.
          </p>
          <p className="text-[#EBF1FF] text-xl leading-[26px] tracking-wide font-normal px-3 lg:px-0">
            Strong visual culture. Unique processes. Pure fails. Mostly on
            Mondays. Design that tells a story. Risk over comfort. Ever-changing
            approaches. Different backgrounds converging as one. Unconventional
            solutions.{" "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 lg:w-[560px] mt-[69px] ml-24 lg:ml-0">
            <div>
              <h3 className="font-semibold robotoVariant text-[50px] leading-[65px] text-white ">
                3+
              </h3>
              <p className="text-[22px] font-semibold leading-7 text-[#97B1CB] robotoVariant">
                Years experience
              </p>
            </div>
            <div>
              <h3 className="font-semibold robotoVariant text-[50px] leading-[65px] text-white ">
                78+
              </h3>
              <p className="text-[22px] font-semibold leading-7 text-[#97B1CB] robotoVariant">
                Happy Client
              </p>
            </div>
            <div className="lg:mt-[50px]">
              <h3 className="font-semibold robotoVariant text-[50px] leading-[65px] text-white ">
                96%
              </h3>
              <p className="text-[22px] font-semibold leading-7 text-[#97B1CB] robotoVariant">
                Positive Review
              </p>
            </div>
            <div className="lg:mt-[50px]">
              <h3 className="font-semibold robotoVariant text-[50px] leading-[65px] text-white ">
                4+
              </h3>
              <p className="text-[22px] font-semibold leading-7 text-[#97B1CB] robotoVariant">
                Awards winning
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
