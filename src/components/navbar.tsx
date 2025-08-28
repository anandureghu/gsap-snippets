import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Snippets", href: "/snippets" },
    { name: "About", href: "/about" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 app-container mx-auto h-[70px] flex items-center justify-between border-b border-y-gray-900 border-dashed bg-gray-900/10 backdrop-blur-sm z-50">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src={Logo}
            width={45}
            height={45}
            alt="gsap snippets logo"
            className="mx-3"
          />
        </Link>
        <div>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mx-3 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="search snippets"
          className="outline-none border border-gray-900 py-2 px-5 rounded-2xl"
        />
      </div>
    </nav>
  );
};

export default Navbar;
