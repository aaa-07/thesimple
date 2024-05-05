"use client";
import { Context } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useContext, useEffect } from "react";

export default function Header() {
  const { showHeader } = useContext(Context);

  return (
    <div
      className={"header-bg sticky top-0 z-20 hidden"}
      style={showHeader ? { visibility: "visible" } : { visibility: "hidden" }}
      id="header"
    >
      <div>
        <div className="text-white container header-container">
          <div className="flex items-end h-full">
            <div className="font-24 font-extrabold flex items-baseline">
              <Image
                src="/images/logo-resize.svg"
                height={42}
                width={156}
                alt="logo"
              />
            </div>
            <div className="font-20 font-medium  flex ml-32 header-option">
              <span
                className="cursor-pointer select-partner"
                onClick={() => {
                  document
                    .getElementById("partner")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Partner with us
              </span>
              <span
                className="cursor-pointer mx-8 select-service"
                onClick={() => {
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Services
              </span>
              <span
                className="cursor-pointer select-deliverables"
                onClick={() => {
                  document
                    .getElementById("deliverables")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Deliverables
              </span>
              <span
                className="cursor-pointer mx-8 select-kpi"
                onClick={() => {
                  document
                    .getElementById("kpi")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                KPI improvements
              </span>
              <span
                className="cursor-pointer select-benefits"
                onClick={() => {
                  document
                    .getElementById("benefits")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Benefits
              </span>
              <span
                className="cursor-pointer mx-8 select-education"
                onClick={() => {
                  document
                    .getElementById("education")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Education
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href="/about">
        <div
          className="header-container__lets-talk font-bold text-black flex justify-center items-center font-18 z-50"
          onClick={() => Router.push("/about")}
        >
          <div className="mx-2 white-1">
            <div>Let&apos;s </div>
            <div>talk</div>
            <div></div>
            <Image
              src="/images/right-arrow-white.svg"
              height={15}
              width={15}
              alt="right arrow"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
