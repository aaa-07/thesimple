"use client";
import Header from "@/components/organisms/header";
import NewHomeTemplate from "@/components/templates/new";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDeliverablesVisible, setIsDeliverablesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      if (scrollTop > 3170 && scrollTop < 4300) {
        setIsDeliverablesVisible(true);
      } else {
        setIsDeliverablesVisible(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isDeliverablesVisible={isDeliverablesVisible} />
      <NewHomeTemplate />
    </div>
  );
}
