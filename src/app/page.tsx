"use client";
import ContentHeadSection from "@/components/content-header-section";
import { Separator } from "@/components/ui/separator";
import CategorySection from "@/components/browse-category-section";
import Banner from "@/components/banner";
import Sections from "@/components/sections";
import Promotions from "@/components/promotions";
import ServiceFeatures from "@/components/service-features";
import useProductStore from "@/store/productStore";
import { useEffect } from "react";

export default function Home() {
  const { products, fetchProducts, shuffledProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <ContentHeadSection />

      <Sections heading="sale" subheading="today" products={products} />
      <Separator className="my-4" />

      <CategorySection />
      <Separator className="my-4" />

      <Sections heading="best" subheading="month" products={products} />

      <Banner />

      <Sections heading="products" subheading="products" products={products} />

      <Promotions shuffledProducts={shuffledProducts} />

      <ServiceFeatures />
    </main>
  );
}
