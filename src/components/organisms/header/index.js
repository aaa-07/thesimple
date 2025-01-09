"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default function Header({ isDeliverablesVisible }) {
  return (
    <div className="container flex justify-center">
      <div className={"header-bg fixed top-7 z-20"}>
        <div className="text-white h-full flex items-center md:pl-8 md:pr-4 px-5">
          <div className="font-24 font-extrabold flex items-baseline">
            <Image src="/images/header/logo.svg" height={37} width={134} alt="logo" className="header__logo" />
          </div>
          <div className={classNames(isDeliverablesVisible ? "text-white" : "", "text-sm ml-52 header-option md:block hidden")}>
            <span
              className="cursor-pointer mx-8 select-service"
              onClick={() => {
                document.getElementById("services").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </span>
            <span
              className="cursor-pointer select-deliverables"
              onClick={() => {
                document.getElementById("deliverables").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Testimonials
            </span>
          </div>
          <div className="md:ml-auto relative md:block hidden">
            <div className="header__online-container flex justify-end">
              <img src="/images/header/online.png" height={40} width={40} alt="logo" className="header__online" />
              {/* <img src="/images/header/hi.png" height={20} width={22} alt="logo" className="header__hi" /> */}
              <div className="header__hi">👋</div>
            </div>
            <div className="header__open-for-work">Open for work</div>
          </div>
          <div className="relative md:ml-4 ml-auto">
            <div className="header__play-container" onClick={() => (window.location.href = "/work")}>
              <img src="/images/header/play.svg" height={14} width={12} alt="play" className="header__play" />
              <img src="/images/header/figma.svg" height={17} width={12} alt="play" className="header__figma" />
            </div>
            <div className="header__see-our-works">See our works</div>
          </div>
          <button className="md:ml-3 ml-2 flex items-center md:text-base text-xs md:leading-5 leading-tight font-semibold md:px-4 md:py-2 p-2 header__work-with-us">
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
