"use client";
import { toggleSidebar } from "@/store/slices/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// React icon kutubxonasidagi iconkalar to'plami
import { FaHome } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

function Sidebar() {
  const dispatch = useDispatch();
  const route = useRouter();
  const isOpenBox = useSelector((state) => state.cart.isOpenBox);

  const categoriyaData = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: <FaHome style={{ fontSize: "20px" }} />,
    },

    {
      id: 2,
      name: "Categoriya",
      link: "categoriya",
      icon: <TbAdjustmentsHorizontal style={{ fontSize: "20px" }} />,
    },

    {
      id: 3,
      name: "Sevimli",
      link: "sevimli",
      icon: <FaRegHeart style={{ fontSize: "20px" }} />,
    },

    {
      id: 4,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 5,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 6,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 7,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 1,
      name: "Home",
      link: "/",
      icon: <FaHome style={{ fontSize: "20px" }} />,
    },

    {
      id: 2,
      name: "Categoriya",
      link: "categoriya",
      icon: <TbAdjustmentsHorizontal style={{ fontSize: "20px" }} />,
    },

    {
      id: 3,
      name: "Sevimli",
      link: "sevimli",
      icon: <FaRegHeart style={{ fontSize: "20px" }} />,
    },

    {
      id: 4,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 5,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 6,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },

    {
      id: 7,
      name: "Savatcha",
      link: "savatcha",
      icon: <PiShoppingCartBold style={{ fontSize: "20px" }} />,
    },
  ];

  const categoriesDetail = (services) => {
    route.push(`/${services}`);
  };

  return (
    <div className="relative">
      <div className="pt-5 pb-3">
        <div className="px-3 py-5 min-h-[50vh] max-h-[67vh] overflow-y-auto custom-scroll bg-white flex flex-col gap-2.5">
          {categoriyaData &&
            categoriyaData?.map((value, index) => (
              <button
                onClick={() => categoriesDetail(value.link)}
                key={index}
                className={`flex items-center w-full p-2.5 gap-2.5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#E3E3E3] ${
                  isOpenBox ? "bg-transparent rounded-[8px]" : "bg-[#E3E3E3]"
                }`}
              >
                <span>{value?.icon}</span>

                <span
                  className={`text-[18px] transition-all duration-300 ease-in-out overflow-hidden
    ${isOpenBox ? "opacity-0 max-w-0" : "opacity-100 max-w-full"}`}
                >
                  {value.name}
                </span>
              </button>
            ))}
        </div>
      </div>

      <button
        onClick={() => dispatch(toggleSidebar())}
        className="absolute -right-[38px] top-[20px] bg-[#E3E3E3] w-[32px] h-[36px] rounded-r-[10px] flex justify-center items-center cursor-pointer"
      >
        <IoSettingsOutline className="text-[20px]" />
      </button>
    </div>
  );
}

export default Sidebar;
