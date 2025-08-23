import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function RootLayout() {
  return (
    <div className="max-w-screen-xl px-6 mx-auto mt-24 select-none">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout