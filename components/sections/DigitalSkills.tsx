import React from "react";
import { Button } from "../ui/button";

const DigitalSkills = () => {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <h1 className="text-3xl font-bold font-sans">Why Choose Us</h1>
      <div className="flex justify-center w-full space-x-10 pt-9">
        <Card title="Digital Skills" description="Lorem ipsum dolor sit amet" />
        <Card
          title="Collaborative Learning"
          description="Lorem ipsum dolor sit amet"
        />
        <Card
          title="Personalized Courses"
          description="Lorem ipsum dolor sit amet"
        />
      </div>

      <div className="pt-24 w-full flex">
        <div className="w-[50%] mr-5">
          <img src="https://placehold.co/700x400@2x.png" alt="About Jammies" />
        </div>
        <div className="w-[50%] ml-5 flex flex-col justify-center">
          <h1 className="my-1 text-orange-500 font-sans font-uppercase text-xl font-bold">
            About Jammies
          </h1>
          <h1 className="text-4xl font-sans font-medium my-2">
            Learn, Grow, Inspire
          </h1>
          <h1 className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, quae, quia, quod, quibusdam lorem ipsum dolor sit amet Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem,
            quae, quia, quod, quibusdam lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam quidem, quae,
            quia, quod, quibusdam lorem ipsum.
          </h1>
          <Button className="w-fit rounded-full bg-orange-500 text-white font-semibold font-sans px-5 hover:bg-orange-500 hover:bg-opacity-90">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

const Card = (card: CardProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[20%]">
      <img
        src="https://placehold.co/200x200@2x.png"
        alt=""
        className="rounded-full aspect-square object-cover w-[45%] shadow-lg"
      />
      <h1 className="pt-4 font-semibold">{card.title}</h1>
      <h1 className="pt-0">{card.description}</h1>
    </div>
  );
};

export default DigitalSkills;
