"use client";

import { useIsMobile } from "@/hoc/isMobile";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const scrollSpeed = 0.4; // Pixels per frame
    const animationFrame = requestAnimationFrame(function scroll() {
      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed;

        // Reset position when all images have scrolled
        if (newPosition >= (isMobile ? 475 * 7 + 164 * 3 + 16 * 9 : 995 * 7 + 344 * 3 + 20 * 9)) {
          // 200px is image width + gap
          return 0;
        }
        return newPosition;
      });
      requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="container projects-section">
      <div className="w-full overflow-hidden relative">
        <div></div>
        <div
          className="flex md:gap-x-5 gap-x-4"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            // Double the images to create seamless loop
            width: `${isMobile ? (475 * 7 + 164 * 3 + 16 * 9) * 2 : (995 * 7 + 344 * 3 + 20 * 9) * 2}px`,
          }}
        >
          <Image src="/images/home/projects/1.png" alt="1" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/2.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/3.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/4.png" alt="4" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/5.png" alt="5" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/6.png" alt="6" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/7.jpg" alt="7" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/8.png" alt="8" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/9.png" alt="9" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/10.png" alt="10" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />

          <Image src="/images/home/projects/1.png" alt="1" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/2.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/3.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/4.png" alt="4" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/5.png" alt="5" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/6.png" alt="6" height={isMobile ? 356 : 746} width={isMobile ? 164 : 344} />
          <Image src="/images/home/projects/7.jpg" alt="7" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/8.png" alt="8" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/9.png" alt="9" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          <Image src="/images/home/projects/10.png" alt="10" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
