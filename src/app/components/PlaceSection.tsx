import Image from "next/image";
import React from "react";
import MainHeader from "./MainHeader";
import ViewMapBtn from "./ViewMapBtn";

function PlaceSection() {
  return (
    <section className="py-20 px-5 bg-[#f6f0e4] text-[#835D2F]">
      <Image
        className="mx-auto"
        src={"/place-image.png"}
        width={500}
        height={200}
        alt="place image"
        data-aos="fade-up" data-aos-anchor-placement="top-center"
      ></Image>
      <h3 className="uppercase text-4xl mt-5 mb-10 font-mono">Diva Garden</h3>
      <MainHeader>The Venue</MainHeader>
      <h3 className="uppercase text-4xl mt-5 mb-10 font-mono" data-aos="fade-up" data-aos-anchor-placement="top-center">Diva Garden</h3>
      <span className="text-sm uppercase block font-semibold font-sans" data-aos="fade-up" data-aos-anchor-placement="top-center">
        Talhka
      </span>
      <span className="text-sm uppercase block mt-3 font-semibold font-sans" data-aos="fade-up" data-aos-anchor-placement="top-center">
        Dakahlia, Egypt
      </span>
      
      <ViewMapBtn></ViewMapBtn>
    </section>
  );
}

export default PlaceSection;
