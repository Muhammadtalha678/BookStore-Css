
import Carousel from "@/components/Home/Carousel/Carousel";
import About from "@/components/Home/About/About";
import BestSelling from "@/components/Home/BestSelling/BestSelling";
import Products from "@/components/Home/Product/products";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <About/>
      <BestSelling/>
      <Products/>
    </main>
  );
}
