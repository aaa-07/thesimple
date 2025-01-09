import React from "react";
import ProjectsSection from "./projects";
import GrowthSection from "../new/growth";
import BookingSection from "../new/book";
import Footer from "../new/footer";

export default function WorkTemplate() {
  return (
    <div>
      <ProjectsSection />
      <GrowthSection />
      <BookingSection />
      <div className="md:flex hidden flex-col justify-center md:mt-9 md:mb-7">
        <img src="/images/home/line.svg" alt="heart" />
        <div className="flex justify-center py-4" style={{ color: "#949494" }}>
          <img src="/images/home/heart.svg" alt="heart" className="mr-2" /> Bring flowers or a small gift to someone going through a tough time
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
