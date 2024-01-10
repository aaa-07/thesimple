import Image from 'next/image';
import React from 'react';

export default function Design() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div>
          <span className='font-48 font-extrabold gray-2'>02</span>
          <span className='font-32 font-semibold ml-2'>Design</span>
        </div>
        <div className='services-illustration bg-blue-1 ml-12 mt-16 pl-8 pt-9'>
          <Image src='/images/services/design.svg' height={135} width={120} alt='image' />
          <div className='flex items-center mt-9'>
            <div className='font-24 font-bold'>Let&apos;s design</div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-white.svg' width={21} height={10} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>Branding</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We help you create brand with your voice, your face, your story. It&apos;s what sets you apart and draws customers in. But building a captivating brand that resonates in
          the crowded marketplace takes more than just a logo and tagline.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Multimedia</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We help you unlocking the emotional power of visual storytelling. We partner with you to understand your vision, target audience, and goals. Then, we unleash our creative
          arsenal, crafting multimedia magic.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Product design</div>
        <div className='font-medium font-24 leading-8 mt-6 w-4/5'>
          We design products that thrive. Our product design journey is more than just sleek interfaces and trendy features. We delve deeper, uncovering the human experience at the
          heart of your product.
        </div>
      </div>
    </div>
  );
}
