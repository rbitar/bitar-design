import { useState } from 'react';

export default function ProjectCard({ project }) {
  const { id, title, location, description, image, images } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Check if the project has multiple images
  const hasMultipleImages = images && images.length > 0;
  const currentImage = hasMultipleImages ? images[currentImageIndex] : image;
  
  const handlePrevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hasMultipleImages) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };
  
  const handleNextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hasMultipleImages) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }
  };

  return (
    <a href={`/project/${id}`} className="block h-full">
      <div className="bg-white overflow-hidden border border-black shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="h-64 overflow-hidden relative">
          <img 
            src={currentImage} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          
          {/* Navigation arrows for multiple images */}
          {hasMultipleImages && (
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button 
                onClick={handlePrevImage}
                className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button 
                onClick={handleNextImage}
                className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Next image"
              >
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          )}
          
          {/* Image counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          </div>
          <div className="flex items-center text-gray-600 mb-3">
            <i className="ri-map-pin-line mr-1"></i>
            <span className="text-sm line-clamp-1">{location}</span>
          </div>
          <p className="text-gray-700 line-clamp-3 mb-auto">{description}</p>
          <div className="mt-4">
            <span className="inline-flex items-center text-black hover:text-gray-700 font-medium">
              View Project <i className="ri-arrow-right-line ml-1"></i>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}