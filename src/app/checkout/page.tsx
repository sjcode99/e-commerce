import CustomButton from "@/components/Button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-gray-500 mb-4">
        <span className="text-sm">
          Account / My Account / Product / View Cart /{" "}
          <span className="font-medium">CheckOut</span>
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <div className="space-y-4">
            <Input placeholder="First Name*" className="p-3 border rounded" />
            <Input placeholder="Company Name" className="p-3 border rounded" />
            <Input
              placeholder="Street Address*"
              className="p-3 border rounded"
            />
            <Input
              placeholder="Apartment, floor, etc. (optional)"
              className="p-3 border rounded"
            />
            <Input placeholder="Town/City*" className="p-3 border rounded" />
            <Input placeholder="Phone Number*" className="p-3 border rounded" />
            <Input
              placeholder="Email Address*"
              className="p-3 border rounded"
            />
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
            <div className="flex items-center justify-between">
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
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <hr className="my-4" />
            <RadioGroup defaultValue="cash-on-delivery" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <label htmlFor="bank" className="text-sm">
                  Bank
                </label>
              </div>
              <div className="flex items-center space-x-2">
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
              <Button className="bg-red-500 text-white">Apply Coupon</Button>
            </div>
            {/* <Button className="mt-4 w-full bg-red-500 text-white">
              Place Order
            </Button> */}

            <CustomButton text="Place Order" bgColor={true} size="small" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
