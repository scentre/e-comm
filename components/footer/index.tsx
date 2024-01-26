import Image from "next/image";
import item6 from "@/public/item6.png";

const Footer = () => {
  return (
    <footer>
      <div className="block md:flex justify-center p-6">
        <div>
          <Image src={item6} alt="footer" />
        </div>
        <div className="bg-[#FFFFFF] flex flex-col justify-center   p-10 gap-4 mt-3 md:mt-0">
          <p className=" text-center text-sky-900 text-[35px] font-bold font-['Lato'] uppercase tracking-tight">
            Stay in touch?
          </p>
          <p className="text-center text-neutral-700 text-base font-normal font-['Open Sans'] tracking-tight">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>

          <button className=" bg-sky-900 rounded   text-center text-white text-base font-bold font-['Lato'] uppercase tracking-tight p-3">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex gap-10 md:p-20 p-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold  text-neutral-700 text-[21px]  tracking-tight">
            {" "}
            Product{" "}
          </span>
          <div className="flex flex-col gap-2">
            <p> Privacy Policy </p> <p>Terms of Service </p> <p> FAQ </p>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className=" font-bold  text-neutral-700 text-[21px]  tracking-tight ">
            {" "}
            Resources
          </span>
          <div className="flex flex-col gap-2">
            {" "}
            <p>Documentation</p> <p> Case Studies </p>{" "}
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <span className="font-bold  text-neutral-700 text-[21px]  tracking-tight">
            Company
          </span>
          <div className="flex flex-col gap-2">
            {" "}
            <p> About Us </p> <p> Contact Us</p>{" "}
          </div>
        </div>
      </div>

      <div>
        <p className="text-zinc-600 text-base font-bold">
          © Teechy Stores™ 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
