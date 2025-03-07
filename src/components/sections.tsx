"use client";

import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import SectionSubHeading from "./section-subheading";
import CustomButton from "./Button";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: 4.5,
    image: "/images/gamepad.jpg",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    rating: 4.0,
    image: "/images/keyboard.jpg",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    rating: 4.8,
    image: "/images/monitor.jpg",
  },
  {
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 4.7,
    image: "/images/chair.jpg",
  },
];

export default function Sections({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-8 mt-5">
      {/* Title & Countdown Timer */}
      <div className="flex flex-col justify-between mb-6">
        <SectionSubHeading subheading={subheading} />
        <div className="flex items-start md:items-end flex-col md:flex-row relative mt-4 space-x-0 md:space-x-4 text-lg font-semibold">
          <h2 className="text-3xl font-bold capitalize">
            <SectionHeading heading={heading} />
          </h2>
          {heading === "sale" && (
            <div className="flex flex-wrap justify-center md:justify-start space-x-2 text-lg font-semibold mt-4 md:mt-0">
              <span>Days {timeLeft.days}</span>:
              <span>Hours {timeLeft.hours}</span>:
              <span>Minutes {timeLeft.minutes}</span>:
              <span>Seconds {timeLeft.seconds}</span>
            </div>
          )}
          {/* Navigation Arrows */}
          {heading === "sale" || heading === "products" ? (
            <div className="flex absolute right-2 mt-6 gap-2">
              <Button variant="outline" className="rounded-full p-2">
                <ArrowLeft size={28} className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full p-2">
                <ArrowRight size={28} className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="absolute right-2">
              {/* <Button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                View All
              </Button> */}
              <CustomButton text="View All" bgColor={true} size="small" />

            </div>
          )}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="relative p-4 shadow-md">
            {heading === "sale" && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                {product.discount}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-2 right-2 space-y-2">
              <Heart className="w-5 h-5 text-gray-500 cursor-pointer" />
              <Eye className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              <span className="text-gray-500 line-through">
                {product.oldPrice}
              </span>
            </div>
            <Button variant="default" className="mt-4 w-full">
              Add To Cart
            </Button>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      {(heading === "sale" || heading === "products") && (
        <div className="text-center mt-6">
          {/* <Button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            View All Products
          </Button> */}
          <CustomButton text="View All Products" bgColor={true} size="small" />
        </div>
      )}
    </section>
  );
}
