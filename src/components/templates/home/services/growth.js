"use client";
import Image from "next/image";
import React from "react";
import ServiceMenu from "./serviceMenu";

export default function Growth({ onClose }) {
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
            backgroundColor: "#001A22",
          }}
          id="growth"
        >
          <div className="absolute top-0 right-0 mt-0 mr-0 z-10">
            <Image
              src="/images/services/growth/growth-watermark.svg"
              height={428}
              width={428}
              alt="growth"
            />
          </div>
          <button className="close-btn mt-20" onClick={handleCloseButtonClick}>
            Close
          </button>
          <div className="w-45 ">
            <div className="flex sticky top-52 ml-20">
              <div className=" font-extrabold gray-2 mt-10 font-84 blue-2">
                04
              </div>
              <div className="ml-1">
                <div className="font-36 blue-1 font-semibold mt-20 ml-4">
                  Growth
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <ServiceMenu />
            <div className="bg-yellow-1 growth-service-illustration ml-34 mt-10  mb-16">
              <div className="flex  items-left  mt-7 mb-9 ml-4">
                <Image
                  src="/images/services/growth/product-growth-icon.svg"
                  height={80}
                  width={85}
                  alt="product-growth"
                />

                <div className="font-32 white-1 font-semibold ml-2 mt-6">
                  Discovery
                </div>
              </div>
              <div className="font-18 white-1 font-medium text-left px-10 mt-8">
                <div className="mt-2">
                  We design products that thrive. Slick user interfaces and
                </div>
                <div className="mt-2">
                  cutting-edge functionality are not the only aspects of our
                </div>
                <div className="mt-2">
                  product design process. As we dig further, we reveal the
                </div>
                <div className="mt-2">
                  human experience at the core of your product.
                </div>
              </div>
              <div className="flex items-start mt-9 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Improve retention</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Improve adoption</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">
                    Interaction design
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">
                    User interface design
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Design system</div>
                </div>
              </div>
              <div className="flex items-start mt-4 ml-12">
                <Image
                  src="/images/partner/pink-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div>
                  <div className="font-24 font-semibold">Inclusive design</div>
                </div>
              </div>
            </div>

            <div className=" mt-64 ml-34">
              <Image
                src="/images/services/growth/growth-icon.svg"
                height={84}
                width={93}
                alt="stars"
              />
              <div className=" font-32 font-medium mt-6">Strategy</div>
              <div className="mt-4">
                <div className=" growth-click-illustration bg-blue-3 ">
                  <div className="flex items-center pl-5">
                    <div className="white-1 font-20 font-bold justify-center mt-4">
                      {/* Let&apos;s partner <br />& build */}
                      Let’s grow
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
