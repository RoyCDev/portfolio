import Brand from "./Brand"
import ContactLinks from "./ContactLinks"

function Footer() {
  return (
    <footer className="footer justify-items-center sm:footer-horizontal sm:justify-between items-end max-w-screen-xl px-6 mx-auto">
      <aside>
        <div className="flex gap-2">
          <Brand location="footer" />
          <p className="text-2xl mt-6">Ver 3.0</p>
        </div>
        <p>© 2025 Roy Cheung. All rights reserved.</p>
      </aside>
      <ContactLinks location="footer" />
    </footer>
  )
}

export default Footer