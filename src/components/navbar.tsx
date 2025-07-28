"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Dashboard", href: "/dashboard" },
];

export const HeroHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-center font-[family-name:var(--font-fig-tree)]">
      <nav
        className={`fixed flex items-center w-full z-50 md:h-[80px] h-[72px] border-b  md:border-transparent border-[#E1E4EA14] transition-all duration-300 md:px-0 px-[15px] ${
          isScrolled ? "bg-black/20 backdrop-blur-md " : "bg-transaparent"
        }`}
      >
        <div className="md:px-[60px] w-full">
          <div className="transition-all duration-300 flex justify-between w-full max-w-[1440px] mx-auto">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 w-full">
              {/* Logo */}
              <div className="">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-1"
                >
                  <Image src="logo.svg" alt="logo" width={29} height={40} />
                  <h4 className="text-2xl font-medium text-[#FAFAFA]">
                    LifeFi
                  </h4>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`hover:text-[#ffffff] block duration-150 font-medium ${
                          pathname === item.href
                            ? "text-[#ffffff]"
                            : "text-[#99A0AE]"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Button */}
              <div className="md:flex hidden items-center gap-10">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Join waitlist</span>
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer lg:hidden"
                data-state={menuState ? "active" : "inactive"}
              >
                <div className="flex flex-col gap-[4px]">
                  <div
                    className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                      menuState ? "rotate-45 translate-y-[6px]" : ""
                    }`}
                  />
                  <div
                    className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                      menuState ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <div
                    className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                      menuState ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-[72px] left-0 right-0 bottom-0 z-[1000] bg-black/80 backdrop-blur-md transition-all duration-300 lg:hidden ${
              menuState ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMenuState(false)}
          >
            <div
              className={`absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
                menuState ? "translate-y-0" : "translate-y-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                          pathname === item.href
                            ? "text-white"
                            : "text-[#525866]"
                        }`}
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href="#" onClick={() => setMenuState(false)}>
                      <span>Join waitlist</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
