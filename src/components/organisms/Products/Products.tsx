import Image from "next/image";
import React from "react";

const Products = () => {
  const productArray = [
    {
      image: "/images/raw-pepper.png",
      title: "Whole Black Pepper",
      description:
        "Carefully handpicked and sun-dried, our Whole Black Pepper delivers a bold, sharp flavour and intense aroma - perfect for grinding fresh or using whole in recipes.",
    },
    {
      image: "/images/dry-pepper.png",
      title: "Ground Black Pepper",
      description:
        "Finely milled from premium peppercorns, our Ground Black Pepper offers a smooth texture and consistent heat, ideal for seasoning blends, sauces, and everyday cooking",
    },
    {
      image: "/images/crackerd-pepper.png",
      title: "Cracked Black Pepper",
      description:
        "Coarsely crushed for a rustic, textured flavor experience, our Cracked Black Pepper enhances marinades, spice rubs, and meat preparations with a vibrant kick",
    },
  ];
  return (
    <div
      id="products"
      className=" bg-black text-white flex items-center justify-center gap-4 p-10 md:p-44 h-full"
    >
      <div className="flex-col items-center flex max-w-7xl">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-6xl md:leading-20 font-normal text-center">
            Our Black Pepper Products
          </span>
          <span className="text-base md:text-2xl mt-4 text-center">
            Explore our journey from lush farms to premium black pepper exports.
            See the care, passion, and quality behind every batch we deliver
          </span>
        </div>

        <div className=" flex flex-col md:flex-row flex-wrap gap-20 items-center justify-center mt-24">
          {productArray.map((item, index) => (
            <div
              key={index}
              className=" max-w-[324px] flex flex-col items-center"
            >
              <div className=" w-[220px] h-[220px] md:w-[324px] md:h-[324px] bg-white rounded-full">
                <Image
                  src={item.image}
                  alt="Premium peppers"
                  width={300}
                  height={200}
                  className="w-full h-full"
                />
              </div>

              <div className=" flex flex-col items-center w-full gap-2 mt-2">
                <span className=" text-xl md:text-2xl">{item.title}</span>
                <span className=" text-xs md:text-base text-center">
                  {item.description}
                </span>
              </div>

              <div className=" text-[10px] md:text-base py-2 px-4 outline-1 outline-white w-fit rounded-sm mt-4">
                Get Sample
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
