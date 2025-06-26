import profile from "../profile.png"
import { FaLocationDot, FaPhoneFlip, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiDaisyui } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function HomePage() {
   const tech = [
      { name: "HTML", icon: <SiHtml5 size={18} /> },
      { name: "CSS", icon: <SiCss3 size={18} /> },
      { name: "Javascript", icon: <SiJavascript size={18} /> },
      { name: "React", icon: <SiReact size={18} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={18} /> }, ,
      { name: "DaisyUI", icon: <SiDaisyui size={18} /> },
   ]

   return (
      <div className="flex">
         <div className="w-[292px] p-6">
            <img src={profile} alt="profile image" className="w-[160px] h-[160px] rounded-full mx-auto" />

            <p className="text-xl font-semibold mt-5">Roy Cheung</p>
            <p className="text-neutral-500">@ Frontend Developer</p>

            <p className="text-sm flex items-center gap-2 mt-3"><FaLocationDot />Hayward, CA</p>
            <p className="text-sm flex items-center gap-2 mt-1"><FaPhoneFlip />(510) 610-7965</p>

            <hr className="my-4" />
            <p className="text-sm font-semibold mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
               {tech.map(item =>
                  <div className="bg-neutral-100 rounded p-2 group relative">
                     {item.icon}
                     <div className="text-sm text-white bg-black -mt-12 rounded px-2 py-0.5 shadow-lg invisible group-hover:visible absolute left-1/2 -translate-x-1/2 z-[1]">{item.name}</div>
                  </div>)}
            </div>
            {/* <div className="flex items-center justify-center gap-3 py-2 bg-neutral-100 rounded-b-xl">
               <a href="https://github.com/RoyCDev" target="_blank" className="hover:opacity-70">
                  <FaGithub size={25} />
               </a>
               <a href="https://www.linkedin.com/in/roy-cheung-web-dev/" target="_blank" className="hover:opacity-70">
                  <FaLinkedin size={25} />
               </a>
               <a href="mailto:rcheung0117@gmail.com" className="hover:opacity-70">
                  <MdEmail size={30} />
               </a>
            </div> */}
         </div>

         <div className="flex-1 p-6">
            <h1 className="text-xl font-semibold">About Me</h1>
            <p className="">Recently graduated from San Jose State University. I'm an aspiring frontend developer interested in making websites with simple/ intuitive design.</p>
            <p className="mt-3">My first exposure to programming dates back to high school, where I learned about making Scratch games and websites. What I enjoyed is the immediate visual feedback. It's exciting to witness how my projects evolve and come to life as the progress unfold step by step.</p>
            <p className="mt-3">I have high standards for my work quality, and I always strive to improve. Currently, I'm looking for an opportunity to bring my skills to a professional setting. I'm comfortable working on Frontend web development with React.js.</p>
         </div>
      </div>
   )
}

export default HomePage