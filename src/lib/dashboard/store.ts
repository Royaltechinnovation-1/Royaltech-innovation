import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import type {
  DataStore,
  Employee,
  HrTicket,
  Lead,
  LeadStatus,
  Role,
  User,
} from "./types";

const DEV_SERVICES = new Set([
  "ui/ux design",
  "web development",
  "app development",
  "software development",
]);

const SALES_SERVICES = new Set(["digital marketing", "it consulting", "other"]);

function defaultEmployees(): Employee[] {
  return [
    {
      id: "emp-shreya",
      name: "Shreya Choudhary",
      role: "Founder & CEO",
      department: "leadership",
      email: "shreya@royaltechinnovation.com",
      phone: "+91 85708 71522",
      status: "active",
      joinDate: "2020-01-15",
    },
    {
      id: "emp-mayank",
      name: "Mayank Royal",
      role: "Founder & Managing Director",
      department: "leadership",
      email: "mayank@royaltechinnovation.com",
      phone: "+91 85708 71522",
      status: "active",
      joinDate: "2020-01-15",
    },
    {
      id: "emp-mathan",
      name: "Mathan Murugan",
      role: "Senior UI/UX Developer",
      department: "design",
      email: "mathan@royaltechinnovation.com",
      phone: "",
      status: "active",
      joinDate: "2021-06-01",
    },
    {
      id: "emp-vashnavi",
      name: "Vashnavi",
      role: "Human Resources",
      department: "hr",
      email: "sales@royaltechinnovation.co.in",
      phone: "+91 85708 71522",
      status: "active",
      joinDate: "2022-03-01",
    },
    {
      id: "emp-aditi",
      name: "Aditi Mehra",
      role: "Full Stack Developer",
      department: "development",
      email: "aditi@royaltechinnovation.com",
      phone: "",
      status: "active",
      joinDate: "2023-01-10",
    },
  ];
}

function defaultHrTickets(): HrTicket[] {
  return [
    {
      id: "hr-1",
      employeeName: "New hire pipeline",
      type: "recruitment",
      subject: "Backend developer shortlist",
      status: "in_review",
      createdAt: new Date().toISOString(),
    },
    {
      id: "hr-2",
      employeeName: "Vashnavi",
      type: "policy",
      subject: "Update leave policy Q2",
      status: "open",
      createdAt: new Date().toISOString(),
    },
  ];
}

async function seedUsers(): Promise<User[]> {
  const password = process.env.DASHBOARD_DEFAULT_PASSWORD || "RoyalTech@2026";
  const passwordHash = await bcrypt.hash(password, 10);
  const now = new Date().toISOString();

  const people: Array<{ name: string; email: string; role: Role }> = [
    {
      name: "Super Admin",
      email: "admin@royaltechinnovation.com",
      role: "SUPERADMIN",
    },
    {
      name: "Sales Desk",
      email: "sales@royaltechinnovation.co.in",
      role: "SALES",
    },
    {
      name: "HR Desk",
      email: "hr@royaltechinnovation.com",
      role: "HR",
    },
    {
      name: "Development Desk",
      email: "dev@royaltechinnovation.com",
      role: "DEVELOPMENT",
    },
  ];

  return people.map((person) => ({
    id: randomUUID(),
    name: person.name,
    email: person.email.toLowerCase(),
    passwordHash,
    role: person.role,
    active: true,
    createdAt: now,
  }));
}

function dataDir() {
  return process.env.DATA_DIR || path.join(process.cwd(), "data");
}

function storePath() {
  return path.join(dataDir(), "dashboard-store.json");
}

async function ensureStore(): Promise<DataStore> {
  const dir = dataDir();
  await fs.mkdir(dir, { recursive: true });
  const file = storePath();

  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as DataStore;
  } catch {
    const store: DataStore = {
      users: await seedUsers(),
      leads: [],
      employees: defaultEmployees(),
      hrTickets: defaultHrTickets(),
    };
    await fs.writeFile(file, JSON.stringify(store, null, 2), "utf8");
    return store;
  }
}

async function writeStore(store: DataStore) {
  await fs.mkdir(dataDir(), { recursive: true });
  await fs.writeFile(storePath(), JSON.stringify(store, null, 2), "utf8");
}

export function classifyLeadDepartment(
  service: string,
): Lead["department"] {
  const key = service.trim().toLowerCase();
  if (!key) return "both";
  const isDev = DEV_SERVICES.has(key);
  const isSales = SALES_SERVICES.has(key);
  if (isDev && isSales) return "both";
  if (isDev) return "development";
  if (isSales) return "sales";
  return "both";
}

export async function listUsers() {
  const store = await ensureStore();
  return store.users.map(({ passwordHash: _passwordHash, ...user }) => user);
}

export async function findUserByEmail(email: string) {
  const store = await ensureStore();
  return store.users.find((user) => user.email === email.toLowerCase()) || null;
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
  role: Role;
}) {
  const store = await ensureStore();
  const email = input.email.trim().toLowerCase();
  if (store.users.some((user) => user.email === email)) {
    throw new Error("A user with this email already exists.");
  }

  const user: User = {
    id: randomUUID(),
    name: input.name.trim(),
    email,
    passwordHash: await bcrypt.hash(input.password, 10),
    role: input.role,
    active: true,
    createdAt: new Date().toISOString(),
  };

  store.users.push(user);
  await writeStore(store);
  const { passwordHash: _passwordHash, ...safe } = user;
  return safe;
}

export async function setUserActive(id: string, active: boolean) {
  const store = await ensureStore();
  const user = store.users.find((item) => item.id === id);
  if (!user) throw new Error("User not found.");
  user.active = active;
  await writeStore(store);
  const { passwordHash: _passwordHash, ...safe } = user;
  return safe;
}

export async function createLead(input: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
}) {
  const store = await ensureStore();
  const now = new Date().toISOString();
  const lead: Lead = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    service: input.service,
    message: input.message,
    source: input.source,
    status: "new",
    department: classifyLeadDepartment(input.service),
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
  store.leads.unshift(lead);
  await writeStore(store);
  return lead;
}

export async function listLeads(filter?: {
  department?: "sales" | "development";
  status?: LeadStatus;
}) {
  const store = await ensureStore();
  return store.leads.filter((lead) => {
    if (filter?.status && lead.status !== filter.status) return false;
    if (filter?.department === "sales") {
      return lead.department === "sales" || lead.department === "both";
    }
    if (filter?.department === "development") {
      return lead.department === "development" || lead.department === "both";
    }
    return true;
  });
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<Lead, "status" | "notes" | "department">>,
) {
  const store = await ensureStore();
  const lead = store.leads.find((item) => item.id === id);
  if (!lead) throw new Error("Lead not found.");
  if (patch.status) lead.status = patch.status;
  if (typeof patch.notes === "string") lead.notes = patch.notes;
  if (patch.department) lead.department = patch.department;
  lead.updatedAt = new Date().toISOString();
  await writeStore(store);
  return lead;
}

export async function listEmployees() {
  const store = await ensureStore();
  return store.employees;
}

export async function listHrTickets() {
  const store = await ensureStore();
  return store.hrTickets;
}

export async function createHrTicket(input: {
  employeeName: string;
  type: HrTicket["type"];
  subject: string;
}) {
  const store = await ensureStore();
  const ticket: HrTicket = {
    id: randomUUID(),
    employeeName: input.employeeName.trim(),
    type: input.type,
    subject: input.subject.trim(),
    status: "open",
    createdAt: new Date().toISOString(),
  };
  store.hrTickets.unshift(ticket);
  await writeStore(store);
  return ticket;
}

export async function updateHrTicket(
  id: string,
  status: HrTicket["status"],
) {
  const store = await ensureStore();
  const ticket = store.hrTickets.find((item) => item.id === id);
  if (!ticket) throw new Error("Ticket not found.");
  ticket.status = status;
  await writeStore(store);
  return ticket;
}

export async function dashboardStats() {
  const store = await ensureStore();
  const leads = store.leads;
  const salesLeads = leads.filter(
    (lead) => lead.department === "sales" || lead.department === "both",
  );
  const devLeads = leads.filter(
    (lead) => lead.department === "development" || lead.department === "both",
  );

  return {
    totalLeads: leads.length,
    newLeads: leads.filter((lead) => lead.status === "new").length,
    salesLeads: salesLeads.length,
    developmentLeads: devLeads.length,
    wonLeads: leads.filter((lead) => lead.status === "won").length,
    employees: store.employees.length,
    openHrTickets: store.hrTickets.filter((ticket) => ticket.status !== "closed")
      .length,
    users: store.users.filter((user) => user.active).length,
  };
}
