"use client";

import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const categories = [
  { name: "Phones", icon: <Smartphone size={40} className="w-6 h-6" /> },
  { name: "Computers", icon: <Monitor size={40} className="w-6 h-6" /> },
  { name: "SmartWatch", icon: <Watch size={40} className="w-6 h-6" /> },
  { name: "Camera", icon: <Camera size={40} className="w-6 h-6" /> },
  { name: "HeadPhones", icon: <Headphones size={40} className="w-6 h-6" /> },
  { name: "Gaming", icon: <Gamepad size={40} className="w-6 h-6" /> },
];

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState("Camera");

  return (
    <section className="p-8">
      {/* Title */}
      <div className="flex flex-col justify-between mb-10">
        <span className="text-red-500 font-semibold">Categories</span>
        <div className="flex items-end relative mt-4 space-x-4 text-lg font-semibold">
          <h2 className="text-3xl font-bold capitalize">browse by category</h2>
          {/* Navigation Arrows */}
          <div className="flex absolute right-2 mt-6 gap-2">
            <Button variant="outline" className="rounded-full p-2">
              <ArrowLeft size={28} className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="rounded-full p-2">
              <ArrowRight size={28} className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm: pl-[50px] pr-[50px] w-full">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`flex flex-col items-center justify-center p-4 border cursor-pointer rounded-lg w-[170px] h-[145px] ${
                activeCategory === category.name
                  ? "bg-[#DB4444] hover:bg-[#DB4444] text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.icon}
              <span className="mt-2 text-base">{category.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
