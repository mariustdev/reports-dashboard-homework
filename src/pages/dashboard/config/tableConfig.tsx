import {GridColDef, gridDateComparator, GridSortDirection, GridSortItem} from "@mui/x-data-grid";
import {buildNameEmail, buildStatusData, splitDateTime} from "../../../utils/helpers.tsx";
import {Report} from "../../../commons/interfaces/Report.ts";
import {buildRiskScoreData} from "../../../utils/helpers.tsx";
import {DoubleLineCell, IconTextCell} from "../../../commons/components";
import {IconButton} from "@mui/material";
import {ReadMore} from "@mui/icons-material";

export const initialTableConfig = {
  sorting: {
    sortModel: [
      {
        field: "createdAt",
        sort: "desc" as GridSortDirection
      } as GridSortItem
    ]
  }
};

export const columns: GridColDef<Report>[] = [
  {
    field: 'createdAt',
    headerName: 'Created',
    minWidth: 150,
    flex: 0.5,
    sortable: true,
    getSortComparator: (sortDirection) => {
      const modifier = sortDirection === 'desc' ? -1 : 1;
      return (value1, value2, cellParams1, cellParams2) => {
        if (value1 === null) {
          return 1;
        }
        if (value2 === null) {
          return -1;
        }
        return (
          modifier *
          gridDateComparator(new Date(value1), new Date(value2), cellParams1, cellParams2)
        );
      };
    },
    resizable: false,
    disableColumnMenu: true,
    renderCell: ({row}) => {
      const {date, time} = splitDateTime(row.createdAt);
      return <DoubleLineCell firstValue={date} secondValue={time}/>
    }
  },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 250,
    flex: 0.7,
    resizable: false,
    disableColumnMenu: true,
    renderCell: ({row}) => {
      const {name, email} = buildNameEmail(row);
      return <DoubleLineCell firstValue={name} secondValue={email}/>
    }
  },
  {
    field: 'type',
    headerName: 'Type',
    resizable: false,
    disableColumnMenu: true,
    flex: 0.3,
  },
  {
    field: 'score',
    headerName: 'Risk Score',
    minWidth: 150,
    sortable: false,
    resizable: false,
    flex: 0.4,
    disableColumnMenu: true,
    renderCell: ({row}) => {
      const riskScoreData = buildRiskScoreData(row);
      return <IconTextCell {...riskScoreData} />
    }
  },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 300,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
    flex: 1,
    renderCell: ({row}) => {
      const statusData = buildStatusData(row);
      return <IconTextCell {...statusData} />
    }
  },
  {
    field: 'empty',
    headerName: '',
    minWidth: 50,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
    align: 'center',
    renderCell: () => <IconButton><ReadMore/></IconButton>
  }
];
