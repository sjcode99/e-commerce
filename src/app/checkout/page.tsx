"use client";
import CustomButton from "@/components/Button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useCartStore from "@/store/cartStore";
import { ProductsType } from "@/types/productType";
import { Tag } from "lucide-react";
import Image from "next/image";

export default function Checkout() {
  const { cart } = useCartStore();

  // calculate subtotal
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * (item?.quantity || 1),
    0
  );

  const rendName = (name: string, maxLength: number) => {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-gray-500 mb-4">
        <span className="text-sm">
          Account / My Account / Product / View Cart /{" "}
          <span className="font-semibold text-black">CheckOut</span>
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        {/* Billing Details */}
        <div>
          <h2 className="text-4xl font-medium mb-6">Billing Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-medium font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Street Address* <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Apartment, floor, etc. (optional){" "}
                <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Town/City* <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Phone Number* <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700">
                Email Address* <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                className="w-[72%] bg-gray-100 border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

          </div>
          <div className="flex items-center mt-4 space-x-2">
            <Checkbox id="save-info" />
            <label htmlFor="save-info" className="text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-sm p-6 shadow-md">
          <div className="space-y-4">
            {cart.map((item: ProductsType) => (
              <div className="flex items-center justify-between" key={item.id}>
                <div className="flex items-center gap-4">
                  {/* <Image
                  src={"/gamepad.png"}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded"
                /> */}
                  <Tag />
                  <span className="font-semibold">
                    {rendName(item.title, 25)}
                  </span>
                </div>
                <span className="block">${item.price}</span>
              </div>
            ))}
            {/* <div className="flex items-center justify-between">
              <Image
                src="/gamepad.png"
                alt="H1 Gamepad"
                width={50}
                height={50}
                className="rounded"
              />
              <span>H1 Gamepad</span>
              <span>$1100</span>
            </div>
            <div className="flex items-center justify-between">
              <Image
                src="/monitor.png"
                alt="LCD Monitor"
                width={50}
                height={50}
                className="rounded"
              />
              <span>LCD Monitor</span>
              <span>$650</span>
            </div> */}
            <hr className="my-4" />
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <RadioGroup defaultValue="cash-on-delivery" className="space-y-2">
              <div className="flex items-center space-x-2 my-4">
                <RadioGroupItem value="bank" id="bank" />
                <label htmlFor="bank" className="text-sm">
                  Bank
                </label>
              </div>
              <div className="flex items-center space-x-2 my-4">
                <RadioGroupItem
                  value="cash-on-delivery"
                  id="cash-on-delivery"
                />
                <label htmlFor="cash-on-delivery" className="text-sm">
                  Cash on delivery
                </label>
              </div>
            </RadioGroup>
            <div className="flex w-full border rounded overflow-hidden mt-4">
              <Input placeholder="Coupon Code" className="border-none flex-1" />
              <Button className="bg-[#DB4444] hover:bg-[#DB4444] text-white">Apply Coupon</Button>
            </div>
            <div className="mt-4" onClick={() => alert("Order Placed")}>
            <CustomButton text="Place Order" bgColor={true} size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
