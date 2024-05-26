import React from "react";
import vector1 from "../../../assets/logo/Vector (1).png";

const data = [
  {
    title: "Website / Application Design",
    answer1: "Brainstorming",
    answer2: "User Flow",
    answer3: "Information architecture",
    answer4: "Testing and integration",
    answer5: "Wireframing",
  },
  {
    title: "Mobile App Design",
    answer1: "Brainstorming",
    answer2: "User Flow",
    answer3: "Information architecture",
    answer4: "Testing and integration",
    answer5: "Wireframing",
  },
  {
    title: "Motion Graphic",
    answer1: "Brainstorming",
    answer2: "User Flow",
    answer3: "Information architecture",
    answer4: "Testing and integration",
    answer5: "Wireframing",
  },
  {
    title: "Branding",
    answer1: "Brainstorming",
    answer2: "User Flow",
    answer3: "Information architecture",
    answer4: "Testing and integration",
    answer5: "Wireframing",
  },
  {
    title: "Development",
    answer1: "Brainstorming",
    answer2: "User Flow",
    answer3: "Information architecture",
    answer4: "Testing and integration",
    answer5: "Wireframing",
  },
];

const Accordion = () => {
  return (
    <div className="join join-vertical w-full lg:mr-[140px] lg:mt-10">
      {data.map((item, i) => (
        <div
          className="collapse collapse-plus join-item border-b border-[#2F4153] hover:border-[#6f93b6]"
          key={i}
        >
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-[34px] left-8 font-semibold robotoVariant text-white ">
            {item.title}
          </div>
          <div className="collapse-content bg-[#1A43E8] pt-[30px] pl-[60px]">
            <p className="flex items-center gap-8 text-2xl leading-[30px] font-normal mb-6 text-[#CEDCFF]">
              <span>
                <img src={vector1} alt="" />
              </span>
              {item.answer1}
            </p>
            <p className="flex items-center gap-8 text-2xl leading-[30px] font-normal mb-6 text-[#CEDCFF]">
              <span>
                <img src={vector1} alt="" />
              </span>
              {item.answer2}
            </p>
            <p className="flex items-center gap-8 text-2xl leading-[30px] font-normal mb-6 text-[#CEDCFF]">
              <span>
                <img src={vector1} alt="" />
              </span>
              {item.answer3}
            </p>
            <p className="flex items-center gap-8 text-2xl leading-[30px] font-normal mb-6 text-[#CEDCFF]">
              <span>
                <img src={vector1} alt="" />
              </span>
              {item.answer4}
            </p>
            <p className="flex items-center gap-8 text-2xl leading-[30px] font-normal mb-6 text-[#CEDCFF]">
              <span>
                <img src={vector1} alt="" />
              </span>
              {item.answer5}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
