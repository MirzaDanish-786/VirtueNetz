"use client";

import GotoIcon from "@/components/icons/GotoIcon";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSrc: string;
  title: string;
  desc: string;
}

const StoryCard = ({ imageSrc, title, desc }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-[345px] h-auto gap-5 p-6 bg-[#231F20] text-white rounded-[22px] border border-neutral-[#453D3D] max-2xl:w-[300px] max-2xl:h-[420px] max-xl:w-[280px] max-xl:h-[390px]">
      {/* Image container: relative + responsive aspect ratio */}
      <div className="relative w-full aspect-[285/240] rounded-[10px] overflow-hidden">
        <Image
          src={imageSrc}
          alt="Resumize preview"
          fill
          className="object-cover"
        />
      </div>

      {/* Title & Description */}
      <div>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm text-[#DEE9EE] mt-1">{desc}</p>
      </div>

      {/* Learn More link */}
      <Link href="#">
        <div className="flex gap-2 items-center">
          <span className="font-ibmplexmono">Learn More</span>
          <GotoIcon className="stroke-[#F37021] w-4" />
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
