import React from "react";
import Image from "next/image";
import image7 from "@/public/image7.png";
import Link from "next/link";

const Crafted = () => {
  return (
    <div className="bg-[#002D69] text-white flex md:flex-row flex-col">
      <div className="w-full flex justify-center items-center">
        <div className="md:w-3/4 md:h-2/4 flex flex-col gap-10 p-10">
          <p className="text-5xl font-black uppercase  text-white text-[54px]  font-['Lato']  tracking-tight">
            Hand Crafted fine pieces.
          </p>

          <p className="md:text-2xl text-white text-[28px] font-bold font-['Lato'] tracking-tight">
            We also firmly believed that our customers deserved more choices,
            straightforward information and legendary service.
          </p>

          <Link
            className="bg-white  px-4 py-2 w-fit  text-center text-sky-900 text-base font-bold font-['Lato'] uppercase tracking-tight hover:text-indigo-500 active:text-indigo-700"
            href={"/products"}
          >
            View Products
          </Link>
        </div>
      </div>

      <div className=" w-full">
        <Image src={image7} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Crafted;
