import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutAs from "../AboutAs/AboutAs";
import AboutServices from "../AboutServices/AboutServices";
import Testimonial from "../../Home/Testimonial/Testimonial";
import TeamMember from "../TeamMember/TeamMember";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutAs />
      <AboutServices />
      <Testimonial />
      <TeamMember />
    </div>
  );
};

export default About;
