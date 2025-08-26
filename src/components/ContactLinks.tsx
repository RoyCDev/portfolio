import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

interface ContactLinksProps {
  location: "header" | "footer"
}

function ContactLinks({ location }: ContactLinksProps) {
  return (
    <div className={`flex justify-end ${location === "header" ?
      "text-accent mt-5 gap-x-5 " :
      "text-white gap-x-4"
      }`}>
      <a target="_blank" href="https://www.linkedin.com/in/roy-cheung-web-dev">
        <PiLinkedinLogoFill size={location === "header" ? 50 : 35} />
      </a>
      <a href="mailto:rcheung0117@gmail.com">
        <MdEmail size={location === "header" ? 52 : 37} />
      </a>
      <a target="_blank" href="https://github.com/RoyCDev">
        <TbBrandGithubFilled size={location === "header" ? 50 : 35} />
      </a>
    </div>
  )
}

export default ContactLinks