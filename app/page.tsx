import HeroHeader from "@/components/HeroHeader";
import DigitalSkills from "@/components/sections/DigitalSkills";
import HomeCourses from "@/components/sections/HomeCourses";
import PopularCourses from "@/components/sections/PopularCourses";
import PopularWorkshops from "@/components/sections/PopularWorkshops";
import LatestNews from "@/components/sections/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroHeader />
      <div className="w-[1300px] px-5">
        <HomeCourses />
        <PopularCourses />
        <PopularWorkshops />
        <DigitalSkills />
        <LatestNews />
      </div>
    </div>
  );
}
