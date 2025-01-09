"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hoc/isMobile";

const DELIVERABLES = [
  {
    imageUrl: "/images/home/deliverables/website.svg",
    height: 58,
    width: 65,
    mobileHeight: 33,
    mobileWidth: 37,
    title: "Websites",
  },
  {
    imageUrl: "/images/home/deliverables/mobile-app.svg",
    height: 58,
    width: 45,
    mobileHeight: 33,
    mobileWidth: 26,
    title: "Mobile Apps",
  },
  {
    imageUrl: "/images/home/deliverables/desktop-app.svg",
    height: 52,
    width: 56,
    mobileHeight: 33,
    mobileWidth: 32,
    title: "Desktop Apps",
  },
  {
    imageUrl: "/images/home/deliverables/branding.svg",
    height: 54,
    width: 50,
    mobileHeight: 33,
    mobileWidth: 27,
    title: "Branding",
  },
  {
    imageUrl: "/images/home/deliverables/watch-app.svg",
    height: 46,
    width: 44,
    mobileHeight: 33,
    mobileWidth: 24,
    title: "Watch App",
  },
  {
    imageUrl: "/images/home/deliverables/tv-app.svg",
    height: 46,
    width: 48,
    mobileHeight: 33,
    mobileWidth: 27,
    title: "TV App",
  },
  {
    imageUrl: "/images/home/deliverables/web-app.svg",
    height: 58,
    width: 66,
    mobileHeight: 33,
    mobileWidth: 35,
    title: "Web App",
  },
  {
    imageUrl: "/images/home/deliverables/expert-review.svg",
    height: 64,
    width: 46,
    mobileHeight: 33,
    mobileWidth: 27,
    title: "Expert review",
  },
  {
    imageUrl: "/images/home/deliverables/product.svg",
    height: 58,
    width: 50,
    mobileHeight: 33,
    mobileWidth: 28,
    title: "Product process",
  },
  {
    imageUrl: "/images/home/deliverables/user-research.svg",
    height: 58,
    width: 54,
    mobileHeight: 33,
    mobileWidth: 31,
    title: "User research report",
  },
  {
    imageUrl: "/images/home/deliverables/design-recommendation.svg",
    height: 58,
    width: 62,
    mobileHeight: 33,
    mobileWidth: 35,
    title: "Design recommendation",
  },
  {
    imageUrl: "/images/home/deliverables/design-process.svg",
    height: 58,
    width: 85,
    mobileHeight: 33,
    mobileWidth: 49,
    title: "Design process",
  },
];

const DATA = [
  {
    imageUrl: "/images/home/deliverables/analytics.svg",
    title: "Analytics",
  },
  {
    imageUrl: "/images/home/deliverables/saas.svg",
    title: "SaaS",
  },
  {
    imageUrl: "/images/home/deliverables/fintech.svg",
    title: "Fintech & banking",
  },
  {
    imageUrl: "/images/home/deliverables/trading.svg",
    title: "Trading",
  },
  {
    imageUrl: "/images/home/deliverables/healthcare.svg",
    title: "Healthcare",
  },
  {
    imageUrl: "/images/home/deliverables/gen-ai.svg",
    title: "Gen AI",
  },
  {
    imageUrl: "/images/home/deliverables/e-learning.svg",
    title: "E-Learning",
  },
  {
    imageUrl: "/images/home/deliverables/sun.svg",
    title: "Renewable energy",
  },
];

export default function Deliverables() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleBackground, setToggleBackground] = useState(true);
  const isMobile = useIsMobile();
  const ref = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setToggleBackground(entry.isIntersecting);
  //           observer.disconnect();
  //         }
  //       });
  //     },
  //     { rootMargin: "0px", threshold: 0.3 }
  //   );
  //   observer.observe(ref.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    if (!isMobile) return;
    const scrollSpeed = 0.1; // Pixels per frame
    const animationFrame = requestAnimationFrame(function scroll() {
      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed;

        // Reset position when all images have scrolled
        if (newPosition >= 1024) {
          // 200px is image width + gap
          return 0;
        }
        return newPosition;
      });
      requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [isMobile]);

  return (
    <div style={{ backgroundColor: toggleBackground ? "#020202" : "#f3f3fa", color: toggleBackground ? "#f3f3fa" : "#020202", transition: "all 1.5s ease-in-out" }} ref={ref}>
      <div className="container flex justify-center">
        <div className="deliverables-section">
          <div>Our deliverables</div>
          <div>
            We craft experiences across domains <span className="font-allura">beyond imaginations</span>
          </div>

          <div className="md:flex hidden overflow-hidden md:gap-x-9 gap-x-6">
            {DATA.map((elm, index) => (
              <div key={index}>
                <div className="w-max">
                  <Image src={elm.imageUrl} height={16} width={16} alt={elm.title} className="text-center inline" />
                  <span className="md:text-sm text-xs leading-5 text-center ml-2 font-roboto">{elm.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="md:hidden flex md:gap-x-9 gap-x-6 deliverables-section__domains"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                // Double the images to create seamless loop
                width: `${1024 * 2}px`,
              }}
            >
              {[...DATA, ...DATA].map((elm, index) => (
                <div key={index}>
                  <div className="w-max">
                    <Image src={elm.imageUrl} height={16} width={16} alt={elm.title} className="text-center inline" />
                    <span className="md:text-sm text-xs leading-5 text-center ml-2 font-roboto">{elm.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap md:gap-y-20 md:mt-20 mt-14 gap-y-12">
            {DELIVERABLES.map((elm) => (
              <div key={elm.title} className="md:basis-1/4 basis-1/3">
                <div className="flex justify-center">
                  <Image
                    src={elm.imageUrl}
                    height={isMobile ? elm.mobileHeight : elm.height}
                    width={isMobile ? elm.mobileWidth : elm.width}
                    alt={elm.title}
                    className="text-center"
                  />
                </div>
                <div className="md:mt-7 mt-3 md:text-xl text-xs md:leading-6 leading-3 font-medium text-center md:w-full w-20 mx-auto">{elm.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
