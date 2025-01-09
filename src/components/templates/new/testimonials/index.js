"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS_DATA_1 = [
  {
    content: "⁠Exceptional mobile app design! They transformed our vision into reality with seamless functionality and a stunning interface.",
    name: "Ramesh V.",
    role: " Mobile App",
    image: "/images/home/testimonials/1.png",
  },
  {
    content: "Their website design boosted our engagement by 300%. Crisp, clean, and user-friendly. Highly recommend!",
    name: "Pooja S.",
    role: " Website",
    image: "/images/home/testimonials/2.png",
  },
  {
    content: "The branding they created helped us stand out. It's unique, modern, and aligns perfectly with our values.",
    name: "Arjun M.",
    role: " Branding",
    image: "/images/home/testimonials/3.png",
  },
];

const TESTIMONIALS_DATA_2 = [
  {
    content: "Our web application is now a game-changer, thanks to their intuitive designs and efficient development process.",
    name: "Nandini R.",
    role: " Web Application",
    image: "/images/home/testimonials/4.png",
  },
  { content: "The dashboard design simplified complex data for our users. Brilliant work!", name: "Rahul K.", role: " Dashboard", image: "/images/home/testimonials/5.png" },
  { content: "Their MVP delivered exactly what we needed—fast and flawless execution.", name: "Ananya T.", role: " MVP", image: "/images/home/testimonials/6.png" },
];

const TESTIMONIALS_DATA_3 = [
  {
    content: "Our mobile app has a sleek design and top-notch user experience. Couldn't be happier!",
    name: "Rajiv N.",
    role: " Mobile App",
    image: "/images/home/testimonials/7.png",
  },
  {
    content: "A truly professional team that nailed our website redesign. The increase in traffic speaks volumes!",
    name: "Megha J.",
    role: " Website",
    image: "/images/home/testimonials/8.png",
  },
  { content: "Their branding elevated our identity. Customers love it, and so do we.", name: "Siddharth P.", role: " Branding", image: "/images/home/testimonials/9.png" },
];

// const TESTIMONIALS_DATA_1 = [
//   {
//     name: "Dave S.",
//     role: "Mobile banking app user",
//     image: "/images/home/testimonials/1.png",
//     content: "Verifying my ID has never been this simple. FaceID is integrated so well into this app that I barely have to think about security. It just works!",
//   },
//   {
//     name: "Dave S.",
//     role: "Mobile banking app user",
//     image: "/images/home/testimonials/1.png",
//     content: "Verifying my ID has never been this simple. FaceID is integrated so well into this app that I barely have to think about security. It just works!",
//   },
//   {
//     name: "Dave S.",
//     role: "Mobile banking app user",
//     image: "/images/home/testimonials/1.png",
//     content: "Verifying my ID has never been this simple. FaceID is integrated so well into this app that I barely have to think about security. It just works!",
//   },
//   {
//     name: "Dave S.",
//     role: "Mobile banking app user",
//     image: "/images/home/testimonials/1.png",
//     content: "Verifying my ID has never been this simple. FaceID is integrated so well into this app that I barely have to think about security. It just works!",
//   },
// ];

export default function TestimonialsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // Reset position when we've scrolled through all images
        return newPosition >= 214 * 4 + 16 * 4 ? 0 : newPosition;
      });
    }, 30); // Adjust speed by changing interval

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container flex justify-center" id="testimonials">
      <div className="testimonials-section">
        <div className="md:text-xl text-base leading-8 text-center">What they say about us</div>
        <div className="md:my-4 md:leading-12 text-center my-1">
          <span className="md:text-4xl text-2xl font-medium">Our clients always </span>
          <span className="md:text-[40px] text-[28px] font-allura">win business</span>
        </div>
        <div className="md:text-[26px] text-[18px] leading-9 text-center md:mb-24 mb-8">Since they solve for users</div>
        <div className="md:flex md:gap-x-4 overflow-y-hidden hidden px-4">
          <div></div>
          <div className="md:basis-1/3" style={{ transform: `translateY(-${scrollPosition}px)` }}>
            {[...TESTIMONIALS_DATA_1, ...TESTIMONIALS_DATA_1, ...TESTIMONIALS_DATA_1].map((elm, index) => (
              <div key={index} className="testimonials-section__card md:text-sm text-xs p-7 mb-4">
                <div className="font-inter black-4">{elm.content}</div>
                <div className="flex md:mt-8 mt-7">
                  <img src={elm.image} alt={elm.name} height={40} width={40} style={{ borderRadius: "50%" }} />
                  <div className="ml-4">
                    <div className="font-inter font-medium mb-1 black-4">{elm.name}</div>
                    <div className="font-inter gray-10">{elm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:basis-1/3" style={{ transform: `translateY(-${scrollPosition}px)` }}>
            {[...TESTIMONIALS_DATA_2, ...TESTIMONIALS_DATA_2, ...TESTIMONIALS_DATA_2].map((elm, index) => (
              <div key={index} className="testimonials-section__card md:text-sm text-xs p-7 mb-4">
                <div className="font-inter black-4">{elm.content}</div>
                <div className="flex md:mt-8 mt-7">
                  <img src={elm.image} alt={elm.name} height={40} width={40} style={{ borderRadius: "50%" }} />
                  <div className="ml-4">
                    <div className="font-inter font-medium mb-1 black-4">{elm.name}</div>
                    <div className="font-inter gray-10">{elm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:basis-1/3" style={{ transform: `translateY(-${scrollPosition}px)` }}>
            {[...TESTIMONIALS_DATA_3, ...TESTIMONIALS_DATA_3, ...TESTIMONIALS_DATA_3].map((elm, index) => (
              <div key={index} className="testimonials-section__card md:text-sm text-xs p-7 mb-4">
                <div className="font-inter black-4">{elm.content}</div>
                <div className="flex md:mt-8 mt-7">
                  <img src={elm.image} alt={elm.name} height={40} width={40} style={{ borderRadius: "50%" }} />
                  <div className="ml-4">
                    <div className="font-inter font-medium mb-1 black-4">{elm.name}</div>
                    <div className="font-inter gray-10">{elm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <div className="md:hidden block md:gap-x-4 overflow-y-hidden px-4">
          <div></div>
          <div className="md:basis-1/3" style={{ transform: `translateY(-${scrollPosition}px)` }}>
            {[...TESTIMONIALS_DATA_1, ...TESTIMONIALS_DATA_2, ...TESTIMONIALS_DATA_3].map((elm, index) => (
              <div key={index} className="testimonials-section__card md:text-sm text-xs p-7 mb-4">
                <div className="font-inter black-4">{elm.content}</div>
                <div className="flex md:mt-8 mt-7">
                  <img src={elm.image} alt={elm.name} height={40} width={40} style={{ borderRadius: "50%" }} />
                  <div className="ml-4">
                    <div className="font-inter font-medium mb-1 black-4">{elm.name}</div>
                    <div className="font-inter gray-10">{elm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
