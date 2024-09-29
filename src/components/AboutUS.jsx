import React from 'react'
import AboutUs from "../assets/images/about-us-img.png"
import { AboutUsListIcon1, AboutUsListIcon2, AboutUsListIcon3 } from '../assets/icon'

const AboutUS = () => {
  return (
    <section className='mb-[140px]'>
        <div className='container'>
            <div className='flex flex-col-reverse lg:flex-row'>
                <img className='w-[352px] h-[341px] lg:w-[631px] lg:h-[612px] mx-auto'  src={AboutUs} alt="about-us-backgorund-img" width={631} height={612} />
                <div className='pl-[0] lg:pl-[100px] pt-[46px]'>
                    <div className='mb-[40px]'>
                        <h2 className='font-bold  text-[24px] lg:text-[32px] leading-[40px] text-[#244D4D] mb-5'>About Us</h2>
                        <p className='w-[332px] lg:w-[436px] font-regular  text-[12px] lg:text-[20px] text-[#444444] leading-[25px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                    </div>
                    <ul className=''>
                        <li className='flex gap-[30px] mb-[30px]'>
                            <AboutUsListIcon1 className='w-[28px] lg:w-[50px] h-[28px] lg:h-[50px]'/>
                            <div>
                                <h3 className='font-bold text-[14px] lg:text-[20px] leading-[20px] lg:leading-[26px] text-[#244D4D] mb-[13px]'>Best Quality</h3>
                                <p className='font-regular text-[18px] leading-[26px] text-[#383738]'>All of our furniture uses the best materials and choices</p>
                            </div>
                        </li>
                        <li className='flex gap-[30px] mb-[30px]'>
                            <AboutUsListIcon2 className='w-[28px] lg:w-[50px] h-[28px] lg:h-[50px]'/>
                            <div>
                                <h3 className='font-bold text-[14px] lg:text-[20px] leading-[20px] lg:leading-[26px] text-[#244D4D] mb-[13px]'>100% Secure</h3>
                                <p className='font-regular text-[18px] leading-[26px] text-[#383738]'>All of our furniture uses the best materials and choices</p>
                            </div>
                        </li>
                        <li className='flex gap-[30px] mb-[30px]'>
                            <AboutUsListIcon3 className='w-[28px] lg:w-[50px] h-[28px] lg:h-[50px]'/>
                            <div>
                                <h3 className='font-bold text-[14px] lg:text-[20px] leading-[20px] lg:leading-[26px] text-[#244D4D] mb-[13px]'>Free Shpping</h3>
                                <p className='font-regular text-[18px] leading-[26px] text-[#383738]'>All of our furniture uses the best materials and choices</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUS



