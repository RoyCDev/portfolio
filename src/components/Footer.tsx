import Brand from "./Brand"
import clsx from "clsx"

interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  const currnetYear = new Date().getFullYear()

  return (
    <footer className={clsx(className, "border-t pt-4")}>
      <Brand className="scale-72 origin-left" />
      <p>&copy; {currnetYear} Roy Cheung. All rights reserved.</p>
    </footer>
  )
}

export default Footer