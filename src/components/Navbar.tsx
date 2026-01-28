"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
    setIsMenuOpen(false);
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
        className={`fixed left-0 right-0 top-0 z-50 h-[81px] w-full border-b border-border flex items-center transition-all duration-300 ${scrolled || isMenuOpen
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
            <div className="flex items-center gap-4 md:gap-12">
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

              {/* CTA Button - Desktop/Tablet */}
              <div className="hidden items-center md:flex">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="flex items-center justify-center w-[119px] h-[37px] rounded-[5px] p-[10px] gap-[10px] bg-orange-600 font-sans font-medium text-[14px] leading-none tracking-[0.9px] text-white transition-all hover:bg-orange-700 hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="flex items-center justify-center p-2 text-foreground md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[81px] left-0 right-0 bg-background border-b border-border overflow-hidden md:hidden shadow-xl"
            >
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className="font-sans font-medium text-[18px] tracking-[1.5px] text-muted-foreground transition-colors hover:text-primary py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="flex items-center justify-center w-full h-[50px] rounded-[5px] bg-orange-600 font-sans font-medium text-[16px] text-white transition-all active:scale-95 shadow-md"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
