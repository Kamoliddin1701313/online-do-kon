"use client";

import Image from "next/image";
import google_icon from "../../../../public/icons/google_icon.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { IMaskInput } from "react-imask"; // react-imask kutubxonasi parol terishdagi inputda ishlatilgan

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // react icons kutubxonasidagi iconkalari parolga va telefonga ishlatilgan
import { useState } from "react";
import { postData } from "@/app/utils/api";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slices/cartSlice";

function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading((prev) => !prev);

    try {
      const respons = await postData("users/login/", login);
      if (respons) {
        dispatch(setToken(respons));
        alert("Ro'yxatdan o'tildi Kamoliddin bratan");
        setLoading((prev) => !prev);
        router.push("/");
      }
    } catch (error) {
      alert(error, "LOGIN QILISHDA XATO BO'LDI");
    }
  };

  const [parolInput, setParolInput] = useState(false); // bu inputdagi ko'z iconkasini true va false qilib beradigan state
  const OpenParol = () => {
    setParolInput(!parolInput);
  };

  const RegistrationBtn = () => {
    router.push("/auth/register");
  };

  const pathname = usePathname(); // bu bizning saytimizdagi browzer url ni olib beradi next js da react router dom da useLocation qilib pathname qilib olinardi

  return (
    <div className="w-full h-[100vh]">
      <div className="max-w-[1240px] m-auto flex h-full justify-center items-center">
        <div className="w-1/2 bg-[#b1b1b159] rounded-2xl p-7 flex flex-col gap-5">
          <button className="cursor-pointer flex items-center gap-2.5 mx-auto border-[2px] rounded-xl w-full justify-center p-3 border-[var(--black-gray)]">
            <Image
              src={google_icon}
              alt="google_icon"
              className="w-[28px] h-[28px]"
            />

            <span className="text-[20px] text-gry font-semibold">
              Google orqali kirish
            </span>
          </button>

          <div className="flex items-center gap-5">
            <div className="w-full h-[1px] bg-[var(--black-gray)]"></div>
            <p className="text-[var(--black-gray)] font-semibold uppercase">
              Yoki
            </p>
            <div className="w-full h-[1px] bg-[var(--black-gray)]"></div>
          </div>

          <div className="flex items-center border-b-[1px] h-[50px] border-[var(--black-gray)] justify-between">
            <button
              className={`w-full grid place-items-center h-full cursor-pointer
    ${
      pathname === "/auth/login"
        ? "border-b-[4px] border-[var(--black-gray)]"
        : ""
    }`}
            >
              Kirish
            </button>

            <button
              onClick={RegistrationBtn}
              className={`w-full grid place-items-center hover:border-b-[4px] duration-300 ease-out border-b-[4px] border-transparent hover:border-[var(--black-gray)] h-full cursor-pointer`}
            >
              Ro'yxatdan o'tish
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              {/* <div className="flex flex-col gap-2">
                <label htmlFor="tel" className="text-[var(--black-gray)]">
                  Telefon raqam:
                </label>
                <IMaskInput
                  id="tel"
                  mask="+{998} (00) 000-00-00"
                  placeholder="+998 (__) ___-__-__"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />
              </div> */}

              {/* <div className="flex flex-col gap-2 relative">
                <label htmlFor="parol" className="text-[var(--black-gray)]">
                  Parol
                </label>
                <input
                  id="parol"
                  type={`${parolInput ? "text" : "password"}`}
                  placeholder="Parol"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />

                <button
                  type="button"
                  className="absolute top-3/5 right-2.5"
                  onClick={OpenParol}
                >
                  {parolInput ? (
                    <AiOutlineEye className="cursor-pointer text-[18px]" />
                  ) : (
                    <AiOutlineEyeInvisible className="cursor-pointer text-[18px]" />
                  )}
                </button>
              </div> */}

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[var(--black-gray)]">
                  Email
                </label>

                <input
                  onChange={loginUser}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="parol" className="text-[var(--black-gray)]">
                  Parol
                </label>
                <input
                  onChange={loginUser}
                  name="password"
                  id="parol"
                  type={`${parolInput ? "text" : "password"}`}
                  placeholder="Parol"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />

                <button
                  type="button"
                  className="absolute top-3/5 right-2.5"
                  onClick={OpenParol}
                >
                  {parolInput ? (
                    <AiOutlineEye className="cursor-pointer text-[18px]" />
                  ) : (
                    <AiOutlineEyeInvisible className="cursor-pointer text-[18px]" />
                  )}
                </button>
              </div>

              <Link href="/auth/register">
                <span className="inline-block px-2 py-1 rounded">
                  Parolni unitdingizmi?
                </span>
              </Link>

              <button
                type="submit"
                className="bg-[var(--black-gray)]  py-2.5 rounded-[8px] cursor-pointer text-white border-[2px] duration-300 ease-out border-[var(--black-gray)] hover:bg-[var(--light-gray)] hover:text-[var(--black-gray)]"
              >
                {loading ? "Loading ..." : "Kirish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
