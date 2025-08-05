import React from "react";
import TechCard from "./TechCard";

interface TechItem {
  name: string;
  logoSrc: string;
}

interface Technology {
  frontend?: TechItem[];
  backend?: TechItem[];
  general?: TechItem[];
}

interface Props {
  techCategory: string;
  technologies: Technology;
}

const TechLayout = ({ techCategory, technologies }: Props) => {
  console.log(techCategory)
  const getHeading = (category: string) => {
  switch (category) {
    case "web-platform":
      return "Front-End";
    case "mobile-apps":
      return "Mobile Apps";
    case "ui/ux-&-graphic-designing":
      return "UI/UX & Graphic Designing";
    case "database":
      return "Database";
    case "cloud-&-devops":
      return "Cloud & DevOps";
    default:
      return category;
  }
};

  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-10">
        <div className="text-[42px] font-medium leading-none">{getHeading(techCategory)}</div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {techCategory === 'web-platform' && technologies?.frontend?.map((tech) => (
            <TechCard
              key={tech.name}
              techName={tech.name}
              techLogoSrc={tech.logoSrc}
            />
          ))}
          {techCategory !== 'web-platform' && technologies?.general?.map((tech) => (
            <TechCard
              key={tech.name}
              techName={tech.name}
              techLogoSrc={tech.logoSrc}
            />
          ))}
        
        </div>
      </div>
      {techCategory === "web-platform" && (
        <div className="flex flex-col gap-10">
          <div className="text-[42px] font-medium leading-none">{`${
            techCategory === "web-platform" && "Back-End"
          }`}</div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-6">
            {technologies?.backend?.map((tech) => (
              <TechCard
                key={tech.name}
                techName={tech.name}
                techLogoSrc={tech.logoSrc}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechLayout;
