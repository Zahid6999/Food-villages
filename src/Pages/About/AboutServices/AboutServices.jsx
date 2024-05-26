import React from "react";

import { ReactComponent as Star } from "../../../assets/logo/Vector (4).svg";
import { ReactComponent as WaterWave } from "../../../assets/logo/Water wave (1).svg";
import { ReactComponent as Line } from "../../../assets/AboutImages/logo/Vector 11.svg";

import AboutAccordion from "../AboutAccordion/AboutAccordion";

const AboutServices = () => {
  return (
    <div className="bg-[#061019] lg:flex ">
      <section className=" pt-[120px]  lg:mr-[527px] relative">
        <h1 className="flex items-center gap-1 text-[22px] font-medium leading-[28.82px] tracking-[0.22px] text-[#97B1CB] lg:ml-[140px]">
          <span>
            <Star />
          </span>
          Service
          <span>
            <WaterWave />
          </span>
        </h1>

        <h2 className="robotoVariant text-[46px] font-semibold leading-[50.6px] text-white mt-3 lg:ml-[140px]">
          Our Services
        </h2>
        <span className=" absolute left-0 -top-10">
          <Line />
        </span>
      </section>

      {/* Accordion section */}
      <section className="pt-[160px] mb-20">
        <AboutAccordion />
      </section>
    </div>
  );
};

export default AboutServices;
