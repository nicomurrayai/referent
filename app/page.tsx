import Benefits from "@/components/home/Benefits";
import Cta from "@/components/home/Cta";
import { Footer7 } from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Services />
      <Testimonials />
      {/* <Benefits /> */}
      <Cta />
      <Footer7 />
    </>

  );
}
