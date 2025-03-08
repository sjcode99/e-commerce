"use client";

import { ArrowLeft, ArrowRight, Eye, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import SectionSubHeading from "./section-subheading";
import CustomButton from "./Button";
import { ProductsType } from "@/types/productType";
import useCartStore from "@/store/cartStore";

export default function Sections({
  heading,
  subheading,
  products,
}: {
  heading: string;
  subheading: string;
  products: ProductsType[];
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCartStore();
  const itemsPerPage = 4;

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

  const nextPage = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
  };

  const handleAddToCart = (product: ProductsType) => {
    addToCart(product);
  }
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
              <Button
                variant="outline"
                className="rounded-full p-2"
                onClick={prevPage}
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={28} className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full p-2"
                onClick={nextPage}
                disabled={currentIndex + itemsPerPage >= products.length}
              >
                <ArrowRight size={28} className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="absolute right-2">
              <CustomButton text="View All" bgColor={true} size="small" />
            </div>
          )}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((product) => (
            <Card
              key={product.id}
              className="relative p-4 shadow-md transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => {
                setHover(true), setHoverId(product?.id);
              }}
              onMouseLeave={() => {
                setHover(false), setHoverId(0);
              }}
            >
              {heading === "sale" && product?.price && (
                <span className="absolute top-2 left-2 bg-[#DB4444] text-white px-2 py-1 text-xs rounded">
                  -{product?.price}%
                </span>
              )}

              {/* Wishlist & View Icons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className="p-1 bg-white rounded-full shadow hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-gray-500 cursor-pointer" />
                </button>
                <button className="p-1 bg-white rounded-full shadow hover:bg-gray-100">
                  <Eye className="w-5 h-5 text-gray-500 cursor-pointer" />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product?.image}
                alt={product?.title || "Product Image"}
                className={`${
                  hover && hoverId === product.id ? "h-32" : "h-40"
                } w-full object-cover`}
                // className="w-full h-40 object-cover"
              />

              {/* Add to Cart Button (Shows on Hover) */}
              {hover && hoverId === product.id && (
                <Button
                  variant="default"
                  className="relative bottom-[-0.5rem] mb-4 left-1/2 transform -translate-x-1/2 w-full"
                  onClick={() => handleAddToCart(product)}
                  // className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full"
                >
                  Add To Cart
                </Button>
              )}

              {/* Product Info */}
              <div className="mt-3">
                <h3 className="mt-2 font-semibold">{product?.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold">
                    ${product?.price}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${product?.price}
                  </span>
                </div>

                <div className="flex justify-start gap-1 text-yellow-500 text-sm mt-1">
                  {products
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((product, i) => (
                      <Star
                        key={product.id}
                        size={14}
                        fill={"currentColor"}
                        stroke="currentColor"
                      />
                    ))}
                  <Star size={14} stroke="currentColor" />
                  <span className="text-gray-500">{product?.rating?.count}</span>
                </div>
              </div>
            </Card>
          ))}
      </div>

      {/* View All Button */}
      {(heading === "sale" || heading === "products") && (
        <div className="text-center mt-6">
          <CustomButton text="View All Products" bgColor={true} size="small" />
        </div>
      )}
    </section>
  );
}
