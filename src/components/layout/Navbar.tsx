"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../reusable/Button";
// import DropdownIcon from "@/assets/icons/DropDown.svg";
import DropDownIcon from "../icons/DropDownIcon";

const Navbar = () => {

  return (
    <header className="absolute  top-0 left-0 w-full z-100 bg-transparent text-white">
      <nav className="py-[34px]">
        <div className="max-w-[1600px] mx-auto px-7 flex items-center justify-between">
          {/* Logo Section */}
          <div className="relative w-[240px] flex flex-shrink-0 h-[55px] max-2xl:w-[200px] max-2xl:h-[40px] ">
            <Link href="/" className="block w-full h-full">
              <Image
                src="/images/logo.png"
                alt="VirtueNetz Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav Items Section */}
          <div className="flex flex-shrink-0 items-center gap-[22px] max-2xl:gap-4">
            <div className="relative group">
              <Link
                href="/"
                className="flex items-center gap-1 text-base hover:text-orange-500 transition"
              >
                Home
              </Link>
            </div>

            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                About Us
                <DropDownIcon className="w-[10px]" />
              </button>
              {/* Put dropdown here (conditionally rendered if needed) */}
            </div>

            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                Services
                <DropDownIcon className="w-[10px]" />
              </button>
              {/* Put dropdown here */}
            </div>

            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                Hire a Developer
                <DropDownIcon className="w-[10px]" />
              </button>
              {/* Put dropdown here */}
            </div>

            <div className="relative group">
              <Link
                href="/work"
                className="flex items-center gap-1 text-base hover:text-orange-500 transition"
              >
                Our Work
              </Link>
            </div>

            <div className="relative group">
              <Link
                href="/blog"
                className="flex items-center gap-1 text-base hover:text-orange-500 transition"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-shrink-0 items-center gap-4">
            <span className="text-lg font-medium font-ibmplexmono max-2xl:text-base">
              +92 315-7884477
            </span>
            <Link href="/contact">
              <Button label="SAY HELLO!" bg_color={true} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
