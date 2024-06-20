import {RecordType, Report, RiskScore, Status} from "../../commons/interfaces/Report.ts";

export const fakeReports: Report[] = [
  {
    createdAt: "May 15, 2024 14:12:27",
    name: "KAROLY-EDWARD RACZ",
    email: "sdfgh@dsadasda.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.LOW,
    status: Status.APPROVED
  },
  {
    createdAt: "May 15, 2024 14:02:06",
    name: "KAROLY-EDWARD RACZ",
    email: "dsadas@dsadas.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.NOT_CALCULATED,
    status: Status.IN_PROGRESS
  },
  {
    createdAt: "May 03, 2024 08:57:14",
    name: "KAROLY-EDWARD RACZ",
    email: "fasfas@dsadas.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.LOW,
    status: Status.CANCELLED
  },
  {
    createdAt: "May 03, 2024 08:33:55",
    name: "KAROLY-EDWARD RACZ",
    email: "sfasfas@fsafas.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.LOW,
    status: Status.APPROVED
  },
  {
    createdAt: "May 03, 2024 08:23:24",
    name: "KAROLY-EDWARD RACZ",
    email: "dsada@fdsfas.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.LOW,
    status: Status.APPROVED
  },
  {
    createdAt: "May 01, 2024 10:45:58",
    name: "ssdfghj",
    email: "dsfag@fasfa.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.NOT_CALCULATED,
    status: Status.READY_FOR_REVIEW
  },
  {
    createdAt: "Mar 22, 2024 09:57:47",
    name: "KAROLY-EDWARD RACZ",
    email: "dasgasge@sdada.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.LOW,
    status: Status.APPROVED
  },
  {
    createdAt: "Mar 22, 2024 09:53:16",
    name: "KAROLY-EDWARD RACZ",
    email: "dafasf@dsadasda.com",
    type: RecordType.AISCAN2,
    riskScore: RiskScore.HIGH,
    status: Status.REJECTED
  }
];

export function fetchFakeRecords(): Promise<Report[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeReports);
    }, 1000); // Simulate a 1-second delay for the promise
  });
};
