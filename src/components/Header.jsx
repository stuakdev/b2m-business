"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import brandLogo from "./../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Who We Are", href: "#whoweare" },
    { label: "What We Do", href: "#whatwedo" },
    { label: "Why B2M", href: "#whyb2m" },
    { label: "What Clients Say", href: "#whatclientsays" },
  ];

  return (
    <nav className="bg-[#F3F8FF] px-6 py-4 shadow-sm sticky top-0 z-999">
      <div className="flex items-center justify-between max-w-[96rem] mx-auto">
        <a className="flex items-center space-x-3 hover:cursor-pointer" href="#">
          <img src={brandLogo.src} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="font-varta text-black text-lg font-bold">B2M Business Solution</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[#02033B] font-inter font-bold hover:underline">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#0C205D] font-inter whitespace-nowrap hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:cursor-pointer"
          >
            Let's Chat
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex md:hidden"
            >
              <div className="min-w-[20%] h-full bg-black opacity-30" onClick={() => setIsOpen(false)}></div>

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="min-w-[80%] h-full z-999 bg-[#f4f7fc] shadow-lg p-6"
              >
                {isOpen && (
                  <div className="flex justify-between items-center">
                    <a className="flex items-center space-x-3" href="#" onClick={() => setIsOpen(false)}>
                      <img src={brandLogo.src} alt="Logo" className="w-10 h-10 rounded-full" />
                      <span className="font-medium text-black text-lg">B2M Business Solution</span>
                    </a>
                    <X onClick={() => setIsOpen(false)} size={28} />
                  </div>
                )}
                <div className="flex flex-col space-y-6 pt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#02033B] font-bold text-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#0C205D] hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full"
                  >
                    Let's Chat
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
