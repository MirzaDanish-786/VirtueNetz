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
    <div className="w-full h-[600px] font-poppins flex items-center max-w-[1800px] mx-auto rounded-[40px] bg-[#F3F3F3] pt-[120px] px-[160px] pb-[140px] max-2xl:p-20 max-2xl:h-[500px] max-xl:px-10 max-xl:py-10 max-xl:h-[400px] max-lg:rounded-3xl max-lg:h-[300px] max-md:flex-col max-md:gap-5 max-md:h-[400px] max-sm:p-5 max-sm:rounded-sm">
      {/* Left container */}
      <div className="w-[30%] flex flex-col gap-4 pt-4 pr-[100px] pb-[100px] border-r border-r-[#989CAA] max-2xl:pr-10 max-2xl:pb-0 max-lg:pr-3 max-lg:gap-2 max-md:w-full max-md:border-none max-md:p-0">

        {/* Image */}
        <div className="w-[130px] h-[130px] rounded-full bg-white flex items-center justify-center max-lg:w-20 max-lg:h-20">
          <div className="relative w-[90px] h-[90px] max-lg:w-[60px] max-lg:h-[60px]">
            <Image
              src="/images/reviewer.png"
              alt="reviewer"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <div className="font-medium text-[22px] max-lg:text-lg">{name}</div>
          <div className="text-[#453D3D] text-sm max-lg:text-[12px]">{desination}</div>
        </div>
      </div>

      {/* Right container */}
      <div className="w-[70%] flex gap-4 pl-[90px] max-2xl:pl-10 max-md:w-full max-md:p-0">
        <div className="relative flex flex-shrink-0 w-[75px] h-[58px] max-xl:w-14 max-xl:h-12 max-[980px]:!w-9 max-[980px]:!h-9 ">
          <Image
            src={"/images/review-card.png"}
            alt="quotes"
            fill
            className="object-contain"
          />
        </div>
        {/* Review */}
        <div className="flex flex-col gap-[30px] max-lg:gap-4 max-md:gap-1">
          <div className="text-[28px] text-[#453D3D] line-clamp-6 max-2xl:text-2xl max-xl:text-xl max-lg:text-lg max-[980px]:!text-sm ">
            {review}
          </div>
          <div className="flex gap-4 items-center max-lg:gap-2">
            <div className="relative w-20 h-[23px] max-lg:w-10 max-lg:h-[16px]">
              <Image
                src={"/images/review.png"}
                alt="review-img"
                fill
                className="object-contain"
              />
            </div>

            {/* Rating */}
            <div className="flex gap-[10px] items-center max-lg:gap-1">
              <div className="text-xl font-medium max-lg:text-lg">{rating}</div>
              <div className="flex gap-[6px] max-lg:gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    className="max-lg:w-4"
                    key={index}
                    filled={index < rating}
                  />
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
