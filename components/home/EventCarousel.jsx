import React from "react";
import { Carousel } from "flowbite-react";

const EventCarousel = () => {
  const imageData = [
    "/assets/carousel/image (1).jpg",
    "/assets/carousel/image (2).jpg",
    "/assets/carousel/image (3).jpg",
    "/assets/carousel/image (4).jpg",
    "/assets/carousel/image (5).jpg",
    "/assets/carousel/image (7).jpg",
    "/assets/carousel/image (8).jpg",
    "/assets/carousel/image (9).jpg",
    "/assets/carousel/image (10).jpg",
  ];

  return (
    <div className="w-[50vw] mx-auto">
      <div className="h-[40rem] rounded-md shadow-lg">
        <Carousel>
          {imageData.map((item, index) => (
            <img key={index} src={item} alt={item} className="rounded-md" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventCarousel;
