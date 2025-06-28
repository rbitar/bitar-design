"use client";
import { useState, useEffect } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentIndex ? 1 : 0,
            filter: "brightness(0.7)"
          }}
        />
      ))}
    </div>
  );
}