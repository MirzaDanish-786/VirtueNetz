"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HamburgerIcon from "../../icons/HamburgerIcon";
import DropDownIcon from "../../icons/DropDownIcon";

interface Props {
  isPrimary: boolean;
}

const MobileMenu = ({ isPrimary }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="xl:hidden relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none z-[1001] relative"
      >
        {isOpen ? (
          <div className="w-6 h-6 relative">
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45"></span>
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45"></span>
          </div>
        ) : (
          <HamburgerIcon className={`w-7 h-7 ${isPrimary ? "text-white" : "text-black"}`} />

        )}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-[998] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/5 bg-black text-white z-[999] shadow-lg px-6 py-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Links */}
        <div className="flex flex-col gap-4 pt-10">
          {/* Home */}
          <Link
            href="/"
            className="text-lg hover:text-orange-500 transition border-b border-[#453D3D] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="border-b border-[#453D3D] pb-2">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex justify-between items-center w-full text-lg hover:text-orange-500 transition"
            >
              <span>About Us</span>
              <DropDownIcon
                className={`w-[10px] transition-transform ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "about" && (
              <div className="mt-2 ml-3 flex flex-col gap-2 text-base text-gray-300">
                <Link href="/about/company" onClick={() => setIsOpen(false)}>
                  Company
                </Link>
                <Link href="/about/team" onClick={() => setIsOpen(false)}>
                  Team
                </Link>
                <Link href="/about/culture" onClick={() => setIsOpen(false)}>
                  Culture
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="border-b border-[#453D3D] pb-2">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-between items-center w-full text-lg hover:text-orange-500 transition"
            >
              <span>Services</span>
              <DropDownIcon
                className={`w-[10px] transition-transform ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "services" && (
              <div className="mt-2 ml-3 flex flex-col gap-2 text-base text-gray-300">
                <Link
                  href="/services/web-development"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/mobile-apps"
                  onClick={() => setIsOpen(false)}
                >
                  Mobile Apps
                </Link>
                <Link href="/services/ui-ux" onClick={() => setIsOpen(false)}>
                  UI/UX Design
                </Link>
              </div>
            )}
          </div>

          {/* Hire a Developer Dropdown */}
          <div className="border-b border-[#453D3D] pb-2">
            <button
              onClick={() => toggleDropdown("hire")}
              className="flex justify-between items-center w-full text-lg hover:text-orange-500 transition"
            >
              <span>Hire a Developer</span>
              <DropDownIcon
                className={`w-[10px] transition-transform ${
                  openDropdown === "hire" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "hire" && (
              <div className="mt-2 ml-3 flex flex-col gap-2 text-base text-gray-300">
                <Link href="/hire/frontend" onClick={() => setIsOpen(false)}>
                  Frontend Developer
                </Link>
                <Link href="/hire/backend" onClick={() => setIsOpen(false)}>
                  Backend Developer
                </Link>
                <Link href="/hire/fullstack" onClick={() => setIsOpen(false)}>
                  Full Stack Developer
                </Link>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link
            href="/work"
            className="text-lg hover:text-orange-500 transition border-b border-[#453D3D] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/blog"
            className="text-lg hover:text-orange-500 transition border-b border-[#453D3D] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-orange-500 transition border-b border-[#453D3D] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Phone & Button */}
        <div className="absolute bottom-10 left-6 right-6">
          <p className="text-lg font-ibmplexmono mb-4">+92 315-7884477</p>
          <Link href="/contact">
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">
              SAY HELLO!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
