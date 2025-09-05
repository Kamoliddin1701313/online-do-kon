"use client";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <MoonLoader color="red" size={50} speedMultiplier={0.5} />
    </div>
  );
}
