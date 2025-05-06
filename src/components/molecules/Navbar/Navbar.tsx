import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "products",
        "gallery",
        "blog",
        "contact",
        "faq",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Product" },
    { id: "gallery", label: "Gallery" },
    // { id: "blog", label: "Blog" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <MobileNav navItems={navItems} onNavClick={handleNavClick} />
        </div>

        <nav className="hidden md:block w-full">
          <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-12 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`hover:text-gray-300 transition relative pb-1 ${
                    activeSection === item.id
                      ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
