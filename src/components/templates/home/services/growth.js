import Image from 'next/image';
import React from 'react';

export default function Growth() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div className='flex sticky top-52'>
          <div className='font-48 font-extrabold gray-2'>04</div>
          <div className='services-heading ml-1'>
            <Image src='/images/services/growth/illustration.svg' height={80} width={80} alt='image' />
            <div className='font-32 font-semibold mt-2'>Growth</div>
            <div className='growth-illustration bg-warning-1 flex'>
              <Image src='/images/services/growth.svg' height={33} width={62} alt='image' className='growth-illustration__icon pl-2' />
              <div className='flex items-center pl-5'>
                <div className='black-1 font-20 font-bold'>Let&apos;s grow</div>
                <div className='ml-2'>
                  <Image src='/images/right-arrow-black.svg' width={21} height={10} alt='arrow' className='arrow-movement' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold flex items-end pl-14'>
          <Image src='/images/services/growth/user.svg' width={75} height={76} alt='Discovery' className='mr-2.5' />
          User behaviour patterns
        </div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 services-description pl-14'>
          We observe the ways in which user interact with the product and help you to align with the user goals and motivations to grow the business.
        </div>
      </div>
    </div>
  );
}
