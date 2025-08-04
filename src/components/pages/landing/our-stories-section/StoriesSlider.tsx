"use client";

import React, { useRef, useState, useEffect } from "react";
import Button from "@/components/reusable/Button";
import StoryCard from "./StoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextArrowIcon from "@/components/icons/NextArrowIcon";
import BackArrowIcon from "@/components/icons/BackArrowIcon";
// Type for a story object
interface Story {
  imageSrc: string;
  title: string;
  desc: string;
  category: string;
}

const stories: Story[] = [
  {
    imageSrc: "/images/hero-bg.png",
    title: "Resumize",
    desc: "Resumize is a platform to create online digital business card...",
    category: "Designing",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "Book Borrow",
    desc: "Book is a platform to borrow book from the same city...",
    category: "Development",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "PPMx",
    desc: "Pictogram Placemaker is a design studio run by young...",
    category: "Marketing",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "Resumize",
    desc: "Resumize is a platform to create online digital business card...",
    category: "Designing",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "Book Borrow",
    desc: "Book is a platform to borrow book from the same city...",
    category: "Development",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "PPMx",
    desc: "Pictogram Placemaker is a design studio run by young...",
    category: "Marketing",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "Resumize",
    desc: "Resumize is a platform to create online digital business card...",
    category: "Designing",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "Book Borrow",
    desc: "Book is a platform to borrow book from the same city...",
    category: "Development",
  },
  {
    imageSrc: "/images/hero-bg.png",
    title: "PPMx",
    desc: "Pictogram Placemaker is a design studio run by young...",
    category: "Marketing",
  },
];

const categories = ["All", "Designing", "Development", "Marketing"];

const StoriesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [maxSlideIndex, setMaxSlideIndex] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Filter stories based on selected category
  const filteredStories: Story[] =
    activeIndex === 0
      ? stories
      : stories.filter((story) => story.category === categories[activeIndex]);

  // Get current slides per view based on window width
  const getCurrentSlidesPerView = (): number => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1200) return 1;
    if (window.innerWidth >= 768) return 1;
    return 1;
  };

  // Handle slide change from swiper
  const handleSlideChange = (swiper: SwiperType): void => {
    setCurrentSlide(swiper.activeIndex);
  };

  // Calculate slider configuration
  useEffect(() => {
    const updateSliderConfig = () => {
      const currentSlidesPerView = getCurrentSlidesPerView();
      setSlidesPerView(currentSlidesPerView);

      // Calculate the maximum slide index we can go to
      // This ensures the last slide is always visible
      const maxIndex = Math.max(
        0,
        filteredStories.length - currentSlidesPerView
      );
      setMaxSlideIndex(maxIndex);

      // Reset to first slide when category changes or on resize
      if (currentSlide > maxIndex) {
        setCurrentSlide(0);
        if (swiperRef.current) {
          swiperRef.current.slideTo(0, 0); // 0 duration for instant reset
        }
      }
    };

    updateSliderConfig();

    // Add resize listener
    const handleResize = () => {
      updateSliderConfig();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredStories, currentSlide]);

  // Reset when category changes
  useEffect(() => {
    setCurrentSlide(0);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 300); // Smooth transition
    }
  }, [activeIndex]);

  // Navigation functions with boundary checks
  const goToPrev = (): void => {
    if (currentSlide > 0) {
      const newIndex = currentSlide - 1;
      setCurrentSlide(newIndex);
      if (swiperRef.current) {
        swiperRef.current.slideTo(newIndex, 300);
      }
    }
  };

  const goToNext = (): void => {
    if (currentSlide < maxSlideIndex) {
      const newIndex = currentSlide + 1;
      setCurrentSlide(newIndex);
      if (swiperRef.current) {
        swiperRef.current.slideTo(newIndex, 300);
      }
    }
  };

  const goToSlide = (index: number): void => {
    if (index >= 0 && index <= maxSlideIndex) {
      setCurrentSlide(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index, 300);
      }
    }
  };

  // Don't render navigation if there are not enough slides
  const showNavigation = filteredStories.length > slidesPerView;

  return (
    <div className="w-full overflow-hidden px-4 md:px-0">
      {/* Category Filter Buttons */}
      <div className="flex gap-[15px] flex-wrap pb-8">
        {categories.map((cat, index) => (
          <Button
            key={index}
            label={cat}
            onClick={() => setActiveIndex(index)}
            bg_color={activeIndex === index}
            additionalClasses="text-[#989CAA]"
          />
        ))}
      </div>

      {/* Swiper Slider */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          // slidesPerView={}
          wrapperClass="transform"
          slidesPerGroup={1}
          spaceBetween={20}
          // cardsEffect={/}
          allowTouchMove={true}
          simulateTouch={true}
          touchRatio={1}
          touchAngle={45}
          grabCursor={true}
          navigation={false} // Disable built-in navigation
          pagination={false}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          onReachEnd={() => {
            // Prevent sliding beyond the last meaningful position
            if (swiperRef.current && currentSlide !== maxSlideIndex) {
              swiperRef.current.slideTo(maxSlideIndex, 300);
            }
          }}
          className="pb-10 w-full"
          watchOverflow={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
          }}
        >
          {filteredStories.map((story: Story, idx: number) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="max-w-[285px] w-full">
                <StoryCard
                  imageSrc={story.imageSrc}
                  title={story.title}
                  desc={story.desc}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation - Only show if needed */}
      {showNavigation && (
        <div className="mt-10 flex justify-start items-center gap-x-6">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition-all duration-200 ${
              currentSlide === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:opacity-80 hover:scale-105"
            }`}
          >
            <BackArrowIcon />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: maxSlideIndex + 1 }, (_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 cursor-pointer hover:scale-110 ${
                  index === currentSlide
                    ? "w-[10px] h-[10px] bg-[#F97316] rounded-full"
                    : "w-[7px] h-[7px] bg-[#6B7280] rounded-full hover:bg-[#9CA3AF]"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentSlide >= maxSlideIndex}
            className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition-all duration-200 ${
              currentSlide >= maxSlideIndex
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:opacity-80 hover:scale-105"
            }`}
          >
            <NextArrowIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default StoriesSlider;
