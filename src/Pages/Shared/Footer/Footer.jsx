import React from "react";
import mailText from "../../../assets/logo/hello@seative.digital.png";
import copyRight from "../../../assets/logo/©2022 Seative Digital,..png";

const Footer = () => {
  return (
    <div className="bg-[#0C1620]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section className=" border-2 border-[#2F4153] lg:pl-[107px] lg:w-[1197px]">
          <p className="text-xl leading-[26px] font-normal  text-[#97B1CB] mt-[46px] ml-28 lg:ml-0">
            or send a mail at
          </p>
          <h1 className="mt-[14px] ml-14 lg:ml-0 mb-[49px] text-3xl lg:text-[50px] robotoVariant font-[350px] leading-[55px] text-[#EBF1FF]">
            hello@seative.digital
          </h1>
        </section>

        <section className="gird grid-cols-1 lg:grid-cols-1 lg:ml-[266px]">
          <div className="lg:flex">
            <h1 className="lg:w-[329px]  text-[#CEDCFF] text-xl leading-6 font-semibold border-2 border-l-0 border-[#2F4153] py-10 px-[117px] hover:bg-[#325BFF] delay-500">
              Linkedin
            </h1>
            <h1 className="lg:w-[329px]  text-[#CEDCFF] text-xl leading-6 font-semibold border-2 border-l-0  border-[#2F4153] py-10 px-[117px] hover:bg-[#325BFF] delay-500">
              Dribble
            </h1>
          </div>

          <div className="lg:flex">
            <h1 className="lg:w-[329px]  text-[#CEDCFF] text-xl leading-6 font-semibold border-2 border-t-0 border-l-0 border-[#2F4153] py-10 px-[117px] hover:bg-[#325BFF] delay-500">
              Behance
            </h1>
            <h1 className="lg:w-[329px]  text-[#CEDCFF] text-xl leading-6 font-semibold border-2 border-l-0 border-t-0  border-[#2F4153] py-10 px-[117px] hover:bg-[#325BFF] delay-500">
              FaceBook
            </h1>
          </div>
        </section>
      </div>
      <p className="pt-10 pb-[50px] pl-10 lg:pl-24 lg:text-xl font-[450px] leading-[22px] text-[#CEDCFF] robotoVariant">
        ©2022 Seative Digital, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
