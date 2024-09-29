import React from 'react'
import { AirBnbIcon, MasterCardIcon, PayPalIcon, StripeIcon, UberIcon, VisaIcon } from '../assets/icon'

const Companies = () => {
  return (
    <section className='mb-[140px]'>
        <div className='container'>
          <div className='text-center w-[1087px] mx-auto'>
            <h2 className='text-center font-bold text-[18px] lg:text-[32px] leading-[24px] lg:leading-[42px] mb-10 text-[#244D4D]'>Trusted by 20,000+ companies</h2>
            <div className='flex items-center gap-[100px]'>
                <a href='https://www.mastercard.uz/ru-uz.html'>
                    <MasterCardIcon/>
                </a>
                <a href='https://www.airbnb.com'>
                    <AirBnbIcon/>
                </a>
                <a href='https://www.uber.com'>
                    <UberIcon/>
                </a>
                <a href='https://www.paypal.com'>
                    <PayPalIcon/>
                </a>
                <a href='https://cis.visa.com/visa-in-uzbekistan.html'>
                    <VisaIcon/>
                </a>
                <a href='https://stripe.com'>
                    <StripeIcon/>
                </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Companies

