import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

function ContactLinks() {
  return (
    <div className="flex justify-end text-5xl gap-x-5 text-accent">
      <a target="_blank" href="https://www.linkedin.com/in/roycheungsw">
        <PiLinkedinLogoFill />
      </a>
      <a href="mailto:rcheung0117@gmail.com">
        <MdEmail />
      </a>
      <a target="_blank" href="https://github.com/RoyCDev">
        <TbBrandGithubFilled />
      </a>
    </div>
  )
}

export default ContactLinks