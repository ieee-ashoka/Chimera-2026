"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("March 1 2025 09:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = deadline - now;

      setTimeLeft({
        days: Math.floor(t / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((t % (1000 * 60)) / 1000),
      });

      if (t < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4 py-8 md:px-6 lg:px-8">
      <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
        <Image
          src="/images/logo.png"
          alt="Chimera 2025"
          fill
          priority
          className="object-contain"
        />
      </div>

      <h1 className="glitch text-3xl md:text-5xl lg:text-[5.2rem] mb-8 mt-6">
        Chimera{" "}
        <sub className="text-lg md:text-2xl absolute -bottom-10 md:-bottom-2 -right-6 md:-right-16">
          2025
        </sub>
      </h1>

      <h2 className="text-lg md:text-2xl font-iceland text-[#cccccc] mb-8 text-center max-w-2xl">
        IEEE Ashoka&apos;s premiere intercollegiate STEM festival
      </h2>

      <div className="grid grid-cols-2 md:flex gap-3 md:gap-4 font-mono mb-8">
        {[
          { value: timeLeft.days, label: "days" },
          { value: timeLeft.hours, label: "hrs" },
          { value: timeLeft.minutes, label: "mins" },
          { value: timeLeft.seconds, label: "secs" },
        ].map((item) => (
          <div
            key={item.label}
            className="w-16 h-16 md:w-20 md:h-20 border border-white rounded-full flex flex-col items-center justify-center relative"
          >
            <p className="text-xl md:text-2xl text-white m-0">{item.value}</p>
            <span className="absolute -bottom-3 -right-3 w-10 h-10 md:w-12 md:h-12 bg-[#243b5580] rounded-full text-white text-[10px] md:text-xs uppercase flex items-center justify-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <Link href="competitions" className="w-full max-w-xs px-4">
        <InteractiveHoverButton className="w-full py-4 text-lg md:text-xl font-semibold tracking-wider">
          Register Now
        </InteractiveHoverButton>
      </Link>
    </div>
  );
}
