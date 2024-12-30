"use client";

import Image from "next/image";
import React from "react";

export default function WorkPageHeader() {
  return (
    <div className="container flex justify-center">
      <div className={"header-bg fixed top-7 z-20"}>
        <div className="text-white h-full flex items-center md:pl-8 md:pr-4 px-5">
          <div className="font-24 font-extrabold flex items-baseline" onClick={() => (window.location.href = "/")}>
            <Image src="/images/header/logo.svg" height={37} width={134} alt="logo" className="header__logo" />
          </div>

          <button className="ml-auto flex md:text-base text-xs md:leading-5 leading-tight font-semibold md:px-4 md:py-2 p-2 header__work-with-us">
            <div>
              <a href="https://thesimple.zohobookings.in/#/255151000000036016" target="_blank" rel="noreferrer">
                work with us
              </a>
            </div>
            <div className="md:w-8 w-4 md:h-6 h-4 relative overflow-x-hidden">
              <img src="/images/header/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
              <img src="/images/header/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
