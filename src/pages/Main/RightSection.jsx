import { Box } from "@mui/material";
import MyDatagrid from "../datagrid/MyDatagrid";

const RightSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <MyDatagrid />
    </Box>
  )
}

export default RightSection
