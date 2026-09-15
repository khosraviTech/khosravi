import { project } from "@/types/project";
import { FolderClosed, MonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects: project[] = [
  {
    title: "NEXTKALA",
    description:
      "A modern platform built with Next.js offering a fast and responsive shopping experience.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "NextAuth",
    ],
    address: "https://nextkala.vercel.app/",
    image: "/projectImages/NEXTKALA2.JPG",
    gitHubAddress: "https://github.com/khosraviTech/nextkala",
    demo: true
  },
  {
    title: "NextKALA API",
    description:
      "An e-commerce backend built with FastAPI, PostgreSQL, SQLAlchemy, Pydantic, and Alembic, following a clean Repository-Service-Router architecture.",
    tags: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "Scalar"
    ],
    address: "",
    image: "/projectImages/image2.png",
    gitHubAddress: "https://github.com/khosraviTech/nextkalaAPI",
    demo: false,
  }
  ,
  {
    title: "React TodoList",
    description:
      "a todo application created by using react.js & redux-toolkit.",
    tags: [
      "HTML",
      "CSS",
      "React",
      "javaScript",
      "Vite"
    ],
    address: "https://khosravi-todo.vercel.app/",
    image: "/projectImages/TodoList.png",
    gitHubAddress: "https://github.com/khosraviTech/react-todo-app",
    demo: true,
  }

];

export default function Projects() {
  return (
    <>
      <div className="border-2 border-[#B7B0A8]  shadow-xl rounded-3xl p-4 grid grid-cols-12 gap-6 bg-bg-card">



        <div className="col-span-12 inline-flex items-center gap-4 ml-2">
          <FolderClosed className="text-accent-green scale-150" />
          <h1 className="text-primary text-3xl"> Featured Projects</h1>
        </div>

        <div className=" col-span-12 flex items-start gap-4 p-0 m-0">
          {projects.map((project) => (
            <div
              key={project.title}
              className=" grid grid-cols-12 text-primary bg-bg-card  rounded-3xl p-3 gap-2"
            >
              {/* project image */}
              <Image
                src={project.image}
                width={100}
                height={100}
                alt="Picture of the project"
                className="w-100 h-50 col-span-12 rounded-2xl  pl-5 m-0"
              />
              {/* project title */}
              <h1 className="w-100 col-span-12 p-2 text-2xl font-semibold">
                {project.title}
              </h1>
              {/* project description */}
              <h2 className="w-100 col-span-12 p-2 font-medium">{project.description}</h2>

              {/* project tags */}
              <div className=" w-100 col-span-12 p-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border border-[#48acf0] bg-[#48acf0] rounded-2xl p-2 text-sm font-bold "
                  >
                    {tag}
                  </div>
                ))}
              </div>


              {project.demo === true && (
                <>
                <Link
                  href={project.address}
                  className="hover:bg-[#57cc99] border-2 hover:border-[#57cc99] col-span-6 rounded-xl inline-flex items-center gap-2 justify-between p-4 m-2 font-medium"
                >
                  Live Demo <MonitorPlay className="scale-120" />
                </Link>
                <Link
                href={project.gitHubAddress}
                className="hover:bg-[#57cc99] border-2 hover:border-[#57cc99] col-span-6 rounded-xl inline-flex items-center gap-2 justify-between p-4 m-2 font-medium"
              >
                GitHub
                <Image
                  src="/toolLogo/github-icon.svg"
                  width={30}
                  height={30}
                  alt="Picture of the project"
                />
              </Link>
              </>
              )}

              {project.demo === false && (
                
               
                <Link
                href={project.gitHubAddress}
                className="hover:bg-[#57cc99] border-2 hover:border-[#57cc99] col-span-12 rounded-xl inline-flex items-center gap-2 justify-between p-4 m-2 font-medium"
              >
                GitHub
                <Image
                  src="/toolLogo/github-icon.svg"
                  width={30}
                  height={30}
                  alt="Picture of the project"
                />
              </Link>
              
              )}
              





              {/* project github link */}
              
            </div>

          ))}
        </div>
      </div>
    </>
  );
}
