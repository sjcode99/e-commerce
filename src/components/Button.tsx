import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function CustomButton({
  text,
  bgColor,
  size
}: {
  text: string;
  bgColor: boolean;
  size?: string
}) {
  return (
    <Button
      variant="outline"
      className={`${
        bgColor ? "bg-[#DB4444] hover:bg-[#DB4444] text-white hover:text-white" : "border-black"
      }
      ${size === "small" ? "sm:w-auto" : ""} 
      mt-4 w-full pt-6 pb-6 pr-12 pl-12 font-semibold`}
    >
      {text}
    </Button>
  );
}
