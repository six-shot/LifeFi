import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StockCard = () => {
  return (
    <div className="w-full  border border-[#F5F7FA]  bg-[#E1E4EA] rounded-[24px]  md:p-10 p-5 h-[472px]">
      {/* Header with chart background */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 h-[67px] p-4 rounded-t-[16px]"></div>

      {/* Stock info section */}
      <div className="md:p-[17px] p-[14px]  rounded-[16px] bg-white -mt-2 relative z-[20]">
        {/* Stock symbol and name */}
        <div className="flex items-start gap-2 mb-[11px]">
          <div className="w-10 h-10 bg-[#335CFF] rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold text-[17px] font-[family-name:var(--font-cal-sans)]">
              AA
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm font-[family-name:var(--font-cal-sans)]">
              AAPL
            </h3>
          </div>
        </div>

        {/* Price and change */}
        <div className="mb-6 font-[family-name:var(--font-fig-tree)]">
          <div className="flex justify-between items-center">
            <div className="md:text-[25px] text-[20px] font-bold text-[#0E121B]">
              $175.43
            </div>
            <div className="ml-auto">
              <span className="text-[10px] text-[#3559E9] bg-[#EBF1FF] px-2 py-1.5 rounded-full font-medium">
                STOCKS
              </span>
            </div>
          </div>
          <div className="px-1   flex items-center  h-[35px]">
            <Image width={16} height={16} src="up.svg" alt="up" />
            <h6 className="text-[11px] text-[#008236] font-[family-name:var(--font-fig-tree)]">
              +2.34%
            </h6>
          </div>
        </div>

        {/* Market stats */}
        <div className="grid grid-cols-2 gap-[9px] md:mt-[11px] mt-2">
          <div className="h-[56px] border border-[#E1E4EA] rounded-[11px] p-2 flex i flex-col font-[family-name:var(--font-fig-tree)] ">
            <div className="text-[10px] text-[525866] mb-[3px]">Market Cap</div>
            <div className="text-[17px] font-bold text-[#0E121B]">$2.8T</div>
          </div>
          <div className="h-[56px] border border-[#E1E4EA] rounded-[11px] p-2 flex i flex-col font-[family-name:var(--font-fig-tree)] ">
            <div className="text-[10px] text-[525866] mb-[3px]">Volume</div>
            <div className="text-[17px] font-bold text-[#0E121B]">45.2M</div>
          </div>
        </div>

        {/* Performance section */}
        <div className="mt-4">
          <div className="flex items-center justify-between  font-[family-name:var(--font-fig-tree)] h-[17px]">
            <span className="text-[10px] text-[#525866]">Performance</span>
            <span className="text-[10px] text-[#525866]">13%</span>
          </div>
          <div className="w-full flex items-center h-2 mt-[3px] gap-[5px]">
            {/* Filled part */}
            <div
              className="bg-[#335CFF] h-2"
              style={{
                width: "13%",
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
              }}
            ></div>
            {/* Empty part */}
            <div
              className="bg-[#335CFF1F] h-2 flex-1"
              style={{
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
              }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-[12px]">
          <Button className="w-full flex-1 rounded-[10px]" variant="default">
            Trade
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-10 rounded-[11px] border border-gray-200 hover:bg-gray-50 flex justify-center items-center"
          >
            <Image src="star.svg" alt="star" width={14} height={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
