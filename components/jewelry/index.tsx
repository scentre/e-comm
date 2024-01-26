import React from "react";
import Container from "../container";
import Image from "next/image";
import item9 from "@/public/item9.png";
import item10 from "@/public/item10.png";
import item11 from "@/public/item11.png";
import Link from "next/link";

const imgs = [
  { img: item9, id: 9 },
  { img: item10, id: 10 },
  { img: item11, id: 11 },
];

const Jewelry = () => {
  return (
    <Container>
      <p className="text-sky-900 text-4xl font-black font-['Lato'] uppercase tracking-tight mb-10">
        OUR LATEST JEWELRY
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {imgs.map((each) => (
          <Link href={`/${each.id}`} key={each.id}>
            <Image src={each.img} alt="" key={each.id} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#002D69] text-white px-4 py-2">
          view gallery
        </button>
      </div>
    </Container>
  );
};

export default Jewelry;
