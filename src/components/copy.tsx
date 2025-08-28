"use client";

import gsap from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import React from "react";

gsap.registerPlugin(MorphSVGPlugin);

const Copy = ({ value }: { value: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    const timeline = gsap.timeline();
    timeline.to("#copy2", { display: "none", duration: 0 }).to(
      "#copy",
      {
        duration: 0.3,
        morphSVG: "#tick",
        scale: 1.4,
        x: 3,
        y: 2,
        stroke: "green",
      },
      "<"
    );
  };
  return (
    <div
      className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 text-white transition-opacity duration-300"
      onClick={handleCopy}
    >
      copy code{" "}
      <div className="border border-gray-900 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              id="copy"
              d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"
            />
            <path
              id="copy2"
              d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
            />

            <path
              id="tick"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              className="hidden text-green-400"
            />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
              />
            </svg> */}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Copy;
