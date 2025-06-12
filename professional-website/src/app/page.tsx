import Hero from "./components/hero"
import Skills from "./components/skills/skills"
import Carousel from "./components/carousel"

export default function Home() {
  return (
    <div className="mx-3 sm:mx-8 lg:mx-[15em]">
      <Hero/>
      <Skills/>
      <Carousel/>
    </div>
  );
}