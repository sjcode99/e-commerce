import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import CustomButton from "@/components/Button";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-gray-500 mb-4">
        <span className="text-sm">
          Home / <span className="font-semibold text-black">Contact</span>
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8">
        {/* Contact Info */}
        <div className="col-span-1 p-12 w-full rounded-sm shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full">
              <Phone size={20} />
            </div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
          </div>
          <p className="mt-3 mb-3">
            We are available 24/7, 7 days a week.
          </p>
          <p className="">Phone: +8801611112222</p>
          {/* <hr className="my-4" /> */}

          <Separator className="my-4 bg-black" />
          <div className="flex flex-col gap-y-4 pr-8 text-black">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-semibold">Write To Us</h3>
            </div>
            <p>
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p>
              Emails: customer@exclusive.com
            </p>
            <p>
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 p-12 max-w-fit rounded-sm shadow-md flex flex-col items-end gap-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <Input
              placeholder="Your Name *"
              className="p-5 bg-[#F5F5F5] rounded-sm border-none"
            />
            <Input
              placeholder="Your Email *"
              className="p-5 bg-[#F5F5F5] rounded-sm border-none"
            />
            <Input
              placeholder="Your Phone *"
              className="p-5 bg-[#F5F5F5] rounded-sm border-none"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            className="p-5 bg-[#F5F5F5] rounded-sm h-36 border-none"
          />
          {/* <Button className="mt-4 bg-[#DB4444] hover:[#DB4444] w-full sm:w-auto pt-6 pb-6 pr-12 pl-12">
            Send Message
          </Button> */}
          <CustomButton text="Send Message" bgColor={true} size="small"/>
        </div>
      </div>
    </div>
  );
}
