import Image from "next/image";
import ContentHeadSection from "@/components/content-header-section";
import { Separator } from "@/components/ui/separator";
import CategorySection from "@/components/browse-category-section";
import Banner from "@/components/banner";
import Sections from "@/components/sections";
import Promotions from "@/components/promotions";
import ServiceFeatures from "@/components/service-features";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <ContentHeadSection />

      <Sections heading="sale" subheading="today"/>
      <Separator className="my-4" />

      <CategorySection />
      <Separator className="my-4" />

      <Sections heading="best" subheading="month" />

      <Banner />

      <Sections heading="products" subheading="products" />

      <Promotions />

      <ServiceFeatures />
    </main>
  );
}
