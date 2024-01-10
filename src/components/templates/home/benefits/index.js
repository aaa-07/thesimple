import Image from 'next/image';
import React from 'react';

export default function Benefits() {
  return (
    <div className='mt-72'>
      <div className='font-72 font-extrabold gray-1 text-center mb-32'>Benefits of partnering with us</div>
      <div className='flex justify-center'>
        <div className='bg-warning-1 benefits-illustration'>
          <div className='flex justify-center items-center mt-20 pt-3'>
            <Image src='/images/benefits/lightning.svg' height={48} width={48} alt='lightning' />
            <div className='font-32 font-extrabold ml-2'>Fast</div>
          </div>
          <div className='font-24 font-semibold text-center px-11 mt-12 mx-1'>Turbocharge your design process! Designs ready for reviews in 1-2 days - watch your project fly.</div>
        </div>
        <div className='bg-blue-2 benefits-illustration ml-20'>
          <div className='flex justify-center items-center mt-16 pt-0.5'>
            <Image src='/images/benefits/save-money.svg' height={48} width={48} alt='save money' />
            <div className='ml-2'>
              <div className='font-32 font-extrabold'>Save 50%</div>
              <div className='font-24 font-semibold'>on design</div>
            </div>
          </div>
          <div className='font-24 font-semibold text-center mt-12 px-14'>One stop for all your design needs. No hiring, training, or multiple tools required.</div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <div className='bg-purple-1 benefits-illustration'>
          <div className='flex justify-center items-center mt-16 pt-0.5'>
            <Image src='/images/benefits/gift.svg' height={48} width={48} alt='gift' />
            <div className='ml-2'>
              <div className='font-32 font-extrabold'>Unlimited</div>
              <div className='font-24 font-semibold'>design requests</div>
            </div>
          </div>
          <div className='font-24 font-semibold text-center mt-12 px-8 mx-1'>No limit on your design aspirations! Submit as many requests as you need to achieve your vision.</div>
        </div>
        <div className='bg-red-1 benefits-illustration ml-20'>
          <div className='flex justify-center items-center mt-20 pt-2'>
            <Image src='/images/benefits/stars.svg' height={48} width={48} alt='stars' />
            <div className='font-32 font-extrabold ml-2'>Wow quality</div>
          </div>
          <div className='font-24 font-semibold text-center px-11 mt-12'>
            Don&apos;t settle for good, get the best: Award-winning expertise meets meticulous attention to detail in every design.
          </div>
        </div>
      </div>
    </div>
  );
}
