"use client";
import Image from "next/image";
import React from "react";
import ServiceMenu from "./serviceMenu";
export default function Strategy2({ onClose }) {
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
            backgroundColor: "#16002A",
          }}
          id="strategy2"
        >
          <div className="absolute top-0 right-0 mt-0 mr-0 z-10">
            <Image
              src="/images/services/strategy/product-watermark.svg"
              height={428}
              width={428}
              alt="product"
            />
          </div>
          <button className="close-btn mt-20" onClick={handleCloseButtonClick}>
            Close
          </button>
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
            <div className="bg-green-1 common-service-illustration ml-34 mt-10  mb-16">
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/strategy/product-icon.svg"
                  height={48}
                  width={48}
                  alt="product"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Product definition
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                <div className="mt-2">
                  Starting with empathy, we work toward the success of your
                </div>
                <div className="mt-2">
                  product. We help you create products that matter, connect
                </div>
                <div className="mt-2">
                  with people, and take the market by leading you from the
                </div>
                <div className="mt-2">
                  first product plan to a successful growth strategy.
                </div>
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
                  <div className="font-24 font-semibold">
                    Define user problems
                  </div>
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
                  <div className="font-24 font-semibold">Product planning</div>
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
                  <div className="font-24 font-semibold">MVP</div>
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
                  <div className="font-24 font-semibold">Full product</div>
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
                  <div className="font-24 font-semibold">Growth strategy</div>
                </div>
              </div>
            </div>

            <div className=" mt-64 ml-34">
              <Image
                src="/images/strategy-icon.svg"
                height={84}
                width={93}
                alt="stars"
              />
              <div className=" font-32 font-medium mt-6">Strategy</div>
              <div className="mt-4">
                <div className=" strategy-click-illustration bg-purple-1 ">
                  <div className="flex items-center pl-5">
                    <div className="white-1 font-20 font-bold justify-center mt-4">
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
