import { Outlet } from "react-router"
import Header from "../components/Header"

function RootLayout() {
  return (
    <div className="pt-12 min-h-screen bg-base text-base-content">
      <div className="max-w-287.5 m-auto">
        <Header className="mb-9" />
        <Outlet />
        footer
      </div>
    </div>
  )
}

export default RootLayout