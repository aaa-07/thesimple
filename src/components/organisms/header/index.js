import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className='header-bg sticky top-0'>
      <div className='text-white container header-container'>
        <div className='flex justify-between items-end h-full'>
          <div className='font-24 font-extrabold flex items-baseline'>
            <Image src='/images/logo.svg' height={36} width={36} alt='logo' /> <div className='ml-1'>thesimple</div>
          </div>
          <div className='font-20 font-medium flex gap-8'>
            <span className='cursor-pointer'>Partner with us</span>
            <span className='cursor-pointer'>Services</span>
            <span className='cursor-pointer'>Deliverables</span>
            <span className='cursor-pointer'>KPI improvements</span>
            <span className='cursor-pointer'>Benefits</span>
            <span className='cursor-pointer'>Education</span>
          </div>
          <div>
            <div className='header-container__lets-talk font-bold text-black flex justify-center items-center font-18'>
              <div>
                <div>Let&apos;s</div>
                <div>talk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
