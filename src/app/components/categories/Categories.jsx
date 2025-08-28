"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

function Categories() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const router = useRouter();
  const pathname = usePathname();

  const categoriesDetail = (id) => {
    router.push(`/categories/${id}`);
  };

  const data = [
    { id: 1, name: "name 1", link: "link 1" },
    { id: 2, name: "name 2", link: "link 2" },
    { id: 3, name: "name 3", link: "link 3" },
    { id: 4, name: "name 4", link: "link 4" },
    { id: 5, name: "name 5", link: "link 5" },
    { id: 6, name: "name 6", link: "link 6" },
    { id: 7, name: "name 7", link: "link 7" },
    { id: 8, name: "name 8", link: "link 8" },
    { id: 9, name: "name 9", link: "link 9" },
    { id: 10, name: "name 10", link: "link 10" },
    { id: 11, name: "name 11", link: "link 11" },
    { id: 12, name: "name 12", link: "link 12" },
    { id: 13, name: "name 13", link: "link 13" },
    { id: 14, name: "name 14", link: "link 14" },
    { id: 15, name: "name 15", link: "link 15" },
    { id: 16, name: "name 16", link: "link 16" },
    { id: 17, name: "name 17", link: "link 17" },
    { id: 18, name: "name 18", link: "link 18" },
    { id: 19, name: "name 19", link: "link 19" },
    { id: 20, name: "name 20", link: "link 20" },
    { id: 21, name: "name 21", link: "link 21" },
    { id: 22, name: "name 22", link: "link 22" },
    { id: 23, name: "name 23", link: "link 23" },
    { id: 24, name: "name 24", link: "link 24" },
    { id: 25, name: "name 25", link: "link 25" },
    { id: 26, name: "name 26", link: "link 26" },
    { id: 27, name: "name 27", link: "link 27" },
    { id: 28, name: "name 28", link: "link 28" },
    { id: 29, name: "name 29", link: "link 29" },
    { id: 30, name: "name 30", link: "link 30" },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initiaSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-primary h-[50px] pb-[10px]">
      <div className="flex max-w-[1240px] mx-auto justify-between">
        {/* <div className="w-[90px] grid place-items-center">
          <button>
            <FaRegUser className="text-[20px] text-white cursor-pointer" />
          </button>
        </div> */}

        <div className="relative flex justify-between items-center w-full rounded-[30px] overflow-hidden">
          <button
            onClick={previous}
            className="absolute z-10 cursor-pointer top-1/2 left-[6px] w-[20px] h-[20px] rounded-full bg-[#fbc902] -translate-y-1/2"
          >
            <GrFormPrevious className="text-[20px] text-white" />
          </button>

          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="w-full m-auto h-full bg-white"
          >
            {data &&
              data?.map((value, index) => {
                const isActive = pathname === `/categories/${value.id}`;
                return (
                  <button
                    onClick={() => categoriesDetail(value.id)}
                    key={index}
                    className="h-[40px] flex items-center"
                  >
                    <span
                      className={`mx-auto h-[40px] cursor-pointer grid place-items-center w-[94%]  ${
                        isActive ? "bg-[#E3E3E3]" : "bg-white"
                      }`}
                    >
                      {value?.name}
                    </span>
                  </button>
                );
              })}
          </Slider>

          <button
            onClick={next}
            className="absolute z-10 cursor-pointer top-1/2 right-[6px] w-[20px] h-[20px] rounded-full bg-yellow-600 -translate-y-1/2"
          >
            <MdOutlineNavigateNext className="text-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
