import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function TemporaryAlert() {
  return (
    <div role="alert" className="alert alert-info alert-soft mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>Still developing the page at the moment (should be done by mid September). In the meantime, please visit <a target="_blank" href="https://www.figma.com/proto/Gfth2nXnys3pCQclJAIUnA/Roy-s-Portfolio" className="underline">https://www.figma.com/proto/Gfth2nXnys3pCQclJAIUnA/Roy-s-Portfolio</a> for a preview of what the final site would look like.</span>
    </div>
  )
}

function RootLayout() {
  return (
    <>
      <div className="max-w-screen-xl px-6 mx-auto my-24 select-none">
        <TemporaryAlert />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout