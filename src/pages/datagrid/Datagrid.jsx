import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import GavelIcon from "@mui/icons-material/Gavel";
import FolderIcon from '@mui/icons-material/Folder';
import { PiMicrosoftWordLogoFill } from 'react-icons/Pi';


export  const columns = [
 
    { field: "icon", headerName: "Icon", flex: .1, renderCell: (params) => params.value },
    { field: "Name", headerName: "Name", flex: 3 },
    { field: "size", headerName: "Size", flex: .5 },
    {
      field: "modified",
      headerName: "Modified by",
      type: "number",
      flex: .5,
      size: 50,
    },
    {
      field: "security",
      headerName: "Security Marks",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
  
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  export const rows = [
      { id: 1, size: "", Name: "Jon", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 2, size: "", Name: "Cersei", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 3, size: "", Name: "Jaime", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 4, size: "", Name: "Arya", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 5, size: "", Name: "Daenerys", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 6, size: "", Name: 'Cersei', modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 7, size: "", Name: "Ferrara2", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },
      { id: 8, size: "", Name: "Rossini2", modified: '2 days ago', icon: <FolderIcon sx={{color:'#1F74DB', fontSize: 24,m:'10px'}} /> },

      { id: 9, size: "145.9KB", Name: "New Word 1", age: 36, icon: <PiMicrosoftWordLogoFill className="text-[#1F74DB] text-[30px] pl-[5px]" /> },
      { id: 10, size: "178KB", Name: "New Word 2", age: 36, icon: <PiMicrosoftWordLogoFill className="text-[#1F74DB] text-[30px] pl-[5px]" /> },
    ];
  
    export const data = [
    { icon: FileDownloadIcon, text: "Download" },
    { icon: EditIcon, text: "Edit" },
    { icon: StarBorderIcon, text: "Favorite" },
    { icon: DriveFileMoveIcon, text: "Move" },
    { icon: ContentCopyIcon, text: "Copy" },
    { icon: DeleteIcon, text: "Delete" },
    { icon: MenuIcon, text: "Edit Aspects" },
    { icon: GroupIcon, text: "Permissions" },
    { icon: KeyIcon, text: "Security Marks" },
    { icon: GavelIcon, text: "Manage rules" },
  ]