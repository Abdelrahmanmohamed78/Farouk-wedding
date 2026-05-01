import React from 'react'
import MainHeader from './MainHeader'
import MomentsSlider from './MomentsSlider'
import Image from 'next/image'

function MomentsSection() {
  return (
    <section className='py-20 bg-[#f6f0e4]'>
      <MainHeader>Our Moments</MainHeader>
      <div className="main-container w-[90vw] mx-auto mb-30">
        <MomentsSlider></MomentsSlider>
      </div>
      <Image className='mx-auto w-60' src={"/floral-vase.png"} width={200} height={200} alt='floral-vase image'></Image>
    </section>
  )
}

export default MomentsSection