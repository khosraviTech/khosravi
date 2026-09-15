import { CodeXml } from "lucide-react";
import Image from "next/image";

type skill = {
  name: string;
  logoSrc: string;
  level: number;
};
const frontEndSkills: skill[] = [
  { name: "HTML", logoSrc: "/skillLogo/html-icon.svg", level: 1 },
  { name: "CSS", logoSrc: "/skillLogo/css-icon.svg", level: 1 },
  { name: "JavaScript", logoSrc: "/skillLogo/javascript-icon.svg", level: 1 },
  { name: "TypeScript", logoSrc: "/skillLogo/typescript-icon.svg", level: 1 },
  { name: "React", logoSrc: "/skillLogo/react-icon.svg", level: 1 },
  { name: "Next.js", logoSrc: "/skillLogo/nextjs-icon.svg", level: 1 },
  {
    name: "Tailwind CSS",
    logoSrc: "/skillLogo/tailwind-css-icon.svg",
    level: 1,
  },
  {
    name: "Redux ToolKit",
    logoSrc: "/toolLogo/redux-icon.svg",
    level: 1,
  },
   

];
const backEndSkills: skill[] = [
  { name: "python", logoSrc: "/skillLogo/python-programming-language-icon.svg", level: 1 },
  { name: "fastAPI", logoSrc: "/skillLogo/fastapi-icon.svg", level: 1 },
  { name: "postgreSQL", logoSrc: "/skillLogo/postgresql-icon.svg", level: 1 },
  { name: "pydantic", logoSrc: "/skillLogo/Pydantic--Streamline-Simple-Icons.svg", level: 1 },
  { name: "SQLAlchemy",logoSrc:"/skillLogo/Sqlalchemy--Streamline-Simple-Icons.svg",level:1}
];

type tool = {
  name: string;
  logoSrc: string;
};
const tools: tool[] = [
  { name: "Git", logoSrc: "/toolLogo/git-icon.svg" },
  { name: "GitHub", logoSrc: "/toolLogo/github-icon.svg" },
  { name: "VS Code", logoSrc: "/toolLogo/vsCode-icon.svg" },
  { name: "Ubuntu", logoSrc: "/toolLogo/ubuntu-color-icon.svg" },
 
];


export default function MySkills() {

  return (
    <div className="h-full grid grid-cols-12 gap-6 p-6 shadow-xl border-2 border-[#B7B0A8]  rounded-2xl bg-bg-card">
      {/*  My Skills Title */}
      <div className="col-span-12 inline-flex items-center gap-5 text-3xl">
        <CodeXml className="scale-150 text-accent-green shrink-0" />
        <h1 className="text-primary whitespace-nowrap">My Skills</h1>
      </div>

      {/* Front-end title */}
      <h2 className="col-span-6 text-3xl text-accent-green ">Front-end</h2>
      {/* Back-end title */}
      <h2 className="col-span-6 text-3xl text-accent-green">Back-end</h2>
       {/* Front-end skills list  */}
      <div className="col-span-5 flex flex-wrap items-center gap-6 mt-3">
        {frontEndSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
          >
            <Image
              src={skill.logoSrc}
              width={60}
              height={60}
              alt="skill image"
              className="p-2"
              
            />

            <h3 className="text-xl text-secondary font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Divider line */}
      <div className=" col-span-1 flex justify-center mt-8">
        <div className="w-px h-full bg-gray-500"></div>
      </div>

       {/* Back-end skills list  */}
      <div className="col-span-5 flex flex-wrap items-center gap-6 mt-3">
        {backEndSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
          >
            <Image
              src={skill.logoSrc}
              width={60}
              height={60}
              alt="skill image"
              className="p-2"
              
            />

            <h3 className="text-xl text-secondary font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
{/* Divider line */}
      <div className=" col-span-12 flex justify-center mt-8">
        <div className="w-full h-px bg-gray-500"></div>
      </div>
       {/* Tools title */}
      <h2 className="col-span-12 text-3xl text-accent-green">Tools</h2>

      {/* Tools list */}
      <div className="col-span-12 flex flex-wrap items-center gap-12 mt-3 ">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
            <Image
              src={tool.logoSrc}
              width={50}
              height={50}
              alt="an image"
              className="p-2"
            />

            <h3 className="text-xl text-secondary font-medium">{tool.name}</h3>
          </div>
        ))}
      </div>

      
      

      {/* Other things... like personal values */}
    </div>
  );
}
