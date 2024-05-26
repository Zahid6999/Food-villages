import React from "react";
import { ReactComponent as WaterWave } from "../../../assets/logo/Water wave.svg";
import { ReactComponent as StarVector } from "../../../assets/logo/Vector (5).svg";
// import { ReactComponent as teamVector1 } from "../../../assets/AboutImages/logo/Vector 33.svg";
// import { ReactComponent as teamVector2 } from "../../../assets/AboutImages/logo/Vector 27.svg";
// import { ReactComponent as teamVector3 } from "../../../assets/AboutImages/logo/Vector 27 (1).svg";
// import { ReactComponent as teamVector4 } from "../../../assets/AboutImages/logo/Vector 27 (2).svg";
// import { ReactComponent as teamVector5 } from "../../../assets/AboutImages/logo/Vector 34.svg";
// import { ReactComponent as teamVector6 } from "../../../assets/AboutImages/logo/Vector 27 (2).svg";

import teamImg1 from "../../../assets/AboutImages/Images/s 10.png";
import teamImg2 from "../../../assets/AboutImages/Images/charlie-green-3JmfENcL24M-unsplash.png";

const teamMember = [
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg1,
    // vector: teamVector1,
  },
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg2,
    // vector: teamVector2,
  },
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg1,
    // vector: teamVector3,
  },
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg2,
    // vector: teamVector4,
  },
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg1,
    // vector: teamVector5,
  },
  {
    name: "Subash Chandra",
    position: "Founder & Head of Design",
    img: teamImg2,
    // vector: teamVector6,
  },
];

const TeamMember = () => {
  return (
    <div>
      <div>
        <h2 className="text-[22px] text-[#2F4153] font-medium leading-[28.82px] tracking-[0.22px] flex items-center gap-2 justify-center mt-20 mb-4">
          <span>
            <WaterWave />
          </span>
          Team Member
          <span>
            <StarVector />
          </span>
        </h2>
        <h1 className="text-[46px] font-semibold robotoVariant text-[#09121B] leading-[50.6px] text-center">
          Let’s meet our heros
        </h1>
      </div>

      <section className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-2 md:mx-[100px] lg:mx-[140px]">
        {teamMember.map((team, i) => (
          <div key={i} className="bg-[#E3EAF1] lg:w-[440px]  max-h-[537px]">
            <h1>{team.name}</h1>
            <h2>{team.position}</h2>
            <img src={team.img} alt="Img" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamMember;
