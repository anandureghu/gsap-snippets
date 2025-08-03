"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Typewriter = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const splitText = new SplitText("#text", {
        type: "lines, words, chars",
      });

      // const lines = splitText.words;
      // gsap.from(lines, {
      //   yPercent: 380,
      //   stagger: 0.02,
      //   ease: "back.out",
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: "#text",
      //     start: "top 80%",
      //     end: "top 50%",
      //     scrub: true,
      //     // markers: true,
      //   },
      // });

      const lines = splitText.chars;
      gsap.from(lines, {
        opacity: 0,
        stagger: 0.02,
        ease: "back.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#text",
          // start: "top 80%",
          // end: "top 50%",
          // scrub: true,
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      className="h-screen flex justify-center items-center flex-col"
      ref={container}
    >
      <h1 className="text-3xl text-gd-highlight font-semibold mb-5">
        Type Writter
      </h1>
      <p
        className="text-xl font-medium text-center max-w-3/4 mx-auto overflow-hidden"
        id="text"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quam
        iusto, odio non vel provident porro eum ad deleniti possimus sunt nemo
        alias commodi corrupti! Ab ipsum ullam quis mollitia?
      </p>
    </div>
  );
};

export default Typewriter;
