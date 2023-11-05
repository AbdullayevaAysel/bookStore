import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import FolderIcon from "@mui/icons-material/Folder"
import SourceIcon from "@mui/icons-material/Source"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import StarIcon from "@mui/icons-material/Star"
import DeleteIcon from "@mui/icons-material/Delete"
import { Drawer } from "../../utilities"
import { Link } from "react-router-dom"

const LeftSection = ({ open }) => {
  const lists = [
    {
      text: "Personal Files",
      icon: <FolderIcon className="!text-[2.4rem] text-[#0000008a]" />,
      title: "View your Personal Files",
    },
    {
      text: "File Libraries",
      icon: <SourceIcon className="!text-[2.4rem] text-[#0000008a]" />,
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
      icon: <PeopleAltIcon className="!text-[2.4rem] text-[#0000008a]" />,
      title: "View files that have been shared",
    },
    {
      text: "Recent Files",
      icon: <AccessTimeIcon className="!text-[2.4rem] text-[#0000008a]" />,
      title: "View files you recently edited",
    },
    {
      text: "Favorites",
      icon: <StarIcon className="!text-[2.4rem] text-[#0000008a]" />,
      title: "View your favorite files and folders",
    },
    {
      text: "Trash",
      icon: <DeleteIcon className="!text-[2.4rem] text-[#0000008a]" />,
      title: "View deleted files in the trash",
    },
  ]

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Divider />
        <List className="py-[0.6rem]">
          {lists?.map((list, i) => (
            <li key={i} className="px-[0.8rem] ">
              <Link className="text-[1.4rem] px-[1.6rem] py-[1.2rem] flex items-center hover:bg-[#00000000] rounded-[0.4rem]">
                <span>{list?.icon}</span>
                <span className="mx-[0.8rem] text-[var(--theme-text-color)]">{list?.text}</span>
              </Link>
            </li>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}

export default LeftSection
