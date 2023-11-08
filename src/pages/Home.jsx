import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import LeftSection from "./Main/LeftSection"
import RightSection from "./Main/RightSection"
import { useState } from "react"
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import NotificationsIcon from "@mui/icons-material/Notifications"
import AccountMenu from "../components/AccountMenu"

const Home = () => {
  const [open, setOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const show = Boolean(anchorEl)
  const handleShow = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  // const [showClearIcon, setShowClearIcon] = useState("none")

  const handleChange = (event) => {
    // setShowClearIcon(event.target.value === "" ? "none" : "flex")
  }

  const handleClick = () => {
    console.log("clicked the clear icon...")
  }

  return (
    <>
      <div className="app-header w-full !z-20 flex justify-between items-center px-[2.4rem] h-[6.4rem] bg-[url('/images/mastHead-bg-shapesPattern.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center">
          <MenuIcon
            onClick={handleDrawerOpen}
            className="!text-[2.9rem] me-[0.5rem] cursor-pointer"
          />
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
        <div className="flex items-center">
          <FormControl>
            <TextField
              className="w-[594px] bg-white !text-[1.6rem]"
              size="normal"
              placeholder="Search"
              variant="outlined"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="!text-[2.4rem]" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" onClick={handleClick}>
                    <ClearIcon className="!text-[1.8rem]" />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Divider
            className="!mx-[1rem] !border-[#000]"
            orientation="vertical"
            variant="middle"
            flexItem
          />

          <Button
            className="!rounded-full hover:!bg-[#F0F0F0] !w-[4rem] !h-[4rem] !p-0 !min-w-[4rem]"
            id="basic-button"
            aria-controls={show ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={show ? "true" : undefined}
            onClick={handleShow}
          >
            <NotificationsIcon className="!text-[2.4rem] text-[#000]" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={show}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className="!text-[1.4rem]" onClick={handleClose}>Notifications</MenuItem>
            <Divider />
            <MenuItem className="!text-[1.4rem]" onClick={handleClose}>
              You have no notifications at this time.
            </MenuItem>
          </Menu>

          <p className="pl-[0.5rem] pr-[0.8rem] text-[2rem] font-[500]">
            React Developer
            
          </p>
          <AccountMenu />
        </div>
      </div>

      <div className="flex bg-[#fafafa] w-full h-main">
        <LeftSection open={open} />
        <RightSection />
      </div>
    </>
  )
}

export default Home
