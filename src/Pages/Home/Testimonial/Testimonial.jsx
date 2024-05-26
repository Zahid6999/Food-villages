import React from "react";
import { ReactComponent as Patten } from "../../../assets/logo/pattern (1).svg";
import { ReactComponent as Quote } from "../../../assets/logo/Quote.svg";
import { ReactComponent as Rectangle29 } from "../../../assets/logo/Rectangle 29.svg";
import { ReactComponent as Rectangle30 } from "../../../assets/logo/Rectangle 30.svg";
import { ReactComponent as Rectangle28 } from "../../../assets/logo/Rectangle 28.svg";
import { ReactComponent as Rectangle31 } from "../../../assets/logo/Rectangle 31.svg";
import { ReactComponent as Rectangle32 } from "../../../assets/logo/Rectangle 32.svg";
import userImg from "../../../assets/Images/user - image.png";
const Testimonial = () => {
  return (
    <div className="bg-[#0C1620] pt-16">
      <section className="relative">
        <img
          src={userImg}
          alt="User Image"
          className="w-[320px] h-[380px] mx-auto"
        />
        <span className="absolute -top-16 left-60 lg:left-[1030px]">
          <Quote />
        </span>
        {/* <p className="absolute z-0 top-44 left-60 lg:left-[629px] hidden lg:block">
          <Patten />
        </p> */}
      </section>

      <section>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full ">
            <p className="text-center lg:ml-[460px] font-normal text-xl leading-[26px] tracking-[0.2px] text-[#EBF1FF] mt-[60px] mb-9">
              Loved the final design and quality of work. Also appreciated and
              how my brand elements were <br /> creatively woven in and sparked
              additional ideas for me to integrate with custom images. Seller{" "}
              <br />
              was easy to communicate with and although the initial design was a
              few hours late he with out <br /> a doubt made good on the
              deliverables by going above and beyond.
            </p>
            ;
          </div>
          <div id="item2" className="carousel-item w-full">
            <p className="text-center lg:ml-[460px] font-normal text-xl leading-[26px] tracking-[0.2px] text-[#EBF1FF] mt-[60px] mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta consequatur nostrum, <br /> inventore eligendi esse, dolores
              natus dolorum voluptatibus est earum ea quas. Rem deleniti, <br />{" "}
              esse consequatur ad recusandae facilis!
            </p>
          </div>
          <div id="item3" className="carousel-item w-full">
            <p className="text-center lg:ml-[460px] font-normal text-xl leading-[26px] tracking-[0.2px] text-[#EBF1FF] mt-[60px] mb-9">
              {" "}
              Loved the final design and quality of work. Also appreciated and
              how my brand elements were <br /> creatively woven in and sparked
              additional ideas for me to integrate with custom images. Seller{" "}
              <br />
              was easy to communicate with and although the initial design was a
              few hours late he with out <br /> a doubt made good on the
              deliverables by going above and beyond.
            </p>
          </div>
          <div id="item4" className="carousel-item w-full">
            <p className="text-center lg:ml-[460px] font-normal text-xl leading-[26px] tracking-[0.2px] text-[#EBF1FF] mt-[60px] mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta consequatur nostrum, <br /> inventore eligendi esse, dolores
              natus dolorum voluptatibus est earum ea quas. Rem deleniti, <br />{" "}
              esse consequatur ad recusandae facilis!
            </p>
          </div>
          <div id="item5" className="carousel-item w-full">
            <p className="text-center lg:ml-[460px] font-normal text-xl leading-[26px] tracking-[0.2px] text-[#EBF1FF] mt-[60px] mb-9">
              {" "}
              Loved the final design and quality of work. Also appreciated and
              how my brand elements were <br /> creatively woven in and sparked
              additional ideas for me to integrate with custom images. Seller{" "}
              <br />
              was easy to communicate with and although the initial design was a
              few hours late he with out <br /> a doubt made good on the
              deliverables by going above and beyond.
            </p>
          </div>
        </div>
        <h6 className="text-center text-xl font-normal leading-[26px] tracking-[0.2px]  text-[#97B1CB]">
          <span className="  robotoVariant text-3xl font-semibold leading-9 text-[rgb(206,220,255)] mr-5">
            yolklabllc
          </span>
          CEO, Invision Studio
        </h6>
        <div className="flex justify-center w-full py-2 gap-2 mt-14">
          <a href="#item1" className="">
            <Rectangle29 />
          </a>
          <a href="#item2" className="">
            <Rectangle30 />
          </a>
          <a href="#item3" className="">
            <Rectangle28 />
          </a>
          <a href="#item4" className="">
            <Rectangle31 />
          </a>
          <a href="#item5" className="">
            <Rectangle32 />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
