import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Category = ({
  text,
  img,
  id,
}: {
  text: string;
  img: StaticImageData;
  id: number;
}) => {
  return (
    <div className="cursor-pointer">
      <Link href={`/${id}`}>
        <Image src={img} alt="image-1" />
        <p className="text-center md:text-left text-sky-900 text-lg font-medium font-['Lato'] uppercase tracking-tight">
          {text}
        </p>
      </Link>
    </div>
  );
};

export default Category;
