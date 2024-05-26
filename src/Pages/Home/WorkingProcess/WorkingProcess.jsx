import React from "react";
import { ReactComponent as Group } from "../../../assets/logo/Water wave (1).svg";
import { ReactComponent as Vector } from "../../../assets/logo/Vector (4).svg";
import { ReactComponent as VectorShape } from "../../../assets/logo/Vector 9.svg";
import { ReactComponent as VectorShape2 } from "../../../assets/logo/Vector 10.svg";
import { ReactComponent as HoverMore } from "../../../assets/logo/Hover - more.svg";

const WorkingProcess = () => {
  return (
    <div className=" bg-[#0C1620] pb-[100px] relative ">
      <div>
        <h1 className="text-[22px] leading-7 font-medium flex items-center justify-center gap-2  text-center text-[#97B1CB] pt-[142px] mb-6">
          <span>
            <Group />
          </span>
          Working Process
          <span>
            <Vector />
          </span>
        </h1>
        <h2 className="text-center robotoVariant font-semibold text-[46px] text-white leading-[50px]">
          It depends on the projects
        </h2>
      </div>

      <div className="pt-[135px] lg:px-[270px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-[#0C1620]">
        <div className="bg-[#0D151D] border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            01
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Understand <br /> the brief
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            Going deep into client’s <br /> business to understand its core
            <br /> sense, goals and challenges to <br /> build partnership.
          </p>
        </div>
        {/* ------2----- */}
        <div className="bg-[#0D151D] border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px] -mt-[62px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            02
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Research for <br /> Identify Problems
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            Creating first concepts of a <br /> future product and shaping up{" "}
            <br /> the direction.
          </p>
        </div>
        {/* ------3----- */}
        <div className="bg-[#0D151D] border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            03
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Find Solutions
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            Building the foundation, <br /> structure and core elements of{" "}
            <br /> a digital product.
          </p>
        </div>

        {/* ------4----- */}
        <div className="bg-[#0D151D] border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            04
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Start Design & <br /> Development
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            Adding colors, illustrations and <br /> shapes to create visual{" "}
            <br /> language that resonates with <br /> customers.
          </p>
        </div>

        {/* ------5---- */}
        <div className="bg-[#0D151D] border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px] -mt-[62px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            05
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Get feedback & <br /> updating
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            After doing the design, we <br /> discuss it with the client to get{" "}
            <br /> feedback and update their <br /> needs
          </p>
        </div>

        {/* ------6----- */}
        <div className="bg-[#0D151D] lg:border border-[#2A3D51] max-w-[440px] h-[535px] py-[50px] px-[40px]">
          <h3 className="text-[50px] text-[#29435C] font-bold leading-[50px] tracking-[0.5px]">
            06
          </h3>
          <h4 className="text-4xl text-[#CEDCFF] leading-[45px] font-medium robotoVariant  mt-6 mb-[50px]">
            Handoff & <br /> Lunch
          </h4>
          <p className="text-xl text-[#97B1CB] font-normal leading-[26px] tracking-[0.2px] font-mono">
            Sending all finalised <br /> deliverables and providing <br />{" "}
            further support.
          </p>
        </div>
      </div>
      <span className="absolute top-[320px] right-56 hidden lg:block">
        <HoverMore />
      </span>
      <span className="absolute top-[320px] left-0 hidden lg:block">
        <VectorShape2 />
      </span>

      <span className="absolute -top-[250px] right-0 hidden lg:block">
        <VectorShape />
      </span>
    </div>
  );
};

export default WorkingProcess;
