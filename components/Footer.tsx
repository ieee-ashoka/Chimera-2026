import React from "react";
import { Link } from "@heroui/react";
import { Instagram, Twitter, Mail, MapPin, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: Instagram,
      href: "https://www.instagram.com/ieee.ashoka",
      label: "Instagram",
    },
    {
      id: 2,
      icon: Twitter,
      href: "https://x.com/IEEEAshoka",
      label: "Twitter",
    },
    {
      id: 3,
      icon: Mail,
      href: "mailto:ieee.asb@ashoka.edu.in",
      label: "Email",
    },
    {
      id: 4,
      icon: Globe2,
      href: "https://ieee-ashoka.in",
      label: "Website",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="z-50 w-full py-8 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/competitions"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Register
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Team
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>Ashoka University, Sonipat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <a href="mailto:ieee.asb@ashoka.edu.in">ieee.asb@ashoka.edu.in</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              COPYRIGHT © CHIMERA {new Date().getFullYear()}. ALL RIGHTS
              RESERVED.
            </p>
            <p className="text-gray-400 text-sm">IEEE Ashoka Student Branch</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
