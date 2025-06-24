import { Outlet } from "react-router"

function RootLayout() {
   return (
      <div>
         Navbar
         <Outlet />
      </div>
   )
}

export default RootLayout