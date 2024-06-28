export enum RiskScore {
  LOW = "low",
  HIGH = "high",
  MEDIUM = "medium"
}

// Added just currentCategory to be able to check if value exists
export interface RiskScoring {
  currentCategory?: RiskScore;
}

export enum Status {
  APPROVED = "Approved",
  REJECTED = "Rejected",
  IN_PROGRESS = "In Progress",
  READY_FOR_REVIEW = "Ready For Review",
  CANCELLED = "Cancelled",
}

export enum AttributeLabel {
  FIRST_NAME = "First name",
  MIDDLE_NAME = "Middle name",
  LAST_NAME = "Last name",
  DATE_OF_BIRTH = "Date of birth",
  NATIONALITY = "Nationality",
  COUNTRY_OF_RESIDENCY = "Country of residency",
  EMAIL = "Email",
}

export interface ReportAttribute {
  label: AttributeLabel;
  value: string;
}

export interface Report {
  id: string;
  createdAt: string;
  attributes: {[key: string]: ReportAttribute};
  type: string;
  riskScoring: RiskScoring;
  statusName: Status;
}
