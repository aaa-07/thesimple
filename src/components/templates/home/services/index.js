"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Strategy from "./strategy";
import Design from "./design";
import Development from "./development";
import Growth from "./growth";
import Image from "next/image";
import { Context } from "@/app/page";

export default function Services() {
  const headingRef = useRef();
  const { showHeader } = useContext(Context);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({ strategy: false, design: false, development: false, growth: false });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.bottom < 0) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
      },
      { rootMargin: "0px" }
    );
    observer.observe(headingRef.current);

    const selectors = document.querySelectorAll(".services-description");
    selectors.forEach((selector) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("height-auto", "mt-6");
              observer.disconnect();
            }
          });
        },
        { rootMargin: "-200px" }
      );
      observer.observe(selector);
    });
    const headings = document.querySelectorAll(".services-heading");
    headings.forEach((selector) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.childNodes[0].classList.add("mb-7");
              entry.target.childNodes[2].classList.add("mt-12", "py-5");
              entry.target.classList.add("expanded", "pt-14");
              observer.disconnect();
            }
          });
        },
        { rootMargin: "-200px" }
      );
      observer.observe(selector);
    });

    const strategy = document.getElementById("strategy");
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, strategy: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer2.observe(strategy);
    const design = document.getElementById("design");
    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, design: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer3.observe(design);
    const dev = document.getElementById("dev");
    const observer4 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, development: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer4.observe(dev);
    const grow = document.getElementById("grow");
    const observer5 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, growth: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer5.observe(grow);
  }, []);
  return (
    <>
      <div className="flex mt-80" ref={headingRef}>
        <div>
          <h1 className="font-72 font-extrabold text-white line-height-normal">
            Fuelling innovation, <br />
            exceeding expectations
          </h1>
          <h2 className="font-semibold text-white mt-5 font-42 line-height-normal">let&apos;s push boundaries together.</h2>
        </div>
        <div className="ml-52">
          <div className="flex mb-5">
            <div className="bg-green-1 services-mini-illustration mr-8 pl-4 pt-5">
              <Image src="/images/services/strategy/illustration-mini.svg" height={42} width={40} alt="chess" />
              <div className="mt-4 black-1">Strategy</div>
            </div>
            <div className="bg-blue-1 services-mini-illustration pl-4 pt-5">
              <Image src="/images/services/design/design.svg" height={42} width={43} alt="pen" />
              <div className="mt-4">Design</div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-purple-1 services-mini-illustration mr-8 pl-4 pt-3">
              <Image src="/images/services/development/illustration.svg" height={46} width={40} alt="chess" />
              <div className="mt-4">Development</div>
            </div>
            <div className="bg-warning-1 services-mini-illustration pl-4 pt-3">
              <Image src="/images/services/growth/illustration-mini.svg" height={46} width={34} alt="pen" />
              <div className="mt-4 black-1">Growth</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 services">
        <div className={`${showHeader ? "top-20" : "top-0"} sticky mb-16 bg-black-3 z-10`}>
          <div className="font-72 font-extrabold gray-1">
            <span className="mr-2">Services</span>
            <div className="sub-headings__dot inline-block" />
          </div>
          {show && (
            <div className="services-sticky-view font-20 font-semibold flex items-center">
              <div
                className={`flex items-center bg-green-1 mr-1.5 pl-4 py-2 ${active.strategy ? "opacity-100" : "opacity-30"}`}
                onClick={() => {
                  document.getElementById("strategy").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image src="/images/services/strategy/illustration-mini.svg" height={32} width={31} alt="chess" />
                <div className="black-1 ml-4">Strategy</div>
              </div>
              <div
                className={`flex items-center bg-blue-1 pl-8 py-2 mr-4 ${active.design ? "opacity-100" : "opacity-30"}`}
                onClick={() => {
                  document.getElementById("design").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image src="/images/services/design/design.svg" height={30} width={31} alt="pen" />
                <div className="ml-4">Design</div>
              </div>
              <div
                className={`flex items-center bg-purple-1 pl-4 py-2 mr-1.5 ${active.development ? "opacity-100" : "opacity-30"}`}
                onClick={() => {
                  document.getElementById("dev").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image src="/images/services/development/illustration.svg" height={30} width={26} alt="chess" />
                <div className="ml-4">Development</div>
              </div>
              <div
                className={`flex items-center bg-warning-1 pl-11 py-2 ${active.growth ? "opacity-100" : "opacity-30"}`}
                onClick={() => {
                  document.getElementById("grow").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image src="/images/services/growth/illustration-mini.svg" height={33} width={25} alt="pen" />
                <div className="black-1 ml-5">Growth</div>
              </div>
            </div>
          )}
        </div>
        <div id="strategy">
          <Strategy />
        </div>
        <div className="services__separator" />
        <div id="design">
          <Design />
        </div>
        <div className="services__separator" />
        <div id="dev">
          <Development />
        </div>
        <div className="services__separator" />
        <div id="grow">
          <Growth />
        </div>
      </div>
    </>
  );
}
