import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "../../utilities";
import Datagrid from "../datagrid/Datagrid";

const RightSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <Datagrid />
    </Box>
  );
};

export default RightSection;
