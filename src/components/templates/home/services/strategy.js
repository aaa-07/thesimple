import Image from 'next/image';
import React from 'react';

export default function Strategy() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div>
          <span className='font-48 font-extrabold gray-2'>01</span>
          <span className='font-32 font-semibold ml-2'>Strategy</span>
        </div>
        <div className='services-illustration bg-green-1 ml-12 mt-16 pt-4'>
          <Image src='/images/services/strategy.svg' height={109} width={203} alt='image' />
          <div className='flex items-center mt-4 ml-6'>
            <div className='black-1 font-24 font-bold'>
              Let&apos;s build <br /> your strategy
            </div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-black.svg' width={21} height={10} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>Discovery</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          Your product adventure starts here by unleashing the hidden potentials within your product by analysing your vision, understating your users, and market.{' '}
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Product definition</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We start with empathy, end with your product success. We guide you from initial product plan to thriving growth strategy, empowering you to craft solutions that matter,
          resonate with users, and dominate the market.
        </div>
      </div>
    </div>
  );
}
