import { Outlet } from "react-router"
import Header from "../components/Header"

function RootLayout() {
  return (
    <div className="py-12 min-h-screen bg-base-100 text-base-content">
      <div className="px-4 md:px-10 max-w-300 box-content m-auto">
        <Header className="mb-4 lg:mb-9" />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout