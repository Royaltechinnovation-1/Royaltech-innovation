export type Role = "SUPERADMIN" | "SALES" | "HR" | "DEVELOPMENT";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "in_progress"
  | "won"
  | "lost";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  status: LeadStatus;
  department: "sales" | "development" | "both";
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
  active: boolean;
  createdAt: string;
};

export type Employee = {
  id: string;
  name: string;
  role: string;
  department: "leadership" | "sales" | "hr" | "development" | "design";
  email: string;
  phone: string;
  status: "active" | "onboarding" | "notice";
  joinDate: string;
};

export type HrTicket = {
  id: string;
  employeeName: string;
  type: "leave" | "onboarding" | "policy" | "recruitment";
  subject: string;
  status: "open" | "in_review" | "closed";
  createdAt: string;
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type DataStore = {
  users: User[];
  leads: Lead[];
  employees: Employee[];
  hrTickets: HrTicket[];
};
