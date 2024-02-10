import Image from 'next/image';
import React, {useEffect} from 'react';

export default function Strategy() {
  return (
    <div className='flex'>
      <div className='w-45'>
        <div className='flex sticky top-52'>
          <div className='font-48 font-extrabold gray-2'>01</div>
          <div className='services-heading ml-1'>
            <Image src='/images/services/strategy/illustration.svg' height={102} width={97} alt='image' />
            <div className='font-32 font-semibold mt-2'>Strategy</div>
            <div className='strategy-illustration bg-green-1 flex'>
              <Image src='/images/services/strategy/specs.svg' height={33} width={62} alt='image' className='strategy-illustration__icon' />
              <div className='flex items-center pl-5'>
                <div className='black-1 font-20 font-bold'>Let&apos;s build your strategy</div>
                <div className='ml-2'>
                  <Image src='/images/right-arrow-black.svg' width={21} height={10} alt='arrow' className='arrow-movement' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-55 strategy-points'>
        <div>
          <div className='font-48 font-extrabold flex items-center'>
            <Image src='/images/services/strategy/discovery.svg' width={58} height={76} alt='Discovery' className='mr-7' /> Discovery
          </div>
          <div className='font-medium font-24 leading-8 w-4/5 height-0 services-description'>
            <div>Your product adventure starts here by unleashing the hidden potentials within your product by analysing your vision, understating your users, and market. </div>
            <div className='mt-14'>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Product Audit
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Business Analysis
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Data Analysis
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> User Research
              </div>
              <div className='font-27 font-semibold mb-16 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Competitive analysis
              </div>
            </div>
          </div>
        </div>
        <div className='services__separator' />
        <div>
          <div className='font-48 font-extrabold flex items-center'>
            <Image src='/images/services/strategy/product.svg' width={75} height={76} alt='Product definition' className='mr-7' /> Product definition
          </div>
          <div className='font-medium font-24 leading-8 w-4/5 height-0 services-description'>
            <div>
              We start with empathy, end with your product success. We guide you from initial product plan to thriving growth strategy, empowering you to craft solutions that
              matter, resonate with users, and dominate the market.
            </div>
            <div className='mt-14'>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Define user problems
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Product planning
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> MVP
              </div>
              <div className='font-27 font-semibold mb-8 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Full product
              </div>
              <div className='font-27 font-semibold mb-16 flex'>
                <Image src='/images/services/purple.svg' height={20} width={20} alt='purple check' className='mr-4' /> Growth strategy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
