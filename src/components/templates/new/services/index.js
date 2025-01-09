"use client";

import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

const STARTEGIC_DATA = [
  "Brand Identity",
  "Brand strategy",
  "Brand guidelines",
  "Logo design",
  "UX Copywriting for User Connection",
  "Custom Illustration",
  "Marketing Collateral",
  "Pitch deck",
  "Social Media Assets",
  "Motion Design",
];

const DESIGN_DATA = ["UX UI Audit + Product Audit", "Working Prototype", "User Research", "Custom Design System", "UX & UI Design Services", "Design Sprint - Solution in 1 week"];

const DEVELOPMENT_DATA = [
  "Conversion-focused websites",
  "Enterprise System Development",
  "Frontend Development",
  "Custom Mobile App Development",
  "Custom Web App Development",
  "Backend Development",
  "No Code Shopify Development",
  "No Code Webflow Development",
];

const STARTEGIC_DATA_METRICS = [
  { heading: "More likely to trust a brand", value: "46%", description: "Consistent branding across platforms builds consumer trust by almost half." },
  { heading: "increased recognition", value: "82% ", description: "Strong branding improves recognition and recall for products or services." },
  { heading: "higher revenue", value: "33% ", description: "Brands with a consistent identity outperform competitors financially." },
];

const DESIGN_DATA_METRICS = [
  { heading: "of users won't return", value: "88%", description: "Poor UX UI design deters users from revisiting your product or website." },
  { heading: "More likely to convert", value: "70%", description: "Intuitive design increases conversions and user engagement dramatically." },
  { heading: "improved productivity", value: "200%", description: "Enterprise tools with great UX lead to more efficient employee workflows. " },
];

const DEVELOPMENT_DATA_METRICS = [
  { heading: "load time boosts conversion by 27%", value: "1s", description: "Speed is critical: slow apps lose potential users and revenue." },
  { heading: "prefer mobile first experiences", value: "47%", description: "Well developed mobile platforms drive better engagement and loyalty." },
  { heading: "reduction in downtime", value: "95%", description: "Robust backend systems ensure smooth and reliable experinces." },
];

export default function ServicesSection() {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev === STARTEGIC_DATA_METRICS.length - 1 ? 0 : prev + 1));
  }, [STARTEGIC_DATA_METRICS.length]);

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
    <div id="services" className="services-section__shade">
      <div className="container md:flex justify-center hidden">
        <div className="services-section">
          {/* <div className="mb-40 services-section__fadeIn">
            <div className="font-medium text-4xl leading-10">Fuelling innovation, </div>
            <div className="font-allura text-4xl leading-10">exceeding expectations</div>
            <div className="mt-6 font-roboto gray-9">
              Let's push boundaries together. <img src="/images/home/services/plane.svg" alt="plane" className="inline ml-2" />
            </div>
          </div> */}
          <div className="md:flex md:gap-x-9 services-section__fadeIn">
            <div className="services-section__1 flex items-center">
              <div className="overflow-hidden" style={{ width: "224px" }}>
                <div
                  className={classNames("flex", slide === 0 ? "" : "transition-transform duration-500 ease-out")}
                  style={{ width: "672px", transform: `translateX(-${slide * 224}px)` }}
                >
                  {STARTEGIC_DATA_METRICS.map((elm, index) => (
                    <div className="w-56 shrink-0" key={index}>
                      <div>
                        <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                        <span className="text-base font-semibold leading-5">{elm.value} </span>
                        <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                      </div>
                      <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="services-section__2">
              <img src="/images/home/services/1.svg" alt="1" height={48} width={48} />
              <div className="mt-7 mb-2 text-xl leading-10 font-bold">Strategic Branding</div>
              <div className="font-inter text-sm leading-5 mb-16" style={{ color: "#6A6784", width: "412px" }}>
                Your voice, your face, your story - Your product deserves a brand that stands out. We create identities that captivate investors and outshine competitors, from
                impactful pitch decks to scalable brand systems that drive your growth.
              </div>
              <div className="flex flex-wrap gap-y-14">
                {STARTEGIC_DATA.map((elm, index) => (
                  <div className="basis-1/2 leading-5 text-sm font-inter font-medium" style={{ color: "#24252C" }} key={index}>
                    <span>|</span>
                    <span className="ml-6">{elm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:gap-x-9 md:my-44 services-section__fadeIn">
            <div className="services-section__1 flex items-center">
              <div className="overflow-hidden" style={{ width: "224px" }}>
                <div
                  className={classNames("flex", slide === 0 ? "" : "transition-transform duration-500 ease-out")}
                  style={{ width: "672px", transform: `translateX(-${slide * 224}px)` }}
                >
                  {DESIGN_DATA_METRICS.map((elm, index) => (
                    <div className="w-56 shrink-0" key={index}>
                      <div>
                        <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                        <span className="text-base font-semibold leading-5">{elm.value} </span>
                        <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                      </div>
                      <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="services-section__2">
              <img src="/images/home/services/2.svg" alt="2" height={48} width={48} />
              <div className="mt-7 mb-2 text-xl leading-10 font-bold">Product Design</div>
              <div className="font-inter text-sm leading-5 mb-16" style={{ color: "#6A6784", width: "455px" }}>
                We design products that thrive. Slick user interfaces and cutting-edge functionality are not the only aspects of our product design process. As we dig further, we
                reveal the human experience at the core of your product that drive adoption, retention, and growth.
              </div>
              <div className="flex flex-wrap gap-y-14">
                {DESIGN_DATA.map((elm, index) => (
                  <div className="basis-1/2 leading-5 text-sm font-inter font-medium" style={{ color: "#24252C" }} key={index}>
                    <span>|</span>
                    <span className="ml-6">{elm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:gap-x-9 services-section__fadeIn">
            <div className="services-section__1 flex items-center">
              <div className="overflow-hidden" style={{ width: "240px" }}>
                <div
                  className={classNames("flex", slide === 0 ? "" : "transition-transform duration-500 ease-out")}
                  style={{ width: "720px", transform: `translateX(-${slide * 240}px)` }}
                >
                  {DEVELOPMENT_DATA_METRICS.map((elm, index) => (
                    <div className="w-60 shrink-0" key={index}>
                      <div>
                        <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                        <span className="text-base font-semibold leading-5">{elm.value} </span>
                        <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                      </div>
                      <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="services-section__2">
              <img src="/images/home/services/3.svg" alt="3" height={48} width={48} />
              <div className="mt-7 mb-2 text-xl leading-10 font-bold">Development</div>
              <div className="font-inter text-sm leading-5 mb-16" style={{ color: "#6A6784", width: "364px" }}>
                We don't just code, we craft. Our development team translates stunning designs into seamless, interactive experiences that users adore. Our team converts creative
                vision into a functional, flawless reality.
              </div>
              <div className="flex flex-wrap gap-y-14">
                {DEVELOPMENT_DATA.map((elm, index) => (
                  <div className="basis-1/2 leading-5 text-sm font-inter font-medium" style={{ color: "#24252C" }} key={index}>
                    <span>|</span>
                    <span className="ml-6">{elm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container md:hidden block">
        <div className="services-section px-4">
          <div className="font-medium text-2xl leading-10">Fuelling innovation, </div>
          <div className="font-allura text-3xl leading-10">exceeding expectations</div>
          <div className="mt-1 font-roboto">Let's push boundaries together.</div>

          <div className="mt-16 px-5">
            <img src="/images/home/services/1.svg" alt="1" height={48} width={48} />
            <div className="mt-4 mb-2 text-xl leading-10 font-bold">Strategic Branding</div>
            <div className="font-inter text-sm leading-5 mb-10" style={{ color: "#6A6784" }}>
              Your voice, your face, your story - Your product deserves a brand that stands out. We create identities that captivate investors and outshine competitors, from
              impactful pitch decks to scalable brand systems that drive your growth.
            </div>
            <div className="flex gap-x-6 overflow-auto hide-scroll">
              {STARTEGIC_DATA_METRICS.map((elm, index) => (
                <div className="w-56 shrink-0" key={index}>
                  <div>
                    <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                    <span className="text-base font-semibold leading-5">{elm.value} </span>
                    <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                  </div>
                  <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              {STARTEGIC_DATA.map((elm, index) => (
                <div className="leading-5 text-sm font-inter font-medium mb-5" style={{ color: "#24252C" }} key={index}>
                  <span>|</span>
                  <span className="ml-3">{elm}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:mt-16 mt-20 px-5">
            <img src="/images/home/services/2.svg" alt="2" height={48} width={48} />
            <div className="mt-4 mb-2 text-xl leading-10 font-bold">Product Design</div>
            <div className="font-inter text-sm leading-5 mb-10" style={{ color: "#6A6784" }}>
              We design products that thrive. Slick user interfaces and cutting-edge functionality are not the only aspects of our product design process. As we dig further, we
              reveal the human experience at the core of your product that drive adoption, retention, and growth.
            </div>
            <div className="flex gap-x-6 overflow-auto hide-scroll">
              {DESIGN_DATA_METRICS.map((elm, index) => (
                <div className="w-56 shrink-0" key={index}>
                  <div>
                    <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                    <span className="text-base font-semibold leading-5">{elm.value} </span>
                    <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                  </div>
                  <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              {DESIGN_DATA.map((elm, index) => (
                <div className="mb-5 leading-5 text-sm font-inter font-medium" style={{ color: "#24252C" }} key={index}>
                  <span>|</span>
                  <span className="ml-3">{elm}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:mt-16 mt-20 px-5">
            <img src="/images/home/services/3.svg" alt="3" height={48} width={48} />
            <div className="mt-4 mb-2 text-xl leading-10 font-bold">Development</div>
            <div className="font-inter text-sm leading-5 mb-10" style={{ color: "#6A6784" }}>
              We don't just code, we craft. Our development team translates stunning designs into seamless, interactive experiences that users adore. Our team converts creative
              vision into a functional, flawless reality.
            </div>
            <div className="flex gap-x-6 overflow-auto hide-scroll">
              {DEVELOPMENT_DATA_METRICS.map((elm, index) => (
                <div className="w-60 shrink-0" key={index}>
                  <div>
                    <img src="/images/home/services/bar-chart.svg" alt="bar chart" height={18} width={18} className="inline mr-1" />
                    <span className="text-base font-semibold leading-5">{elm.value} </span>
                    <span className="text-xs leading-5 font-medium">{elm.heading}</span>
                  </div>
                  <div className="text-xs leading-5 gray-9 mt-2 font-inter">{elm.description}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              {DEVELOPMENT_DATA.map((elm, index) => (
                <div className="mb-5 leading-5 text-sm font-inter font-medium" style={{ color: "#24252C" }} key={index}>
                  <span>|</span>
                  <span className="ml-3">{elm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
