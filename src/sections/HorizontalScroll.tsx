"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HorizontalScroll = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const itemsWidth = items.current?.scrollWidth || 0;
      const containerWidth = container.current?.offsetWidth || 0;
      const amountToScroll = itemsWidth - containerWidth;

      const tween = gsap.to("#wrapper", {
        x: -amountToScroll,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 0%",
        end: `+=${amountToScroll}`,
        pin: true,
        scrub: 1,
        markers: false,
        animation: tween,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="h-screen flex justify-center items-left flex-col overflow-x-hidden"
      ref={container}
    >
      <h1 className="text-5xl font-semibold text-gd-highlight w-full text-center mb-5">
        Horizontal Scroll
      </h1>
      <div ref={wrapper} id="wrapper" className="w-fit">
        <div
          ref={items}
          id="items"
          className="flex overflow-x-auto items-center justify-left no-scrollbar"
        >
          {new Array(10).fill(null).map((_, index) => (
            <div
              key={index}
              className="min-w-64 min-h-64 bg-blue-500/2 border border-dashed border-blue-300/10 m-4 flex items-center justify-center text-white text-7xl"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
