"use client";

import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";

export default function MainLayout({ children }) {
  const isOpenBox = useSelector((state) => state.cart.isOpenBox);
  console.log(isOpenBox);

  return (
    <div className="max-w-[1240px] mx-auto flex items-start justify-between">
      <div
        className={`fixed transition-all duration-400 ${
          isOpenBox ? "w-[5%]" : "w-[20%]"
        }`}
      >
        <Sidebar />
      </div>

      <div
        className={`p-5 transition-all duration-400 bg-white ${
          isOpenBox ? "ml-[7%]" : "ml-[25%]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
