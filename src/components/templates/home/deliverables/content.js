'use client';
import Image from 'next/image';
import React, {useEffect} from 'react';

export default function Content() {
  useEffect(() => {
    const selectors = document.querySelectorAll('.deliverable-description');
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
        <div className='services-illustration bg-blue-2 ml-12 mt-2 pl-8 pt-9'>
          <Image src='/images/deliverables.svg' height={116} width={150} alt='image' />
          <div className='flex items-center mt-10'>
            <div className='font-24 font-bold'>Let&apos;s talk</div>
            <div className='ml-2'>
              <Image src='/images/right-arrow-white.svg' width={21} height={10} alt='arrow' className='arrow-movement' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-55'>
        <div className='font-48 font-extrabold'>Design Recommendations</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 deliverable-description'>
          Design recommendations can be any type, it could be as small as change the communication tone or it could be changing the information architecture, adding or removing the
          sections (wireframes or visual design)
        </div>
        <div className='font-18 font-medium leading-8 w-4/5 height-0 deliverable-description'>
          Submit your website, app, application or any digital products. and we will provide the feedback in 2 working days.{' '}
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>User research report</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 deliverable-description'>
          Actions speak louder than words. Our immersive research (field studies, observations, etc.) reveals what users truly value. You&apos;ll receive a detailed report, video
          recordings, and a team presentation - actionable insights guaranteed.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Expert review</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 deliverable-description'>
          Our product and design experts will review the product using heuristic evaluation, identify the gaps in the product, and provide the best recommendations for the gaps in
          the detailed presentation to your team.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold'>Product and design process</div>
        <div className='font-medium font-24 leading-8 w-4/5 height-0 deliverable-description'>
          Create the process that works best for your business by interviewing stakeholders and holding workshops to develop the UX roadmap so that your organisation may grow
          smoothly by focusing on the right areas.
        </div>
        <div className='services__separator' />
        <div className='font-48 font-extrabold w-5/6'>Websites, Mobile apps, Desktop Apps, Brand, Web App, Watch app, & TV App. </div>
      </div>
    </div>
  );
}
