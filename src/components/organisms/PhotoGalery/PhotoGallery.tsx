import Image from "next/image";
import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageCatalog = [
    {
      imageUrl: "/images/ImageCatelog1.png",
      title: null,
      description: null,
    },
    {
      imageUrl: "/images/ImageCatelog2.png",
      title: "Lush Pepper Farms",
      description:
        "Our black peppercorns are grown in fertile soil and harvested with care, embodying centuries of traditional farming practices.",
    },
    {
      imageUrl: "/images/ImageCatelog3.png",
      title: "Lush Pepper Farms",
      description:
        "Our commitment to sustainable farming ensures that every peppercorn carries the perfect balance of heat and complex aromatics.",
    },
    {
      imageUrl: "/images/ImageCatelog4.png",
      title: null,
      description: null,
    },
  ];

  const orderedImages = isMobile
    ? [imageCatalog[0], imageCatalog[1], imageCatalog[3], imageCatalog[2]]
    : imageCatalog;

  return (
    <div
      id="gallery"
      className="h-full bg-[#ffffff] text-black flex items-center justify-center gap-4 p-10 md:p-20"
    >
      <div className="flex-col items-center flex max-w-7xl">
        <div className="flex flex-col">
          <span className="text-2xl md:text-6xl md:leading-20 font-normal">
            A Glimpse Into Our World
          </span>
          <span className="text-base md:text-2xl mt-4 md:max-w-2/3">
            Explore our journey from lush farms to premium black pepper exports.
            See the care, passion, and quality behind every batch we deliver
          </span>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full h-full mt-10 lg:mt-20">
          {orderedImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={`Pepper farm image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                className="object-cover"
              />
              {image.title && (
                <div className="absolute bg-black/70 text-white z-10 h-full w-full flex flex-col items-center justify-center">
                  <div className="max-w-2/3 flex flex-col items-center justify-center">
                    <h3 className="font-bold mb-1 text-base md:text-2xl">
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
