import React from "react";
import Content from "./content";
import Image from "next/image";

export default function KPI() {
  return (
    <div className="mt-36">
      <div className="font-72 font-extrabold mb-3">Improve KPIs</div>
      <div className="flex mb-16">
        <div className="font-48 font-medium" style={{ color: "#D8D8D8" }}>
          We empathise and walk with users(hero) <br /> through-out their
          journey.
        </div>
        <div className="kpi-illustration py-5 flex ml-auto">
          <Image
            src="/images/kpi/eyes.svg"
            height={30}
            width={55}
            alt="image"
            className="kpi-illustration__icon pl-2"
          />
          <div className="flex items-center pl-5">
            <div className="font-20 font-bold">Let&apos;s improve</div>
            <div className="ml-2">
              <Image
                src="/images/right-arrow-white.svg"
                width={21}
                height={10}
                alt="arrow"
                className="arrow-movement"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex kpi-content">
        <div className="pl-10 pt-9 pb-12">
          <Image
            src="/images/kpi/illustration-1.svg"
            height={357}
            width={210}
            alt="girl dancing"
          />
          <div className="font-40 font-semibold black-2 mt-4">
            We improve a service or product&apos;s KPIs with CX & Inclusive
            design
          </div>
        </div>
        <div className="ml-9 mr-10">
          <div className="bg-blue-1 mb-10 pl-8 pt-14">
            <Image
              src="/images/kpi/illustration-2.svg"
              height={74}
              width={74}
              alt="user engagement"
            />
            <div className="font-24 font-medium mt-8">
              Improve user <br /> engagement
            </div>
          </div>
          <div className="bg-yellow-2 pl-6 pt-24">
            <Image
              src="/images/kpi/illustration-4.svg"
              height={74}
              width={74}
              alt="customer acquisition"
            />
            <div className="font-24 font-medium mt-8 black-2">
              Improve customer <br /> acquisition
            </div>
          </div>
        </div>
        <div>
          <div className="bg-green-1 mb-10 pl-8 pt-14">
            <Image
              src="/images/kpi/illustration-3.svg"
              height={69}
              width={74}
              alt="conversion rate"
            />
            <div className="font-24 font-medium mt-8 black-2">
              Improve conversion <br /> rate
            </div>
          </div>
          <div className="bg-purple-1 pl-8 pt-24">
            <Image
              src="/images/kpi/illustration-5.svg"
              height={69}
              width={74}
              alt="customer retention"
            />
            <div className="font-24 font-medium mt-8">
              Improve customer <br /> retention
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
    </div>
  );
}
