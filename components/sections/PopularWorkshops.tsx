import React from "react";
import { popularCurses } from "@/constants/courses";
import CoursePreview from "../CoursePreview";

const PopularWorkshops = () => {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <h1 className="text-4xl font-bold font-sans">Popular Workshops</h1>
      <div className="flex flex-wrap gap-5 pt-9 justify-between">
        {popularCurses.map((course) => (
          <CoursePreview key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularWorkshops;
