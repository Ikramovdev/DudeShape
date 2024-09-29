import React from 'react'
import HeroImg from "../assets/images/hero-img.png"

const Hero = () => {
  return (
    <section className='mb-[140px]'>
        <div className='container'>
            <div className='flex flex-col-reverse lg:flex-row bg-[#154444]'>
                <img className='mx-auto lg:mx-0 w-[309px] lg:w-[411px] h-[326px] lg:h-[560px] mt-[40px] lg:mt-0 ' src={HeroImg} alt="hero-background-img" width={411} height={560} />
                <div className='flex flex-col pt-[40px] pl-[24px] lg:pl-[100px]'>
                    <h1 className='w-[380px] font-bold text-[32px] lg:text-[56px] leading-[42px] lg:leading-[68px] text-white mb-[12px] lg:mb-5'>We Help You Make Modern Furniture</h1>
                    <p className='w-[257px] lg:w-[488px] font-regular text-[12px] lg:text-[20px] leading-[17px] lg:leading-[25px] text-white mb-[30px] lg:mb-[35px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials</p>
                    <butto className='w-[172px] py-[15px] text-center bg-white text-regular text-[20px] leading-[25px] text-[#154444]'>Explore More</butto>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero