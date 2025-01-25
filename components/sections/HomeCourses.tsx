import React from "react";
import CourseCard from "../CourseCard";

const HomeCourses = () => {
  const courses = [
    {
      title: "Artificial Intelligence",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Computer Programming",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Machine Learning",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Web Development",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Artificial Intelligence",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Computer Programming",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Machine Learning",
      image: "https://placehold.co/400x400@2x.png",
    },
    {
      title: "Web Development",
      image: "https://placehold.co/400x400@2x.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-24">
      <h1 className="text-4xl font-bold font-sans">Topics we Offer</h1>
      <div className="flex flex-wrap gap-5 py-6 justify-between">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};

export default HomeCourses;
