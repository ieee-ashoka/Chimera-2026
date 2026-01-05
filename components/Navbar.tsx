"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveHoverButton } from "./ui/Button";

export default function ChimeraNavbar() {
  const [atScrollTop, setAtScrollTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const scrollView = document.getElementById("scroll-view");

    const handleScroll = () => {
      if (scrollView) {
        setAtScrollTop(scrollView.scrollTop < 30);
      }
    }

    // Add both mouse and touch event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    scrollView?.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up both listeners
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, atScrollTop]);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Competitions", href: "/competitions" },
    // { name: "Speakers", href: "/speakers" },
    // { name: "Schedule", href: "/schedule" },
    // { name: "Raffle", href: "/raffle" },
    { name: "Team", href: "/team" },
    // { name: "Sponsors", href: "/sponsors" },
    // { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      animate={{
        background: isMenuOpen || !atScrollTop ? "rgba(0, 0, 0, 0.65)" : "rgba(0, 0, 0, 0.0)",
        backdropFilter: isMenuOpen || !atScrollTop ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50"
    >
      <div className="mx-auto flex items-center justify-between px-4">
        {/* Left - Chimera Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Chimera 2025"
            width={100}
            height={100}
            className="h-24 w-auto"
          />
        </Link>

        {/* Center - Navigation Items (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-lg hover:text-gray-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/competitions">
            <InteractiveHoverButton>Register</InteractiveHoverButton>
          </Link>
        </div>

        {/* Right - Ashoka Logo */}
        <Link
          href="https://ashoka.edu.in"
          target="_blank"
          className="flex-shrink-0"
        >
          <Image
            src="/images/ashoka_logo.png"
            alt="Ashoka University"
            width={100}
            height={100}
            className="h-16 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-md"
            onTouchStart={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="px-4 py-2 space-y-2"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block text-white hover:text-gray-300 py-2 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: menuItems.length * 0.1, duration: 0.2 }}
              >
                <Link
                  href="/register"
                  className="block w-full text-center bg-gradient-to-br from-[#5783bb] via-[#4f50af] to-[#8327c3] text-white py-2 px-4 rounded-full transition-colors mt-4"
                >
                  Register
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
