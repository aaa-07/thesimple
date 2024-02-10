import { Context } from "@/app/page";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function Partner() {
  const headingRef = useRef();
  const { showHeader } = useContext(Context);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({ project: false, design: false, monthly: false, startup: false });

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
          setActive((prevstate) => ({ ...prevstate, startup: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer2.observe(startup);
    const monthly = document.getElementById("partner-monthly");
    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, monthly: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer3.observe(monthly);
    const design = document.getElementById("partner-design");
    const observer4 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, design: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer4.observe(design);
    const project = document.getElementById("partner-project");
    const observer5 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive((prevstate) => ({ ...prevstate, project: entry.isIntersecting }));
        });
      },
      { rootMargin: "-135px" }
    );
    observer5.observe(project);
  }, []);

  return (
    <div className="pt-52">
      <div className="flex container" ref={headingRef}>
        <div>
          <div className="font-72 font-extrabold mb-6">
            Ways to <br /> partner with us
          </div>
          <div className="font-48 font-medium" style={{ color: "#D8D8D8" }}>
            Award-winning design, <br /> warp speed.
          </div>
        </div>
        <div className="ml-52">
          <div className="flex mb-5">
            <div className="bg-green-1 partner-box pl-2.5 pt-3">
              <Image src="/images/partner/startup.svg" height={22} width={41} alt="monthly" />
              <div className="black-2 font-semibold text-xs mt-4 mb-1.5">Project (7 D)</div>
              <div className="font-14 font-medium black-2">Early stage startup</div>
            </div>
            <div className="bg-yellow-2 partner-box pl-2.5 mx-8 pt-3">
              <Image src="/images/partner/monthly.svg" height={22} width={41} alt="monthly" />
              <div className="black-2 font-semibold text-xs mt-4 mb-1.5">Monthly</div>
              <div className="font-14 font-medium black-2">
                MNCs & <br /> Startups
              </div>
            </div>
            <div className="bg-blue-1 partner-box pl-2.5 pt-3">
              <Image src="/images/partner/project.svg" height={29} width={36} alt="monthly" />
              <div className=" font-semibold text-xs mt-4 mb-1.5">Project (15 D)</div>
              <div className="font-14 font-medium ">
                MNCs & <br />
                Startups
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-pink-2 partner-box pl-2.5 pt-3">
              <Image src="/images/partner/product.svg" height={28} width={27} alt="monthly" />
              <div className=" font-semibold text-xs mt-2.5 mb-1.5">With in 2 D</div>
              <div className="font-14 font-medium ">
                Product & <br /> design review
              </div>
            </div>
            <div className="bg-purple-1 partner-box pl-2.5 mx-8 pt-2.5">
              <Image src="/images/partner/design.svg" height={31} width={33} alt="monthly" />
              <div className=" font-semibold text-xs mt-2.5 mb-1.5">Output in 2 W</div>
              <div className="font-14 font-medium ">Design sprint</div>
            </div>
            <div className="bg-warning-1 partner-box pl-2.5 pt-2.5">
              <Image src="/images/partner/expert.svg" height={33} width={33} alt="monthly" />
              <div className="black-2 font-semibold text-xs mt-2.5 mb-1.5">Output in 5 D</div>
              <div className="font-14 font-medium black-2">Expert audit</div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className={`container ${showHeader ? "top-20" : "top-0"} sticky bg-black-3 z-10`}>
          <div className="font-extrabold font-48 mb-4">Ways to partner with us</div>
          <div className="partners-sticky-view font-semibold flex items-center">
            <div
              className={`flex items-center bg-green-1 mr-1.5 pl-2.5 py-2 ${active.startup ? "opacity-100" : "opacity-30"}`}
              onClick={() => {
                document.getElementById("partner-startup").scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image src="/images/partner/startup.svg" height={22} width={41} alt="chess" />
              <div className="black-1 ml-2.5">
                <div className="text-xs">Project (7 D)</div>
                <div className="font-20">Early stage startup</div>
              </div>
            </div>
            <div
              className={`flex items-center bg-yellow-2 pl-7 py-2 mr-4 ${active.monthly ? "opacity-100" : "opacity-30"}`}
              onClick={() => {
                document.getElementById("partner-monthly").scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image src="/images/partner/monthly.svg" height={22} width={41} alt="pen" />
              <div className="black-1 ml-2.5">
                <div className="text-xs">Monthly</div>
                <div className="font-20">MNCs & Startups</div>
              </div>
            </div>
            <div
              className={`flex items-center bg-blue-1 pl-4 py-2 mr-1.5 ${active.project ? "opacity-100" : "opacity-30"}`}
              onClick={() => {
                document.getElementById("partner-project").scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image src="/images/partner/project.svg" height={27} width={36} alt="chess" />
              <div className="ml-2.5">
                <div className="text-xs">Project (15 D)</div>
                <div className="font-20">MNCs & Startups</div>
              </div>
            </div>
            <div
              className={`flex items-center bg-pink-2 pl-8 py-2 mr-4 ${active.design ? "opacity-100" : "opacity-30"}`}
              onClick={() => {
                document.getElementById("partner-design").scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image src="/images/partner/product.svg" height={28} width={27} alt="pen" />
              <div className="ml-5">
                <div className="text-xs">With in 2D</div>
                <div className="font-20">Product & design review</div>
              </div>
            </div>
            <div
              className={`flex items-center bg-purple-1 pl-4 py-2 ${active.design ? "opacity-100" : "opacity-30"}`}
              onClick={() => {
                document.getElementById("partner-design").scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image src="/images/partner/design.svg" height={35} width={37} alt="chess" />
              <div className="ml-4">
                <div className="text-xs">Output in 2W</div>
                <div className="font-20">Design sprint</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-16" style={{ backgroundImage: "url('/images/partner/mask.svg')" }}>
        <div style={{ backgroundImage: `url('/images/partner/bg-1.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "right" }} id="partner-startup">
          <div className="container">
            <div className="flex pt-24 pb-4">
              <div className="w-500px pt-1">
                <div className="font-24 font-semibold" style={{ color: "#7B7B7B" }}>
                  Have an idea?
                </div>
                <div className="font-18 font-medium mt-2" style={{ color: "#7B7B7B" }}>
                  Early stage startup
                </div>
                <div className="flex mt-9 items-start">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-6 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Minimum Viable Product (MVP)</div>
                    <div className="font-24 font-medium" style={{ color: "#787878" }}>
                      with “thesimple” touch
                    </div>
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-6 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Guaranteed Delivery in 7 business days</div>
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-6 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Strategy</div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Discovery</div>
                  </div>
                </div>

                <div className="flex mt-10 items-start">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-6 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold ">Design</div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Branding</div>
                    <br />
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Product design</div>
                  </div>
                </div>

                <div className="flex mt-10">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-6 pt-1.5" />
                  <div className="font-32 font-semibold ">Investor pitch</div>
                </div>
              </div>
              <div className="ml-auto w-30">
                <Image src="/images/partner/idea.svg" height={38} width={71} alt="Check" />
                <div className="font-40 font-extrabold mt-6">Have an idea?</div>
                <div className="gray-6 font-18 font-medium mt-4">Ideal for building new product, early stage startup & personal projects</div>
                <div className="mt-12">
                  <div className="strategy-illustration bg-green-1 flex">
                    <Image src="/images/services/strategy/specs.svg" height={33} width={62} alt="image" className="strategy-illustration__icon" />
                    <div className="flex items-center pl-5">
                      <div className="black-1 font-20 font-bold">Let&apos;s partner & build</div>
                      <div className="ml-2">
                        <Image src="/images/right-arrow-black.svg" width={21} height={10} alt="arrow" className="arrow-movement" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-36">
                  <Image src="/images/partner/truck.svg" height={72} width={72} alt="truck" />
                  <div className="ml-6">
                    <div className="font-24 font-semibold">Avail free consultation</div>
                    <div className="gray-6 font-18 font-medium mt-2">If you have any doubts in what to do and how to go about your idea</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url('/images/partner/bg-2.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "right" }} id="partner-monthly">
          <div className="container">
            <div className="pt-7 flex">
              <div className="w-425px mt-36 pt-2 mb-7">
                <div className="font-24 font-semibold" style={{ color: "#7B7B7B" }}>
                  Monthly subscription
                </div>
                <div className="font-18 font-medium mt-2" style={{ color: "#7B7B7B" }}>
                  MNCs & Startups
                </div>
                <div className="flex items-start mt-9">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Unlimited requests</div>
                    <div className="gray-3 font-24 font-medium mt-2">One at once</div>
                  </div>
                </div>

                <div className="flex items-start mt-8">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Design ready for reviews in 1-2 days</div>
                    <div className="gray-3 font-24 font-medium mt-2">Delivery of each task</div>
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Strategy</div>
                </div>

                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Product design</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Dev ready Figma file</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Branding</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Project management</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Product management</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/yellow-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Data driven</div>
                </div>
                <div className="flex items-start mt-10 pl-2.5">
                  <Image src="/images/partner/yellow-check.svg" height={14} width={14} alt="Check" className="mr-5 pt-1.5" />
                  <div className="gray-3 font-24 font-medium">Improve user engagement or adoption</div>
                </div>
                <div className="flex items-start mt-8 pl-2.5">
                  <Image src="/images/partner/yellow-check.svg" height={14} width={14} alt="Check" className="mr-5 pt-1.5" />
                  <div className="gray-3 font-24 font-medium">Improve conversion rate</div>
                </div>
                <div className="flex items-start mt-8 pl-2.5">
                  <Image src="/images/partner/yellow-check.svg" height={14} width={14} alt="Check" className="mr-5 pt-1.5" />
                  <div className="gray-3 font-24 font-medium">Improve customer acquisition</div>
                </div>
                <div className="flex items-start mt-8 pl-2.5">
                  <Image src="/images/partner/yellow-check.svg" height={14} width={14} alt="Check" className="mr-5 pt-1.5" />
                  <div className="gray-3 font-24 font-medium">Improve customer retention</div>
                </div>
                <div className="flex items-start mt-8 pl-2.5">
                  <Image src="/images/partner/yellow-check.svg" height={14} width={14} alt="Check" className="mr-5 pt-1.5" />
                  <div className="gray-3 font-24 font-medium">Improve a Service or product&apos;s KPIs with UX</div>
                </div>
              </div>
              <div className="ml-auto w-30">
                <Image src="/images/partner/subscription.svg" height={33} width={61} alt="Check" />
                <div className="font-40 font-extrabold mt-6">
                  Monthly <br /> subscription
                </div>
                <div className="gray-6 font-18 font-medium mt-4">
                  Ideal for product based
                  <br />
                  companies (MNC and Startup’s)
                </div>
                <div className="mt-12">
                  <div className="strategy-illustration bg-yellow-2 flex pl-4">
                    <Image src="/images/subscription.svg" height={44} width={50} alt="image" className="strategy-illustration__icon" />
                    <div className="flex items-center pl-5">
                      <div className="black-1 font-20 font-bold">Get monthly subscription</div>
                      <div className="ml-2">
                        <Image src="/images/right-arrow-black.svg" width={21} height={10} alt="arrow" className="arrow-movement" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url('/images/partner/bg-3.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "right" }} id="partner-project">
          <div className="container">
            <div className="flex">
              <div className="w-500px mt-44">
                <div className="font-24 font-semibold" style={{ color: "#7B7B7B" }}>
                  Project
                </div>
                <div className="font-18 font-medium mt-2" style={{ color: "#7B7B7B" }}>
                  MNCs & Startups
                </div>
                <div className="flex items-start mt-9">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold"> Strategy</div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Discovery</div>
                    <br />
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Product definition</div>
                  </div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold">Design</div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Branding</div>
                    <br />
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Product design</div>
                  </div>
                </div>

                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Guaranteed Delivery in 11 business days</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Dev ready Figma file</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Project management</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">Product management</div>
                </div>
                <div className="flex items-start mt-10">
                  <Image src="/images/partner/red-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div className="font-32 font-semibold">GTM</div>
                </div>
              </div>
              <div className="ml-auto w-30 mt-7">
                <Image src="/images/partner/rocket.svg" height={43} width={55} alt="Check" />
                <div className="font-40 font-extrabold mt-6">Project</div>
                <div className="gray-6 font-18 font-medium mt-4">
                  MNCs & Startups, from
                  <br />
                  scratch / Re-design
                </div>
                <div className="mt-12 pt-2">
                  <div className="strategy-illustration bg-blue-2 flex pl-4">
                    <Image src="/images/project.svg" height={44} width={50} alt="image" className="strategy-illustration__icon" />
                    <div className="flex items-center pl-5">
                      <div className="font-20 font-bold">Let’s partner</div>
                      <div className="ml-2">
                        <Image src="/images/right-arrow-white.svg" width={21} height={10} alt="arrow" className="arrow-movement" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="partner-design">
          <div className="mt-40">
            <div className="book-slot-container flex">
              <div className="pt-12 pl-8">
                <Image src="/images/partner/product.svg" height={72} width={69} alt="monthly" />
                <div className="font-32 font-extrabold mt-8">
                  Expert product & <br /> design review
                </div>
                <div className="font-20 font-semibold mt-4 pt-0.5">MNCs & Startups</div>
                <div className="font-24 font-bold mt-14 flex">
                  Submit now <Image src="/images/right-arrow-white.svg" width={21} height={10} alt="arrow" className="ml-4" />
                </div>
                <div className="font-16 mt-5 font-semibold">
                  We will setup the call <br /> in 2 business days
                </div>
              </div>
              <div className="pt-20 pl-8 mx-20">
                <Image src="/images/partner/design.svg" height={72} width={76} alt="monthly" />
                <div className="font-24 font-semibold mt-7 pt-0.5">
                  Two week collaborative <br /> work for quick product <br /> experiments{" "}
                </div>
                <div className="font-24 font-bold pt-2 mt-28 flex">
                  Book a slot now <Image src="/images/right-arrow-white.svg" width={21} height={10} alt="arrow" className="ml-4" />
                </div>
              </div>
              <div className="pl-8 pt-20 black-2">
                <Image src="/images/partner/expert.svg" height={70} width={70} alt="monthly" />
                <div className="font-32 font-extrabold mb-4 mt-8">Expert Audit</div>
                <div className="flex font-24 font-semibold">Product & design review and provide UX & UI recommendations and next steps</div>
                <div className="font-24 font-bold mt-7 flex justify-end pr-14">
                  Book a slot now <Image src="/images/right-arrow-black.svg" width={21} height={10} alt="arrow" className="ml-4" />
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
              <div className="gray-3 font-24 font-medium mt-7">MNCs & Startups</div>
              <div className="flex mt-12">
                <div className="flex items-start">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold black-2"> Strategy</div>
                    <div className="mt-1 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Discovery</div>
                    <br />
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Product definition</div>
                  </div>
                </div>
                <div className="flex items-start ml-16">
                  <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                  <div>
                    <div className="font-32 font-semibold black-2">Design</div>
                    <div className="mt-2 bg-yellow-1 font-24 font-medium black-2 py-1 pl-2 pr-3 inline-block">Product design</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-16">
                <Image src="/images/partner/green-check.svg" height={24} width={24} alt="Check" className="mr-5 pt-1.5" />
                <div className="font-32 font-semibold black-2">5 business hours</div>
              </div>
            </div>

            <div className="ml-auto mt-28 w-96">
              <Image src="/images/partner/smirky.svg" height={185} width={370} alt="image" />
              <div className="bg-warning-1 pl-20 mt-36 py-4" style={{ width: "372px", borderRadius: "8px 8px 120px 8px" }}>
                <div className="flex items-center">
                  <div className="black-1 font-24 font-bold">Book free slot</div>
                  <div className="ml-2">
                    <Image src="/images/right-arrow-black.svg" width={21} height={10} alt="arrow" className="arrow-movement" />
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
