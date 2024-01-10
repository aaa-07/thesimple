import React from 'react';
import Strategy from './strategy';
import Design from './design';
import Development from './development';
import Growth from './growth';

export default function Services() {
  return (
    <div className='mt-24'>
      <div className='font-72 font-extrabold gray-1 mb-16'>
        <span className='mr-2'>Services</span>
        <div className='sub-headings__dot inline-block' />
      </div>
      <Strategy />
      <div className='services__separator' />
      <Design />
      <div className='services__separator' />
      <Development />
      <div className='services__separator' />
      <Growth />
    </div>
  );
}
