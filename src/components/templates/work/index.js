"use client";
import React, { useEffect, useState } from "react";
import ProjectsSection from "./projects";
import GrowthSection from "../new/growth";
import BookingSection from "../new/book";
import Footer from "../new/footer";
import { QUOTES } from "../new/quotes";

const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});

const dayChecker = () => {
  return new Date().getHours() < 18 && new Date().getHours() >= 6;
};

export default function WorkTemplate() {
  const quoteIndex = new Date().getDate() > 20 ? new Date().getDate() - 20 : new Date().getDate() - 1;

  const [time, setTime] = useState(shortTime.format(Date.now()));
  const [isDay, setIsDay] = useState(dayChecker());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(shortTime.format(Date.now()));
      setIsDay(dayChecker());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ProjectsSection />
      <GrowthSection />
      <BookingSection />
      <div className="md:flex hidden flex-col justify-center md:mt-9 md:mb-7">
        <img src="/images/home/line.svg" alt="heart" />
        <div className="flex justify-center py-4">
          <div className="flex" style={{ color: "#949494", width: "980px" }}>
            <div className="flex w-1/2">
              {isDay ? <img src="/images/home/day.svg" alt="day" className="mr-2" /> : <img src="/images/home/night.svg" alt="night" className="mr-2" />}
              <div>Bangalore | {time}</div>
            </div>
            <div className="w-1/2">
              <img src="/images/home/heart.svg" alt="heart" className="mr-2 inline" /> {QUOTES[quoteIndex]}
            </div>
          </div>
        </div>
        <img src="/images/home/line.svg" alt="heart" />
      </div>

      <div className="md:hidden block">
        <img src="/images/home/heart.svg" alt="heart" className="mb-4 mx-auto" height={24} width={24} />
        <div className="text-center mx-auto leading-7 w-72" style={{ color: "#949494" }}>
          Bring flowers or a small gift to someone going through a tough time
        </div>
      </div>
      <Footer />
    </div>
  );
}
