import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-brand-backgroundEnd text-brand-secondary pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left - Branding */}
        <div>
          <h1 className="font-cursive font-bold text-brand-secondary text-2xl">
            Chibueze.dev
          </h1>
          <p className="mt-3 text-sm text-brand-secondaryHover leading-relaxed">
            Full-Stack Developer crafting modern, scalable web solutions. Let’s
            build something amazing together.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="about" // 👈 must match the <Element name="contact">
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-brand-orange transition-colors duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects" // 👈 must match the <Element name="contact">
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-brand-orange transition-colors duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact" // 👈 must match the <Element name="contact">
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-brand-orange transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm mb-3 text-brand-secondaryHover">
            Open to opportunities, collaborations, or just a chat.
          </p>
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-brand-orange transition-colors duration-300"
          >
            <FaEnvelope /> chibueze.dev01@gmail.com
          </a>

          {/* Social Icons 
          <div className="flex justify-center md:justify-start gap-5 mt-4 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-orange transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-orange transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-orange transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>*/}
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-brand-secondaryHover">
        © {new Date().getFullYear()}{" "}
        <span className="text-brand-secondary font-cursive">Chibueze.dev</span>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
