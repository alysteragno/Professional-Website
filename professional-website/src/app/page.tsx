import Hero from "./components/hero"
import Skills from "./components/skills/skills"
import Carousel from "./components/carousel"
import Education from "./components/education"

export default function Home() {
  return (
    <div className="mx-3">
      <Hero/>
      <Skills/>
      <Carousel/>
      <Education/>
    </div>
  );
}