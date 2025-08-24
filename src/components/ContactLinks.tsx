import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

interface ContactLinksProps {
  className?: string,
}

function ContactLinks({ className }: ContactLinksProps) {
  return (
    <div className={className}>
      <a target="_blank" href="https://www.linkedin.com/in/roy-cheung-web-dev">
        <PiLinkedinLogoFill size={50} />
      </a>
      <a href="mailto:rcheung0117@gmail.com">
        <MdEmail size={52} />
      </a>
      <a target="_blank" href="https://github.com/RoyCDev">
        <TbBrandGithubFilled size={50} />
      </a>
    </div>
  )
}

export default ContactLinks