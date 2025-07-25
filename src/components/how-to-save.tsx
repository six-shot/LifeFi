import Image from 'next/image';
import React from 'react'

export default function HowToSave() {
  return (
    <div className="px-5">
      <div className="bg-[#EBF1FF] rounded-[40px] md:pt-[98px] pt-[48px] md:pb-[50px] pb-[25px] flex flex-col justify-center items-center md:px-0 px-5">
        <h2 className="text-[#122368] md:text-[64px] text-[28px] tracking-[-0.64px] md:leading-[64px] leading-[28px] font-[family-name:var(--font-cal-sans)] text-center ">
          Redefining how you <br /> invest and save
        </h2>
        <Image
          src="how-to-save.svg"
          className='md:-mt-2'
          width={1123}
          height={710}
          alt="how-to-save"
        />
      </div>
    </div>
  );
}
