import Image from 'next/image';
import React from 'react';

export default function Experts() {
  return (
    <div className='mt-64 mb-60'>
      <div className='font-72 font-extrabold gray-1 text-center mb-6'>
        <div>Design education from award</div>
        <div className='flex justify-center items-baseline'>
          <div>winning expert</div>
          <div className='flex items-baseline ml-3'>
            <Image src='/images/logo.svg' height={22} width={22} alt='logo' /> <div className='ml-1 font-14 font-extrabold text-white'>thesimple</div>
          </div>
        </div>
      </div>
      <div className='gray-3 font-32 font-medium mb-28 text-center'>
        Carefully crafted for every individual to enable their creative block <br /> for solving problems from business and users perspective
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='bg-red-1 experts-thumbnail br-bottom-right-194 flex flex-col pl-10 pt-10 pb-16 pr-16'>
            <div className='font-32 font-extrabold'>Beginners Product design course</div>
            <Image src='/images/right-arrow-white.svg' width={42} height={42} alt='right arrow' className='mt-auto' />
          </div>
          <div className='bg-yellow-1 experts-thumbnail br-top-right-194 mx-7 flex flex-col pb-10 pl-10 pr-20 pt-14'>
            <Image src='/images/right-arrow-black.svg' width={42} height={42} alt='right arrow' />
            <div className='font-32 font-extrabold black-1 mt-auto'>User experience design</div>
          </div>
          <div className='bg-blue-1 experts-thumbnail br-bottom-left-194 flex items-end flex-col pt-10 pl-10 pr-16 pb-16'>
            <div className='font-32 font-extrabold'>User interphase design</div>
            <Image src='/images/right-arrow-white.svg' width={42} height={42} alt='right arrow' className='mt-auto' />
          </div>
        </div>
        <div className='flex justify-center mt-14 mb-16'>
          <div className='bg-green-1 experts-thumbnail br-top-right-194 flex flex-col pl-10 pt-16 pb-12'>
            <Image src='/images/right-arrow-black.svg' width={42} height={42} alt='right arrow' />
            <div className='font-32 font-extrabold black-1 mt-auto'>Project management</div>
          </div>
          <div className='bg-gray-1 experts-thumbnail br-bottom-left-194 mx-7 flex flex-col items-end pl-12 pt-12 pr-14 pb-16'>
            <div className='font-32 font-extrabold black-1'>Training design team in the organisations</div>
            <Image src='/images/right-arrow-black.svg' width={42} height={42} alt='right arrow' className='mt-auto' />
          </div>
          <div className='bg-purple-1 experts-thumbnail br-top-left-194 flex flex-col items-end pl-9 pr-12 pb-14 pt-24'>
            <Image src='/images/right-arrow-white.svg' width={42} height={42} alt='right arrow' />
            <div className='font-32 font-extrabold mt-auto pb-1'>Advance product design course</div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='bg-warning-1 experts-thumbnail br-bottom-right-194 flex flex-col pl-9 pt-11 pb-16'>
            <div className='font-32 font-extrabold black-1'>
              User <br />
              research
            </div>
            <Image src='/images/right-arrow-black.svg' width={42} height={42} alt='right arrow' className='mt-auto' />
          </div>
          <div className='bg-pink-1 experts-thumbnail br-top-right-194 mx-7 flex flex-col pl-10 pb-16 pt-16'>
            <Image src='/images/right-arrow-black.svg' width={42} height={42} alt='right arrow' />
            <div className='font-32 font-extrabold black-1 mt-auto'>Product management</div>
          </div>
          <div className='bg-blue-2 experts-thumbnail br-bottom-left-194 flex flex-col items-end pl-10 pt-11 pr-28 pb-16'>
            <div className='font-32 font-extrabold'>Story telling approach in design</div>
            <Image src='/images/right-arrow-white.svg' width={42} height={42} alt='right arrow' className='mt-auto mb-1' />
          </div>
        </div>
      </div>
    </div>
  );
}
