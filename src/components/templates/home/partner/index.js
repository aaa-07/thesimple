import { Context } from "@/app/page";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function Partner() {
  const headingRef = useRef();
  const { showHeader } = useContext(Context);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({
    project: false,
    design: false,
    monthly: false,
    startup: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.bottom < 0) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
      },
      { rootMargin: "0px" }
    );
    observer.observe(headingRef.current);

    const startup = document.getElementById("partner-startup");
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({
            ...prevstate,
            startup: entry.isIntersecting,
          }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer2.observe(startup);
    const monthly = document.getElementById("partner-monthly");
    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({
            ...prevstate,
            monthly: entry.isIntersecting,
          }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer3.observe(monthly);
    const design = document.getElementById("partner-design");
    const observer4 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({
            ...prevstate,
            design: entry.isIntersecting,
          }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer4.observe(design);
    const project = document.getElementById("partner-project");
    const observer5 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({
            ...prevstate,
            project: entry.isIntersecting,
          }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer5.observe(project);
  }, []);

  return (
    <div className="pt-52">
      <div style={{ backgroundColor: "#242424" }}>
        <div>
          <div className="font-48 font-extrabold text-center mb-4 ml-32 ">
            Ways to partner with us
          </div>
          <div
            className="font-24 font-medium text-center ml-32 mb-12"
            style={{ color: "#D8D8D8" }}
          >
            Award-winning design, warp speed.
          </div>
        </div>

        <div className="flex container" ref={headingRef}>
          <div className="ml-52">
            <div className="flex mb-5">
              <div
                className="bg-green-2 partner-box pl-2.5 pt-3 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("partner-startup")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src="/images/partner/startup.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: 223 }}
                />
                <div className="font-64 black-2 font-semibold text-xs mt-10 mb-1.5">
                  MVP
                </div>
                <div className="font-18 black-2 font-semibold text-xs mt-10 mb-1.5">
                  Set your prefered turnaround <br /> time -(<b>7 days</b>
                  minimum)
                </div>
                <div className="flex">
                  <div>
                    <div className="font-32 font-bold black-2 mt-10">
                      Have an idea?
                    </div>
                    <div className="font-24 font-medium black-2 mt-10">
                      Ideal for building new <br /> product, early stage <br />
                      startup & personal projects.
                    </div>
                  </div>

                  <div className=" mt-10 vertical-arrow-movement partner-box__icon">
                    <Image
                      src="/images/partner/mvp-arrow.svg"
                      height={22}
                      width={22}
                      alt="image"
                      className=""
                    />
                  </div>
                </div>

                <Image
                  src="/images/partner/partner-reverse1.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: -12, marginTop: 88 }}
                />
              </div>
              <div
                className="bg-yellow-3 partner-box pl-2.5 mx-8 pt-3 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("partner-monthly")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src="/images/partner/monthly.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: 223 }}
                />

                <div className="font-64 black-2 font-semibold text-xs mt-10 mb-1.5">
                  Monthly
                </div>
                <div className="font-18 black-2 font-semibold text-xs mt-10 mb-1.5">
                  Unlimited design requests - <br />
                  Subscription
                </div>
                <div className="flex">
                  <div>
                    <div className="font-32 font-bold black-2 mt-10">
                      Product based
                    </div>
                    <div className="font-24 font-medium black-2 mt-10">
                      Perfect for product- <br /> driven businesses, <br />
                      from startups to <br />
                      enterprises.
                    </div>
                  </div>
                  <div className=" mt-10 vertical-arrow-movement ml-16 partner-box__icon">
                    <Image
                      src="/images/partner/monthly-arrow.svg"
                      height={22}
                      width={22}
                      alt="image"
                    />
                  </div>
                </div>

                <Image
                  src="/images/partner/partner-reverse2.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: -12, marginTop: 60 }}
                />
              </div>
              <div
                className="bg-red-2 partner-box pl-2.5 pt-3 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("partner-project")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src="/images/partner/project.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: 223 }}
                />

                <div className="font-64 black-2 font-semibold text-xs mt-10 mb-1.5">
                  Project
                </div>
                <div className="font-18 black-2 font-semibold text-xs mt-10 mb-1.5">
                  Development ready designs at <br />
                  <b>your desired pace</b>
                </div>
                <div className="flex">
                  <div>
                    <div className="font-32 font-bold black-2 mt-10">
                      Build a product
                    </div>
                    <div className="font-24 font-medium black-2 mt-10">
                      Ideal for those who want <br /> to build end-to-end <br />
                      journeys from start to <br />
                      finish.
                    </div>
                  </div>
                  <div className=" mt-4 vertical-arrow-movement ml-4 ">
                    <Image
                      src="/images/partner/project-arrow.svg"
                      height={22}
                      width={22}
                      alt="image"
                    />
                  </div>
                </div>

                <Image
                  src="/images/partner/partner-reverse3.svg"
                  height={60}
                  width={108}
                  alt="monthly"
                  style={{ marginLeft: -12, marginTop: 40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-16"
        style={{
          backgroundImage: "url('/images/partner/mask.svg')",
          backgroundColor: "#333333",
        }}
      >
        <div
          style={{
            backgroundImage: `url('/images/partner/bg-1.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundPositionY: "90px",
          }}
          id="partner-startup"
        >
          <div className="container">
            <div className="flex pt-24 pb-4">
              <div className="w-500px pt-1">
                <div className="font-64 font-semibold">MVP</div>
                <div className="font-18 text-xs ">
                  Set your prefered turnaround <br /> time -(<b>7 days</b>
                  minimum)
                </div>
                {/* <div
                  className="font-24 font-semibold"
                  style={{ color: "#7B7B7B" }}
                >
                  Have an idea?
                </div>
                <div
                  className="font-18 font-medium mt-2"
                  style={{ color: "#7B7B7B" }}
                >
                  Early stage startup
                </div> */}
                <div className="flex mt-9 items-start">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-6 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">
                      Minimum Viable Product (MVP)
                    </div>
                    {/* <div
                      className="font-24 font-medium"
                      style={{ color: "#787878" }}
                    >
                      with “thesimple” touch
                    </div> */}
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-6 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">
                      Guaranteed Delivery in 7 business days
                    </div>
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-6 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">Strategy</div>
                    <div className="mt-1 bg-green-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Discovery
                    </div>
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-6 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold ">Design</div>
                    <div className="mt-1 bg-green-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Branding
                    </div>
                    <br />
                    <div className="mt-2 bg-green-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Product design
                    </div>
                  </div>
                </div>

                <div className="flex mt-10">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-6 pt-1.5"
                  />
                  <div className="font-32 font-semibold ">Investor pitch</div>
                </div>
              </div>
              <div className="ml-auto w-30" style={{ marginTop: 179 }}>
                <Image
                  src="/images/partner/idea.svg"
                  height={38}
                  width={71}
                  alt="Check"
                />
                <div className="font-40 font-extrabold mt-6">Have an idea?</div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Ideal for building new product,
                  <br /> early stage startup & personal
                  <br />
                  projects.
                </div>
                <div className=" mt-12">
                  <div className=" strategy-illustration bg-green-2 ">
                    {/* <Image
                      src="/images/services/strategy/specs.svg"
                      height={33}
                      width={62}
                      alt="image"
                      className="strategy-illustration__icon"
                    /> */}
                    <Image
                      src="/images/services/strategy/mvp_specs.svg"
                      height={91.41}
                      width={162.82}
                      alt="image"
                    />
                    <div className="flex items-center pl-5">
                      <div className="black-1 font-20 font-bold">
                        Let&apos;s partner <br />& build
                      </div>
                      <div className="ml-2">
                        <Image
                          src="/images/right-arrow-black.svg"
                          width={21}
                          height={10}
                          alt="arrow"
                          className="arrow-movement"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" freeConsultation-illustration bg-black-4 flex  mt-16">
                  <Image
                    src="/images/partner/gift.svg"
                    height={20}
                    width={20}
                    alt="image"
                    className=" ml-4"
                  />

                  <div className="flex items-center pl-2 ">
                    <div className=" white-1 font-16 font-meduim">
                      Avail free consultation
                    </div>
                    <div className="ml-2">
                      <Image
                        src="/images/right-arrow-white.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                        className="arrow-movement"
                      />
                    </div>
                  </div>
                </div>
                <div className="gray-6 font-16 font-medium mt-2">
                  If you have any doubts in what to <br /> do and how to go
                  about your idea.
                </div>
                {/* <div className="flex mt-36">
                  <Image
                    src="/images/partner/truck.svg"
                    height={72}
                    width={72}
                    alt="truck"
                  />
                  <div className="ml-6">
                    <div className="font-24 font-semibold">
                      Avail free consultation
                    </div>
                    <div className="gray-6 font-18 font-medium mt-2">
                      If you have any doubts in what to do and how to go about
                      your idea
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url('/images/partner/bg-2.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
          }}
        >
          <div className="container">
            <div className="pt-7 flex">
              <div className="w-425px mt-36 pt-2 mb-7" id="partner-monthly">
                <div className="font-40 font-extrabold mt-6">
                  Monthly <br /> subscription
                </div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Ideal for product based
                  <br />
                  companies (MNC and Startup’s)
                </div>
                <div className="flex items-start mt-9">
                  <Image
                    src="/images/partner/yellow-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">
                      Unlimited requests
                    </div>
                    <div className="gray-3 font-24 font-medium mt-2">
                      One at once
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-8">
                  <Image
                    src="/images/partner/yellow-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-28 font-semibold">
                      Design ready for reviews in 1-2 days
                    </div>
                    <div className="gray-3 font-24 font-medium mt-2">
                      Delivery of each task
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/yellow-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-28 font-semibold">
                    Product design innovation
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/yellow-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-28 font-semibold">
                    Branding improvements
                  </div>
                </div>
                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/yellow-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-28 font-semibold">
                    Improve user engagement <br />
                    or adoption, conversion, customer
                    <br /> acquisition and retention by using <br />
                    data
                  </div>
                </div>
              </div>
              <div className="ml-auto w-30 mt-44">
                <Image
                  src="/images/partner/subscription.svg"
                  height={33}
                  width={61}
                  alt="Check"
                />
                <div className="font-40 font-extrabold mt-6">
                  For product based
                </div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Perfect for product-driven <br /> businesses, from startups to
                  <br /> enterprises.
                </div>
                <div className="mt-12">
                  <div className="strategy-illustration bg-yellow-2 flex pl-4">
                    <Image
                      src="/images/subscription.svg"
                      height={44}
                      width={50}
                      alt="image"
                      className="strategy-illustration__icon"
                    />
                    <div className="flex items-center pl-5">
                      <div className="black-1 font-20 font-bold">
                        Get monthly subscription
                      </div>
                      <div className="ml-2">
                        <Image
                          src="/images/right-arrow-black.svg"
                          width={21}
                          height={10}
                          alt="arrow"
                          className="arrow-movement"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url('/images/partner/bg-3.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
          }}
        >
          <div className="container">
            <div className="flex">
              <div className="w-500px mt-44" id="partner-project">
                <div className="font-40 font-extrabold mt-6">Project</div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Development ready designs at <br /> your desired pace
                </div>
                {/* <div
                  className="font-24 font-semibold"
                  style={{ color: "#7B7B7B" }}
                >
                  Project
                </div>
                <div
                  className="font-18 font-medium mt-2"
                  style={{ color: "#7B7B7B" }}
                >
                  MNCs & Startups
                </div> */}
                <div className="flex items-start mt-9">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold"> Strategy</div>
                    <div className="mt-1 bg-pink-3 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Discovery
                    </div>
                    <br />
                    <div className="mt-2 bg-pink-3 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Product definition
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">Design</div>
                    <div className="mt-1 bg-pink-3 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Branding
                    </div>
                    <br />
                    <div className="mt-2 bg-pink-3 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Product design
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-28 font-semibold">
                    Guaranteed Delivery in at <br /> your required pace
                  </div>
                </div>
                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-32 font-semibold">
                    Project management
                  </div>
                </div>
                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold">
                      Product management
                    </div>
                    <div className="gray-3 font-24 font-medium mt-2">
                      Features suggestion
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image
                    src="/images/partner/red-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div className="font-32 font-semibold">GTM Strategy</div>
                </div>
              </div>
              <div className="ml-auto w-30 mt-64">
                <Image
                  src="/images/partner/rocket.svg"
                  height={43}
                  width={55}
                  alt="Check"
                />
                <div className="font-40 font-extrabold mt-6">
                  Build a product
                </div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Ideal for those who want to build <br />
                  end-to-end journeys from start
                  <br /> to finish.
                </div>
                <div className=" mt-12">
                  <div className=" strategy-illustration bg-blue-2 flex">
                    <Image
                      src="/images/project.svg"
                      height={44}
                      width={50}
                      alt="image"
                      className="strategy-illustration__icon"
                    />
                    <Image
                      src="/images/services/strategy/specs.svg"
                      height={33}
                      width={62}
                      alt="image"
                    />
                    <div className="flex items-center pl-5">
                      <div className="black-1 font-20 font-bold">
                        Let&apos;s partner <br />& build
                      </div>
                      <div className="ml-2">
                        <Image
                          src="/images/right-arrow-black.svg"
                          width={21}
                          height={10}
                          alt="arrow"
                          className="arrow-movement"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" freeConsultation-illustration bg-black-4 flex  mt-16">
                  <Image
                    src="/images/partner/gift.svg"
                    height={20}
                    width={20}
                    alt="image"
                    className=" ml-4"
                  />

                  <div className="flex items-center pl-2 ">
                    <div className=" white-1 font-16 font-meduim">
                      Avail free consultation
                    </div>
                    <div className="ml-2">
                      <Image
                        src="/images/right-arrow-white.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                        className="arrow-movement"
                      />
                    </div>
                  </div>
                </div>
                <div className="gray-6 font-16 font-medium mt-2">
                  If you are confused between <br /> monthly subscription and
                  project
                  <br /> based?
                </div>
              </div>
              {/* 
              <div className="ml-auto w-30 mt-7">
                <Image
                  src="/images/partner/rocket.svg"
                  height={43}
                  width={55}
                  alt="Check"
                />
                <div className="font-40 font-extrabold mt-6">Project</div>
                <div className="gray-6 font-18 font-medium mt-4">
                  MNCs & Startups, from
                  <br />
                  scratch / Re-design
                </div>
                <div className="mt-12 pt-2">
                  <div className="strategy-illustration bg-blue-2 flex pl-4">
                    <Image
                      src="/images/project.svg"
                      height={44}
                      width={50}
                      alt="image"
                      className="strategy-illustration__icon"
                    />
                    <div className="flex items-center pl-5">
                      <div className="font-20 font-bold">Let’s partner</div>
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
              </div> */}
            </div>
          </div>
        </div>

        <div className="container" id="partner-design">
          <div className="mt-40">
            <div className="book-slot-container  flex">
              <div className="pt-12 pl-8 box1">
                <Image
                  src="/images/partner/product.svg"
                  height={72}
                  width={69}
                  alt="monthly"
                />
                <div className="font-32 font-extrabold mt-8">
                  Expert product & <br /> design review
                </div>
                <div className="font-20 font-semibold mt-4 pt-0.5">
                  MNCs & Startups
                </div>
                <div className="font-24 font-bold mt-14 flex">
                  Submit now{" "}
                  <Image
                    src="/images/right-arrow-white.svg"
                    width={21}
                    height={10}
                    alt="arrow"
                    className="ml-4"
                  />
                </div>
                <div className="font-16 mt-5 font-semibold">
                  We will setup the call <br /> in 2 business days
                </div>
              </div>
              <div className="pt-20 pl-8 mx-20 box2">
                <Image
                  src="/images/partner/design.svg"
                  height={72}
                  width={76}
                  alt="monthly"
                />
                <div className="font-24 font-semibold mt-7 pt-0.5">
                  Two week collaborative <br /> work for quick product <br />{" "}
                  experiments{" "}
                </div>
                <div className="font-24 font-bold pt-2 mt-28 flex">
                  Book a slot now{" "}
                  <Image
                    src="/images/right-arrow-white.svg"
                    width={21}
                    height={10}
                    alt="arrow"
                    className="ml-4"
                  />
                </div>
              </div>
              <div className="pl-8 pt-20 black-2 box3">
                <Image
                  src="/images/partner/expert.svg"
                  height={70}
                  width={70}
                  alt="monthly"
                />
                <div className="font-32 font-extrabold mb-4 mt-8">
                  Expert Audit
                </div>
                <div className="flex font-24 font-semibold">
                  Product & design review and provide UX & UI recommendations
                  and next steps
                </div>
                <div className="font-24 font-bold mt-7 flex justify-end pr-14">
                  Book a slot now{" "}
                  <Image
                    src="/images/right-arrow-black.svg"
                    width={21}
                    height={10}
                    alt="arrow"
                    className="ml-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex mt-40 bg-white workshop">
            <div className="mt-28">
              <div className="font-40 font-extrabold black-2">
                Product and design <br /> strategy workshop
              </div>
              <div className="gray-3 font-24 font-medium mt-7">
                MNCs & Startups
              </div>
              <div className="flex mt-12">
                <div className="flex items-start">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold black-2">
                      {" "}
                      Strategy
                    </div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Discovery
                    </div>
                    <br />
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Product definition
                    </div>
                  </div>
                </div>
                <div className="flex items-start ml-16">
                  <Image
                    src="/images/partner/green-check.svg"
                    height={24}
                    width={24}
                    alt="Check"
                    className="mr-5 pt-1.5"
                  />
                  <div>
                    <div className="font-32 font-semibold black-2">Design</div>
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">
                      Product design
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-16">
                <Image
                  src="/images/partner/green-check.svg"
                  height={24}
                  width={24}
                  alt="Check"
                  className="mr-5 pt-1.5"
                />
                <div className="font-32 font-semibold black-2">
                  5 business hours
                </div>
              </div>
            </div>

            <div className="ml-auto mt-28 w-96">
              <Image
                src="/images/partner/smirky.svg"
                height={185}
                width={370}
                alt="image"
              />
              <div
                className="bg-warning-1 pl-20 mt-36 py-4"
                style={{ width: "372px", borderRadius: "8px 8px 120px 8px" }}
              >
                <div className="flex items-center">
                  <div className="black-1 font-24 font-bold">
                    Book free slot
                  </div>
                  <div className="ml-2">
                    <Image
                      src="/images/right-arrow-black.svg"
                      width={21}
                      height={10}
                      alt="arrow"
                      className="arrow-movement"
                    />
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
