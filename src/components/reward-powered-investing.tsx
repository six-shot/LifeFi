import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function RewardPoweredInvesting() {
  return (
    <section className="py-24 font-[family-name:var(--font-fig-tree)]">
      <div className="@container mx-auto max-w-[1440px] md:px-40 px-5">
        <div className="text-center mb-16">
          <h2 className="text-balance text-4xl font-[family-name:var(--font-cal-sans)] lg:text-[64px] tracking-[-0.64px] [text-shadow:0px_12.096px_90.72px_rgba(152,152,152,0)] text-[#0E121B]">
            Reward Powered Investing with Just 1% Tax
          </h2>
          <p className="text-[#525866] md:text-[20px] text-base mt-6 max-w-[800px] mx-auto">
            Every transaction on Stockbits contributes a small 1% fee to the
            Reward Pool which is used to fuel real asset investing.
          </p>
        </div>

        <div className="bg-[#F5F4FC] rounded-[24px] border-[3px] border-[rgba(71,108,255,0.02)] md:py-[80px] py-[50px] md:px-[80px] px-5">
          <h3 className="text-[#0E121B] md:text-[32px] text-[24px] font-[family-name:var(--font-cal-sans)] text-center mb-12">
            Here&apos;s how it works:
          </h3>

          <div className="grid md:grid-cols-3 items-center gap-8 mb-12">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="bg-white h-[220px] border border-[#E1E4EA] rounded-[16px] p-6 mb-6 shadow-[0px_2px_4px_0px_rgba(10,13,20,0.03)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_25px_0px_rgba(10,13,20,0.08)] hover:-translate-y-2 hover:border-[#470CFF] cursor-pointer">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  🔁
                </div>
                <h4 className="text-[#0E121B] text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#470CFF]">
                  1% Transaction Tax
                </h4>
                <p className="text-[#525866] text-sm">
                  Collected from every supported crypto deposit
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="bg-white h-[220px] border border-[#E1E4EA] rounded-[16px] p-6 mb-6 shadow-[0px_2px_4px_0px_rgba(10,13,20,0.03)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_25px_0px_rgba(10,13,20,0.08)] hover:-translate-y-2 hover:border-[#470CFF] cursor-pointer">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  🎯
                </div>
                <h4 className="text-[#0E121B] text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#470CFF]">
                  Personalized Rewards
                </h4>
                <p className="text-[#525866] text-sm">
                  Your share of the pool is based on how much and how long you
                  stake, meaning rewards vary from user to user
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="bg-white h-[220px] border border-[#E1E4EA] rounded-[16px] p-6 mb-6 shadow-[0px_2px_4px_0px_rgba(10,13,20,0.03)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_25px_0px_rgba(10,13,20,0.08)] hover:-translate-y-2 hover:border-[#470CFF] cursor-pointer">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  📈
                </div>
                <h4 className="text-[#0E121B] text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#470CFF]">
                  Real Asset Exposure
                </h4>
                <p className="text-[#525866] text-sm">
                  Rewards are distributed in tokenized stocks tied to real world
                  equities, letting you invest in companies like Apple, Tesla,
                  and more using crypto
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#525866] md:text-[18px] text-base mb-8 max-w-[600px] mx-auto">
              Start staking and turn your idle crypto into real world equity
              rewards powered by the Stockbits Reward Pool
            </p>
            <Button asChild variant="default" size="lg">
              <Link href="#">
                <span>Start Staking Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
