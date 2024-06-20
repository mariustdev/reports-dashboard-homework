// todo add right types or remove in case it is a non related string
export enum RecordType {
  AISCAN1 = "aiscan1",
  AISCAN2 = "aiscan2",
}

// todo add all risk scores
export enum RiskScore {
  LOW = "LOW",
  HIGH = "HIGH",
  NOT_CALCULATED = "Not calculated"
}

// todo add all statuses
export enum Status {
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  IN_PROGRESS = "IN_PROGRESS",
  READY_FOR_REVIEW = "READY_FOR_REVIEW",
  CANCELLED = "CANCELLED",
}

export interface Report {
  createdAt: string;
  name: string;
  email: string;
  type: RecordType;
  riskScore: RiskScore;
  status: Status;
}
