import React from "react";

import { ReactComponent as UXd } from "../../../assets/logo/Team cursor.svg";
import { ReactComponent as Team1 } from "../../../assets/logo/Team cursor (1).svg";
import { ReactComponent as Team2 } from "../../../assets/logo/Team cursor (2).svg";
import { ReactComponent as Team3 } from "../../../assets/logo/Team cursor (3).svg";
import { ReactComponent as Team4 } from "../../../assets/logo/Team cursor (4).svg";
import { ReactComponent as Team5 } from "../../../assets/logo/Team cursor (5).svg";
import { ReactComponent as Team6 } from "../../../assets/logo/Team cursor (6).svg";
import { ReactComponent as ArrowDown } from "../../../assets/logo/arrow_down.svg";
import { ReactComponent as Sun } from "../../../assets/logo/Sun.svg";
import { ReactComponent as Star } from "../../../assets/logo/star.svg";
import { ReactComponent as Star1 } from "../../../assets/logo/star (1).svg";
import { ReactComponent as Star2 } from "../../../assets/logo/star (2).svg";
import { ReactComponent as Star3 } from "../../../assets/logo/star (3).svg";
import { ReactComponent as Star4 } from "../../../assets/logo/star (4).svg";
import { ReactComponent as Star5 } from "../../../assets/logo/star (5).svg";

const Banner = () => {
  return (
    <div className="bg-[#061019] h-[720px] relative">
      <header>
        <span className="absolute top-8 left-10 lg:left-[297px] animate-bounce">
          <UXd />
        </span>
        <span className="absolute top-[90px] right-10 lg:right-[108px] animate-bounce">
          <Team1 />
        </span>
        <span className="absolute top-[283px] left-16 lg:left-[141px] animate-bounce">
          <Team2 />
        </span>
        <span className="absolute top-[209px] right-20 lg:right-[226px] animate-bounce">
          <Team3 />
        </span>
        <span className="absolute top-[408px] right-20 lg:right-[161px] animate-bounce">
          <Team4 />
        </span>
        <span className="absolute top-[458px] left-12 lg:left-[185px] animate-bounce">
          <Team5 />
        </span>
        <span className="absolute top-[450px] right-24 lg:right-[367px] animate-bounce">
          <Team6 />
        </span>
        <section>
          <h1 className="text-center text-[34px] lg:text-[54px] leading-8  lg:leading-[51px] font-semibold pt-[87px] px-2 text-white robotoVariant ">
            We make useful digital <br /> product for startup & <br />{" "}
            enterprise brand{" "}
          </h1>
          <p className="text-center text-base lg:text-xl leading-4 lg:leading-[26px] font-normal pt-6 text-[#A1ADCB] ">
            You just tell us what you want & get a relax. We handle <br /> all
            UX, design, and development issues
          </p>
        </section>
        <span className="absolute top-[400px] lg:top-[357px] left-[160px] lg:left-[887px]  animate-bounce">
          <ArrowDown />
        </span>
        <span className="absolute top-[77px] left-7 lg:left-[158px] ">
          <Star />
        </span>
        <span className="absolute top-[367px] left-44 lg:left-[431px] ">
          <Star1 />
        </span>
        <span className="absolute top-[603px] left-12 lg:left-[114px] ">
          <Star2 />
        </span>
        <span className="absolute top-[50px] right-20 lg:right-[401px] ">
          <Star3 />
        </span>
        <span className="absolute top-[310px] right-14 lg:right-[417px] ">
          <Star4 />
        </span>
        <span className="absolute top-[573px] right-14 lg:right-[212px] ">
          <Star5 />
        </span>
        <p className="absolute top-[422px]   lg:left-[540px] right-1 lg:right-0 animate-pulse ">
          <Sun />
        </p>
      </header>
    </div>
  );
};

export default Banner;
