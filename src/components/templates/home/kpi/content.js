'use client';
import Image from 'next/image';
import React, {useEffect} from 'react';

export default function Content() {
  useEffect(() => {
    const selectors = document.querySelectorAll('.kpi-description');
    selectors.forEach((selector) => {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('height-auto', 'mt-6');
              observer1.disconnect();
            }
          });
        },
        {rootMargin: '-200px'},
      );
      observer1.observe(selector);
    });
  }, []);

  return (
    <div className='flex'>
      <div className='w-45'>
        <div className='services-illustration bg-pink-1 ml-12 mt-2 pl-8 pt-9'>
          <Image src='/images/kpi.svg' height={102} width={150} alt='image' />
          <div className='flex items-center mt-10'>
            <div className='font-24 black-1 font-bold'>Let&apos;s improve</div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-black.svg' width={21} height={10} alt='arrow' className='arrow-movement' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>Improve user engagement or adoption</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 kpi-description'>
          Increasing user engagement or adoption requires an awareness of whether you are tackling the right problems for people (field studies assist uncover pain spots and
          strategic opportunities). Following that, understanding whether aspects of your design are problematic for your users aids in removing roadblocks to adoption or
          engagement (User Testing).
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Improve conversion rate</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 kpi-description'>
          Converting casual visitors into loyal users doesn&apos;t happen by chance. UX research (User Testing, Field studies), Frictionless Funnels and UX design are used to
          improve conversion rates.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold mb-14'>Improve customer acquisition</div>
        <div className='font-48 font-extrabold mb-14'>Improve customer retention</div>
        <div className='font-48 font-extrabold w-5/6 mb-2'>Improve a Service or product&apos;s KPIs with UX</div>
      </div>
    </div>
  );
}
