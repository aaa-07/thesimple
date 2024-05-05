"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ServicesTemplate from "../../services";

export default function Services() {
  const headingRef = useRef();

  //start
  const [showPopup, setShowPopup] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleServiceClick = (serviceId) => {
    setShowPopup(true);
    setSelectedServiceId(serviceId);
    document.body.style.overflow = "hidden";
    debugger;
    console.log("Service link clicked for:", serviceId);
    // Scroll to the corresponding section
    const section = document.getElementById(serviceId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close the popup if it's open
  };

  const handleClosePopup = () => {
    setShowPopup(false);

    setSelectedServiceId(null); // Reset selected service ID
    document.body.style.overflow = "auto";
  };
  //end

  return (
    <>
      <div className="flex mt-60 ml-34" ref={headingRef}>
        <div>
          <h1 className="font-72 font-extrabold text-white line-height-normal">
            Fuelling innovation, <br />
            exceeding expectations
          </h1>
          <h2 className="font-semibold text-white mt-5 font-42 line-height-normal">
            let&apos;s push boundaries
            <br /> together.
          </h2>
        </div>
      </div>

      <div className="mt-24 services ml-75">
        <div className="font-36 font-extrabold ">
          Our Services. Your Impact.
        </div>
      </div>
      <div className="flex ml-75 mt-7">
        <a onClick={() => handleServiceClick("strategy1")}>
          <div className="bg-purple-1 impact-illustration flex">
            <div className="  items-left mb-9 ml-4">
              <div
                className="font-96 black-1 font-semibold ml-2 text-vertical"
                style={{ marginTop: -127, color: "white" }}
              >
                Strategy
              </div>
              <div>
                <Image
                  src="/images/strategy-icon.svg"
                  height={84}
                  width={93}
                  alt="stars"
                  style={{ marginTop: -207, marginLeft: 67 }}
                />
                <Image
                  src="/images/strategy-arrow.svg"
                  height={48}
                  width={48}
                  alt="stars"
                  className="justify-center ml-16 mt-12"
                  // style={{ marginLeft: -66 }}
                />
              </div>
            </div>
          </div>
        </a>

        <a onClick={() => handleServiceClick("design1")}>
          <div className="bg-blue-1 impact-illustration ml-5">
            <div className="flex  items-left mb-9 ml-4">
              <div
                className="font-96 black-1 font-semibold ml-2 text-vertical"
                style={{ marginTop: 40, color: "white" }}
              >
                Design
              </div>
              <Image
                src="/images/strategy-design.svg"
                height={48}
                width={48}
                alt="stars"
                style={{ marginLeft: -66, marginTop: 239 }}
              />
              <Image
                src="/images/design-icon.svg"
                height={86}
                width={84}
                alt="stars"
                style={{ marginLeft: -29, marginBottom: 149 }}
              />
            </div>
          </div>
        </a>
        <a onClick={() => handleServiceClick("development")}>
          <div className="bg-orange-1 impact-illustration ml-5 flex ">
            <div className=" items-left  mb-9 ml-4">
              <div
                className="font-96 black-1 font-semibold ml-4 text-vertical justify-center"
                style={{ marginTop: 280, color: "white" }}
              >
                Dev
              </div>
              <div>
                <Image
                  src="/images/dev-icon.svg"
                  height={84}
                  width={86}
                  alt="stars"
                  style={{ marginTop: -398, marginLeft: 67 }}
                  // style={{ marginLeft: -29, marginBottom: 149 }}
                />
                <Image
                  src="/images/strategy-dev.svg"
                  height={48}
                  width={48}
                  alt="stars"
                  className="justify-center ml-16 mt-12"
                  style={{ marginTop: 241 }}
                />
              </div>
            </div>
          </div>
        </a>
        <a onClick={() => handleServiceClick("growth")}>
          <div className="bg-blue-3 impact-illustration ml-5">
            <div className="flex  items-left mb-9 ml-4">
              <div
                className=" font-96 black-1 font-medium ml-2 text-vertical"
                style={{ color: "white", marginTop: -22 }}
              >
                Growth
              </div>
              <Image
                src="/images/strategy-growth.svg"
                height={48}
                width={48}
                alt="stars"
                style={{ marginLeft: -66, marginTop: 239 }}
              />
              <Image
                src="/images/growth-icon.svg"
                height={83}
                width={80}
                alt="stars"
                style={{ marginLeft: -29, marginBottom: 149 }}
              />
            </div>
          </div>
        </a>
      </div>
      {/* {showPopup && <ServicesTemplate onClose={handleClosePopup} />} */}
      {showPopup && (
        <ServicesTemplate
          serviceId={selectedServiceId}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}
