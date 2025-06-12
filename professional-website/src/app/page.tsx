import Hero from "./components/hero"
import Skills from "./components/skills/skills"
import Carousel from "./components/carousel"
import Education from "./components/education/education"
import Contact from "./components/contactme/contact"

export default function Home() {
  return (
    <div className="mx-3 sm:mx-8 lg:mx-[15em] space-y-25 flex flex-col">
      <Hero/>
      <Skills/>
      <Carousel/>
      <div className="my-[7em]">
       <Education/>
      </div>
      <div className="my-[9em]">
        <Contact/>
      </div>
    </div>
  );
}