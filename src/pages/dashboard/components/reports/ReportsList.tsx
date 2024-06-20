import {FC} from "react";
import {Report} from "../../../../commons/interfaces/Report.ts";
import {DataGrid} from "@mui/x-data-grid";
import {columns, initialTableConfig} from "../../config/tableConfig.tsx";
import {Box} from "@mui/material";

interface ReportsListProps {
  reports: Report[];
}

const ReportsList: FC<ReportsListProps> = ({reports}) => {
  return (
    <Box sx={{height: 550, width: '100%'}}>
      <DataGrid
        rows={reports}
        columns={columns}
        getRowId={() => Math.random()}
        isRowSelectable={() => false}
        initialState={initialTableConfig}
      />
    </Box>
  )
}

export default ReportsList;
