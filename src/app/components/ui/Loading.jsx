import React from "react";

function Loading() {
  return (
    <div className="grid place-items-center loading w-[18px] h-[18px]">
      <div className="grid grid-cols-2 gap-[4px]">
        <div className="w-[7px] h-[7px] rounded-full bg-[#0e5106af]"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-[#58030eee]"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-red-600"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-[#1100ffbe]"></div>
      </div>
    </div>
  );
}

export default Loading;
