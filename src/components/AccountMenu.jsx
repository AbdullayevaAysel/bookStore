import Avatar from "@mui/material/Avatar"
import Menu from "@mui/material/Menu"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"
import { Link } from "react-router-dom"

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title="React Developer">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            className="!bg-[var(--adf-user-info-color)] !text-[#000] !text-[1.8rem] font-[400]"
          >
            RD
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        className="account-menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="h-[10rem] flex items-center account-bg !w-[450px] px-[1.6rem]">
          <Avatar
            sx={{ width: 80, height: 80 }}
            className="!bg-[var(--adf-user-info-color)] !text-[#000] !text-[3.5rem] font-[400]"
          >
            RD
          </Avatar>
          <p className="text-[2rem] pl-[1rem]">React Developer</p>
        </div>
        <div className="flex items-center justify-between font-[400] text-[1.4rem] p-[3.2rem]">
          <div>
            <p>React Developer</p>
            <p>react_developer@ingress.az</p>
            <Link className=" underline">My Profile</Link>
            
          </div>
          <div>
            <p>Job Title</p>
            <p>N/A</p>
          </div>
        </div>
      </Menu>
    </>
  )
}

export default AccountMenu
