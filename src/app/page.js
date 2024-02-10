'use client';
import Header from '@/components/organisms/header';
import HomeTemplate from '@/components/templates/home';
import Image from 'next/image';
import {createContext, useEffect, useState} from 'react';

export const Context = createContext({showHeader: true});
let count = 0;

export default function Home() {
  const [showHeader, setHeader] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', handleHeaderVisibility);
    return () => document.removeEventListener('scroll', handleHeaderVisibility);
  }, []);

  const handleHeaderVisibility = () => {
    if (window.scrollY > count) {
      setHeader(false);
    } else {
      setHeader(true);
    }
    count = window.scrollY;
  };

  return (
    <Context.Provider value={{showHeader}}>
      <div>
        <Header />
        <HomeTemplate />
      </div>
    </Context.Provider>
  );
}
