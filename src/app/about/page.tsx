import ServiceFeatures from "@/components/service-features";
import TeamSection from "@/components/team-section";
import {
  DollarSign,
  Instagram,
  Linkedin,
  PiggyBank,
  ShoppingBag,
  Store,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-gray-500 mb-4">
        <span className="text-sm">
          Home / <span className="font-medium">About</span>
        </span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/about-image.jpg"
            alt="Shopping women"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg"
          />
        </div>
      </div>

      {/* statistic section */}
      <StatisticSection />

      {/* team section */}
      <TeamSection />

      <div className="mt-16">
        <ServiceFeatures />
      </div>
    </div>
  );
}

function StatisticSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-36 mb-32">
      <div className="flex flex-col items-center border rounded-lg p-6 shadow-sm">
        <Store className="text-black bg-gray-200 rounded-full p-2 w-12 h-12" />
        <h2 className="text-xl font-bold mt-2">10.5k</h2>
        <p className="text-gray-600 text-sm">Sellers active on our site</p>
      </div>
      <div className="flex flex-col items-center border rounded-lg p-6 shadow-sm bg-[#DB4444] text-white">
        <DollarSign className="bg-white text-black rounded-full p-2 w-12 h-12" />
        <h2 className="text-xl font-bold mt-2">33k</h2>
        <p className="text-sm">Monthly Product Sale</p>
      </div>
      <div className="flex flex-col items-center border rounded-lg p-6 shadow-sm">
        <ShoppingBag className="text-black bg-gray-200 rounded-full p-2 w-12 h-12" />
        <h2 className="text-xl font-bold mt-2">45.5k</h2>
        <p className="text-gray-600 text-sm">Customers active on our site</p>
      </div>
      <div className="flex flex-col items-center border rounded-lg p-6 shadow-sm">
        <PiggyBank className="text-black bg-gray-200 rounded-full p-2 w-12 h-12" />
        <h2 className="text-xl font-bold mt-2">25k</h2>
        <p className="text-gray-600 text-sm">Annual gross sale on our site</p>
      </div>
    </div>
  );
}
