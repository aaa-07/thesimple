import Image from 'next/image';
import React from 'react';

export default function Development() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div>
          <span className='font-48 font-extrabold gray-2'>03</span>
          <span className='font-32 font-semibold ml-2'>Development</span>
        </div>
        <div className='services-illustration bg-purple-1 ml-12 mt-16 pt-14 pl-9'>
          <Image src='/images/services/development.svg' height={78} width={141} alt='image' />
          <div className='flex items-center mt-14'>
            <div className='font-24 font-bold'>Let&apos;s develop</div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-white.svg' width={21} height={10} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>Frontend</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We don&apos;t just code, we craft. Our frontend development team translates stunning designs into seamless, interactive experiences that users adore. Our team converts
          creative vision into a functional, flawless reality.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Backend</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We build on industry-leading technologies and best practices to ensure your product remains accessible, stable, and ready for anything.
        </div>
      </div>
    </div>
  );
}
