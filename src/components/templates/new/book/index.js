"use client";

import { useCallback, useEffect, useState } from "react";

const DATA = [
  { title: "Outdated System", content: "Replace or upgrade systems older than 3 years. " },
  { title: "Frustrating User Experience", content: "Wave goodbye to confusing interfaces that drive users away." },
  { title: "Launch Delays", content: "Avoid missed opportunities with designs that are market-ready on time." },
  { title: "Non-Mobile Friendly Interfaces", content: "Leave mismatched visuals behind and create a cohesive brand identity." },
  { title: "Low Conversion Rates", content: "Stop losing potential customers with designs that don’t convert." },
  { title: "Rigid Systems", content: "No more designs that limit your growth—scale effortlessly with us." },
  { title: "Inconsistent Branding", content: "Leave mismatched visuals behind and create a cohesive brand identity." },
  { title: "Complicated User Journey", content: "End user confusion with streamlined and intuitive navigation." },
  { title: "Exclusivity Issues", content: "Stop excluding users with inaccessible designs embrace inclusivity." },
  { title: "Customer Complaints", content: "Eliminate negative feedback with solutions your users love." },
  { title: "Limited Reach", content: "Stop being confined to one market—localize and expand globally." },
  { title: "Blending In with Competitors", content: "Stand out boldly with designs that make your brand unforgettable." },
];

export default function BookingSection() {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev === DATA.length - 1 ? 0 : prev + 1));
  }, [DATA.length]);

  //   const previousSlide = () => {
  //     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  //   };

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]);

  return (
    <div className="booking-shade">
      <div className="container flex justify-center">
        <div className="booking-section">
          <div className="booking-section__container md:flex">
            <div>
              <div className="text-white md:mb-8 mb-6">Say goodbye to </div>
              <div className="overflow-hidden sticky top-36" style={{ width: "310px" }}>
                <div className="flex transition-transform duration-500 ease-out" style={{ width: "3720px", transform: `translateX(-${slide * 310}px)` }}>
                  {DATA.map((elm, index) => (
                    <div className="shrink-0" style={{ width: "310px" }} key={index}>
                      <div className="md:text-2xl md:leading-7 text-base leading-5 font-roboto" style={{ color: "#B7BCCB" }}>
                        {elm.title}
                      </div>
                      <div className="md:text-sm text-xs leading-5 mt-2 font-inter" style={{ color: "#B7BCCB" }}>
                        {elm.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-11">
                <img src="/images/home/book/email.svg" alt="booking" height={42} width={42} />
                <div className="text-sm leading-5 ml-3">
                  <div style={{ color: "#D0D6E8" }} className="mb-1">
                    Email
                  </div>
                  <div style={{ color: "#979BA9" }}>projects@thesimple.design</div>
                </div>
              </div>
              <div className="flex mb-12">
                <img src="/images/home/book/phone.svg" alt="booking" height={42} width={42} />
                <div className="text-sm leading-5 ml-3">
                  <div style={{ color: "#D0D6E8" }} className="mb-1">
                    Phone
                  </div>
                  <div style={{ color: "#979BA9" }}>+91 9515956046</div>
                </div>
              </div>
              <a href="https://thesimple.zohobookings.in/#/255151000000036016" target="_blank" rel="noreferrer">
                <button className="flex booking__schedule">
                  <div>Schedule a meeting </div>
                  <div className="md:w-8 w-6 md:h-6 h-6 relative overflow-x-hidden">
                    <img src="/images/home/book/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
                    <img src="/images/home/book/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
