import profile from "../assets/profile.png"
import { FaLocationDot, FaPhoneFlip, FaGithub, FaLinkedin } from "react-icons/fa6";
import techIcons from "../util/techIcons";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";

function HomePage() {
   const tech = ["HTML", "CSS", "Javascript", "React", "TailwindCSS", "DaisyUI"]

   return (
      <div className="flex flex-col md:flex-row max-w-[1080px] mx-auto">
         <div className="md:w-[292px] p-6">
            <img src={profile} alt="profile image" className="w-[160px] h-[160px] rounded-full mx-auto" />

            <p className="text-xl font-semibold mt-5">Roy Cheung</p>
            <p className="text-neutral-500">@ Frontend Developer</p>

            <p className="text-sm flex items-center gap-2 mt-3"><FaLocationDot />Hayward, CA</p>
            <p className="text-sm flex items-center gap-2 mt-1"><FaPhoneFlip />(510) 610-7965</p>

            <hr className="my-4" />
            <p className="text-sm font-semibold mb-2">Tech Stack</p>
            <ul className="flex flex-wrap gap-2">
               {tech.map((name, index) =>
                  <li key={index} className="bg-neutral-100 rounded p-2 group relative">
                     {techIcons[name]}
                     <div className="text-sm text-white bg-black -mt-12 rounded px-2 py-0.5 shadow-lg invisible group-hover:visible absolute left-1/2 -translate-x-1/2 z-[1]">{name}</div>
                  </li>)}
            </ul>
            <hr className="my-4" />
            <p className="text-sm font-semibold mb-2">Contact Me</p>
            <div className="flex items-center justify-center gap-3 py-2 bg-neutral-100 rounded">
               <a href="https://github.com/RoyCDev" target="_blank" className="hover:opacity-70">
                  <FaGithub size={25} />
               </a>
               <a href="https://www.linkedin.com/in/roy-cheung-web-dev/" target="_blank" className="hover:opacity-70">
                  <FaLinkedin size={25} />
               </a>
               <a href="mailto:rcheung0117@gmail.com" className="hover:opacity-70">
                  <MdEmail size={30} />
               </a>
            </div>
         </div>

         <div className="flex-1 p-6 -mt-3 md:mt-0">
            <h1 className="text-xl font-semibold">About Me</h1>
            <ul className="list-disc ml-8 mt-2 space-y-1">
               <li>Recently graduated from San Jose State University</li>
               <li>An aspiring frontend developer interested in making websites with simple/ intuitive design</li>
            </ul>
            <h2 className="mt-5 text-lg font-semibold">More about me </h2>
            <ul className="list-disc ml-8 mt-2 space-y-1">
               <li>My first exposure to programming dates back to high school, where I learned about making <a href="https://scratch.mit.edu/users/CheungRcompsci" target="_blank" className="underline">Scratch games</a> and websites. What I enjoyed is the immediate visual feedback. It's exciting to witness how my projects evolve and come to life as the progress unfold step by step</li>
               <li>I have high standards for my work quality, and I always strive to improve. Currently, I'm looking for an opportunity to bring my skills to a professional setting. I'm comfortable working on Frontend web development with React.js</li>
            </ul>
         </div>
      </div>
   )
}

export default HomePage