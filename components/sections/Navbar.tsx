import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1300px] flex justify-between p-5">
        <h1 className="text-3xl text-orange-500 font-bold font-sans">
          Jammies
        </h1>
        <div className="flex space-x-6 items-center">
          <h1 className="hover:cursor-pointer">About Us</h1>
          <h1 className="hover:cursor-pointer">Courses</h1>
          <h1 className="hover:cursor-pointer">Contact</h1>
          <h1 className="hover:cursor-pointer">Workshop</h1>
          <h1 className="hover:cursor-pointer">Articles</h1>
          <Button className="rounded-full bg-orange-500 text-white font-semibold font-sans px-5">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
