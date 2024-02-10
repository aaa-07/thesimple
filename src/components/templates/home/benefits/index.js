import Image from 'next/image';
import React from 'react';

export default function Benefits() {
  return (
    <div className='pt-72'>
      <div className='font-72 font-extrabold text-center mb-6'>Benefits of partnering with us</div>
      <div className='font-48 font-medium mb-24 text-center' style={{color: '#D8D8D8'}}>
        We understand how important your <br /> business is for you
      </div>
      <div className='flex justify-center'>
        <div className='bg-blue-1 benefits-illustration'>
          <div className='flex justify-center items-center pt-12'>
            <Image src='/images/benefits/lightning.svg' height={48} width={48} alt='lightning' />
            <div className='font-32 font-extrabold ml-2'>Fast</div>
          </div>
          <div className='font-20 font-semibold text-center px-6 mt-11'>Turbocharge your design process! Designs ready for reviews in 1-2 days</div>
        </div>
        <div className='bg-green-1 black-2 benefits-illustration mx-5'>
          <div className='flex justify-center items-center pt-12'>
            <Image src='/images/benefits/save-money.svg' height={48} width={48} alt='save money' />
            <div className='ml-2'>
              <div className='font-32 font-extrabold'>Save 50%</div>
              <div className='font-24 font-semibold'>on design</div>
            </div>
          </div>
          <div className='font-20 font-semibold text-center mt-11 pl-6 pr-3'>One stop for all your design needs. No hiring, training, or multiple tools required.</div>
        </div>
        <div className='bg-yellow-1 black-2 benefits-illustration'>
          <div className='flex justify-center items-center pt-12'>
            <Image src='/images/benefits/gift.svg' height={48} width={48} alt='gift' />
            <div className='ml-2'>
              <div className='font-32 font-extrabold'>Unlimited</div>
              <div className='font-24 font-semibold'>design requests</div>
            </div>
          </div>
          <div className='font-20 font-semibold text-center mt-8 pl-4 pr-10'>No limit on your design aspirations! Submit as many requests you need</div>
        </div>
        <div className='bg-purple-1 benefits-illustration ml-5'>
          <div className='flex justify-center items-center pt-12'>
            <Image src='/images/benefits/stars.svg' height={48} width={48} alt='stars' />
            <div className='font-32 font-extrabold ml-2'>Wow quality</div>
          </div>
          <div className='font-20 font-semibold text-center px-6 mt-11'>Don&apos;t settle for good, get the best</div>
        </div>
      </div>
    </div>
  );
}
