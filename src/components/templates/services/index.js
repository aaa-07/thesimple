"use client";
import React, { useRef, useState, useEffect } from "react";
import Strategy from "../home/services/strategy";
import Design from "../home/services/design";
import Development from "../home/services/development";
import Growth from "../home/services/growth";
import Strategy2 from "../home/services/strategy2";
import Design2 from "../home/services/design2";
import Design3 from "../home/services/design3";
export default function ServicesTemplate({ onClose, serviceId }) {
  const containerRef = useRef(null);
  const scrollAmount = 1450;

  const handleScroll = (event) => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft =
        container.scrollLeft +
        (event.deltaY > 0 ? scrollAmount : -scrollAmount);
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      //event.preventDefault();
    }
  };

  //Cleanup function to remove event listener
  useEffect(() => {
    const handleBodyScroll = (event) => {
      event.preventDefault();
    };
    document.body.style.overflow = "hidden";
    document.body.addEventListener("wheel", handleBodyScroll, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("wheel", handleBodyScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (serviceId) {
  //     const container = containerRef.current;
  //     const section = document.getElementById(serviceId);
  //     if (container && section) {
  //       container.scrollTo({
  //         left: section.offsetLeft,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [serviceId]);
  useEffect(() => {
    if (serviceId) {
      const section = document.getElementById(serviceId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [serviceId]);

  return (
    <div className="popup full-screen-popup">
      <div
        className="popup-inner"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        onWheel={handleScroll}
      >
        <div
          className="services-container"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          ref={containerRef}
        >
          <Strategy onClose={onClose} />
          <Strategy2 onClose={onClose} />
          <Design onClose={onClose} />
          <Design2 onClose={onClose} />
          <Design3 onClose={onClose} />
          <Development onClose={onClose} />
          <Growth onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
