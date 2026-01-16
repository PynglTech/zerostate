import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "CAREERS", id: "careers" },
    { label: "IR", id: "footer" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-4 transition-all duration-300"
        >
          <div className="relative h-9 w-9 overflow-hidden border border-primary/50 bg-primary/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/15">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border border-primary/30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs text-primary">Ø</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-medium tracking-[0.25em] text-foreground">
              ZEROSTATE
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              SYSTEMS
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => scrollToSection(link.id)}
                className="relative px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-primary"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 border border-transparent bg-transparent"
                  whileHover={{
                    borderColor: "hsl(18 90% 50% / 0.3)",
                    backgroundColor: "hsl(18 90% 50% / 0.05)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
