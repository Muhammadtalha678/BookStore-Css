
import Carousel from "@/components/Home/Carousel/Carousel";
import About from "@/components/Home/About/About";
import BestSelling from "@/components/Home/BestSelling/BestSelling";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <About/>
      <BestSelling/>
    </main>
  );
}
