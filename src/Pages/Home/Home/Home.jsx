import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import WorksCase from "../WorksCase/WorksCase";
import AboutUs from "../AboutUs/AboutUs";
import WorkingProcess from "../WorkingProcess/WorkingProcess";
import Testimonial from "../Testimonial/Testimonial";
import Dribble from "../Dribble/Dribble";
import SubashInfo from "../SubashInfo/SubashInfo";
import ProjectTogether from "../ProjectTogether/ProjectTogether";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <WorksCase />
      <AboutUs />
      <WorkingProcess />
      <Testimonial />
      <Dribble />
      <SubashInfo />
      <ProjectTogether />
    </div>
  );
};

export default Home;
