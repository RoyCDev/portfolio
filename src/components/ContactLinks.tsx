import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

interface ContactLinksProps {
  location: "header" | "footer"
}

function ContactLinks({ location }: ContactLinksProps) {
  return (
    <div className={`flex justify-end ${location === "header" ?
      "text-accent text-[42px] gap-x-4 mt-4 lg:text-5xl lg:gap-x-5 lg:mt-5" :
      "text-white gap-x-4 text-4xl"
      }`}>
      <a target="_blank" href="https://www.linkedin.com/in/roy-cheung-web-dev">
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