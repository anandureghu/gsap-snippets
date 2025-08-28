import FlipCards from "@/sections/FlipCards";
import Header from "@/sections/Header";
import HorizontalScroll from "@/sections/HorizontalScroll";
import Typewriter from "@/sections/Typewriter";

export default function Home() {
  return (
    <>
      <Header />
      <Typewriter />
      <HorizontalScroll />
      <FlipCards />
    </>
  );
}
