"use client";
import logo from "../../../../public/icons/online_bozor_logo.webp";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from "@/app/utils/api";
import Tooltip from "@mui/material/Tooltip";

import { motion, useScroll } from "motion/react";

// react icons kutubxonadagi iconkalar
import { FaListUl } from "react-icons/fa6";
import { TbShoppingBagHeart } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const [language, setLanguage] = useState(false);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setUserToken(JSON.parse(storedToken));
    }
  }, []);


  const { scrollYProgress } = useScroll();

  const [toggle, setToggle] = useState(false);

  const ToggleFunction = () => {
    setToggle((state) => !state);
  };

  // Search state lari
  const [inFocus, setInFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [globalSearch, setGlobalSearch] = useState([]);

  // Search qilishdagi funksiya
  const searchData = async () => {
    try {
      const respons = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const responsJson = await respons.json();
      setGlobalSearch(responsJson?.products);

      // const respons = await getData(`products/search?q=${search}`);
      // const respons = await getData("");
      // setGlobalSearch(respons?.products);
    } catch (error) {}
  };

  // Search qilishdagi useEffect
  useEffect(() => {
    searchData();
  }, [search]);

  const Search = (e) => {
    setSearch(e);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleFocus = () => {
    setInFocus(true);
    setToggle(false); //ToggleFunction oyna yopiladi false bo'lsa
  };

  const handleBlur = () => {
    setInFocus(false);
  };

  const loginBtn = () => {
    router.push("/auth/login");
  };

  return (
    <div className="h-[70px] py-3.5 bg-primary fixed w-full z-50">
      <div className="max-w-[1240px] h-full m-auto flex gap-5 items-center justify-between relative">
        <Link
          href="/"
          className="h-full rounded-[8px] bg-white px-3.5 w-1/8 text-primary text-center flex items-center"
        >
          <Image src={logo} alt="online_bozor_logo" className="w-[160px]" />
        </Link>

        <div className="flex w-full gap-3 justify-end h-full items-center">
          <div className="">
            {/* <button
              onClick={ToggleFunction}
              type="button"
              aria-label="Katalog"
              className="py-2 rounded-[8px] px-3.5 flex items-center cursor-pointer h-full gap-2.5 text-primary bg-white"
            >
              <FaListUl className="text-[20px]" />
              <span>Mahsulotlar</span>
            </button> */}

            <Tooltip
              title={
                <span className="text-white text-[16px]">Mahsulotlar</span>
              }
              arrow
            >
              <FaListUl
                onClick={ToggleFunction}
                type="button"
                className="text-[34px] text-red-600 bg-white cursor-pointer rounded-[8px] p-[6px]"
              />
            </Tooltip>

            {toggle && (
              <div
                className={`absolute top-[56px] left-0 w-full bg-light px-5 pb-5 rounded-b-[20px] shadow-xl/10 transition-all duration-200`}
              >
                <div className="overflow-auto max-h-[520px] p-3 bg-white">
                  <h1 className="text-primary font-geomanist text-center font-semibold text-[36px]">
                    Online do'kon xizmatidagi bo'limlar
                  </h1>
                  {globalSearch?.map((searchvalue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h1>{searchvalue?.description}</h1>
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
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") setGlobalSearch();
                // }}
              />
              <button
                type="button"
                aria-label="Qidirish"
                className="px-5 h-full text-black bg-white cursor-pointer border-white"
              >
                <MdYoutubeSearchedFor className="text-[22px] text-primary" />
              </button>

              {inFocus && (
                <div
                  className={`absolute top-[56px] left-0 w-full bg-light px-5 pb-5 rounded-b-[20px] shadow-xl/10 ${
                    inFocus || search?.length > 0
                      ? "opacity-100 z-10"
                      : "opacity-0 -z-10"
                  }`}
                >
                  <div className="overflow-auto max-h-[420px] p-3 bg-white">
                    {globalSearch?.map((searchvalue, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <h1>{searchvalue?.description}</h1>
                      </motion.div>
                    ))}
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

          {userToken && userToken.access ? (
            "salom"
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
                <FaRegUser className="text-[18px] text-white cursor-pointer" />
              </button>
            </Tooltip>
          )}
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
