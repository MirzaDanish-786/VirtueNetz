import Image from "next/image";
import Link from "next/link";
import Button from "../../reusable/Button";
import DropDownIcon from "../../icons/DropDownIcon";
import MobileMenu from "./MobileMenu";

interface Props {
  isPrimary: boolean;
}

const Navbar = ({isPrimary}:Props) => {
  return (
    <header className={`${isPrimary ? 'text-white' : 'text-black border-b border-b-[#DEE9EE]'} absolute top-0 left-0 w-full z-100 bg-transparent`}>
      <nav className="py-[34px] max-lg:py-6">
        <div className="max-w-[1600px] mx-auto px-7 flex items-center justify-between max-lg:px-5 max-md:px-3">
          {/* Logo Section */}
          <div className="relative w-[240px] flex flex-shrink-0 h-[55px] max-2xl:w-[200px] max-2xl:h-[40px] max-sm:w-[170px] max-sm:h-[35px]">
            <Link href="/" className="block w-full h-full">
              <Image
                src={`${isPrimary ? '/images/primary-logo.png' : '/images/secondary-logo.png'}`}
                alt="VirtueNetz Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav Items Section */}
          <div className="flex flex-shrink-0 items-center gap-[22px] max-2xl:gap-4 max-xl:hidden">
            <div className="relative group">
              <Link
                href="/"
                className="flex items-center gap-1 text-base hover:text-orange-500 transition"
              >
                Home
              </Link>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                About Us
                <DropDownIcon className={`w-[10px]`} />
              </button>
              <ul className="absolute overflow-hidden left-0 mt-2 w-48 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
                <li>
                  <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/culture" className="block px-4 py-2 hover:bg-gray-100">
                    Culture
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                Services
                <DropDownIcon className="w-[10px]" />
              </button>
              <ul className="absolute left-0 mt-2 overflow-hidden w-56 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
                <li>
                  <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-apps" className="block px-4 py-2 hover:bg-gray-100">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux" className="block px-4 py-2 hover:bg-gray-100">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hire a Developer Dropdown */}
            <div className="relative group">
              <button className="flex cursor-pointer items-baseline gap-1 text-base hover:text-orange-500 transition">
                Hire a Developer
                <DropDownIcon className="w-[10px]" />
              </button>
              <ul className="absolute overflow-hidden left-0 mt-2 w-60 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
                <li>
                  <Link href="/hire/frontend" className="block px-4 py-2 hover:bg-gray-100">
                    Frontend Developer
                  </Link>
                </li>
                <li>
                  <Link href="/hire/backend" className="block px-4 py-2 hover:bg-gray-100">
                    Backend Developer
                  </Link>
                </li>
                <li>
                  <Link href="/hire/fullstack" className="block px-4 py-2 hover:bg-gray-100">
                    Full Stack Developer
                  </Link>
                </li>
              </ul>
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
          <div className="flex flex-shrink-0 items-center gap-4 max-xl:hidden">
            <span className="text-lg font-medium font-ibmplexmono max-2xl:text-base">
              +92 315-7884477
            </span>
            <Link href="/contact">
              <Button label="SAY HELLO!" bg_color={true} />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="hidden max-xl:block">
            <MobileMenu isPrimary={isPrimary}/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
