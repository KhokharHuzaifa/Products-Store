import { Outlet } from "react-router-dom"
import HeaderNav from "./HeaderNav"
import Footer from "./Footer"

function Layout() {
  return (
    <div>
      <HeaderNav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
