"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const teamMembers = [
  { name: "Tom Cruise", role: "Founder & Chairman" },
  { name: "Emma Watson", role: "Managing Director" },
  { name: "Will Smith", role: "Product Designer" },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-12">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 flex flex-col items-center">
                {/* <Card> */}
                <CardContent>
                <Image
                  src={`/team-member-${index + 1}.jpg`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-bold mt-4">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  <div className="flex space-x-3 mt-2 text-gray-600">
                    <Twitter className="w-5 h-5 cursor-pointer" />
                    <Instagram className="w-5 h-5 cursor-pointer" />
                    <Linkedin className="w-5 h-5 cursor-pointer" />
                  </div>
                </div>
                </CardContent>
                {/* </Card> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselDots /> */}
        {/* Custom Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
