"use client";
import GotoIcon from "@/components/icons/GotoIcon";
import React, { useEffect, useState } from "react";
import TechLayout from "./TechLayout";

const TechnologyStack = () => {
  const technologyCategories = [
    {
      category: "Web Platform",
      technologies: {
        frontend: [
          { name: "React", logoSrc: "/images/tech-1.png" },
          { name: "Next.js", logoSrc: "/images/tech-2.png" },
          { name: "Tailwind CSS", logoSrc: "/images/tech-6.png" },
          { name: "TypeScript", logoSrc: "/images/tech-7.png" },  
          { name: "Redux Toolkit", logoSrc: "/images/tech-8.png" },  
          { name: "Framer Motion", logoSrc: "/images/tech-9.png" }, 
        ],
        backend: [
          { name: "Node.js", logoSrc: "/images/tech-3.png" },
          { name: "Express.js", logoSrc: "/images/tech-4.png" },
          { name: "MongoDB", logoSrc: "/images/tech-5.png" },
          { name: "JWT Auth", logoSrc: "/images/tech-10.png" },  
          { name: "Mongoose", logoSrc: "/images/tech-11.png" },  
          { name: "Socket.IO", logoSrc: "/images/tech-12.png" },  
        ],
      },
    },
    {
      category: "Mobile Apps",
      technologies: {
        general: [
          { name: "React Native", logoSrc: "/images/tech-7.png" },
          { name: "Flutter", logoSrc: "/images/tech-8.png" },
          { name: "Swift", logoSrc: "/images/tech-9.png" },
          { name: "Kotlin", logoSrc: "/images/tech-10.png" },
          { name: "Android Studio", logoSrc: "/images/tech-11.png" },
        ],
      },
    },
    {
      category: "UI/UX & Graphic Designing",
      technologies: {
        general: [
          { name: "Figma", logoSrc: "/images/tech-12.png" },
          { name: "Adobe XD", logoSrc: "/images/tech-13.png" },
          { name: "Sketch", logoSrc: "/images/tech-14.png" },
          { name: "Illustrator", logoSrc: "/images/tech-15.png" },
        ],
      },
    },
    {
      category: "Database",
      technologies: {
        general: [
          { name: "MongoDB", logoSrc: "/images/tech-7.png" },
          { name: "PostgreSQL", logoSrc: "/images/tech-2.png" },
          { name: "MySQL", logoSrc: "/images/tech-4.png" },
          { name: "Firebase Realtime DB", logoSrc: "/images/tech-2.png" },
          { name: "SQLite", logoSrc: "/images/tech-.png" },
        ],
      },
    },
    {
      category: "Cloud & DevOps",
      technologies: {
        general: [
          { name: "AWS", logoSrc: "/images/tech-1.png" },
          { name: "Docker", logoSrc: "/images/tech-1.png" },
          { name: "GitHub Actions", logoSrc: "/images/tech-1.png" },
          { name: "Vercel", logoSrc: "/images/tech-1.png" },
          { name: "Netlify", logoSrc: "/images/tech-1.png" },
          { name: "Render", logoSrc: "/images/tech-1.png" },
        ],
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedTechnology, setSelectedTechnology] = useState<string>(
    technologyCategories[0].category
  );
  console.log(selectedTechnology);

  useEffect(() => {
    setSelectedTechnology(
      technologyCategories[activeIndex].category
        .toLowerCase()
        .replaceAll(" ", "-")
    );
  }, [activeIndex]);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full font-poppins px-20 max-lg:px-10 max-sm:px-5">
      <div className="mx-auto mt-[120px] mb-20 max-w-[1580px] max-lg:my-20">
        {/* Heading */}
        <div className="flex flex-col gap-[10px] border-b border-b-[#453D3D] pb-[35px] max-xl:pb-7 max-lg:pb-5 max-md:pb-2">
          <h1 className="heading uppercase">Technology stack</h1>
        </div>

        {/* Content */}
        <div className="flex">
          {/* Left Container */}
          <div className="w-[30%] pt-20 border-r border-r-[#453D3D]">
            <div className="w-[80%] border">
              <ul className="text-lg font-medium font-ibmplexmono">
                {technologyCategories.length !== 0 &&
                  technologyCategories.map((tech, index) => (
                    <li
                      className={`${
                        index === activeIndex && "text-[#E84D00]"
                      } flex items-center w-fit gap-4 justify-between`}
                      onClick={() => {
                        handleActiveIndex(index);
                      }}
                      key={index}
                    >
                      <div>{tech.category}</div>
                      <div
                        className={`${
                          index === activeIndex ? "block" : "hidden"
                        }`}
                      >
                        <GotoIcon className="w-4" />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Right Container */}
          <div className="w-[70%] pt-20 pl-[90px]">
            <TechLayout
              techCategory={selectedTechnology}
              technologies={technologyCategories[activeIndex].technologies}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
