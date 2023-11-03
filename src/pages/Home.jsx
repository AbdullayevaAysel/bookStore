import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import LeftSection from "./Main/LeftSection"
import RightSection from "./Main/RightSection"
import { useState } from "react"

const Home = () => {
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="w-full flex items-center px-[2.4rem] h-[6.4rem] bg-[url('/images/mastHead-bg-shapesPattern.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center">
          <MenuIcon onClick={() => handleDrawerOpen()} className="!text-[2.9rem] me-[0.5rem] cursor-pointer" />
          <Link to="/">
            <img
              className="h-[2.8rem] ml-[0.6rem]"
              src="./images/alfresco-logo-flower.svg"
              alt=""
            />
          </Link>
          <div className="text-[2rem] font-[100] ml-[0.6rem] cursor-pointer tracking-[-.3px]">
            Alfresco Digital Workspace
          </div>
        </div>
        <div className="flex items-center"></div>
      </div>

      <div className="flex bg-[#fafafa] w-full h-main">
        <LeftSection />
        <RightSection />
      </div>
    </>
  )
}

export default Home
