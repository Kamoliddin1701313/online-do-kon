"use client";
import logo from "../../../../public/icons/online_bozor_logo.webp";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

// React icon kutubxonasidagi iconkalar
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { TbShoppingBagHeart } from "react-icons/tb";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
// React icon kutubxonasidagi iconkalar

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

import iphone from "../../../../public/images/iphone.webp";

function Header() {
  const router = useRouter();
  const [language, setLanguage] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.cart.token);
  const isAuth = Boolean(token); // ✅ token bor-yo‘qligini shu bilan bilamiz

  const { scrollYProgress } = useScroll();

  const [toggle, setToggle] = useState(false);
  const ToggleFunction = () => {
    router.push("/");
    setToggle((state) => !state);
  };

  // Qidiruv state
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

  const categoriyData = [
    {
      id: 1,
      name: "Iphone 13",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 2,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 3,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 4,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 5,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 6,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 7,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 8,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 9,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 10,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 11,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 12,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 13,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 14,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 15,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 16,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 17,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 18,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 19,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 20,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 21,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 22,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 23,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 24,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 25,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 26,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 27,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 28,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 29,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
    {
      id: 30,
      name: "Iphone",
      img: iphone,
      location: "Tashkent",
      price: "680 $",
    },
  ];

  const categoriesDetail = (id) => {
    setToggle((prev) => !prev);
    router.push(`/categories/${id}`);
  };

  return (
    <div className="bg-primary h-[120px] fixed w-full z-50">
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
              <TbAdjustmentsHorizontal
                onClick={ToggleFunction}
                type="button"
                className="text-[34px] text-red-600 bg-white cursor-pointer rounded-[8px] p-[6px]"
              />
            </Tooltip>

            {toggle && (
              <div className="absolute top-[70px] z-20 left-0 w-full bg-light px-5 pb-5 rounded-b-[20px] shadow-xl/10 transition-all duration-200">
                <div className="overflow-auto max-h-[530px] p-3 bg-white">
                  <h1 className="text-primary font-geomanist text-center text-[24px] mb-3.5">
                    Online do'kon xizmatidagi bo'limlar
                  </h1>
                  <div className="grid grid-cols-5 gap-3.5">
                    {categoriyData?.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <div
                          onClick={() => categoriesDetail(item.id)}
                          className="cursor-pointer"
                        >
                          <div className="relative">
                            <Image
                              src={item?.img}
                              alt={item?.name}
                              className="w-full h-[220px] object-cover"
                            />
                            <div className="absolute top-2.5 right-2.5 flex items-center gap-2.5">
                              <button className="bg-white rounded-4xl p-2.5 grid place-items-center cursor-pointer">
                                <FaRegHeart className="text-[18px] text-primary" />
                              </button>

                              <button className="bg-white rounded-[12px] p-[8px] cursor-pointer">
                                <PiShoppingCartBold className="text-[20px]" />
                              </button>
                            </div>
                          </div>

                          <button className="bg-green-800 cursor-pointer text-white my-2.5 rounded-2xl py-1.5 px-3.5">
                            Add
                          </button>

                          <h4 className="line-clamp-2 leading-5">
                            {item?.name}
                            sqws12sq
                          </h4>

                          <div className="flex items-center justify-between my-2.5">
                            <span className="min-w-[50px]">{item?.price}</span>
                            <span className="line-clamp-1">
                              {item?.location} wdqd dqqw eqweqwe qwe qw
                              eqweqweqw
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                    inFocus ? "opacity-100 z-20" : "opacity-0 -z-20"
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
