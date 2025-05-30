import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactFooterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="contact">
      <div className="h-full lg:h-screen bg-white text-black flex items-center justify-center gap-4 p-10 md:p-20">
        <div className="flex-col flex w-full md:max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <Image
                  src="/images/ImageCatelog1.png"
                  alt="Fresh green peppercorns on vine"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-start">
                <span className="text-2xl md:text-6xl md:leading-20 font-normal">
                  Contact Us
                </span>
                <span className="text-base md:text-2xl mb-4">
                  Have questions or need a quote? Our team is ready to assist
                  you. Reach out to us today.
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Contact number"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-2 text-center cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-16 md:py-20 h-[30rem] flex flex-col items-center justify-center relative mt-20">
        <div className="block absolute top-0 transform -translate-x-1/2 left-1/2 -translate-y-1/3 md:-translate-y-1/2">
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
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-white">
          <div className="flex flex-col items-center">
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl uppercase font-light tracking-wider text-center">
                THE PEPPER CLUB
              </h2>
            </div>

            <nav className="mb-8">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
                <li>
                  <Link
                    href="#about"
                    onClick={(e) => handleNavClick(e, "about")}
                    className="hover:text-gray-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    onClick={(e) => handleNavClick(e, "products")}
                    className="hover:text-gray-300 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    onClick={(e) => handleNavClick(e, "faq")}
                    className="hover:text-gray-300 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    onClick={(e) => handleNavClick(e, "testimonials")}
                    className="hover:text-gray-300 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center gap-6">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooterSection;