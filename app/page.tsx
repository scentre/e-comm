import Image from "next/image";
import hero from "@/public/hero.png";
import Categories from "@/components/categories";
import Crafted from "@/components/craftedsection";
import Container from "@/components/container";
import Jewelry from "@/components/jewelry";

export default function Home() {
  return (
    <>
      <Container>
        <div>
          <Image src={hero} alt="hero" />
        </div>

        <div className="mt-10">
          <Categories />
        </div>
      </Container>

      <div className="mt-10">
        <Crafted />
      </div>
      <div className="mt-10">
        <Jewelry />
      </div>
    </>
  );
}
