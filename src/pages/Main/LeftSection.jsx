import FolderIcon from "@mui/icons-material/Folder"
import SourceIcon from "@mui/icons-material/Source"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import StarIcon from "@mui/icons-material/Star"
import DeleteIcon from "@mui/icons-material/Delete"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { Drawer } from "../../utilities"
import UploadIcon from "@mui/icons-material/Upload"
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder"
import DescriptionIcon from "@mui/icons-material/Description"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import { Link, NavLink } from "react-router-dom"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Divider,
  Button,
  Menu,
  MenuItem,
} from "@mui/material"
import { useState } from "react"

const LeftSection = ({ open }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const lists = [
    {
      text: "Personal Files",
      icon: (
        <FolderIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />
      ),
      title: "View your Personal Files",
    },
    {
      text: "File Libraries",
      icon: (
        <SourceIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />
      ),
      title: "File Libraries",
      children: [
        {
          text: "Favorite Libraries",
          title: "Access my favorite libraries",
        },
        {
          text: "My Libraries",
          title: "Access my libraries",
        },
      ],
    },
    {
      text: "Shared",
      icon: (
        <PeopleAltIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />
      ),
      title: "View files that have been shared",
    },
    {
      text: "Recent Files",
      icon: (
        <AccessTimeIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />
      ),
      title: "View files you recently edited",
    },
    {
      text: "Favorites",
      icon: <StarIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />,
      title: "View your favorite files and folders",
    },
    {
      text: "Trash",
      icon: (
        <DeleteIcon className="!text-[2.4rem] text-[#0000008a] menu-icon" />
      ),
      title: "View deleted files in the trash",
    },
  ]

  const handleChange = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const show = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Drawer className="!overflow-x-auto" variant="permanent" open={open}>
        <Divider />
        <div className="px-[1.6rem] py-[1.2rem]">
          {open ? (
            <Button
              className="!bg-[#00754a] w-full !text-[1.4rem] !font-[300] h-[3.6rem] leading-[3.8rem] !text-[#fff]"
              id="basic-button"
              aria-controls={show ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={show ? "true" : undefined}
              onClick={handleClick}
            >
              New
              <ArrowDropDownIcon className="!text-[2.4rem]" />
            </Button>
          ) : (
            <AddToPhotosIcon
              onClick={handleClick}
              className="!text-[2.4rem] text-[#00754a]"
            />
          )}

          <Menu
            className="!left-0"
            id="basic-menu"
            anchorEl={anchorEl}
            open={show}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{ sx: { width: "287.2px" } }}
          >
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <UploadIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Upload File
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <UploadIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Upload Folder
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <img
                  src="./images/word.png"
                  className="text-[#0000008a] mr-[1.6rem] w-[2.4rem] h-[2.4rem] object-cover"
                />
                Word Document
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <img
                  src="./images/powerpoint.png"
                  className="text-[#0000008a] mr-[1.6rem] w-[2.4rem] h-[2.4rem] object-cover"
                />
                Powerpoint Presentation
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <img
                  src="./images/excel.png"
                  className="text-[#0000008a] mr-[1.6rem] w-[2.4rem] h-[2.4rem] object-cover"
                />
                Excel Spreadsheet
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <CreateNewFolderIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Create Folder
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <CreateNewFolderIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Create Library
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <DescriptionIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Create file from template
              </MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem
                className="!text-[1.4rem]  h-[4.8rem] flex items-center  rounded-[0.4rem]"
                onClick={handleClose}
              >
                <CreateNewFolderIcon className="!text-[2.4rem] text-[#0000008a] mr-[1.6rem]" />
                Create folder from template
              </MenuItem>
            </NavLink>
          </Menu>
        </div>
        <Divider />
        <List className="py-[0.6rem]">
          {lists?.map((list, i) => (
            <li key={i} className="px-[0.8rem] ">
              {list?.children ? (
                <div className="mb-[0.6rem]">
                  <Accordion
                    onChange={() => handleChange()}
                    className="!shadow-none !w-full text-[1.4rem] px-[1.6rem] py-[1.2rem] !bg-[var(--bg-gray)] !relative"
                  >
                    <AccordionSummary
                      className="!p-0 text-primary"
                      expandIcon={open && <ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className={isAccordionOpen ? "show-accordion" : ""}>
                        <span>{list?.icon}</span>
                        <span
                          className={`mx-[0.8rem] text-[var(--theme-text-color)] ${
                            !open && "hidden"
                          }`}
                        >
                          {list?.text}
                        </span>
                      </div>
                    </AccordionSummary>
                    <div
                      className={`${
                        !open && "absolute !bg-[#fff] !z-[15000000000]"
                      }`}
                    >
                      {list?.children?.map((children, i) => (
                        <NavLink
                          key={i}
                          className={`text-[1.4rem] pl-[2.4rem] pr-[1.6rem] py-[1.2rem] flex items-center hover:bg-[#F0F0F0] rounded-[0.4rem]`}
                        >
                          {/* <AccordionDetails className="!p-0" title={list?.title}>
                        
                        </AccordionDetails> */}
                          <div>
                            <span className="mx-[0.8rem] text-[var(--theme-text-color)]">
                              {children?.text}
                            </span>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </Accordion>
                  <Divider />
                </div>
              ) : (
                <NavLink className="text-[1.4rem]  px-[1.6rem] py-[1.2rem] flex items-center hover:bg-[#F0F0F0] text-primary rounded-[0.4rem]">
                  <span>{list?.icon}</span>
                  <span
                    title={list?.title}
                    className={`mx-[0.8rem] text-[var(--theme-text-color)] ${
                      !open && "hidden"
                    } `}
                  >
                    {list?.text}
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default LeftSection
