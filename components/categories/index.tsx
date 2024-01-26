import React from "react";
import Category from "../category";

import item1 from "@/public/item1.png";
import item2 from "@/public/item2.png";
import item3 from "@/public/item3.png";
import item9 from "@/public/item9.png";
import item10 from "@/public/item10.png";
import item11 from "@/public/item11.png";
import item4 from "@/public/item4.png";
import item5 from "@/public/item5.svg";
export const data = [
  {
    img: item1,
    text: "lorem1",
    id: 1,
  },
  {
    img: item2,
    text: "lorem1",
    id: 2,
  },
  {
    img: item3,
    text: "lorem1",
    id: 3,
  },
  {
    img: item4,
    text: "lorem1",
    id: 4,
  },
  {
    img: item5,
    text: "lorem1",
    id: 5,
  },
];

export const secondData = [
  {
    img: item9,
    text: "lorem1",
    id: 9,
  },
  {
    img: item10,
    text: "lorem1",
    id: 10,
  },
  {
    img: item11,
    text: "lorem1",
    id: 11,
  },
];

const Categories = () => {
  return (
    <div className="p-12">
      <p className="text-sky-900 text-4xl font-black font-['Lato'] uppercase tracking-tight mb-10">
        Shop by Jewelry Type
      </p>

      <div className="flex flex-col items-center md:flex-row md:justify-between">
        {data.map((each) => (
          <Category key={each.id} {...each} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
