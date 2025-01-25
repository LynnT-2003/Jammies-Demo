import { BotIcon } from "lucide-react";
import React from "react";

interface Course {
  title: string;
  image?: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-[#f2f2f2] p-5 rounded-lg w-[23%] flex flex-col justify-center items-center">
      {/* <BotIcon size={100} className="text-orange-500" /> */}
      {course.image && (
        <img src={course.image} alt={course.title} className="w-[50%]" />
      )}
      <h2 className="pt-3 font-semibold font-sans text-lg">{course.title}</h2>
    </div>
  );
};

export default CourseCard;
