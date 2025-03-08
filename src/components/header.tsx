"use client";
import useCartStore from "@/store/cartStore";
import { Badge, Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between pt-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-xl font-bold">
          <Link href="/">Exclusive</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-md font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative hidden md:flex items-center w-64">
          <Input placeholder="What are you looking for?" className="pr-10" />
          <Search className="absolute right-3 text-gray-500 w-4 h-4" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Heart className=" text-gray-700 relative" size={26} />
          <div className="relative cursor-pointer">
            <Link href={"/cart"}>
              <ShoppingCart className=" text-gray-700" size={26} />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <User className=" text-gray-700" size={26} />
        </div>
      </nav>
    </header>
  );
}
