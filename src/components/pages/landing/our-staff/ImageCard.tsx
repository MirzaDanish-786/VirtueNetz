import React from "react";
import Image from "next/image";
interface Props {
  imageSrc: string;
  name: string;
  desination: string;
}

const ImageCard = ({ imageSrc, name, desination }: Props) => {
  console.log(imageSrc)
  return (
    <div className="font-poppins"> 
      <div className="flex flex-col gap-4">
        <div className="relative w-[290px] h-[370px] rounded-[20px] bg-[#CBCFD0] overflow-hidden max-xl:w-[250px] max-xl:h-[320px] max-sm:w-[200px] max-sm:h-[250px] ">
          <Image src={imageSrc} fill alt="staff-img" className="object-cover object-top" />
        </div>

        <div className="text-[22px] font-medium">{name}</div>
      </div>

      <div className="text-sm text-[#989CAA]">{desination}</div>
    </div>
  );
};

export default ImageCard;
