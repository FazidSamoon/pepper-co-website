// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const productsSection = document.getElementById("products");
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/images/pepper-background.png"
            alt="Black peppers background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center pt-20 h-full">
        <div className="flex flex-col items-center justify-center flex-[3]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-serif text-center mb-4 md:mb-6">
            World-Class Pepper,
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-serif text-center mb-8 md:mb-12">
            Delivered Fresh from Our Fields to Your Table
          </h2>

          <button
            onClick={handleExploreClick}
            className="border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-6 py-3 text-sm md:text-base hover:scale-105 active:scale-95"
          >
            Explore Our Peppers
          </button>
        </div>

        <div className="w-full justify-end flex-1 bg-black">
          <div className="block absolute bottom-0 transform -translate-x-1/2 left-1/2 ">
            <div className="relative w-70 h-70 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full flex items-center justify-center p-2">
                {/* <div className="absolute w-full h-full">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="
           M 150, 150
        m -120, 0
        a 120,120 0 1,1 240,0
        a 120,120 0 1,1 -240,0
            "
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="14"
                      fontFamily="Butler, serif"
                      letterSpacing="2"
                    >
                      <textPath
                        href="#circlePath"
                        startOffset="0%"
                        textAnchor="start"
                        dy="5"
                      >
                        Premium Quality • Global Shipping • Sustainable Farming
                        •
                      </textPath>
                    </text>
                  </svg>
                </div> */}

<div className="absolute w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 150, 150
                m -120, 0
                a 120,120 0 1,1 240,0
                a 120,120 0 1,1 -240,0
              "
            />
          </defs>
          <text
            fill="white"
            fontSize="14"
            fontFamily="Butler, serif"
            letterSpacing="2"
          >
            <textPath
              href="#circlePath"
              startOffset="0%"
              textAnchor="start"
              dy="5"
            >
              Premium Quality • Global Shipping • Sustainable Farming •
            </textPath>
          </text>
        </svg>
      </div>

                <div className="z-10 w-50 h-50 lg:w-60 lg:h-60 rounded-full overflow-hidden bg-[#454545] flex items-center justify-center">
                  <Image
                    src="/images/pepper-pile.png"
                    alt="Premium peppers"
                    width={551}
                    height={551}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
