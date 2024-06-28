import {AttributeLabel, Report, ReportAttribute, RiskScore, Status} from "../commons/interfaces/Report.ts";
import {ReactNode} from "react";
import {Check, CheckCircle, Close, Info, MoreHoriz, ThumbDownAlt, Visibility} from "@mui/icons-material";

interface DateTimeParts {
  date: string;
  time: string;
}

export const buildNameEmail = (report: Report): {name: string, email: string}=> {
  let firstName = '';
  let middleName = '';
  let lastName = '';
  let email = '';

  Object.values(report.attributes).forEach((item: ReportAttribute) => {
    switch (item.label) {
      case AttributeLabel.FIRST_NAME: {
        firstName = item.value;
        break;
      }
      case AttributeLabel.MIDDLE_NAME: {
        middleName = item.value;
        break;
      }
      case AttributeLabel.LAST_NAME: {
        lastName = item.value;
        break;
      }
      case AttributeLabel.EMAIL: {
        email = item.value;
        break;
      }
    }
  })

  return {name: `${firstName} ${middleName} ${lastName}`, email};
};

export const splitDateTime = (dateTimeStr: string): DateTimeParts => {
  const newDateTime = new Date(dateTimeStr);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" } as const;
  const date = newDateTime.toLocaleDateString('en-US', dateOptions);

  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as const;
  const time = newDateTime.toLocaleTimeString('en-US', timeOptions);
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

  switch (report.riskScoring.currentCategory) {
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
    default: {
      riskScoreData = {
        ...riskScoreData, text: 'Not calculated'
      }
    }
  }

  return riskScoreData;
}

export const buildStatusData = (report: Report): { icon?: ReactNode, text?: string, textColor?: string } => {
  let statusData = {};
  switch (report.statusName) {
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

export const buildStatusCharts = (reports: Report[]): {
  [key in Status]: {
    value: number,
    label: string,
    color: string
  }
} => {
  const defaultStatusMap = {
    'Approved': {value: 0, label: 'Approved', color: '#8BC24B'},
    'Rejected': {value: 0, label: 'Rejected', color: '#FF9800'},
    'Cancelled': {value: 0, label: 'Cancelled', color: '#FF5721'},
    'Ready For Review': {value: 0, label: 'Ready For Review', color: '#F5F502'},
    'In Progress': {value: 0, label: 'In Progress', color: '#01A8F4'},
  }

  reports.forEach((report: Report) => {
    if (report.statusName) {
      defaultStatusMap[report.statusName].value += 1;
    }
  })

  return defaultStatusMap;
}
