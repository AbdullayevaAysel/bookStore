import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconItem from "../../components/İconİtem";
import { columns, data, rows } from "./datagrid";

const MyDatagrid = () => {
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

export default MyDatagrid;
