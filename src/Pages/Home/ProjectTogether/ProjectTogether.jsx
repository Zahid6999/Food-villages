import React from "react";
import { ReactComponent as Vector11 } from "../../../assets/logo/Vector 11.svg";
import { ReactComponent as Vector7 } from "../../../assets/logo/Vector (7).svg";
import { ReactComponent as ArrowIcon } from "../../../assets/logo/arrow_right.svg";

const handleSubmit = (e) => {
  e.preventDefault();
  const budged = e.target.first.value;
  const budged2 = e.target.second.value;

  console.log(budged);
  console.log(budged2);
};

const ProjectTogether = () => {
  return (
    <div className="lg:flex lg:justify-between relative bg-[#0C1620]">
      <main>
        <h1 className="text-[46px] font-semibold leading-[50.6px] robotoVariant text-white ml-5 lg:ml-[155px] pt-[120px] pb-10 ">
          Let’s start a project <br /> together.
        </h1>

        {/* --------Main Project Together-------- */}
        <h3 className="text-[#CEDCFF] text-3xl font-medium leading-[36px] robotoVariant ml-5 lg:ml-[155px]">
          Services
        </h3>

        <form onSubmit={handleSubmit} className="lg:ml-[155px]">
          {/* Services */}
          <section className=" lg:flex gap-5  mt-6">
            <input
              type="button"
              name="WebDesign"
              value="Web Design"
              className="border border-[#97B1CB] rounded-full m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000 "
            />
            <input
              type="button"
              name="MobileApp"
              value="Mobile App"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="WebApplication"
              value="Web Application"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="Branding"
              value=" Branding"
              className="border border-[#97B1CB] rounded-full py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="Animation"
              value=" Animation"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="Development"
              value=" Development"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
          </section>

          {/* Budget- */}
          <h3 className="text-[#CEDCFF] text-3xl font-medium leading-[36px] robotoVariant mt-[50px] ml-5 lg:ml-0">
            Budged in USD
          </h3>
          <section className=" lg:flex gap-5  mt-6">
            <input
              type="button"
              name="first"
              value="3k-5k"
              className="border border-[#97B1CB] rounded-full m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000 active:bg-[#1A43E8]"
            />
            <input
              type="button"
              name="second"
              value="5k-10k"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="10k"
              value="10k-20k"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="20k"
              value=" 15k-30k"
              className="border border-[#97B1CB] rounded-full py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
            <input
              type="button"
              name="30k"
              value=" 30k More"
              className="border border-[#97B1CB] rounded-full  m-5 lg:m-0 py-[14px] px-6 text-base font-semibold text-[#CEDCFF] leading-[20.8px] tracking-[0.16px] hover:bg-[#1A43E8] hover:border-none hover:duration-1000"
            />
          </section>

          {/* Information */}
          <h3 className="text-[#CEDCFF] text-3xl font-medium leading-[36px] robotoVariant mt-[50px] mb-[30px] ml-5 lg:ml-0">
            Information
          </h3>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                className="w-[350px] lg:w-[480px] border-b py-3 px-5 text-white border-[#97B1CB] hover:border-[#1A43E8] bg-[#0C1620] ml-5 lg:ml-0"
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email"
                className="w-[350px] lg:w-[480px] border-b py-3 px-5 text-white border-[#97B1CB] hover:border-[#1A43E8] bg-[#0C1620] ml-5 lg:ml-0"
              />
            </div>
            <br />
            <textarea
              className="w-[350px] lg:w-[995px] border-b mt-10 py-2 px-5 text-white border-[#97B1CB] hover:border-[#1A43E8]  bg-[#0C1620] ml-5 lg:ml-0"
              placeholder="Bio"
            ></textarea>
          </section>

          <button className="flex bg-[#1A43E8] text-white py-5 px-[30px] rounded-[30px] mt-20 ml-20 lg:ml-0">
            <input type="submit" value="Send a request" className="" />
            <ArrowIcon className="ml-2" />
          </button>
        </form>
      </main>

      <div>
        <span className="hidden lg:block">
          <Vector11 />
        </span>

        <span className="absolute top-8 lg:top-[218px] right-0 lg:right-[110px] ">
          <Vector7 />
        </span>
      </div>
    </div>
  );
};

export default ProjectTogether;
