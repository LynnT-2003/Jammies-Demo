import React from "react";
import { Button } from "./ui/button";

interface Lecturer {
  name: string;
  title: string;
  institution: string;
}

interface Course {
  title: string;
  category: string;
  image?: string;
  lecturers: Lecturer[];
  description: string;
  topics: string[];
  certification: boolean;
  rating: number;
  reviews: number;
  lessons: number;
  duration: number;
  students: number;
}

interface CoursePreviewProps {
  course: Course;
}

const CoursePreview = ({ course }: CoursePreviewProps) => {
  function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 >= 0.5; // Check if a half-star is needed
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <h1 className="flex items-center space-x-2">
        <span>{rating.toFixed(1)}</span>
        <span>
          {Array(fullStars)
            .fill(0)
            .map((_, index) => (
              <span key={`full-${index}`} className="text-yellow-500">
                ★
              </span>
            ))}
          {hasHalfStar && <span className="text-yellow-500">☆</span>}
          {Array(emptyStars)
            .fill(0)
            .map((_, index) => (
              <span key={`empty-${index}`} className="text-gray-300">
                ★
              </span>
            ))}
        </span>
      </h1>
    );
  }

  return (
    <div className="border border-[#f2f2f2] pb-4 rounded-lg w-[32%] flex flex-col justify-center">
      <img src="https://placehold.co/600x400@2x.png" alt={course.title} />

      <div className="px-4">
        <div className="bg-[#f2f2f2] my-4 px-4 py-2 rounded-full w-fit">
          <h1 className="text-xs">{course.category}</h1>
        </div>

        <h1 className="font-sans font-semibold text-lg">{course.title}</h1>
        <h1 className="py-2">Dr. {course.lecturers[0].name}</h1>

        <div className="flex space-x-4 py-2">
          <StarRating rating={course.rating} />
          <h1>{course.reviews.toFixed(0)}</h1>
        </div>

        <Button className="bg-orange-500 mt-4 w-full hover:bg-orange-500 hover:bg-opacity-90 transition-all duration-100 ease-in-out">
          View Course
        </Button>
      </div>
    </div>
  );
};

export default CoursePreview;
