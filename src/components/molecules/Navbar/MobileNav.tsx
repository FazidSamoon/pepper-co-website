// components/MobileNav.tsx
import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    onNavClick(e, sectionId);
    setIsOpen(false);
  };

  return (
    <div className="block md:hidden relative z-30">
      {/* Hamburger button */}
      <button 
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center">
          <ul className="flex flex-col items-center space-y-6 text-white text-xl">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleClick(e, item.id)}
                  className="hover:text-gray-300 transition duration-300 hover:scale-110 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;