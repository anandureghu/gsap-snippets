import Image from "next/image";
import React from "react";
import GlimpseIcon from "@/icons/glimpse.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[calc(100dvh-70px)] flex items-center justify-center flex-col text-center gap-3">
      <h1 className="text-5xl font-semibold text-gd-secondary">
        GSAP SNIPPETS
      </h1>
      <h3 className="text-xl max-w-1/2 opacity-70 lowercase">
        Curated collection of{" "}
        <b className="uppercase font-semibold text-green-400">GSAP</b> snippets
        collected while learning 😬
      </h3>
      <p className="text-sm text-white/60 flex items-center gap-1">
        you can find the source code from{" "}
        <a
          href="https://github.com/anandureghu/gsap-snippets/tree/main/src/sections"
          className="text-gd-highlight hover:underline max-w-3/4"
          target="_blank"
        >
          @gsap-snippets
        </a>{" "}
        by
        <a
          href="https://anandureghu.vercel.app"
          className="text-gd-secondary hover:underline font-medium"
          target="_blank"
        >
          anandureghu
        </a>{" "}
        github repo
      </p>

      <p className="text-xs text-white/60 flex items-center gap-1">
        stay tuned{" "}
        <Image
          src={GlimpseIcon}
          width={10}
          height={10}
          className="grayscale"
          alt="glipse-icon"
        />
        more updates are coming
      </p>
      <Link
        href="/snippets"
        className="bg-gd-highlight px-5 py-2 rounded-3xl cursor-pointer"
      >
        checkout now
      </Link>
    </div>
  );
};

export default Header;
