/* eslint-disable */
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Button from "../ui/Button";


function Carousel({ title, imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const previousIndex=(currentIndex - 1 + imageUrls.length) % imageUrls.length;
    setCurrentIndex(previousIndex);
  }

  useEffect(() => {
    
     const interval = setInterval(handleNext, 3000);

     return () => clearInterval(interval);
   }, [handleNext]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center">
        <Button type="carousel" onClick={handlePrev}>
          <FaChevronLeft />
        </Button>
        <img
          className="w-72 max-w-72 h-56 max-h-56"
          src={imageUrls[currentIndex]}
          alt={title}
        />
        <Button type="carousel" onClick={handleNext}>
          <FaChevronRight />
        </Button>
      </div>
      <div className="flex space-x-1">
        {imageUrls.map((_, index) => {
          const defaultClassName =
            "h-3 w-3 border-2 border-black rounded-full cursor-pointer";
          const dotClassName =
            index === currentIndex
              ? defaultClassName + " bg-black"
              : defaultClassName;
          return (
            <span
              className={dotClassName}
              onClick={() => setCurrentIndex(index)}
              key={index}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
