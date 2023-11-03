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
      icon: <FolderIcon />,
      title: "View your Personal Files",
    },
    {
      text: "File Libraries",
      icon: <SourceIcon />,
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
      icon: <PeopleAltIcon />,
      title: "View files that have been shared",
    },
    {
      text: "Recent Files",
      icon: <AccessTimeIcon />,
      title: "View files you recently edited",
    },
    {
      text: "Favorites",
      icon: <StarIcon />,
      title: "View your favorite files and folders",
    },
    {
      text: "Trash",
      icon: <DeleteIcon />,
      title: "View deleted files in the trash",
    },
  ]

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Divider />
        <List>
          
          {lists?.map((list, i) => (
            <li key={i}>
              <Link>{list?.text}</Link>
            </li>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}

export default LeftSection
