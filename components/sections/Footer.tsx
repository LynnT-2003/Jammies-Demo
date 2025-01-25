import React from "react";
import { popularCurses } from "@/constants/courses";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#f2f2f2]">
      <div className="w-[1300px] px-5">
        <div className="flex justify-between py-10">
          <div className="flex flex-col space-y-2 w-[32%]">
            <h1 className="text-3xl text-orange-500 font-extrabold font-sans">
              Jammies
            </h1>
            <h1 className="text-md text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              aliquam doloremque.
            </h1>
          </div>
          <div className="flex justify-between space-x-12">
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold">Workshops</h1>
              {popularCurses.slice(0, 4).map((course) => (
                <h1 key={course.title} className="text-sm text-gray-500">
                  {course.title}
                </h1>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold">Courses</h1>
              {popularCurses.slice(0, 4).map((course) => (
                <h1 key={course.title} className="text-sm text-gray-500">
                  {course.title}
                </h1>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold">Contact</h1>
              {popularCurses.slice(0, 4).map((course) => (
                <h1 key={course.title} className="text-sm text-gray-500">
                  {course.title}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
