
"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white p-12 rounded-lg flex items-center mb-8">
      {/* Left Section: Text & Timer */}
      <div className="w-1/2">
        <span className="text-green-500 font-semibold">Categories</span>
        <h2 className="text-4xl font-bold mt-2">
          Enhance Your Music Experience
        </h2>
        <div className="flex space-x-4 mt-6">
          <div className="flex flex-col items-center bg-white text-black px-4 py-2 rounded-lg">
            <span className="text-xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black px-4 py-2 rounded-lg">
            <span className="text-xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black px-4 py-2 rounded-lg">
            <span className="text-xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black px-4 py-2 rounded-lg">
            <span className="text-xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <Button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Buy Now!
        </Button>
      </div>

      {/* Right Section: Image */}
      <div className="w-1/2 flex justify-end">
        <img
          src="/images/jbl-speaker.png"
          alt="JBL Speaker"
          className="w-3/4 object-contain"
        />
      </div>
    </section>
  );
}
