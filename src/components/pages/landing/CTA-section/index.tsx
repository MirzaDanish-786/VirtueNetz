import React from "react";
import Image from "next/image";
import GotoButton from "@/components/reusable/GotoButton";
const CTASection = () => {
  return (
    <section className="w-full px-20 bg-[#1C1919] rounded-[40px] pt-[100px] pb-[140px] max-xl:py-10  max-xl:rounded-4xl max-lg:px-10 max-sm:px-5 max-sm:rounded-xl">
      <div className="mx-auto max-w-[1580px] flex max-md:flex-col max-md:gap-10 max-sm:gap-5">
        {/* Left */}
        <div className="w-1/2 max-md:w-full">
          <div className="w-[60%] flex flex-col gap-[56px] max-2xl:w-[80%] max-lg:gap-7 max-md:flex-row max-md:items-center max-md:w-full max-md:justify-between ">
            <p className="text-[28px] text-white max-2xl:text-xl max-xl:text-lg max-md:w-[60%] max-sm:text-sm max-sm:w-[80%]">
              Subscribe to our newsletter for the latest updates, inspirations,
              and trends in various projects.
            </p>
            <div className="relative w-[150px] h-[150px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[150px] max-sm:w-[80px] max-sm:h-[80px]">
              <Image src={"/images/cta-img.png"} fill alt="cta-img" className="object-contain"/>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 max-md:w-full">
          <div className="flex flex-col gap-[60px] max-2xl:gap-10 max-md:gap-5">
            <h2 className="text-[68px] font-semibold uppercase text-white max-2xl:text-5xl max-xl:text-4xl">
              Pulse of Progress Feel the Future
            </h2>

            {/* Input fields  */}
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-[25px] max-xl:gap-2">
                <div className="w-full">
                  <input
                    className="border w-full border-[#453D3D] rounded-[40px] text-base font-ibmplexmono outline-none p-[25px] placeholder-[#989CAA] max-xl:p-4 text-white max-xl:rounded-2xl max-md:text-sm max-md:p-3 max-sm:rounded-md"
                    placeholder="Full Name*"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <input
                    className="border w-full border-[#453D3D] rounded-[40px] text-base font-ibmplexmono outline-none p-[25px] placeholder-[#989CAA] max-xl:p-4 text-white max-xl:rounded-2xl max-md:text-sm max-md:p-3 max-sm:rounded-md"
                    placeholder="Email*"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-between items-center max-sm:flex-col max-sm:items-start ">
                <div className="flex flex-row-reverse gap-[10px] max-md:gap-1">
                  {/* Label */}
                  <label
                    htmlFor="checkbox"
                    className="cursor-pointer text-base leading-[100%] text-white"
                  >
                    <div className="max-xl:text-[12px]">
                      By subscribing to our newsletter, you agree to our{" "}
                    </div>
                    <div className="text-[#E84D00] max-xl:text-[12px]">
                      Terms & Conditions
                    </div>
                  </label>

                  {/* Custom Checkbox */}
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="w-5 h-5 shrink-0 appearance-none border border-white rounded-[4px] bg-transparent checked:bg-white checked:border-white checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpolyline points=%276 12 10 16 18 8%27/%3E%3C/svg%3E')] bg-center bg-no-repeat max-md:w-3 max-md:h-3 max-md:mt-1"
                  />
                </div>
                {/* button */}
                <div>
                  <GotoButton is_bg_color={true} label="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
