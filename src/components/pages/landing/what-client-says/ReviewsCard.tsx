import React from "react";
import Image from "next/image";
import StarIcon from "@/components/icons/StarIcon";

interface Props {
  logoSrc: string;
  name: string;
  desination: string;
  review: string;
  rating: number;
}

const ReviewsCard = ({ logoSrc, name, desination, review, rating }: Props) => {
  return (
    <div className="w-full font-poppins flex max-w-[1800px] mx-auto rounded-[40px] bg-[#F3F3F3] pt-[120px] px-[160px] pb-[140px]">
      {/* Left container */}
      <div className="w-[30%] flex flex-col gap-4 pt-4 pr-[100px] pb-[100px] border-r border-r-[#989CAA]">
        <div className="w-[130px] h-[130px] rounded-full bg-white flex items-center justify-center">
          <Image
            src="/images/reviewer.png"
            alt="reviewer"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <div className="font-medium text-[22px] ">{name}</div>
          <div className="text-[#453D3D] text-sm">{desination}</div>
        </div>
      </div>

      {/* Right container */}
      <div className="w-[70%] flex gap-4 pl-[90px]">
        <div className="relative flex flex-shrink-0 w-[75px] h-[58px]">
          <Image src={"/images/review-card.png"} alt="review" fill />
        </div>
        {/* Review */}
        <div className="flex flex-col gap-[30px]">
          <div className="text-[28px] text-[#453D3D]">{review}</div>
          <div className="flex gap-4">
            <div className="relative w-[80px] h-[23px] ">
              <Image src={"/images/review.png"} alt="review-img" fill />
            </div>

            {/* Rating */}
            <div className="flex gap-[10px] items-center">
            <div className="text-xl font-medium">
                {rating}
            </div>
            <div className="flex gap-[6px]">
              {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} filled={index < rating} />
                ))}
            </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
