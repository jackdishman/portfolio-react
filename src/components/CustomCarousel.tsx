import React, { useState } from "react";

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="relative flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-full w-full object-cover"
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
