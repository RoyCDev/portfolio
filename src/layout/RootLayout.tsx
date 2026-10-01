import { Outlet } from "react-router"
import Header from "../components/Header"

function RootLayout() {
  return (
    <div className="pt-24 min-h-screen bg-base text-base-content">
      <div className="max-w-7xl m-auto">
        <Header />
        <Outlet />
        footer
      </div>
    </div>
  )
}

export default RootLayout