"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Currency {
  symbol: string;
  name: string;
  color: string;
}

const SwapWidget = () => {
  const [fromAmount, setFromAmount] = useState("5");
  const [toAmount, setToAmount] = useState("5");
  const [isAuto, setIsAuto] = useState(true);
  const [fromCurrency, setFromCurrency] = useState<Currency>({
    symbol: "USDC",
    name: "USD Coin",
    color: "#2775CA",
  });
  const [toCurrency, setToCurrency] = useState<Currency>({
    symbol: "USDX",
    name: "USDX Token",
    color: "#2775CA",
  });

  const handleSwapCurrencies = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;

    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    // In a real app, this would calculate the exchange rate
    setToAmount(value);
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    // In a real app, this would calculate the exchange rate
    setFromAmount(value);
  };

  const handleSwap = () => {
    console.log("Swap executed:", {
      from: { currency: fromCurrency.symbol, amount: fromAmount },
      to: { currency: toCurrency.symbol, amount: toAmount },
    });
    // Here you would implement the actual swap logic
  };

  return (
    <div className="  border border-[#F5F7FA] h-[472px] bg-[#E1E4EA] rounded-[24px]  md:p-10 p-5">
      <div className="md:p-[15px]  p-[13px] bg-white border border-white/10 rounded-[7px] h-full flex justify-between flex-col">
        <div>
          <div className="flex items-center justify-between ">
            <h2 className="text-[15px] font-semibold text-[#101828] font-[family-name:var(--font-neue)] ">
              Swap
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuto(!isAuto)}
              className={`text-[9px] transition-all duration-200 h-[24px] px-[5px] rounded-[8px] font-[family-name:var(--font-general-sans)] ${
                isAuto
                  ? "bg-[#F9FAFB] text-gray-700 hover:bg-gray-200"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Image src="filter.svg" alt="filter" width={13} height={13} />
              Auto
            </Button>
          </div>

          {/* From Section */}
          <div className="my-[26px]">
            <div className="bg-[#B1B1B11A]  p-[13px] rounded-[7px] border-2 border-transparent hover:border-gray-200 transition-all duration-200">
              <div>
                <h5 className="text-sm text-[#525866] text-[10px] font-[family-name:var(--font-fig-tree)] mb-[5px]">
                  You’re selling
                </h5>

                <div className="flex items-center justify-between min-w-0">
                  <div className="flex flex-col items-center ">
                    <div>
                      {" "}
                      <div className="flex items-center gap-[5px] font-[family-name:var(--font-fig-tree)]">
                        <Image
                          src="usdc.svg"
                          width={15}
                          height={15}
                          alt="usdc"
                        />
                        <span className="font-semibold text-[#101828] ">
                          {fromCurrency.symbol}
                        </span>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={(e) => handleFromAmountChange(e.target.value)}
                    className="bg-transparent text-right text-[15px] font-semibold text-[#101828] border-none outline-none max-w-[100px] w-full"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center ">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapCurrencies}
              className="w-[26px] h-[26px] p-0 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:rotate-180"
            >
              <Image src="change.svg" width={13} height={13} alt="change" />
            </Button>
          </div>

          <div className="mt-[26px]">
            <div className="bg-[#B1B1B11A]  p-[13px] rounded-[7px] border-2 border-transparent hover:border-gray-200 transition-all duration-200">
              <div>
                <h5 className="text-sm text-[#525866] text-[10px] font-[family-name:var(--font-fig-tree)] mb-[5px]">
                  You’re buyinh
                </h5>

                <div className="flex items-center justify-between min-w-0">
                  <div className="flex flex-col items-center ">
                    <div>
                      {" "}
                      <div className="flex items-center gap-[5px] font-[family-name:var(--font-fig-tree)]">
                        <Image
                          src="usdc.svg"
                          width={15}
                          height={15}
                          alt="usdc"
                        />
                        <span className="font-semibold text-[#101828] ">
                          {toCurrency.symbol}
                        </span>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={(e) => handleToAmountChange(e.target.value)}
                    className="bg-transparent text-right text-[15px] font-semibold text-[#101828] border-none outline-none max-w-[100px] w-full"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full rounded-[6.5px]" onClick={handleSwap} variant="default">
          Swap
        </Button>
      </div>
    </div>
  );
};

export default SwapWidget;
