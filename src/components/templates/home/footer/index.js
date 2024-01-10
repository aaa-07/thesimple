import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className='mb-20'>
      <div className='flex'>
        <div>
          <div className='font-28 font-bold mb-5'>Services</div>
          <div className='flex'>
            <div>
              <div className='font-22 font-bold'>Discovery</div>
              <div className='font-14 mb-4 gray-7'>Strategy</div>
              <div className='font-18 mb-4'>Product auditing</div>
              <div className='font-18 mb-4'>Business analysis</div>
              <div className='font-18 mb-4'>Data analysis</div>
              <div className='font-18 mb-4'>User research</div>
              <div className='font-18 mb-8'>competitive analysis</div>

              <div className='font-22 font-bold'>Product definition</div>
              <div className='font-14 mb-4 gray-7'>Strategy</div>
              <div className='font-18 mb-4'>Define user problems</div>
              <div className='font-18 mb-4'>Product planning</div>
              <div className='font-18 mb-4'>MVP</div>
              <div className='font-18 mb-4'>Full product</div>
              <div className='font-18 mb-4'>Growth strategy</div>
            </div>
            <div className=' mx-14'>
              <div className='font-22 font-bold'>Branding</div>
              <div className='font-14 mb-4 gray-7'>Design</div>
              <div className='font-18 mb-4'>Brand strategy</div>
              <div className='font-18 mb-4'>Brand identity</div>
              <div className='font-18 mb-4'>Logo design</div>
              <div className='font-18 mb-4'>Brand guidelines</div>
              <div className='font-18 mb-8'>Marketing materials</div>

              <div className='font-22 font-bold'>Multimedia</div>
              <div className='font-14 mb-4 gray-7'>Strategy</div>
              <div className='font-18 mb-4'>Motion design</div>
              <div className='font-18 mb-4'>Illustration & Graphic</div>
              <div className='font-18 mb-4'>Video</div>
              <div className='font-18 mb-4'>Art direction</div>
            </div>
            <div>
              <div className='font-22 font-bold'>Branding</div>
              <div className='font-14 mb-4 gray-7'>Design</div>

              <div className='font-18 mb-4'>Customer experience</div>
              <div className='font-18 mb-4'>User experience</div>
              <div className='font-18 mb-4'>Interaction design</div>
              <div className='font-18 mb-4'>User interface design</div>
              <div className='font-18 mb-4'>Design prototype</div>
              <div className='font-18 mb-4'>User testing</div>
              <div className='font-18 mb-4'>Design system</div>
              <div className='font-18 mb-4'>Developer guide</div>
              <div className='font-18 mb-4'>Expert reviews</div>
              <div className='font-18 mb-4'>Inclusive design</div>
              <div className='font-18 mb-4'>Localisation UX</div>
              <div className='font-18 mb-4'>Emotional design</div>
            </div>
          </div>
        </div>
        <div className='mx-16'>
          <div className='font-28 font-bold mb-5'>Deliverables</div>
          <div className='font-18 mb-4'>Design Recommendations</div>
          <div className='font-18 mb-4'>User research report</div>
          <div className='font-18 mb-4'>Expert review</div>
          <div className='font-18 mb-4'>Product and design process</div>
          <div className='font-18 mb-4'>Websites</div>
          <div className='font-18 mb-4'>Mobile apps</div>
          <div className='font-18 mb-4'>Desktop Apps.</div>
          <div className='font-18 mb-4'>Brand</div>
          <div className='font-18 mb-4'>Web App</div>
          <div className='font-18 mb-4'>Watch app</div>
          <div className='font-18 mb-4'>TV App</div>
        </div>
        <div className='footer-white-container pl-8 pr-14 py-7 black-2'>
          <div className='font-20 font-extrabold flex'>
            <div>Have an idea?</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='mb-7 text-xs w-36'>We help in crafting your idea to innovation</div>
          <div className='font-20 font-extrabold flex'>
            <div className=' w-48'>Monthly subscription</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='mb-7 text-xs w-48'>Ideal for product based companies (MNC and Startup’s)</div>
          <div className='font-20 font-extrabold flex'>
            <div>Project</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='mb-7 text-xs'>Any company</div>
          <div className='font-20 font-extrabold flex mb-7'>
            <div className=' w-48'>Expert product & design review</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='font-20 font-extrabold flex mb-7'>
            <div>Design sprint</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='font-20 font-extrabold flex mb-7'>
            <div>Expert Audit</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
          <div className='font-20 font-extrabold flex mb-7'>
            <div className=' w-48'>Product and design strategy workshop</div>
            <Image src='/images/right-arrow-black.svg' height={10} width={20} alt='arrow' className='ml-auto' />
          </div>
        </div>
      </div>
      <div className='mt-24 flex'>
        <div>
          <div className='font-28 font-bold mb-5'>Improve KPIs</div>
          <div className='font-18 mb-4'>Improve user engagement or adoption</div>
          <div className='font-18 mb-4'>Improve conversion rate</div>
          <div className='font-18 mb-4'>Improve customer acquisition</div>
          <div className='font-18 mb-4'>Improve customer retention</div>
          <div className='font-18 mb-4'>Improve a Service or product&apos;s KPIs with UX</div>
        </div>
        <div className=' ml-28'>
          <div className='font-28 font-bold mb-5'>Education</div>
          <div className='flex'>
            <div className='w-44'>
              <div className='font-18 mb-4'>Beginners Product design course</div>
              <div className='font-18 mb-4'>User experience design</div>
              <div className='font-18 mb-4'>User interphase design</div>
              <div className='font-18 mb-4'>Project management</div>
              <div className='font-18 mb-4'>Training design team in the organisations</div>
            </div>
            <div className='w-44 ml-16'>
              <div className='font-18 mb-4'>Advance product design course</div>
              <div className='font-18 mb-4'>User research</div>
              <div className='font-18 mb-4'>Product management</div>
              <div className='font-18 mb-4'>Story telling approach in design</div>
            </div>
          </div>
        </div>
        <div className='ml-20 black-3 footer-container-2 px-8 pb-10 flex flex-col'>
          <div className='font-40 font-bold mb-5 mt-auto'>Contact us</div>
          <div className='flex mb-6'>
            <Image src='/images/email.svg' height={38} width={38} alt='email' />
            <div className='font-24 font-medium ml-5'>hi@thesimple.design</div>
          </div>
          <div className='flex'>
            <Image src='/images/mobile.svg' height={30} width={30} alt='mobile' />
            <div className='font-24 font-medium ml-5'>+91 9515956046</div>
          </div>
        </div>
      </div>
    </div>
  );
}
