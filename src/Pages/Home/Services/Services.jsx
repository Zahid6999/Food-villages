import Accordion from "./Accordion";

import patten from "../../../assets/logo/pattern.png";

import { ReactComponent as Group } from "../../../assets/logo/Group 24.svg";
import { ReactComponent as Vector } from "../../../assets/logo/Vector.svg";

import { ReactComponent as Logo } from "../../../assets/logo/logo.svg";
import { ReactComponent as Logo1 } from "../../../assets/logo/logo (1).svg";
import { ReactComponent as Logo2 } from "../../../assets/logo/logo (2).svg";
import { ReactComponent as Logo3 } from "../../../assets/logo/logo (3).svg";
import { ReactComponent as Logo4 } from "../../../assets/logo/logo (4).svg";
import { ReactComponent as Logo5 } from "../../../assets/logo/logo (5).svg";
import { ReactComponent as Logo6 } from "../../../assets/logo/logo (6).svg";
import { ReactComponent as Logo7 } from "../../../assets/logo/logo (7).svg";

import add from "../../../assets/logo/add.png";
import lineBackground from "../../../assets/logo/Background lines.png";

const Services = () => {
  return (
    <div className="bg-[#0C1620] pb-[183px]">
      <header className="lg:flex lg:justify-between items-center ml-24 lg:px-[167px]">
        <h2 className="text-[28px] leading-9 font-semibold flex items-center gap-[10px] text-[#EBF1FF] pt-[120px] ">
          <span>
            <Group />
          </span>
          Services
          <span>
            <Vector />
          </span>
        </h2>

        <h3 className="robotoVariant text-[34px]  font-semibold text-[#97B1CB] pt-8 lg:pt-[137px]  lg:mr-52">
          Product Design
        </h3>
        <p className=" pt-[137px] hidden lg:block">
          <img src={add} alt="Plus Icon" />
        </p>
      </header>

      {/* -----Accordion------ */}

      <section className="lg:flex relative">
        <img
          src={lineBackground}
          className="hidden lg:block lg:w-[37%] -mt-20"
          alt="LineBackground"
        />
        <Accordion />
        <img src={patten} alt="" className=" absolute right-0 top-[240px]" />
      </section>

      <section className="lg:flex items-center ml-20 lg:ml-[182px] mt-[185px]">
        <h3 className="text-[28px] leading-8 font-semibold flex items-center gap-2 lg:-mt-40 lg:mr-[330px] text-[#EBF1FF] my-14 lg:my-0">
          <span>
            <Group />
          </span>
          Happy Clients
          <span>
            <Vector />
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mt-1">
          <span>
            <Logo />
          </span>
          <span>
            <Logo1 />
          </span>
          <span>
            <Logo2 />
          </span>
          <span>
            <Logo3 />
          </span>
          <span>
            <Logo4 />
          </span>
          <span>
            <Logo5 />
          </span>
          <span>
            <Logo6 />
          </span>
          <span>
            <Logo7 />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Services;
