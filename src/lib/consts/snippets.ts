import { ISnippet } from "../types/snippet.type";
import { getSnippetPreview } from "../utils";

import Typewriter from "@/snippets/Typewriter";
import HorizontalScroll from "@/snippets/HorizontalScroll";
import FlipCards from "@/snippets/FlipCards";

export const snippets: ISnippet[] = [
  {
    title: "Typewriter Effect",
    description: "A simple typewriter effect using gsap",
    code: "",
    preview: getSnippetPreview("typewriter"),
    fileName: "Typewriter",
    component: Typewriter,
  },
  {
    title: "Horizontal Scroll",
    description: "A horizontal scroll effect using gsap and ScrollTrigger",
    code: "",
    preview: getSnippetPreview("horizontalScroll"),
    fileName: "HorizontalScroll",
    component: HorizontalScroll,
  },
  {
    title: "Flip Cards",
    description: "A flip card effect using gsap",
    code: "",
    preview: getSnippetPreview("flipCards"),
    fileName: "FlipCards",
    component: FlipCards,
  },
];
