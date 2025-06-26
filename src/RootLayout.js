import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

function RootLayout() {
   return (
      <div className="max-w-[1280px] px-6 mx-auto mt-5">
         <Navbar />
         <Outlet />
      </div>
   )
}

export default RootLayout