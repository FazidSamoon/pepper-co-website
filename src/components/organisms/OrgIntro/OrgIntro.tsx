import Image from "next/image";
import React from "react";

const OrgIntro = () => {
  const features = [
    "Grown in nutrient-rich soils",
    "Sun-dried and hand-selected",
    "100% pure with no additives",
    "Available in whole, cracked, and ground forms",
    // "Certified for international standards (ISO/HACCP/Organic)",
  ];
  return (
    <div
      id="about"
      className="h-full lg:h-screen bg-[#ffffff] text-black flex items-center justify-center gap-4 p-10 md:p-20"
    >
      <div className="flex-col lg:flex-row items-center flex max-w-7xl">
        <div className="lg:flex-1">
          <div className="flex flex-col">
            <span className="text-2xl md:text-6xl max-w-[400px] md:leading-20  font-normal">
              Why Our Black Pepper?
            </span>
            <span className="text-base md:text-2xl mt-4">
              At The Pepper Club, we specialize in sourcing and exporting the
              finest quality black pepper, harvested at peak maturity and
              processed to preserve its full flavour and aroma
            </span>

            <ul className="space-y-2 mt-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 text-lg mt-0.5 flex items-center justify-center">
                    <span className="block h-2 w-2 rounded-full bg-gray-800 mr-2"></span>
                  </span>
                  <span className=" text-base md:text-2xl">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:flex-1 flex items-center justify-center h-[300px] w-[270px] md:h-[500px] md:w-[470px] lg:h-full lg:w-full mt-10">
          <Image
            src="/images/intro.png"
            alt="Premium peppers"
            width={300}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OrgIntro;
