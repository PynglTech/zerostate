"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  const navLinks = [
    { label: "Philosophy", id: "philosophy" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Careers", id: "careers" },
    { label: "Investor relations", id: "footer" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 h-[81px] w-full border-b border-border flex items-center transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background"
          }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-full">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection("hero", e)}
              className="group flex items-center gap-2"
            >
              <img
                src="/logo.png"
                alt="ZeroState Logo"
                className="h-[110px] w-auto object-contain"
              />
            </a>

            {/* Right Side Actions */}
            <div className="flex items-center gap-12">
              {/* Navigation Links - Desktop */}
              <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className="font-sans font-medium text-[16px] leading-[16px] tracking-[1.9px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="flex items-center justify-center w-[119px] h-[37px] rounded-[5px] p-[10px] gap-[10px] bg-orange-600 font-sans font-medium text-[14px] leading-none tracking-[0.9px] text-white transition-all hover:bg-orange-700 hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
