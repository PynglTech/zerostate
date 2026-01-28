"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#050505] py-20 text-white relative z-10 m-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Logo Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              {/* Logo: Icon Only */}
              <div className="flex items-center">
                <img
                  src="/footer-logo-icon.png"
                  alt="ZeroState"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Links Columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Offices */}
            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">
                Offices
              </h4>
              <div className="space-y-6 text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-white">Delaware, USA</p>
                  <p className="text-xs text-white/40 font-light">Registered Office</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-white">Gujarat, India</p>
                  <p className="text-xs text-white/40 font-light">Engineering Operations</p>
                </div>
              </div>
            </div>

            {/* Investor Relations */}
            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">
                Investor relations
              </h4>
              <a
                href="mailto:ir@zerostatesystems.com"
                className="block text-sm font-medium text-white hover:text-orange-600 transition-colors"
              >
                ir@zerostatesystems.com
              </a>
            </div>

            {/* Social */}
            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">
                Social
              </h4>
              <div className="flex gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-all hover:bg-orange-700 hover:scale-110">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-all hover:bg-orange-700 hover:scale-110">
                  <Twitter className="h-4 w-4" /> {/* X / Twitter */}
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-all hover:bg-orange-700 hover:scale-110">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 font-light">
          <p>© 2026 ZeroState Systems, Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
