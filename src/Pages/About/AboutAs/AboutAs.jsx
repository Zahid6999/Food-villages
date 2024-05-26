import React from "react";
import { ReactComponent as Star } from "../../../assets/logo/Vector (4).svg";
import { ReactComponent as WaterWave } from "../../../assets/logo/Water wave (1).svg";
import { ReactComponent as Patten } from "../../../assets/logo/pattern (1).svg";
import { ReactComponent as Line } from "../../../assets/AboutImages/logo/line.svg";
import { ReactComponent as HorizentalLine } from "../../../assets/AboutImages/logo/horizentel-line.svg";
import Teams from "../../../assets/AboutImages/Images/groupImages.png";
const AboutAs = () => {
  return (
    <div className="bg-[#0C1620]">
      <div className=" relative lg:flex ">
        <div>
          <section className=" pl-[90px] lg:pl-[140px] pt-[114px] ">
            <h1 className="flex items-center gap-2 text-[22px] leading-[28.6px] tracking-[0.22px]  text-[#97B1CB]">
              <span>
                <WaterWave />
              </span>
              About Us
              <span>
                <Star />
              </span>
            </h1>
            <h2 className="text-[46px]  font-semibold leading-[50.6px] robotoVariant text-white pt-3">
              Our Story
            </h2>
          </section>
          <span className="absolute top-10">
            <Line />
          </span>
        </div>

        <section className="lg:ml-[590px] lg:mt-[114px] m-3 lg:m-0">
          <p className="text-[#EBF1FF] lg:text-xl leading-[26px] tracking-[0.2px pt-10 lg:pt-0">
            We are Seative Digital. Strong visual culture. Unique <br />{" "}
            processes. Pure fails. Mostly on Mondays. Design <br /> that tells a
            story. Risk over comfort. Ever-changing <br /> approaches. Different
            backgrounds converging as <br /> one. Unconventional solutions.{" "}
          </p>
          <p className="text-[#EBF1FF] lg:text-xl leading-[26px] tracking-[0.2px mt-10 pb-[60px]">
            Strong visual culture. Unique processes. Pure fails. <br /> Mostly
            on Mondays. Design that tells a story. Risk <br /> over comfort.
            Ever-changing approaches. Different <br /> backgrounds converging as
            one. Unconventional <br /> solutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 lg:w-[560px]  ml-24 lg:ml-0 pb-[72px]">
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
        </section>
      </div>

      <section className="relative pb-[113px]">
        <img src={Teams} alt="Seative Teams" className="mx-auto" />
        <span className="absolute top-0">
          <HorizentalLine />
        </span>
        <span className="absolute -top-24 right-16">
          <Patten />
        </span>
      </section>
    </div>
  );
};

export default AboutAs;
