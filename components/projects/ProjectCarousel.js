import { useState } from 'react';

export default function ProjectCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main image display */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt="Project showcase" 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
        
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex mt-4 px-8 overflow-x-auto space-x-2 py-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`w-28 h-20 flex-shrink-0 cursor-pointer ${index === currentIndex ? 'ring-2 ring-black' : 'opacity-70'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}