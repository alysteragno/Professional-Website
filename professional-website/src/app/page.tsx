import Hero from "./components/hero"
import Skills from "./components/skills/skills"
import Carousel from "./components/carousel"
import Education from "./components/education/education"

export default function Home() {
  return (
    <div className="mx-3 sm:mx-8 lg:mx-[15em] space-y-25">
      <Hero/>
      <Skills/>
      <Carousel/>
      <div className="my-[7em]">
       <Education/>
      </div>
    </div>
  );
}