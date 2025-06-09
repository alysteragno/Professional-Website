import Hero from "./components/hero"
import Skills from "./components/skills/skills"
import Carousel from "./components/carousel"

export default function Home() {
  return (
    <div className="mx-3">
      <Hero/>
      <Skills/>
      <Carousel/>
    </div>
  );
}