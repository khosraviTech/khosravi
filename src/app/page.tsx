
import Title from "./components/Title";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import CurrentFocus from "./components/CurrentFocus";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <>
      <div className="grid  lg:grid-cols-12  lg:gap-4 gap-5 p-3 ">
        <div className=" col-span-1    lg:col-span-8">
          <Title />
        </div>

        <div className=" col-span-1   lg:col-span-4">
          <Education />
        </div>

        <div className=" col-span-1   lg:col-span-4">
          <AboutMe />
        </div>

        <div className=" col-span-1   lg:col-span-8 ">
          <CurrentFocus />
        </div>

        <div className=" col-span-1  lg:col-span-12">
          <MySkills />
        </div>

        <div className="col-span-1  lg:col-span-12">
          <Projects />
        </div>

        <div className=" col-span-1  lg:col-span-12 ">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
