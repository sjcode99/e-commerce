import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Exclusive - Subscribe */}
        <div>
          <h3 className="text-lg font-bold">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="flex mt-3 border border-gray-400 rounded-lg overflow-hidden">
            <Input
              className="bg-transparent text-white border-none p-2 w-full"
              placeholder="Enter your email"
            />
            <Button variant="ghost" className="text-white">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <p className="mt-2 text-sm text-gray-400">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="mt-2 text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-bold">Download App</h3>
          <p className="mt-2 text-sm text-gray-400">
            Save $3 with App New User Only
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-3 space-x-2">
            <img
              src="/images/qr-code.png"
              alt="QR Code"
              className="w-14 h-14"
            />
            <div className="space-y-2">
              <img
                src="/images/google-play.png"
                alt="Google Play"
                className="w-28"
              />
              <img
                src="/images/app-store.png"
                alt="App Store"
                className="w-28"
              />
            </div>
          </div>
          <div className="flex justify-center items-end sm:justify-start space-x-4 mt-4">
            <Facebook size={36} strokeWidth={1} />
            <Twitter className="w-6 h-6 cursor-pointer" />
            <Instagram className="w-6 h-6 cursor-pointer" />
            <Linkedin className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-700 text-sm mt-8 border-t border-gray-700 pt-4">
        © Copyright Rimel 2025. All rights reserved
      </div>
    </footer>
  );
}
