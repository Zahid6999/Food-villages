import React from "react";
import { ReactComponent as Patter } from "../../../assets/logo/pattern (2).svg";
import { ReactComponent as Quat } from "../../../assets/logo/Vector (6).svg";

const SubashInfo = () => {
  return (
    <div className=" bg-[#1A43E8] h-[570px] relative ">
      <section className="pt-[155px] pb-[190px]">
        <h1 className="lg:text-[44px] font-semibold robotoVariant lg:leading-[44.4px] tracking-[1.76px] text-center text-white ">
          We believe every UX design process is <br /> going to be unique based
          on your <br />
          business and product.
        </h1>
        <p className="lg:text-[23px] font-light lg:leading-[30.13px] tracking-[0.23px] text-[#CEDCFF] text-center mt-5">
          Subash Chandra, Founder at Seative Digital
        </p>
      </section>
      <span className="absolute bottom-0">
        <Patter />
      </span>
      <span className="absolute top-9 right-0">
        <Quat />
      </span>
    </div>
  );
};

export default SubashInfo;
