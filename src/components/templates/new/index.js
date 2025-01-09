import React, { useEffect, useState } from "react";
import HeroSection from "./hero";
import ProjectsSection from "./projects";
import TrustSection from "./trust";
import Deliverables from "./deliverables";
import GrowthSection from "./growth";
import Footer from "./footer";
import ServicesSection from "./services";
import TestimonialsSection from "./testimonials";
import BookingSection from "./book";
import { QUOTES } from "./quotes";
import Animate from "./services/animate";

const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});

const dayChecker = () => {
  return new Date().getHours() < 18 && new Date().getHours() >= 6;
};

export default function NewHomeTemplate() {
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
      <HeroSection />
      <div className="md:visible md:flex hidden flex-col justify-center">
        <img src="/images/home/line.svg" alt="heart" />
        <div className="flex justify-between py-4" style={{ color: "#949494" }}>
          <div className="flex w-1/2 pl-48">
            {isDay ? <img src="/images/home/day.svg" alt="day" className="mr-2" /> : <img src="/images/home/night.svg" alt="night" className="mr-2" />}
            <div>Bangalore | {time}</div>
          </div>
          <div className="w-1/2">
            <img src="/images/home/heart.svg" alt="heart" className="mr-2 inline" /> {QUOTES[quoteIndex]}
          </div>
        </div>
        <img src="/images/home/line.svg" alt="heart" />
      </div>
      <ProjectsSection />
      <div className="md:hidden block">
        <img src="/images/home/heart.svg" alt="heart" className="mb-4 mx-auto" height={24} width={24} />
        <div className="text-center mx-auto leading-7 w-72" style={{ color: "#949494" }}>
          {QUOTES[quoteIndex]}
        </div>
      </div>
      <TrustSection />
      <Deliverables />
      <Animate />
      <ServicesSection />
      <TestimonialsSection />
      <GrowthSection />
      <BookingSection />
      <div className="md:flex hidden flex-col justify-center md:mt-9 md:mb-7">
        <img src="/images/home/line.svg" alt="heart" />
        <div className="flex justify-between py-4" style={{ color: "#949494" }}>
          <div className="flex w-1/2 pl-48">
            {isDay ? <img src="/images/home/day.svg" alt="day" className="mr-2" /> : <img src="/images/home/night.svg" alt="night" className="mr-2" />}
            <div>Bangalore | {time}</div>
          </div>
          <div className="w-1/2">
            <img src="/images/home/heart.svg" alt="heart" className="mr-2 inline" /> {QUOTES[quoteIndex]}
          </div>
        </div>
        <img src="/images/home/line.svg" alt="heart" />
      </div>

      <div className="md:hidden block">
        <img src="/images/home/heart.svg" alt="heart" className="mb-4 mx-auto" height={24} width={24} />
        <div className="text-center mx-auto leading-7 w-72" style={{ color: "#949494" }}>
          {QUOTES[quoteIndex]}
        </div>
      </div>

      <Footer />
    </div>
  );
}
