"use client";
import { useEffect, useState } from "react";
import { getData } from "./utils/api";
import { motion } from "motion/react";
// import iphone from "../../../../public/images/iphone.webp";
import iphone from "../../public/images/iphone.webp";

// React icon kutubxonasidagi iconkalar
import { FaHandshakeSimple, FaRegHeart } from "react-icons/fa6";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BiSliderAlt, BiCategory } from "react-icons/bi";
import { BiSortAlt2 } from "react-icons/bi";
import Categories from "./components/categories/Categories";
import { PiShoppingCartBold } from "react-icons/pi";
import Image from "next/image";
import Loading from "@/components/loading/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    const { access } = JSON.parse(localStorage.getItem("auth") || "{}");
    try {
      const data = await getData("products/", access);
      // console.log(data, "UUUUUUUUUU");

      setProducts(data);
      setLoading(true);
    } catch (error) {
      console.error("Mahsulotlarni olishda xato:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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

  // console.log(products, "KAMOLIDDIN QQQQ");

  return (
    <div className="p-5">
      {/* <Loading /> */}
      <div className="flex justify-between items-center px-5 py-3 border-[2px] shadow-[0_0_8px_rgba(0,0,0,0.25)] border-[#50505070] rounded-[20px]">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <MdOutlineMonetizationOn />
            <span>Sotish</span>
          </button>

          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <FaHandshakeSimple />
            <span>Sotib olish</span>
          </button>

          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <SlLocationPin />
            <span>Manzil</span>
          </button>

          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <BiSliderAlt />
            <span>Narx oralig‘i</span>
          </button>

          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <BiCategory />
            <span>Ko‘proq</span>
          </button>
        </div>

        <div>
          <button className="flex items-center gap-2.5 rounded-[20px] px-3.5 py-2 cursor-pointer border-[2px] border-[#50505070] hover:bg-[#50505070] duration-300 ease-in">
            <BiSortAlt2 />
            <span>Tanlash</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-4 gap-3.5 mt-5">
          {products?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="cursor-pointer">
                <div className="relative">
                  {/* <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-[220px] object-cover"
                /> */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-2.5">
                    <button className="bg-white rounded-4xl p-2.5 grid place-items-center cursor-pointer">
                      <FaRegHeart className="text-[18px]" />
                    </button>

                    <button className="bg-white rounded-[12px] p-[8px] cursor-pointer">
                      <PiShoppingCartBold className="text-[20px]" />
                    </button>
                  </div>
                </div>

                <button className="bg-green-800 cursor-pointer text-white my-2.5 rounded-2xl py-1.5 px-3.5">
                  Qo'shish
                </button>

                <h4 className="line-clamp-2 leading-5">{item?.title}</h4>

                <div className="flex items-center justify-between my-2.5 gap-[15px]">
                  <span className="min-w-[50px]">{item?.price}</span>
                  <span className="line-clamp-1">{item?.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-[15%] w-full">
          <Loading />
        </div>
      )}
    </div>
  );
}
