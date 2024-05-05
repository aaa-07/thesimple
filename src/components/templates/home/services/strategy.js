"use client";
import Image from "next/image";
import React from "react";
import ServiceMenu from "./serviceMenu";
export default function Strategy({ onClose }) {
  const handleCloseButtonClick = () => {
    onClose(); // Call onClose function passed from ServicesTemplate
  };
  return (
    <div
      className="service-section"
      style={{ minWidth: "100vw", display: "inline-block" }}
    >
      <div>
        {/* block 1 */}
        <div
          className="relative"
          style={{
            backgroundColor: "#16002A",
          }}
          id="strategy1"
        >
          <div className="absolute top-0 right-0 mt-0 mr-0 z-10">
            <Image
              src="/images/services/strategy/discovery-watermark.svg"
              height={428}
              width={428}
              alt="discovery"
            />
            <button
              className="close-btn mt-20"
              onClick={handleCloseButtonClick}
            >
              Close
            </button>
          </div>
          <div className="w-45 ">
            <div className="flex sticky top-52 ml-20">
              <div className=" font-extrabold gray-2 mt-10 font-84 purple-3">
                01
              </div>
              <div className="ml-1">
                <div className="font-36 purple-2 font-semibold mt-20 ml-4">
                  Strategy
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <ServiceMenu />
            <div className="bg-blue-4 common-service-illustration ml-34 mt-10  mb-16">
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/strategy/discorvery-icon.svg"
                  height={48}
                  width={48}
                  alt="discovery"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Discovery
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                Here is where your product journey begins: by analyzing <br />
                your vision, comprehending your consumers, and <br />
                researching the market, you may unlock the hidden <br />
                potential within your product.
              </div>
              <div className="flex items-start mt-9 ml-12">
                <Image
                  src="/images/partner/yellow-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Product audit</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/yellow-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Business analysis</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/yellow-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Data analysis</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/yellow-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">User research</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/yellow-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">
                    Competitive analysis
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-64 ml-34">
              <Image
                src="/images/strategy-icon.svg"
                height={84}
                width={93}
                alt="stars"
                // style={{ marginLeft: -29, marginBottom: 149 }}
              />
              <div className=" font-32 font-medium mt-6">Strategy</div>
              <div className="mt-4">
                <div className=" strategy-click-illustration bg-purple-1 ">
                  <div className="flex items-center pl-5">
                    <div className="white-1 font-20 font-bold justify-center mt-4">
                      {/* Let&apos;s partner <br />& build */}
                      Let’s build your strategy
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
