import React from "react";
import { ReactComponent as Star } from "../../../assets/logo/Vector (5).svg";
import { ReactComponent as Water } from "../../../assets/logo/Water wave.svg";
import { ReactComponent as DribblePatten } from "../../../assets/logo/dribbble pattern.svg";

const Dribble = () => {
  return (
    <div>
      <header className="lg:flex justify-between ">
        <section className="lg:ml-[160px] mt-[100px]">
          <h1 className="text-[22px] text-[#2F4153] flex items-center gap-2 font-semibold leading-[28.82px] tracking-[0.22px]">
            <span>
              <Water />
            </span>
            Dribble
            <span>
              <Star />
            </span>
          </h1>
          <h2 className="text-5xl text-[#09121B] font-semibold leading-[47.7px] robotoVariant ">
            Daily inspirations
          </h2>
        </section>
        <div className="mt-8">
          <span className="animate-spin animate-bounce ">
            <DribblePatten />
          </span>
        </div>
      </header>
      <main>
        {/* Reveres Sliding --------pari na pore try korbo? and slider ar [card/content] api call hobe */}
      </main>
    </div>
  );
};

export default Dribble;
