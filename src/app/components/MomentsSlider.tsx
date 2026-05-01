"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function MomentsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        modules={[Autoplay]}
        breakpoints={{
          // When window width is >= 220px
          220: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // When window width is >= 460px
          460: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // When window width is >= 1100px
          1100: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // When window width is >= 1300px
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper mt-20"
      >
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-1.jpeg"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-2.jpeg"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-3.jpeg"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-4.png"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-5.png"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-6.png"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-65 h-95 object-cover rounded-[10px]"
            src={"/image-slider-7.png"}
            width={200}
            height={200}
            alt="swiper image"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
