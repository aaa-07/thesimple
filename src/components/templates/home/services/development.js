"use client";
import Image from "next/image";
import React from "react";
import ServiceMenu from "./serviceMenu";

export default function Development({ onClose }) {
  const handleCloseButtonClick = () => {
    onClose(); // Call onClose function passed from ServicesTemplate
  };
  return (
    <div
      className="service-section"
      style={{ minWidth: "100vw", display: "inline-block" }}
    >
      <div>
        <div
          className="relative"
          style={{
            backgroundColor: "#270000",
          }}
          id="development"
        >
          <div className="absolute top-0 right-0 mt-0 mr-0 z-10">
            <Image
              src="/images/services/development/develop-watermark.svg"
              height={551}
              width={400}
              alt="discovery"
            />
          </div>
          <button className="close-btn mt-20" onClick={handleCloseButtonClick}>
            Close
          </button>
          <div className="w-45 ">
            <div className="flex sticky top-52 ml-20">
              <div className=" font-extrabold gray-2 mt-10 font-96 brown-1">
                03
              </div>
              <div className="ml-1">
                <div className="font-36 orange-1 font-semibold mt-20 ml-4">
                  Development
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <ServiceMenu />
            <div className="bg-yellow-1 development-service-illustration ml-34 mt-10  mb-16">
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/development/frontend-icon.svg"
                  height={85}
                  width={80}
                  alt="frontend"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Frontend
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                <div className="mt-2">
                  We don't just code, we craft. Our frontend development
                </div>
                <div className="mt-2">
                  team translates stunning designs into seamless, interactive
                </div>
                <div className="mt-2">
                  experiences that users adore. Our team converts creative
                </div>
                <div className="mt-2">
                  vision into a functional, flawless reality.
                </div>
              </div>
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/development/backend-icon.svg"
                  height={80}
                  width={85}
                  alt="backend"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Backend
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                <div className="mt-2">
                  We build on industry-leading technologies and best
                </div>
                <div className="mt-2">
                  practices to ensure your product remains accessible,
                </div>
                <div className="mt-2">stable, and ready for anything.</div>
              </div>
            </div>

            <div className=" mt-64 ml-34">
              <Image
                src="/images/dev-icon.svg"
                height={84}
                width={93}
                alt="stars"
                // style={{ marginLeft: -29, marginBottom: 149 }}
              />
              <div className=" font-32 font-medium mt-6">Development</div>
              <div className="mt-4">
                <div className=" develop-click-illustration bg-orange-1 ">
                  <div className="flex items-center pl-5">
                    <div className="white-1 font-20 font-bold justify-center mt-4">
                      {/* Let&apos;s partner <br />& build */}
                      Let’s develop
                    </div>
                    <div className="ml-2">
                      <Image
                        src="/images/right-arrow-white.svg"
                        width={21}
                        height={10}
                        alt="arrow"
                        className="arrow-movement mt-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
