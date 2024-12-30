import React from "react";
import HeroSection from "./hero";
import ProjectsSection from "./projects";
import TrustSection from "./trust";
import Deliverables from "./deliverables";
import GrowthSection from "./growth";
import Footer from "./footer";
import ServicesSection from "./services";
import TestimonialsSection from "./testimonials";
import BookingSection from "./book";

export default function NewHomeTemplate() {
  return (
    <div>
      <HeroSection />
      <div className="md:visible md:flex hidden flex-col justify-center">
        <img src="/images/home/line.png" alt="heart" />
        <div className="flex justify-center py-4" style={{ color: "#949494" }}>
          <img src="/images/home/heart.svg" alt="heart" className="mr-2" /> Bring flowers or a small gift to someone going through a tough time
        </div>
        <img src="/images/home/line.png" alt="heart" />
      </div>
      <ProjectsSection />
      <div className="md:hidden block">
        <img src="/images/home/heart.svg" alt="heart" className="mb-4 mx-auto" height={24} width={24} />
        <div className="text-center mx-auto leading-7 w-72" style={{ color: "#949494" }}>
          Bring flowers or a small gift to someone going through a tough time
        </div>
      </div>
      <TrustSection />
      <Deliverables />
      <ServicesSection />
      <TestimonialsSection />
      <GrowthSection />
      {/* <iframe width="100%" height="750px" src="https://thesimple.zohobookings.in/portal-embed#/255151000000036016" frameborder="0" allowfullscreen="">
        {" "}
      </iframe> */}
      <BookingSection />
      <div className="md:flex hidden flex-col justify-center md:mt-9 md:mb-7">
        <img src="/images/home/line.png" alt="heart" />
        <div className="flex justify-center py-4" style={{ color: "#949494" }}>
          <img src="/images/home/heart.svg" alt="heart" className="mr-2" /> Bring flowers or a small gift to someone going through a tough time
        </div>
        <img src="/images/home/line.png" alt="heart" />
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
