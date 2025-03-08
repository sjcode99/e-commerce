import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Section() {
  return (
    <div className="flex gap-4 p-4">
      {/* Sidebar Categories */}
      <div className="w-1/4 bg-white shadow p-4 rounded-md">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer"
            >
              {category}
              {(category === "Woman’s Fashion" ||
                category === "Men’s Fashion") && (
                <ChevronRight className="w-4 h-4" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Banner & Carousel */}
      <div className="w-3/4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="relative bg-black text-white p-8 rounded-md overflow-hidden h-[20rem]">
                <div className="w-1/3 pl-4">
                  <h2 className="text-sm font-normal mb-3">iPhone 14 Series</h2>
                  <p className="text-6xl leading-[4.5rem] ">
                    Up to 10% off Voucher
                  </p>
                  <Button
                    variant="link"
                    className="text-white underline text-sm font-normal mt-2"
                  >
                    Shop Now →
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="mt-4 text-black border-white "
                  >
                    Shop Now →
                  </Button> */}
                </div>

                <img
                  src="/images/iphone-banner.png"
                  alt="iPhone 14"
                  className="absolute right-0 bottom-0 w-1/2 object-contain h-full"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
