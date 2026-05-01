import React from 'react'
import MainHeader from './MainHeader';
import ViewMapBtn from './ViewMapBtn';

function LocationSection() {
  return (
    <section className='py-20 px-5 bg-[#f6f0e4] text-[#835D2F]' data-aos="fade-up" data-aos-anchor-placement="top-center">
      <MainHeader>Location</MainHeader>
      <h3 className="uppercase text-4xl mt-15 mb-10 font-mono">Diva Garden</h3>
      <span className="text-sm uppercase block font-semibold font-sans">
        Talhka
      </span>
      <span className="text-sm uppercase block mt-3 font-semibold font-sans">
        Dakahlia, Egypt
      </span>
      <iframe
        className={`grayscale-100 duration-[0.4s] hover:grayscale-0 mt-15 mx-auto max-w-full`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.461551711819!2d31.384730924613056!3d31.069085974423786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d22d0788f3b%3A0x7f150ffd1dab2f47!2sDiva%20Garden!5e0!3m2!1sar!2seg!4v1777138945524!5m2!1sar!2seg"
        width="650"
        height="350"
        style={{border: 0,}}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ViewMapBtn></ViewMapBtn>
    </section>
  )
}

export default LocationSection;