import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of black pepper do you offer?",
      answer:
        "We offer black Tellicherry pepper, white pepper, green pepper, and mixed peppercorns. We also offer white pepper, green pepper, and mixed pepper as well.",
    },
    {
      question: "What types of black pepper do you offer?",
      answer:
        "Our premium black pepper varieties include Tellicherry, Malabar, and Vietnamese black pepper. Each type offers distinct flavor profiles and heat levels to suit different culinary needs.",
    },
    {
      question: "What types of black pepper do you offer?",
      answer:
        "We offer several grades of black pepper including premium single-origin varieties and specially curated blends for commercial and retail customers.",
    },
    {
      question: "What types of black pepper do you offer?",
      answer:
        "Our selection includes whole black peppercorns, crushed black pepper, and finely ground black pepper, all available in various packaging options for different needs.",
    },
    {
      question: "What types of black pepper do you offer?",
      answer:
        "We provide organic black pepper, conventional black pepper, and specialty smoked black pepper varieties from carefully selected growing regions.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="relative h-full md:h-screen text-white flex items-center justify-center gap-4 p-10 md:p-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-full w-full">
          <Image
            src="/images/FAQBG.png"
            alt="Black peppers background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex-col items-center flex max-w-7xl z-20 ">
        <div className="mb-8 md:mb-16 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-6xl md:leading-20 font-normal text-center text-white">
            Frequently Asked Questions
          </span>
          <span className="text-base md:text-2xl mt-4 text-center md:max-w-2/3">
            Get answers to the most common inquiries about our black pepper
            products, sourcing, and ordering process.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-1/2 lg:w-4/12 h-full ">
            <div className="relative aspect-[3/4] w-full h-[450px]">
              <Image
                src="/images/ImageCatelog1.png"
                alt="Fresh black pepper on the vine"
                fill
                priority
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-7/12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-medium">
                      {faq.question}
                    </span>
                    <span>
                      {openQuestionIndex === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openQuestionIndex === index
                        ? "max-h-40 opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
