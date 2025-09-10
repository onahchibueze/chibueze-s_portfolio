import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact Me", to: "contact" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="font-cursive font-bold text-brand-secondary text-2xl">
          Chibueze.dev
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-0 font-heading text-brand-secondary">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                activeClass="border-b-2 border-brand-secondary text-brand-orange"
                className="mx-2 p-2 border-b-2 border-transparent hover:border-brand-secondary transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3 font-heading">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="px-4 py-2 border-2 border-brand-secondary rounded hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
          <button className="px-4 py-2 border text-brand-backgroundStart bg-brand-secondary rounded hover:bg-brand-secondaryHover hover:text-white transition-all duration-300">
            Download Resume
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-brand-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 font-heading text-brand-secondary">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                  activeClass="text-brand-orange"
                  className="block px-3 py-2 hover:text-brand-orange transition-all duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center gap-3 pb-6">
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="w-10/12 text-center px-4 py-2 border-2 border-brand-secondary rounded hover:bg-brand-secondary hover:text-white transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
            <button className="w-10/12 px-4 py-2 border text-brand-backgroundStart bg-brand-secondary rounded hover:bg-brand-secondaryHover hover:text-white transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
