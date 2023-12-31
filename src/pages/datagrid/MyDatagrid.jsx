import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconItem from "../../components/İconİtem";
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
import FolderIcon from "@mui/icons-material/Folder";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PanoramaIcon from "@mui/icons-material/Panorama";

const MyDatagrid = () => {
  const [customContextMenu, setCustomContextMenu] = useState(false);


  const history = useNavigate();
  const columns = [
    {
      field: "icon",
      headerName: "Icon",
      flex: 0.1,
      renderCell: (params) => params.value,
    },
    { field: "Name", headerName: "Name", flex: 3 },
    { field: "size", headerName: "Size", flex: 0.5 },
    {
      field: "modified",
      headerName: "Modified by",
      type: "number",
      flex: 0.5,
      size: 50,
    },
    {
      field: "security",
      headerName: "Security Marks",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,

      valueGetter: (params) =>
        `${params.row.name || ""} ${params.row.size || ""}`,
    },
  ];
  const [gridRows, setGridRows] = useState([]);
  const state = useSelector((state) => state?.folder?.basket);

  const pics = useSelector((state) => state?.file?.pics);

  const stateRows =
    state &&
    state?.map((item) => ({
      id: item?.entry?.id,
      Name: item?.entry?.name,
      modified: item?.entry?.modified,
      icon: <FolderIcon sx={{ color: "#1F74DB", fontSize: 24, m: "10px" }} />,
    }));

  // pics dizisini maplemek
  const picsRows =
    pics &&
    pics?.map((pic) => ({
      id: pic?.entry?.id,
      Name: pic?.entry?.name,
      icon: <PanoramaIcon sx={{ color: "#1F74DB", fontSize: 24, m: "10px" }} />,
    }));

  
    useEffect(() => {
      // Update the DataGrid rows when the stateRows and picsRows change
      if (stateRows && picsRows) {
        const newRows = [...stateRows, ...picsRows];
        setGridRows(newRows);
      }
    }, [stateRows, picsRows]);



  const data = [
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
  ];
  return (
    <>
      <div className="h-main2" id="my-component" style={{ width: "100%" }}>
        <h3 className="px-5 py-8 text-[14px] font-semibold">Personal Files</h3>

        {stateRows && picsRows !== null && (
          <DataGrid
            className="!w-full "
            rows={gridRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0 },
              },
            }}
            pageSizeOptions={[5, 10]}
            onRowDoubleClick={(params, event) => {
              const item = params.row;
              const targetPageURL = `/personal-files/${item.id}`;
              history(targetPageURL);
            }}
            onRowContextMenu={(params, event) => {
              event.preventDefault();
              setCustomContextMenu({
                mouseX: event.clientX - 2,
                mouseY: event.clientY - 4,
              });
            }}
          />
        )}
      </div>
      {customContextMenu && (
        <div
          className="rounded-xl "
          style={{
            position: "fixed",
            top: customContextMenu.mouseY,
            left: customContextMenu.mouseX,
            zIndex: 1,
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "0px",
          }}
        >
          {data.map((item, index) => (
            <IconItem key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyDatagrid;
