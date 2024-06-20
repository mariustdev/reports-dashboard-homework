import {Report, RiskScore, Status} from "../commons/interfaces/Report.ts";
import {ReactNode} from "react";
import {Check, CheckCircle, Close, Info, MoreHoriz, ThumbDownAlt, Visibility} from "@mui/icons-material";

interface DateTimeParts {
  date: string;
  time: string;
}

export const splitDateTime = (dateTimeStr: string): DateTimeParts => {
  const parts = dateTimeStr.trim().split(/\s+/); // Split by one or more whitespace characters
  const date = parts.slice(0, 3).join(' '); // Join the first three parts for the date
  const time = parts.slice(3).join(' '); // Join the remaining parts for the time
  return {date, time};
}

export const buildDateTimeString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const datePart = date.toLocaleDateString('en-US', options);
  const timePart = date.toTimeString().split(' ')[0]; // Get time part as HH:MM:SS

  return `${datePart} ${timePart}`;
}

export const buildRiskScoreData = (report: Report): { icon?: ReactNode, text?: string, textColor?: string } => {
  let riskScoreData = {};
  switch (report.riskScore) {
    case RiskScore.HIGH: {
      riskScoreData = {
        ...riskScoreData, icon: <Info/>, text: 'HIGH', textColor: 'darkred',
      }
      break;
    }
    case RiskScore.LOW: {
      riskScoreData = {
        ...riskScoreData, icon: <CheckCircle/>, text: 'LOW', textColor: 'lightgreen',
      }
      break;
    }
    case RiskScore.NOT_CALCULATED: {
      riskScoreData = {
        ...riskScoreData, text: 'Not calculated'
      }
      break;
    }
    default: {
      riskScoreData = {
        ...riskScoreData, text: 'No data'
      }
    }
  }

  return riskScoreData;
}

export const buildStatusData = (report: Report): { icon?: ReactNode, text?: string, textColor?: string } => {
  let statusData = {};
  switch (report.status) {
    case Status.APPROVED: {
      statusData = {
        ...statusData, icon: <Check/>, text: 'Approved',
      }
      break;
    }
    case Status.REJECTED: {
      statusData = {
        ...statusData, icon: <ThumbDownAlt/>, text: 'Rejected',
      }
      break;
    }
    case Status.IN_PROGRESS: {
      statusData = {
        ...statusData, icon: <MoreHoriz/>, text: 'Customer Processing'
      }
      break;
    }
    case Status.READY_FOR_REVIEW: {
      statusData = {
        ...statusData, icon: <Visibility/>, text: 'Ready for Review'
      }
      break;
    }
    case Status.CANCELLED: {
      statusData = {
        ...statusData, icon: <Close/>, text: 'Canceled'
      }
      break;
    }
    default: {
      statusData = {
        ...statusData, text: 'No data'
      }
    }
  }

  return statusData;
}

export const buildStatusColor = (status: Status): string => {
  switch (status) {
    case Status.APPROVED:
      return '#8BC24B';
    case Status.REJECTED:
      return '#FF9800';
    case Status.IN_PROGRESS:
      return '#01A8F4';
    case Status.READY_FOR_REVIEW:
      return '#F5F502';
    case Status.CANCELLED:
      return '#FF5721';
    default:
      return '#fff';
  }
}

export const buildStatusCharts = (reports: Report[]): {
  [key in Status]: {
    value: number,
    label: string,
    color: string
  }
} => {
  const defaultStatusMap = {
    APPROVED: {value: 0, label: 'Approved', color: '#8BC24B'},
    REJECTED: {value: 0, label: 'Rejected', color: '#FF9800'},
    CANCELLED: {value: 0, label: 'Cancelled', color: '#FF5721'},
    READY_FOR_REVIEW: {value: 0, label: 'Ready For Review', color: '#F5F502'},
    IN_PROGRESS: {value: 0, label: 'In Progress', color: '#01A8F4'},
  }

  reports.forEach((report: Report) => {
    if (report.status) {
      defaultStatusMap[report.status].value += 1;
    }
  })

  return defaultStatusMap;
}
