import React from "react";
import Link from "next/link";
import LearnMoreGotoIcon from "@/components/icons/LearnMoreGotoIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import ClutchIcon from "@/components/icons/ClutchIcon";
import GotoTopIcon from "@/components/icons/GotoTopIcon";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="w-full px-20 max-lg:px-10 max-sm:px-5">
      <div className="flex flex-wrap justify-between gap-7 mx-auto mt-20 mb-20 max-w-[1580px] max-lg:flex-col max-lg:gap-y-12 max-lg:my-20 max-md:my-10 max-sm:mb-5">
        {/* Left */}
        <div className="flex flex-col gap-20 max-2xl:gap-10 max-lg:gap-10">
          <div className="flex gap-20 max-2xl:gap-10 max-sm:flex-col max-sm:gap-8">
            {/* Links Column */}
            <div className="flex flex-col gap-4">
              <h6 className="font-poppins text-lg font-medium">Links</h6>
              <ul className="flex flex-col gap-[13px] font-ibmplexmono text-[#231F20] text-base">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#">About Us</Link>
                </li>
                <li>
                  <Link href="/#">Services</Link>
                </li>
                <li>
                  <Link href="/#">Our Work</Link>
                </li>
                <li>
                  <Link href="/#">Blog</Link>
                </li>
                <li>
                  <Link href="/#">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h6 className="font-poppins text-lg font-medium">Our Services</h6>
              <ul className="flex flex-col gap-[13px] font-ibmplexmono text-[#231F20] text-base">
                <li>
                  <Link href="/">UI/UX & Graphic Design</Link>
                </li>
                <li>
                  <Link href="/#">Web & Mobile App Development</Link>
                </li>
                <li>
                  <Link href="/#">AI Based Web & Mobile App Development</Link>
                </li>
                <li>
                  <Link href="/#">eCommerce Solutions</Link>
                </li>
                <li>
                  <Link href="/#">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/#">Staff Augmentation</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Profile */}
          <div className="flex gap-[15px] items-center font-ibmplexmono text-[#231F20]">
            <LearnMoreGotoIcon className="w-[35px]" />
            <div>Company Profile</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full max-w-[600px] max-lg:w-full">
          {/* Social Media */}
          <div className="flex gap-[15px] flex-wrap">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group w-fit rounded-full transition-colors duration-300 bg-transparent hover:bg-[#E84D00]">
                <FacebookIcon
                  width={40}
                  height={40}
                  strokeClassName="text-[#E84D00] group-hover:text-[#E84D00]"
                  fillClassName="text-black group-hover:text-white"
                />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group w-fit rounded-full transition-colors duration-300 bg-transparent hover:bg-[#E84D00]">
                <LinkedInIcon
                  width={40}
                  height={40}
                  strokeClassName="text-[#E84D00] group-hover:text-[#E84D00]"
                  fillClassName="text-black group-hover:text-white"
                />
              </div>
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group w-fit rounded-full transition-colors duration-300 bg-transparent hover:bg-[#E84D00]">
                <TwitterIcon
                  width={40}
                  height={40}
                  strokeClassName="text-[#E84D00] group-hover:text-[#E84D00]"
                  fillClassName="text-black group-hover:text-white"
                />
              </div>
            </Link>
            <Link
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group w-fit rounded-full transition-colors duration-300 bg-transparent hover:bg-[#E84D00]">
                <ClutchIcon
                  width={40}
                  height={40}
                  strokeClassName="text-[#E84D00] group-hover:text-[#E84D00]"
                  circleClassName="text-[#231F20] group-hover:text-[#E84D00]"
                  pathClassName="text-white group-hover:text-white"
                />
              </div>
            </Link>
          </div>

          {/* Addresses */}
          <div className="flex flex-col gap-[10px] w-full font-ibmplexmono text-[#231F20] text-base">
            <div className="flex justify-between flex-wrap gap-2">
              <div className="w-full sm:w-auto">
                12300 Ford Rd, Ste 290, Dallas, TX 75234
              </div>
              <div className="text-nowrap">+1 (909) 280 2569</div>
            </div>
            <div className="flex justify-between flex-wrap gap-2">
              <div className="w-full sm:w-auto">
                3651 Lindell Road Las Vegas, NV 89103
              </div>
              <div className="text-nowrap">
                <Link href="/#">support@virtuenetz.com</Link>
              </div>
            </div>
            <div>1552 Farmstead Drive, L9E0A5 Milton, Ontario, Canada</div>
          </div>
        </div>

        {/* Top Scroll Icon */}
       <ScrollToTopButton/>
      </div>
    </footer>
  );
};

export default Footer;
