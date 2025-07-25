import Image from "next/image";
import React from "react";
import SwapWidget from "./swap-widget";
import StockCard from "./stock-card";

export default function Feautures2() {
  return (
    <div className="md:pt-[98px] pt-[48px] md:pb-[246px] pb-[100px] md:px-[60px] px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-balance text-center text-4xl font-[family-name:var(--font-cal-sans)] lg:text-[64px] tracking-[-0.64px] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)]">
          Bonds. Stocks. <br className="md:block hidden " /> Properties.
        </h2>
        <div className="pt-[62px] md:grid-cols-3 grid-cols-1 grid  gap-10  items-center">
          <div>
            <div className="md:h-[472px] h-[380px]">
              <div className="md:p-10 p-5 border border-[#F5F7FA] bg-[#E1E4EA] rounded-[24px] flex justify-between flex-col">
                <div className="bg-white border border-[#E1E4EA] md:p-6 p-4 rounded-[16px]">
                  <div className="flex justify-between items-start">
                    <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-[#EBF1FF] borrder border-[#D5E2FF] rounded-[9px] flex justify-center items-center">
                      <Image
                        src="dollar.svg"
                        alt="dollar"
                        width={27}
                        height={27}
                        className="md:w-[27px] h-[16px] md:h-[27px] w-[16px]"
                      />
                    </div>
                    <div className="px-1 h-[22px] bg-[#F0FDF4] rounded-[16px] flex items-center gap-[2px]">
                      <Image width={16} height={16} src="up.svg" alt="up" />
                      <h6 className="text-xs text-[#008236] font-[family-name:var(--font-fig-tree)]">
                        +12.5%
                      </h6>
                    </div>
                  </div>

                  <div className="md:mt-[18px] mt-[14px]">
                    <div>
                      <h5 className="text-[#0E121B] leading-[48px] font-[family-name:var(--font-cal-sans)] md:text-[24px] text-[20px]">
                        $2.4T
                      </h5>
                    </div>
                    <p className="text-[#525866] md:text-[16px] text-sm font-medium font-[family-name:var(--font-fig-tree)]">
                      Total Market Cap
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-[#E1E4EA] md:p-6 p-4 rounded-[16px] mt-3">
                  <div className="flex justify-between items-start">
                    <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-[#EBF1FF] borrder border-[#D5E2FF] rounded-[9px] flex justify-center items-center">
                      <Image
                        src="dollar.svg"
                        alt="dollar"
                        width={27}
                        height={27}
                        className="md:w-[27px] h-[16px] md:h-[27px] w-[16px]"
                      />
                    </div>
                    <div className="px-1 h-[22px] bg-[#F0FDF4] rounded-[16px] flex items-center gap-[2px]">
                      <Image width={16} height={16} src="up.svg" alt="up" />
                      <h6 className="text-xs text-[#008236] font-[family-name:var(--font-fig-tree)]">
                        +8.2%
                      </h6>
                    </div>
                  </div>

                  <div className="mt-[18px]">
                    <div>
                      <h5 className="text-[#0E121B] leading-[48px] font-[family-name:var(--font-cal-sans)] md:text-[24px] text-[20px]">
                        1,247
                      </h5>
                    </div>
                    <p className="text-[#525866] md:text-[16px] text-sm font-medium font-[family-name:var(--font-fig-tree)]">
                      Active products
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="md:text-[24px] text-[20px] text-[#0E121B]  mt-4 font-[family-name:var(--font-cal-sans)]">
                Permissionless Trading, 24/7
              </h4>
              <p className="text-[#525866] md:text-base text-sm mt-2 font-[family-name:var(--font-fig-tree)]">
                Experience true financial freedom by trading shares of
                companies, properties, or bonds anytime, anywhere.{" "}
              </p>
            </div>
          </div>
          <div>
            <StockCard />
            <div className="mt-4">
              <h4 className="md:text-[24px] text-[20px] text-[#0E121B]  mt-4 font-[family-name:var(--font-cal-sans)]">
                Fully On-Chain
              </h4>
              <p className="text-[#525866] md:text-base text-sm mt-2  font-[family-name:var(--font-fig-tree)]">
                By keeping everything on-chain, we guarantee transparency,
                immutability, and trust in every transaction.
              </p>
            </div>
          </div>
          <div className="">
            <SwapWidget />
            <div className="mt-4">
              <h4 className="md:text-[24px] text-[20px] text-[#0E121B]  mt-4 font-[family-name:var(--font-cal-sans)]">
                Stake Crypto. Earn Stocks.
              </h4>
              <p className="text-[#525866] md:text-base text-sm mt-2 font-[family-name:var(--font-fig-tree)]">
                Stake your crypto and get rewarded in real stocks. Build your
                portfolio with equities while your crypto works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
