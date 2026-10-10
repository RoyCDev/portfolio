import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

function ContactLinks() {
  return (
    <div className="flex justify-end text-3xl lg:text-5xl gap-x-2 lg:gap-x-5 text-accent">
      <a target="_blank" href="https://www.linkedin.com/in/roycheungsw">
        <PiLinkedinLogoFill className="hover:opacity-75" />
      </a>
      <a href="mailto:rcheung0117@gmail.com">
        <MdEmail className="hover:opacity-75" />
      </a>
      <a target="_blank" href="https://github.com/RoyCDev">
        <TbBrandGithubFilled className="hover:opacity-75" />
      </a>
    </div>
  )
}

export default ContactLinks