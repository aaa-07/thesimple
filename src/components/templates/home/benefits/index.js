import Image from "next/image";
import React from "react";

export default function Benefits() {
  return (
    <div className="pt-72">
      <div className="font-57 font-extrabold text-center mb-6">
        Benefits of partnering with us
      </div>
      <div
        className="font-24 font-medium mb-24 text-center"
        style={{ color: "#D8D8D8" }}
      >
        We understand how important your <br /> business is for you.
      </div>
      <div className="flex justify-center">
        <div className="bg-red-1 benefits-illustration mt-10">
          <div className="flex justify-center  items-left pt-12">
            <div className="font-32 font-extrabold ml-2">Fast</div>
            <Image
              src="/images/benefits/lightning.svg"
              height={48}
              width={48}
              alt="lightning"
            />
          </div>
          <div className="font-18 font-semibold text-left px-6 mt-11">
            Turbocharge the
            <br /> design process! Designs
            <br /> ready for reviews in <br />
            1-2 days.
          </div>
        </div>
        <div className="bg-yellow-1 black-2 benefits-illustration mx-5 ">
          <div className="flex justify-center items-center mt-7 mb-10">
            <div className="ml-2">
              <div className="font-32 font-semibold">Save 50%</div>
              <div className="font-24 font-semibold purple-1">on design</div>
            </div>
            <Image
              src="/images/benefits/save-money.svg"
              height={48}
              width={48}
              alt="save money"
            />
          </div>
          <div className="font-18 font-semibold text-right mt-4 pl-6 pr-3">
            One stop for all design <br /> needs. No hiring,
            <br /> training, or multiple
            <br />
            tools required.
          </div>
        </div>
        <div className="bg-blue-1 benefits-illustration mt-10">
          <div className="flex justify-center items-center pt-12">
            <div className="ml-2">
              <div className="font-36 white-1 font-semibold">Unlimited</div>
              <div className="font-20 font-medium  pink-1">Design requests</div>
            </div>
            <Image
              src="/images/benefits/gift.svg"
              height={48}
              width={48}
              alt="gift"
            />
          </div>
          <div className="font-18 font-semibold text-left mt-8 pl-4 pr-10">
            No limit on your design aspirations! Submit as many requests you
            need
          </div>
        </div>
        <div className="bg-green-1 benefits-illustration ml-5">
          <div className="flex  items-left  mt-7 mb-9 ml-4">
            <div className="font-32 black-1 font-semibold ml-2">
              WOW <br />
              Quality
            </div>
            <Image
              src="/images/benefits/stars.svg"
              height={48}
              width={48}
              alt="stars"
            />
          </div>
          <div className="font-18 black-1 font-medium text-left px-6 mt-8">
            Don&apos;t settle <br />
            for good.
            <br />
            <br />
            Get the best
          </div>
        </div>
      </div>
    </div>
  );
}
