import { data } from "@/components/categories";
import Category from "@/components/category";

const page = () => {
  return (
    <div className="flex flex-col items-center md:grid  md:grid-cols-3 p-10">
      {data.map((each) => (
        <Category key={each.id} {...each} />
      ))}
    </div>
  );
};

export default page;
