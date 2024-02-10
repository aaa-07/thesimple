"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Upload as S3Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";

const BUCKET_NAME = process.env.BUCKET_NAME;
const DIR_NAME = process.env.DIR_NAME;
const S3_REGION = process.env.S3_REGION;
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const S3_SECRET_KEY = process.env.S3_SECRET_KEY;

const WHAT_DO_YOU_WANT_TO_ACHIEVE = [
  "Open a startup",
  "Scale my startup",
  "Build new product",
  "Outsource design",
  "Outsource product",
  "Improve KPIs",
  "Identify the problems in our product & design",
  "Others",
];
const BUDGET_RANGE = ["<50K", "50K-75K", "75K-1L", "1L-1.5L", "1.5L-2L", ">2L", "Help me to estimate"];
const PRODUCT = ["Website", "Mobile app", "Desktop app", "Web app", "Watch app", "TV app"];
const SERVICE = ["Expert product & design review", "Expert Audit", "Design sprint"];
const STRATEGY = ["Discovery", "Product definition"];
const DESIGN = ["Branding", "Product design", "Interactions"];
const DEVELOPMENT = ["Frontend", "Backend"];
const GROWTH = ["understand user behaviour patterns"];
const MISC = ["Design recommendations", "User research report", "Expert review", "Product and design process for my company"];

export default function AboutTemplate() {
  const [goal, setGoal] = useState([]);
  const [services, setServices] = useState([]);
  const [budget, setBudget] = useState([]);

  const handleServices = (el) => {
    const updatedServices = services.includes(el) ? services.filter((elm) => elm !== el) : [...services, el];
    setServices(updatedServices);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleUpload = (e) => {
    const inputFile = e.target.files[0];

    if (inputFile.size > 5000000) {
      showToast("error", "File size should be less than 5MB");
      return;
    }

    const fileName = inputFile.name;
    new S3Upload({
      client: new S3Client({ credentials: { accessKeyId: ACCESS_KEY_ID, secretAccessKey: S3_SECRET_KEY }, region: S3_REGION }),
      params: { ACL: "public-read", Bucket: BUCKET_NAME, Key: `${DIR_NAME}/${Date.now().toString()}-${fileName}`, Body: inputFile },
    })
      .done()
      .then((data) => {
        console.log(data.Location);
        // updateExpectedReport(data.Location);
      })
      .catch((err) => {});
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="px-32">
        <div className="mt-40 font-84 font-extrabold">Let&apos;s talk</div>
        <div className="flex">
          <div>
            <div className="font-36 font-extrabold w-96">Don&apos;t settle for good, let&apos;s build great!</div>
          </div>
          <div className="ml-28 font-24 font-medium pr-24">
            Don&apos;t just have a project, have a partner. We&apos;re passionate about helping companies of all sizes achieve their goals through exceptional product and design.
            Let&apos;s start by understanding your unique needs.
          </div>
        </div>
        <div className="flex mt-40">
          <div>
            <div className="font-24 w-96 font-semibold">
              Basic details about you <br /> and organisation
            </div>
          </div>
          <div className="ml-28 font-18 font-medium form-input">
            <div className="flex mb-16">
              <input type="text" className="w-60 pb-2" name="name" placeholder="Your full name" />
              <input type="text" className="w-60 ml-16 pb-2" name="email" placeholder="Your email ID" />
            </div>
            <div className="flex">
              <input type="text" className="w-60 pb-2" name="brand_name" placeholder="Brand name" />
              <input type="text" className="w-60 ml-16 pb-2" name="brand_website" placeholder="Brand's website" />
            </div>
          </div>
        </div>
        <div className="services__separator" />
        <div className="flex">
          <div>
            <div className="font-24 w-96 font-semibold">
              What do you want <br /> to achieve?
            </div>
          </div>
          <div className="ml-28 flex flex-wrap">
            {WHAT_DO_YOU_WANT_TO_ACHIEVE.map((el) => (
              <div
                className={`form-pills px-4 py-2 mb-6 mr-3 cursor-pointer ${goal.includes(el) ? "bg-green-300" : ""}`}
                onClick={() => {
                  const updatedGoals = goal.includes(el) ? goal.filter((elm) => elm !== el) : [...goal, el];
                  setGoal(updatedGoals);
                }}
                key={el}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="services__separator" />
        <div className="flex">
          <div>
            <div className="font-24 w-96 font-semibold">
              What services do <br /> you need?
            </div>
          </div>
          <div className="ml-28">
            <div className="mb-6 flex flex-wrap">
              {PRODUCT.map((el) => (
                <div
                  className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mb-6 mr-3 cursor-pointer`}
                  key={el}
                  onClick={() => {
                    handleServices(el);
                  }}
                >
                  {el}
                </div>
              ))}
            </div>
            <div className="mb-6 flex flex-wrap">
              {SERVICE.map((el) => (
                <div
                  className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mb-6 mr-3 cursor-pointer`}
                  key={el}
                  onClick={() => {
                    handleServices(el);
                  }}
                >
                  {el}
                </div>
              ))}
            </div>
            <div className="mb-12 flex flex-wrap">
              <div
                className={`${services.includes("Free product and design workshop in your company") ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer`}
                onClick={() => {
                  handleServices("Free product and design workshop in your company");
                }}
              >
                Free product and design workshop in your company
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #606060" }} className="mb-8" />
            <div className="mb-8">
              <div className="gray-8 text-xs mb-2">Strategy</div>
              <div className="flex flex-wrap">
                {STRATEGY.map((el) => (
                  <div
                    className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer`}
                    key={el}
                    onClick={() => {
                      handleServices(el);
                    }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <div className="gray-8 text-xs mb-2">Design</div>
              <div className="flex flex-wrap">
                {DESIGN.map((el) => (
                  <div
                    className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer`}
                    key={el}
                    onClick={() => {
                      handleServices(el);
                    }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <div className="gray-8 text-xs mb-2">Development</div>
              <div className="flex flex-wrap">
                {DEVELOPMENT.map((el) => (
                  <div
                    className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer`}
                    key={el}
                    onClick={() => {
                      handleServices(el);
                    }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <div className="gray-8 text-xs mb-2">Growth</div>
              <div className="flex flex-wrap">
                {GROWTH.map((el) => (
                  <div
                    className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer`}
                    key={el}
                    onClick={() => {
                      handleServices(el);
                    }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #606060" }} className="mb-8" />
            <div className="flex flex-wrap">
              {MISC.map((el) => (
                <div
                  className={`${services.includes(el) ? "bg-green-300" : ""} form-pills px-4 py-2 mr-3 cursor-pointer mb-6`}
                  key={el}
                  onClick={() => {
                    handleServices(el);
                  }}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="services__separator" />
        <div className="flex">
          <div>
            <div className="font-24 w-96 font-semibold">Budget range</div>
          </div>
          <div className="ml-28 flex flex-wrap">
            {BUDGET_RANGE.map((el) => (
              <div
                className={`form-pills px-4 py-2 mb-6 mr-3 cursor-pointer  ${budget.includes(el) ? "bg-green-300" : ""}`}
                onClick={() => {
                  const updatedBudget = budget.includes(el) ? budget.filter((elm) => elm !== el) : [...budget, el];
                  setBudget(updatedBudget);
                }}
                key={el}
              >
                {el}
              </div>
            ))}
          </div>
        </div>

        <div className="services__separator" />
        <div className="flex mb-36">
          <div>
            <div className="font-24 w-96 font-semibold">Budget range</div>
          </div>
          <div className="ml-28">
            <input type="file" onChange={handleUpload} />
          </div>
        </div>
        <div className="mb-28 ml-96">
          <button type="submit" className="submit-form px-10 pt-20 cursor-pointer">
            <Image src="/images/workshop.svg" height={180} width={360} alt="submit" />
            <div className="flex items-center mt-16">
              <div className="black-1 font-36 font-bold">Submit Request</div>
              <div className="ml-2">
                <Image src="/images/right-arrow-black.svg" width={33} height={15} alt="arrow" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}
