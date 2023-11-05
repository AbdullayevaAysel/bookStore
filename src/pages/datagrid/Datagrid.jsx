import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
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
import IconItem from "../../components/İconİtem";
const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 1,
    size: 50,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,

    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

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

const Datagrid = () => {
  const [customContextMenu, setCustomContextMenu] = useState(false);
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault();
      setCustomContextMenu({
        mouseX: e.clientX - 2,
        mouseY: e.clientY - 4,
      });
    }

    const rootElement = document.getElementById("my-component");
    rootElement?.addEventListener("contextmenu", handleContextMenu);

    return () => {
      rootElement?.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  const handleCloseContextMenu = () => {
    setCustomContextMenu(false);
    console.log("text", customContextMenu);
  };

  return (
    <>
      <div className="h-main" id="my-component" style={{ width: "100%" }}>
        <DataGrid
          className="!w-full"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0},
            },
          }}
          onClick={handleCloseContextMenu}
          pageSizeOptions={[5, 10]}
          onRowContextMenu={(params, event) => {
            event.preventDefault();
            setCustomContextMenu({
              mouseX: event.clientX - 2,
              mouseY: event.clientY - 4,
            });
          }}
        />
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

export default Datagrid;
