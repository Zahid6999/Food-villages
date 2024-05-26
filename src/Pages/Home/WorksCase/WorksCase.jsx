import React from "react";
import { ReactComponent as Group } from "../../../assets/logo/Water wave.svg";
import { ReactComponent as Vector } from "../../../assets/logo/Vector (1).svg";
// import { ReactComponent as Vector1 } from "../../../assets/logo/Vector (2).svg";
import { ReactComponent as ArrowDown } from "../../../assets/logo/icon - arrow_forward.svg";
import img1 from "../../../assets/Images/project-1.png";
import img2 from "../../../assets/Images/project- 2.png";
import img3 from "../../../assets/Images/project- 3.png";
import img4 from "../../../assets/Images/Thumb.png";

const imgData = [
  {
    img: img4,
  },

  {
    img: img3,
  },
  {
    img: img1,
  },
  {
    img: img2,
  },
];

const WorksCase = () => {
  return (
    <div>
      <header>
        <h1 className="text-[22px] leading-7 font-medium flex items-center gap-[10px] text-[#2F4153] mt-[120px] justify-center ">
          <span>
            <Group />
          </span>
          Work&Case
          <span>
            <Vector />
          </span>
        </h1>
        <h2 className="text-[46px] leading-[50px] font-semibold text-center robotoVariant mt-6 mb-12 text-[#09121B]">
          Our team did an excellent job <br /> and the client is pleased to get{" "}
          <br /> the final result
        </h2>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 mx-3 lg:mx-[260px] ">
        {imgData?.map((data, i) => (
          <div key={i}>
            <img
              src={data.img}
              alt="Work Case Images"
              className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-105  duration-500 "
            />

            {/* <div className="w-[550px] h-[438px] bg-[#FFFFFF] border rounded-2xl mx-auto ">
              <h3 className="text-[50px] text-center mt-20 leading-[52px] font-semibold text-[#09121B] robotoVariant ">
                Seative <br /> Mobile App
              </h3>
              <p className="text-xl leading-[26px]  text-[#2F4153] font-medium pt-2  text-center">
                Design <span className="text-4xl text-[#97B1CB]"> . </span>
                Development <span className="text-4xl text-[#97B1CB]">
                  .
                </span>{" "}
                Branding
              </p>
              <button className="flex items-center   gap-2 text-black text-xl leading-7 font-bold capitalize py-4 px[34px] mt-20 mb-5 ml-24 lg:ml-[180px]  bg-white hover:bg-stone-300   border-2  border-black rounded-[30px]">
                View Case
                <span>
                  <Vector1 />
                </span>
              </button>
            </div> */}
          </div>
        ))}
      </main>
      <h3 className="mt-20 mb-[121px] text-[34px] leading-8 font-semibold robotoVariant text-center text-black flex justify-center gap-1 hover:animate-bounce ">
        Explore more
        <span className="">
          <ArrowDown />
        </span>
      </h3>
    </div>
  );
};

export default WorksCase;
