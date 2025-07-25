"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Dashboard", href: "/dashboard" },
];

export const HeroHeader = () => {

  const pathname = usePathname();

  return (
    <header className="flex justify-center font-[family-name:var(--font-fig-tree)]">
      <nav
        data-state={menuState && "active"}
        className="bg-transparent fixed flex items-center w-full z-50    md:h-[80px] h-[72px]  md:mx-auto"
      >
        <div className="mx-auto max-w-[1440px] px-5 transition-all duration-300 flex justify-between w-full">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4  w-full">
            <div className="flex w-full items-center justify-between lg:w-auto">
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

              {/* <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20  block cursor-pointer  lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button> */}
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={` hover:text-[#ffffff] block duration-150 font-medium ${
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
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                          pathname === item.href
                            ? "text-red-500"
                            : "text-[#525866]"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-10">
                {/* <div className="flex gap-4 items-center">
                  <Image
                    src="twitter-blue.svg"
                    alt="twitter"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="telegram-blue.svg"
                    alt="telegram"
                    width={40}
                    height={40}
                  />
                </div> */}
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Join waitlist</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
