"use client";
import { postData } from "@/app/utils/api";

import Image from "next/image";
import google_icon from "../../../../public/icons/google_icon.svg";
import { usePathname, useRouter } from "next/navigation";

import { IMaskInput } from "react-imask"; // react-imask kutubxonasi parol terishdagi inputda ishlatilgan

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // react icons kutubxonasidagi iconkalari parolga va telefonga ishlatilgan
import { useState } from "react";

function Register() {
  const router = useRouter();
  const pathname = usePathname(); // bu bizning saytimizdagi browzer url ni olib beradi next js da react router dom da useLocation qilib pathname qilib olinardi
  const [loading, setLoading] = useState(false); // Ro'yxatdan o'ting degan tugmani bosganimda loadin chiqish uchun state
  const [parolInput, setParolInput] = useState(false); // bu inputdagi ko'z iconkasini true va false qilib beradigan state
  const [passwordSentModal, setPasswordSentModal] = useState(false);

  // codning bu qismi registratsiyadan o'tish qismining codi
  const [user, setUser] = useState({
    email: "",
    full_name: "",
    password: "",
    code: "",
  });

  const RegistrationUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleChange = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!passwordSentModal) {
      const respons = await postData("users/register/", user);
      alert("Emailingizga code yuborildi!");
      setPasswordSentModal(true);
      setLoading(false);
    } else {
      const res = await postData("users/verify-email/", {
        email: user.email,
        code: user.code,
      });

      console.log(res, "EEEEEE");

      if (res) {
        alert("Email muvaffaqiyatli tasdiqlandi!");
        setLoading(false);
        router.push("/");
      } else {
        alert("Kod noto‘g‘ri!");
      }
    }
  };
  // codning bu qismi registratsiyadan o'tish qismining tugash qismi

  const OpenParol = () => {
    setParolInput(!parolInput); // parol kiritadigan inputdagi type ni password yoki text qilib beradigan funksiya button
  };

  const LoginBtn = () => {
    router.push("/auth/login"); // login saxifaga o'tkazadigan funksiya button
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="max-w-[1240px] m-auto flex h-full justify-center items-center relative">
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
              onClick={LoginBtn}
              className={`w-full grid place-items-center hover:border-b-[4px] duration-300 ease-out border-b-[4px] border-transparent hover:border-[var(--black-gray)] h-full cursor-pointer`}
            >
              Kirish
            </button>

            <button
              className={`w-full grid place-items-center h-full cursor-pointer ${
                pathname === "/auth/register"
                  ? "border-b-[4px] border-[var(--black-gray)]"
                  : ""
              }`}
            >
              Ro'yxatdan o'tish
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <form onSubmit={HandleChange} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[var(--black-gray)]">
                  Email:
                </label>

                <input
                  onChange={RegistrationUser}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="full_name" className="text-[var(--black-gray)]">
                  Isim familiya:
                </label>

                <input
                  onChange={RegistrationUser}
                  name="full_name"
                  type="text"
                  id="full_name"
                  placeholder="Isim familiya"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />
              </div>

              {/* <div className="flex flex-col gap-2">
                <label htmlFor="tel" className="text-[var(--black-gray)]">
                  Telefon raqam:
                </label>

                <IMaskInput
                  onChange={RegistrationUser}
                  name="phone"
                  id="tel"
                  mask="+{998} (00) 000-00-00"
                  placeholder="+998 (__) ___-__-__"
                  className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                />
              </div> */}

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="parol" className="text-[var(--black-gray)]">
                  Parol
                </label>

                <input
                  onChange={RegistrationUser}
                  name="password"
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

              {passwordSentModal && (
                <div className="flex flex-col gap-2">
                  <input
                    onChange={RegistrationUser}
                    name="code"
                    type="text"
                    id="full_name"
                    placeholder="Emailingizga kelgan kodni kiriting"
                    className="border-[2px] border-[var(--black-gray)] py-2.5 px-3.5 rounded-[8px] outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="bg-[var(--black-gray)]  py-2.5 rounded-[8px] cursor-pointer text-white border-[2px] duration-300 ease-out border-[var(--black-gray)] hover:bg-[var(--light-gray)] hover:text-[var(--black-gray)]"
              >
                {loading ? "Loading ..." : "Ro'yxatdan o'tish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
