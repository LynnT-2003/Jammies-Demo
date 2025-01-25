import { SearchIcon } from "lucide-react";
import React from "react";

const HeroHeader = () => {
  return (
    <div className="bg-[#d9d9d9] py-32 w-full flex flex-col justify-center items-center">
      <div className="w-[1300px] px-5">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold font-sans leading-snug">
            Empowering students with Innovation and Creativity Skills
          </h1>
          <h1 className="py-8 text-xl font-sans leading-relaxed">
            Help students with their skills through our various courses and
            workshops
          </h1>
          <div className="bg-white text-gray-700 text-sm rounded-full flex py-2 space-x-4 items-center px-4">
            <SearchIcon size={16} className="text-orange-500" />
            <input
              type="text"
              placeholder="Search Courses"
              className="bg-transparent text-xl font-sans outline-none flex-1 placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
