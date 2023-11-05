import { Box } from "@mui/material"
import Datagrid from "../datagrid/Datagrid"

const RightSection = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
      <Datagrid />
    </Box>
  )
}

export default RightSection
