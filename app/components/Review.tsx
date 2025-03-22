"use client"
import React, { useEffect, useRef, useState } from "react";


const ReviewCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Auto-scroll every 5 seconds
    const intervalId = setInterval(() => {
      scrollRight();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
       
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
        >
          {/* Elfsight Google Reviews Widget */}
          <div
            className="elfsight-app-d9ec9cc4-5b7a-44a8-a67d-c3cba9d82979"
            data-elfsight-app-lazy
          ></div>
          {/* Add more review widgets here */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
