import Link from "next/link";
import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full md:h-[136px] border-t border-[#EAECF0] font-[family-name:var(--font-fig-tree)] md:px-[60px] px-5">
      <div className="mx-auto max-w-[1440px] px-5 transition-all duration-300 flex md:flex-row flex-col-reverse justify-between items-center h-full">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 md:mt-0 mt-6 ">
          <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-1"
            >
              <Image src="/logo.svg" width={100} height={100} alt="logo" />
              <h4 className="text-2xl font-semibold text-[#0E121B] tracking-[-0.96px] ">
                Stockbits
              </h4>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center md:mt-0 mt-6">
          <Image src="telegram.svg" width={24} height={24} alt="telegram" />
          <Image src="twitter.svg" width={24} height={24} alt="twitter" />
        </div>
        <h5 className="text-[#0E121B] md:mt-0 mt-6">
          © 2025 Stockbit. All rights reserved.
        </h5>
      </div>
    </div>
  );
}
