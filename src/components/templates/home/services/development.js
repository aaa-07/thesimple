import Image from 'next/image';
import React from 'react';

export default function Development() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div className='flex sticky top-52'>
          <div className='font-48 font-extrabold gray-2'>03</div>
          <div className='services-heading ml-1'>
            <Image src='/images/services/development/illustration.svg' height={80} width={80} alt='image' />
            <div className='font-32 font-semibold mt-2'>Development</div>
            <div className='development-illustration bg-purple-1 flex'>
              <Image src='/images/services/development.svg' height={30} width={55} alt='image' className='development-illustration__icon pl-2' />
              <div className='flex items-center pl-5'>
                <div className='font-20 font-bold'>Let&apos;s develop</div>
                <div className='ml-2'>
                  <Image src='/images/right-arrow-white.svg' width={21} height={10} alt='arrow' className='arrow-movement' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold flex items-end pl-14'>
          <Image src='/images/services/development/frontend.svg' width={75} height={78} alt='Discovery' className='mr-2.5' /> Frontend
        </div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 services-description pl-14'>
          We don&apos;t just code, we craft. Our frontend development team translates stunning designs into seamless, interactive experiences that users adore. Our team converts
          creative vision into a functional, flawless reality.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold flex items-end pl-14'>
          <Image src='/images/services/development/backend.svg' width={75} height={78} alt='Discovery' className='mr-2.5' />
          Backend
        </div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 services-description pl-14'>
          We build on industry-leading technologies and best practices to ensure your product remains accessible, stable, and ready for anything.
        </div>
      </div>
    </div>
  );
}
