"use client";
import logo from "../../../../public/icons/online_bozor_logo.webp";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

import { FaListUl } from "react-icons/fa6";
import { TbShoppingBagHeart } from "react-icons/tb";
import { TbCategoryPlus } from "react-icons/tb";
import { MdYoutubeSearchedFor } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "@/store/slices/cartSlice";
import Categories from "../categories/Categories";

import dynamic from "next/dynamic";

// faqat clientda ishlasin deb chaqirib oldik
const Tooltip = dynamic(() => import("@mui/material/Tooltip"), { ssr: false });

import { HiOutlineLogout } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const [language, setLanguage] = useState(false);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.cart);
  const isAuth = Boolean(token); // ✅ token bor-yo‘qligini shu bilan bilamiz

  const { scrollYProgress } = useScroll();

  const [toggle, setToggle] = useState(false);
  const ToggleFunction = () => setToggle((state) => !state);

  // Search state
  const [inFocus, setInFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [globalSearch, setGlobalSearch] = useState([]);

  // Qidiruv
  const searchData = async () => {
    try {
      //   if (!search) {
      //     setGlobalSearch([]);
      //     return;
      //   }
      const respons = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const responsJson = await respons.json();
      setGlobalSearch(responsJson?.products);
    } catch (error) {
      console.log(error, "malumotlar kelmadi");
    }
  };

  useEffect(() => {
    searchData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleFocus = () => {
    setInFocus(true);
    setToggle(false);
  };

  const handleBlur = () => {
    setInFocus(false);
  };

  const Search = (v) => {
    setSearch(v);
  };

  const loginBtn = () => {
    router.push("/auth/login");
  };

  const logoutBtn = () => {
    dispatch(clearToken());
    router.push("/auth/register");
  };

  console.log(isAuth, "XXXXXXX");

  return (
    <div className="bg-primary h-[110px] fixed w-full z-50">
      <div className="max-w-[1240px] m-auto py-3.5 box-border h-[70px] flex gap-5 items-center justify-between relative">
        <Link
          href="/"
          className="h-full rounded-[8px] bg-white px-3.5 w-1/8 text-primary text-center flex items-center"
        >
          <Image src={logo} alt="online_bozor_logo" className="w-[160px]" />
        </Link>

        <div className="flex w-full gap-3 justify-end h-full items-center">
          <div>
            <Tooltip
              title={
                <span className="text-white text-[16px]">Mahsulotlar</span>
              }
              arrow
            >
              <TbCategoryPlus
                onClick={ToggleFunction}
                type="button"
                className="text-[34px] text-red-600 bg-white cursor-pointer rounded-[8px] p-[6px]"
              />
            </Tooltip>

            {toggle && (
              <div className="absolute top-[70px] z-10 left-0 w-full bg-light px-5 pb-5 rounded-b-[20px] shadow-xl/10 transition-all duration-200">
                <div className="overflow-auto max-h-[520px] p-3 bg-white">
                  <h1 className="text-primary font-geomanist text-center font-semibold text-[36px]">
                    Online do'kon xizmatidagi bo'limlar
                  </h1>
                  {globalSearch?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h1>{item?.description}</h1>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full h-full">
            <form
              onSubmit={handleSearch}
              className="flex items-center rounded-[25px] overflow-hidden border-[1px] h-full w-full border-white"
            >
              <input
                type="search"
                autoComplete="off"
                placeholder="Mahsulot qidirish..."
                className="px-5 outline-none w-full h-full text-white"
                onChange={(e) => Search(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInput={(e) => {
                  if (e.target.value === "") {
                    setGlobalSearch();
                  }
                }}
              />
              <button
                type="button"
                aria-label="Qidirish"
                className="px-5 h-full text-black bg-white cursor-pointer border-white"
              >
                <MdYoutubeSearchedFor className="text-[22px] text-primary" />
              </button>

              {inFocus && globalSearch?.length > 0 && (
                <div
                  className={`absolute top-[56px] left-0 w-full bg-light px-5 pb-5 rounded-b-[20px] shadow-xl/10 ${
                    inFocus ? "opacity-100 z-10" : "opacity-0 -z-10"
                  }`}
                >
                  <div className="overflow-auto max-h-[420px] p-3 bg-white">
                    {globalSearch?.length > 0 ? (
                      globalSearch.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 100 }}
                          transition={{ duration: 0.8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <h1>{item?.description}</h1>
                        </motion.div>
                      ))
                    ) : (
                      <p className="text-gray-500">Hech narsa topilmadi</p>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {language ? (
            <button className="text-white text-[18px] border-b-[2px] cursor-pointer">
              uzb
            </button>
          ) : (
            <button className="text-white text-[18px] border-b-[2px] cursor-pointer leading-5">
              rus
            </button>
          )}

          {/* O'chirma Kamoliddin bu cammentga olingan code ni  */}

          {isAuth ? (
            <Tooltip
              title={<span className="text-white text-[16px]">Chiqish</span>}
              arrow
            >
              <button onClick={logoutBtn}>
                <HiOutlineLogout className="text-[24px] mt-[3px] text-white cursor-pointer" />
              </button>
            </Tooltip>
          ) : (
            <Tooltip
              title={
                <span className="text-white text-[16px]">
                  Ro'yxatdan o'tish
                </span>
              }
              arrow
            >
              <button onClick={loginBtn}>
                <FaRegUser className="text-[18px] mt-[3px] text-white cursor-pointer" />
              </button>
            </Tooltip>
          )}
          {/* O'chirma Kamoliddin bu cammentga olingan code ni  */}
        </div>

        <button
          type="button"
          aria-label="Sevimlilar"
          className="relative rounded cursor-pointer h-full"
        >
          <TbShoppingBagHeart className="text-[22px] text-white" />
          <span className="absolute -top-[10px] -right-[10px] bg-[#636A79] text-white rounded-full text-[14px] px-[6px] font-medium">
            0
          </span>
        </button>
      </div>

      <Categories />

      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "absolute",
          bottom: "-5px",
          left: 0,
          right: 0,
          height: "5px",
          originX: 0,
          overflow: "hidden",
          backgroundColor: "#fbc902",
        }}
      />
    </div>
  );
}

export default Header;
