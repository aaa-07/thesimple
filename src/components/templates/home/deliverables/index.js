import React from 'react';
import Content from './content';
import Image from 'next/image';

const DELIVERABLES = [
  {imageUrl: '/images/deliverables/website.svg', height: 58, width: 66, title: 'Websites'},
  {imageUrl: '/images/deliverables/mobile-app.svg', height: 58, width: 45, title: 'Mobile Apps'},
  {imageUrl: '/images/deliverables/desktop-app.svg', height: 52, width: 56, title: 'Desktop Apps'},
  {imageUrl: '/images/deliverables/branding.svg', height: 54, width: 50, title: 'Branding'},
  {imageUrl: '/images/deliverables/watch-app.svg', height: 46, width: 44, title: 'Watch App'},
  {imageUrl: '/images/deliverables/tv-app.svg', height: 46, width: 48, title: 'TV App'},
  {imageUrl: '/images/deliverables/web-app.svg', height: 58, width: 66, title: 'Web App'},
  {imageUrl: '/images/deliverables/expert-review.svg', height: 64, width: 46, title: 'Expert review'},
  {imageUrl: '/images/deliverables/product.svg', height: 58, width: 50, title: 'Product process'},
  {imageUrl: '/images/deliverables/user-research.svg', height: 58, width: 54, title: 'User research report'},
  {imageUrl: '/images/deliverables/design-recommendation.svg', height: 58, width: 62, title: 'Design recommendation'},
  {imageUrl: '/images/deliverables/design-process.svg', height: 58, width: 85, title: 'Design process'},
];

export default function Deliverables() {
  return (
    <div className='pt-80'>
      <div className='font-72 font-extrabold mb-6 text-center'>Our deliverables</div>
      <div className='font-48 font-medium text-center mb-28' style={{color: '#D8D8D8'}}>
        We craft experiences beyond imagination
      </div>
      <div className='flex flex-wrap'>
        {DELIVERABLES.map((elm) => (
          <div key={elm.title} className='basis-1/4 mb-28'>
            <div className='w-52 flex justify-center'>
              <Image src={elm.imageUrl} height={elm.height} width={elm.width} alt={elm.title} className='text-center' />
            </div>
            <div className='mt-7 font-32 font-semibold w-52 text-center'>{elm.title}</div>
          </div>
        ))}
      </div>
      {/* <Content /> */}
    </div>
  );
}
