import Image from 'next/image';
import React from 'react';

export default function Growth() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div>
          <span className='font-48 font-extrabold gray-2'>04</span>
          <span className='font-32 font-semibold ml-2'>Growth</span>
        </div>
        <div className='services-illustration bg-warning-1 ml-12 mt-16 pt-12 pl-7'>
          <Image src='/images/services/growth.svg' height={90} width={178} alt='image' />
          <div className='flex items-center mt-14'>
            <div className='black-1 font-24 font-bold'>Let&apos;s grow</div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-black.svg' width={21} height={10} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>User behaviour patterns</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We observe the ways in which user interact with the product and help you to align with the user goals and motivations to grow the business.
        </div>
      </div>
    </div>
  );
}
