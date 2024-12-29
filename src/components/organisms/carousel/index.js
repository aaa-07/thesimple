import React, { useState, useEffect, useCallback } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample slides data - in practice, this would be passed as props
  const slides = [
    { id: 1, content: "Slide 1", color: "bg-blue-500" },
    { id: 2, content: "Slide 2", color: "bg-green-500" },
    { id: 3, content: "Slide 3", color: "bg-red-500" },
    { id: 4, content: "Slide 4", color: "bg-purple-500" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-slide effect
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full max-w-2xl mx-auto" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
      {/* Carousel container */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        {/* Slides */}
        <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className={`flex-shrink-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold ${slide.color}`}>
              {slide.content}
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
