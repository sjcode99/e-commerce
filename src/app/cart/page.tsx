"use client";
import CustomButton from "@/components/Button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCartStore from "@/store/cartStore";
import { ProductsType } from "@/types/productType";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "LCD Monitor",
  //     price: 650,
  //     quantity: 1,
  //     image: "/monitor.png",
  //   },
  //   {
  //     id: 2,
  //     name: "H1 Gamepad",
  //     price: 550,
  //     quantity: 2,
  //     image: "/gamepad.png",
  //   },
  // ];
  const { cart, updateQuantity } = useCartStore();

  // calculate subtotal
  const subTotal = cart.reduce((acc, item) => acc + (item.price* (item?.quantity || 1)), 0);

  console.log(cart);

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-gray-500 mb-4">
        <span className="text-sm">
          Home / <span className="font-semibold text-black">Cart</span>
        </span>
      </nav>

      {/* Cart Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 pl-16 font-normal">Product</th>
              <th className="p-4 font-normal">Price</th>
              <th className="p-4 font-normal">Quantity</th>
              <th className="p-4 font-normal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: ProductsType) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 flex items-center space-x-3">
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash2 size={16} />
                  </Button>
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded"
                  /> */}
                  <span>{item.title}</span>
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <select
                    className="border rounded px-2 py-1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option
                        key={num}
                        value={num}
                        // defaultValue={item.quantity || 1}
                        // selected={num === item.quantity}
                      >
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">${item.price * (item?.quantity || 1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons & Coupon Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <CustomButton text={"Return To Shop"} bgColor={false} size="small" />
        <CustomButton text={"Update Cart"} bgColor={false} size="small" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <div className="flex w-full md:w-auto border rounded overflow-hidden">
          <Input placeholder="Coupon Code" className="border-none flex-1" />
          <Button className="bg-[#DB4444] hover:bg-[#DB4444] text-white">
            Apply Coupon
          </Button>
        </div>

        {/* Cart Summary */}
        <div className="border rounded-lg p-6 w-full md:w-96 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>Subtotal:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          {/* <Button className="mt-4 pt-6 pb-6 pr-12 pl-12 w-full bg-[#DB4444] hover:bg-[#DB4444] text-white">
            Proceed to checkout
          </Button> */}
          <Link href={"/checkout"}>
            <CustomButton text="Proceed to checkout" bgColor={true} size="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
