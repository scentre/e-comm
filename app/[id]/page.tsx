import React from "react";
import { data, secondData } from "@/components/categories";

import Image from "next/image";

let mainData = [...data, ...secondData];
const page = ({ params }: { params: { id: number } }) => {
  const eachData = mainData.find((each) => each.id == params.id);

  return (
    <div className="p-14 md:p-14 flex flex-col gap-4">
      <Image src={eachData?.img} alt="each image" />
      <p>{eachData?.text}</p>
    </div>
  );
};

export default page;
