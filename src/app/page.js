import HeroSection from "@/app/homesections/HeroSection";
import Works from "@/app/homesections/Works";
import Booking from "./homesections/Booking";
import Testimonials from "./homesections/Testimonials";
import Articles from "./homesections/Articles";
import Lunar from "./homesections/Lunar";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Works />

      <Booking />

      <Testimonials/>

      <Articles/>

      <Lunar/>

    </div>
  );
}
