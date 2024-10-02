import React from 'react'
import { AirBnbIcon, MasterCardIcon, PayPalIcon, StripeIcon, UberIcon, VisaIcon } from '../assets/icon'

const Companies = () => {
  return (
    <section className='mb-[140px]'>
        <div className='container'>
          <div className='text-center w-[1087px] mx-auto'>
            <h2 className='text-center font-bold text-[18px] lg:text-[32px] leading-[24px] lg:leading-[42px] mb-10 text-[#244D4D]'>Trusted by 20,000+ companies</h2>
            <ul className='flex flex-wrap lg:flex-row items-center lg:gap-[100px]'>
                <li>
                  <a href='https://www.mastercard.uz/ru-uz.html'>
                      <MasterCardIcon/>
                  </a>
                </li>
                <li>
                  <a href='https://www.airbnb.com'>
                      <AirBnbIcon/>
                  </a>
                </li>
                <li>
                  <a href='https://www.uber.com'>
                      <UberIcon/>
                  </a>
                </li> 
                <li>
                  <a href='https://www.paypal.com'>
                      <PayPalIcon/>
                  </a>
                </li>
                <li>
                  <a href='https://cis.visa.com/visa-in-uzbekistan.html'>
                      <VisaIcon/>
                  </a>
                </li>
                <li>
                  <a href='https://stripe.com'>
                      <StripeIcon/>
                  </a>
                </li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Companies

