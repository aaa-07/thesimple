import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useRef } from "react";

export default function Main() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.bottom < 0) {
            document.getElementById("header").className =
              "header-bg sticky top-0 z-20 block";
            //   entry.target.classList.add('height-auto', 'mt-6');
          } else {
            document.getElementById("header").className =
              "header-bg sticky top-0 z-20 hidden";
            // setShow(false);
          }
        });
      },
      { rootMargin: "0px" }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <div ref={ref}>
      <div className="font-24 font-extrabold flex items-baseline justify-center mt-40">
        <Image src="/images/logo3.svg" height={70} width={253.98} alt="logo" />
        {/* <div className="ml-1">thesimple</div> */}
      </div>
      <div className="font-36 font-medium text-center mt-9">
        Discover
        <span className="main-container__dot inline-block bg-white mx-1" />
        Design
        <span className="main-container__dot inline-block bg-white mx-1" />
        Growth
      </div>
      <h1 className="font-84 font-extrabold mt-2 text-center">
        We’re product innovation team
      </h1>
      <div className="gray-6 font-36 mt-8 text-center">
        We discover user needs & turns them into product success with <br />
        thesimple<sup>&trade;</sup> strategy & design
      </div>
      <div className="mt-20 flex justify-center">
        <Link href="/about">
          <div className="main-container__lets-talk  flex justify-center items-center font-40">
            <div>
              <div>Let&apos;s </div>
              <div>talk </div>
              <div className=" mt-10">
                <Image
                  src="/images/lets_talk_arrow.svg"
                  height={10}
                  width={30}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
