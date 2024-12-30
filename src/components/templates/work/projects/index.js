"use client";

import { useIsMobile } from "@/hoc/isMobile";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const isMobile = useIsMobile();

  return (
    <div>
      <div className="md:flex flex-col items-center absolute left-24 top-0 hidden">
        <Image src="/images/work/line.png" alt="line" width={2} height={547} />
        <Image src="/images/work/plane.svg" alt="plane" width={29} height={28} />
      </div>
      <div className="container work-section">
        <div>Our works</div>
        <div className="font-allura">Your innovation</div>
        <div className="w-full overflow-hidden relative px-4 md:px-0">
          <div className="flex flex-col items-center">
            <Image src="/images/home/projects/1.png" alt="1" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/2.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/3.png" alt="2" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/11.png" alt="11" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/7.jpg" alt="7" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/8.png" alt="8" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/9.png" alt="9" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
            <Image src="/images/home/projects/10.png" alt="10" height={isMobile ? 356 : 746} width={isMobile ? 475 : 995} />
          </div>
        </div>
      </div>
      <div className="md:flex flex-col items-center absolute right-24 top-0 hidden">
        <Image src="/images/work/line.png" alt="line" width={2} height={547} />
        <Image src="/images/work/plane.svg" alt="plane" width={29} height={28} />
      </div>
    </div>
  );
}
