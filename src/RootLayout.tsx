import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function RootLayout() {
  return (
    <>
      <div className="max-w-screen-xl px-6 mx-auto mt-24">
        <Header />
        <Outlet />
      </div>
      <div className="bg-neutral pt-10 pb-8 mt-18">
        <Footer />
      </div>
    </>
  )
}

export default RootLayout