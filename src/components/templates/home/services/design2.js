"use client";
import Image from "next/image";
import React from "react";
import ServiceMenu from "./serviceMenu";

export default function Design2({ onClose }) {
  const handleCloseButtonClick = () => {
    onClose(); // Call onClose function passed from ServicesTemplate
  };
  return (
    <div
      className="service-section"
      style={{ minWidth: "100vw", display: "inline-block" }}
    >
      <div>
        {/* block 2 */}

        <div
          className="relative"
          style={{
            backgroundColor: "#00042A",
            width: "100vw",
            flex: "0 0 auto",
          }}
          id="design2"
        >
          <div className="absolute top-0 right-0 mt-0 mr-0 z-10">
            <Image
              src="/images/services/design/branding-watermark.svg"
              height={428}
              width={428}
              alt="discovery"
            />
          </div>
          <button className="close-btn mt-20" onClick={handleCloseButtonClick}>
            Close
          </button>
          <div className="w-45 ">
            <div className="flex sticky top-52 ml-20">
              <div className=" font-extrabold gray-2 mt-10 font-84 blue-3">
                02
              </div>
              <div className="ml-1">
                <div className="font-36 blue-4 font-semibold mt-20 ml-4">
                  Design
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <ServiceMenu />
            <div className="bg-green-1 design-service-illustration ml-34 mt-10  mb-16">
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/design/branding.svg"
                  height={86}
                  width={84}
                  alt="design"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Branding
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                <div className="mt-2">
                  Your voice, your face, your story—we help you build a brand.
                </div>
                <div className="mt-2">
                  It is your unique selling point that attracts clients.
                  However, a
                </div>
                <div className="mt-2">
                  logo and slogan are not enough to create a compelling
                </div>
                <div className="mt-2">
                  brand that stands out in the competitive market.
                </div>
              </div>
              <div className="flex items-start mt-9 ml-12">
                <Image
                  src="/images/partner/red-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Brand strategy</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/red-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Brand identity</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/red-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Logo design</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/red-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Brand guidelines</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/red-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">
                    Marketing materials
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-64 ml-34">
              <Image
                src="/images/design-icon.svg"
                height={86}
                width={84}
                alt="design"
              />
              <div className=" font-32 font-medium mt-6">Design</div>
              <div className="mt-4">
                <div className=" design-click-illustration bg-blue-1 ">
                  <div className="flex items-center pl-5">
                    <div className="white-1 font-20 font-bold justify-center mt-4">
                      Let’s design
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
