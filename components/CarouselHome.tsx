"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselHome = () => {
  const carouselImages = [
    { imgUrl: "/assets/images/p1.jpg", alt: "oven" },
    { imgUrl: "/assets/images/p2.jpg", alt: "bag" },
    { imgUrl: "/assets/images/p3.png", alt: "laptop" },
    { imgUrl: "/assets/images/p4.jpg", alt: "smart watch" },
    { imgUrl: "/assets/images/p5.jpg", alt: "chair" },
  ];

  return (
    <div className="relative w-full max-w-full sm:max-w-[90%] md:max-w-[600px] mx-auto border border-gray-300 rounded-xl shadow-sm">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        className="flex items-center justify-center"
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={image.imgUrl}
              alt={image.alt}
              width={484}
              height={484}
              className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
