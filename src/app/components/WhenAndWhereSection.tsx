import React from "react";
import MainHeader from "./MainHeader";
import { greatVibes } from "../layout";
import { PiStarFourFill } from "react-icons/pi";

function WhenAndWhereSection() {
  return (
    <section className="py-20 bg-[#f6f0e4]">
      <MainHeader>
        <div className="flex gap-5 justify-center">
          <span>When</span>
          <span>&</span>
          <span>Where</span>
        </div>
      </MainHeader>
      <div className="time flex gap-5 sm:gap-15 text-[#835D2F] justify-center mt-10" data-aos="fade-up" data-aos-anchor-placement="center-center">
        <div className="from flex flex-col gap-1">
          <h3 className={`text-xl sm:text-2xl ${greatVibes.className}`}>
            {" "}
            <span className="text-5xl sm:text-7xl">7</span> PM
          </h3>
          <p className="text-[12px] uppercase">Starts</p>
        </div>
        <div className="start-image flex justify-center items-center gap-2">
          <span className="w-15 sm:w-20 h-px bg-[#835d2f1f] block"></span>
          <PiStarFourFill className="text-[#835d2f1f] text-[15px]" />
          <span className="w-15 sm:w-20 h-px bg-[#835d2f1f] block"></span>
        </div>
        <div className="to flex flex-col gap-1">
          <h3 className={`text-xl sm:text-2xl ${greatVibes.className}`}>
            {" "}
            <span className="text-5xl sm:text-7xl">11</span> PM
          </h3>
          <p className="text-[12px] uppercase">Ends</p>
        </div>
      </div>
    </section>
  );
}

export default WhenAndWhereSection;
