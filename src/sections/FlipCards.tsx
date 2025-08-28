"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FlipCards = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            markers: false,
          },
        })
        // card-1 goes back, card-2 comes in front, card-3 comes to center
        .to("#card-3", { zIndex: 1, rotation: 0 })
        .to("#card-1", { zIndex: 2, rotation: -6.5 }, "<")
        .to("#card-2", { zIndex: 3, rotation: -13 }, "<")
        // card-2 goes back, card-3 comes in front, card-1 comes in center
        .to("#card-2", { zIndex: 1, rotation: 0 })
        .to("#card-1", { zIndex: 3, rotation: -13 }, "<")
        .to("#card-3", { zIndex: 2, rotation: -6.5 }, "<");
    },
    { scope: container }
  );

  return (
    <div
      className="min-h-screen flex justify-center items-left flex-col overflow-x-hidden"
      ref={container}
    >
      <h1 className="text-5xl font-semibold text-gd-highlight w-full text-center mb-5">
        Flip Cards
      </h1>
      <div
        ref={wrapper}
        id="wrapper"
        className="w-full relative h-[350px] mt-5"
      >
        <div
          ref={items}
          id="items"
          className="flex overflow-x-auto items-center justify-left no-scrollbar"
        >
          {new Array(3).fill(null).map((_, index) => (
            <div
              key={index}
              id={`card-${index + 1}`}
              className={`origin-bottom-right min-w-64 min-h-64 bg-gray-900 border border-dashed border-blue-300/10 m-4 flex items-center justify-center text-white text-7xl absolute top-0 left-1/2 transform -translate-x-1/2 rounded-2xl shadow-2xl z-[${
                3 - index
              }]`}
              style={{ rotate: `-${index * 6.5}deg` }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
