import SectionHeading from "./section-heading";
import SectionSubHeading from "./section-subheading";
import { Button } from "./ui/button";

const featuredItems = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/images/ps5.jpg",
  },
  {
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "/images/women-collection.jpg",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "/images/speakers.jpg",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "/images/perfume.jpg",
  },
];

export default function Promotions() {
  return (
    <section className="gap-4 mt-8">
      <div className="flex flex-col justify-between mb-6">
        <SectionSubHeading subheading={"featured"} />
        <div className="flex items-end relative mt-4 space-x-4 text-lg font-semibold">
          <h2 className="text-3xl font-bold capitalize">
            <SectionHeading heading={"arrival"} />
          </h2>
        </div>
      </div>
      {/* Large Featured Product */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative rounded-lg overflow-hidden">
          <img
            src={featuredItems[0].image}
            alt={featuredItems[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{featuredItems[0].title}</h3>
            <p className="text-sm">{featuredItems[0].description}</p>
            <Button variant="link" className="text-white underline">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Smaller Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredItems.slice(1).map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <Button variant="link" className="text-white underline">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
