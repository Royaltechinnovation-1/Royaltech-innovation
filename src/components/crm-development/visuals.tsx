import type { ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  Globe,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  UserRoundCog,
  UsersRound,
  Wallet,
  Workflow,
} from "lucide-react";
import {
  Dot,
  IllustrationNote,
  Metric,
  MiniNode,
  PanelLabel,
  ResourceRow,
  StatusLine,
  TinyChart,
  Window,
} from "./ui";

const performanceLine =
  "M0 72 L28 66 L56 69 L84 52 L112 58 L140 40 L168 46 L196 30 L224 36 L252 22 L280 28 L320 12";
const pipelineLine =
  "M0 70 L30 68 L60 61 L90 65 L120 52 L150 56 L180 42 L210 48 L240 32 L270 38 L300 24 L320 20";
const activityLine =
  "M0 76 L32 70 L64 74 L96 56 L128 62 L160 44 L192 50 L224 34 L256 40 L288 24 L320 18";

type Tone = "cyan" | "blue" | "violet" | "green" | "amber";

function humanize(id: string) {
  return id.replace(/-/g, " ");
}

function chartKey(id: string) {
  return `crm${id.replace(/[^a-z0-9]/gi, "")}`;
}

function NavRow({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <span className={active ? "is-active" : undefined}>
      {icon}
      {label}
    </span>
  );
}

function ModuleThumb({ icon, tone = "cyan", label }: { icon: ReactNode; tone?: Tone; label?: string }) {
  return (
    <span className={`crm-course-thumb is-${tone}`}>
      <span className="crm-course-thumb-art">{icon}</span>
      {label ? <small>{label}</small> : null}
    </span>
  );
}

function PersonRow({
  name,
  detail,
  status,
  tone = "cyan",
}: {
  name: string;
  detail: string;
  status: string;
  tone?: Tone;
}) {
  return (
    <div className="crm-student-row">
      <span className={`crm-student-avatar is-${tone}`}>{name.slice(0, 1)}</span>
      <span className="crm-student-row-name">
        {name}
        <small>{detail}</small>
      </span>
      <span className={`crm-badge is-${tone}`}>{status}</span>
    </div>
  );
}

function ModuleRow({ title, meta, value }: { title: string; meta: string; value: number }) {
  return (
    <div className="crm-module-row">
      <span>
        <BoxesIcon />
        {title}
        <small>{meta}</small>
      </span>
      <span className="crm-mono">{value}%</span>
      <span className="crm-mini-bar">
        <i style={{ width: `${value}%` }} />
      </span>
    </div>
  );
}

function BoxesIcon() {
  return <Layers3 size={12} aria-hidden="true" />;
}

function RecordRow({
  code,
  title,
  status,
  tone = "cyan",
}: {
  code: string;
  title: string;
  status: string;
  tone?: Tone;
}) {
  return (
    <div className="crm-exam-row">
      <span className="crm-mono">{code}</span>
      <span>{title}</span>
      <span className={`crm-badge is-${tone}`}>{status}</span>
    </div>
  );
}

function DealRow({ name, stage, value }: { name: string; stage: string; value: string }) {
  return (
    <div className="crm-app-table-row">
      <span>{name}</span>
      <span>{stage}</span>
      <span className="crm-mono">{value}</span>
    </div>
  );
}

function Chain({
  steps,
  separator = "arrow",
}: {
  steps: Array<{ label: string; icon: ReactNode }>;
  separator?: "arrow" | "sync";
}) {
  return (
    <div className="crm-eco-chain">
      {steps.map((step, index, all) => (
        <div className="crm-eco-part" key={step.label}>
          <div className="crm-eco-node">
            <span>{step.icon}</span>
            <strong>{step.label}</strong>
          </div>
          {index < all.length - 1 ? (
            separator === "sync" ? (
              <span className="crm-mono" aria-hidden="true">↔</span>
            ) : (
              <ArrowRight className="crm-eco-arrow" aria-hidden="true" />
            )
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="crm-hero-visual"
      role="img"
      aria-label="Illustrative CRM dashboard with sidebar links for Overview, Leads, Customers, Sales, Pipeline, Activities and Reports; sample metrics, a pipeline board, lead status list, customer profiles, follow-up reminders, sales activity timeline and business performance chart"
    >
      <div className="crm-hero-aurora" aria-hidden="true" />
      <div className="crm-hero-gridlines" aria-hidden="true" />
      <Window title="crm / sales workspace" meta="sample data" className="crm-hero-window">
        <div className="crm-hero-window-grid">
          <div className="crm-hero-col">
            <div className="crm-app-sidebar">
              <span className="crm-app-logo">
                <UsersRound size={15} /> CRM
              </span>
              <NavRow icon={<LayoutDashboard size={13} />} label="Overview" active />
              <NavRow icon={<FileText size={13} />} label="Leads" />
              <NavRow icon={<UsersRound size={13} />} label="Customers" />
              <NavRow icon={<BriefcaseBusiness size={13} />} label="Sales" />
              <NavRow icon={<Workflow size={13} />} label="Pipeline" />
              <NavRow icon={<Clock size={13} />} label="Activities" />
              <NavRow icon={<BarChart3 size={13} />} label="Reports" />
            </div>
            <PanelLabel>Lead status</PanelLabel>
            <div className="crm-region-list">
              <div className="crm-region is-active">
                <Dot tone="cyan" />
                <span>New enquiries</span>
                <span className="crm-mono">48 sample</span>
              </div>
              <div className="crm-region">
                <Dot tone="blue" />
                <span>Qualified</span>
                <span className="crm-mono">32 sample</span>
              </div>
              <div className="crm-region">
                <Dot tone="violet" />
                <span>In follow-up</span>
                <span className="crm-mono">26 sample</span>
              </div>
              <div className="crm-region">
                <Dot tone="green" />
                <span>Converted</span>
                <span className="crm-mono">18 sample</span>
              </div>
            </div>
          </div>

          <div className="crm-hero-col">
            <div className="crm-app-main">
              <div className="crm-app-top">
                <span>Sales overview</span>
                <span className="crm-mono">current period · sample</span>
              </div>
              <div className="crm-app-metrics">
                <Metric label="Total leads" value="248" tone="cyan" note="sample" />
                <Metric label="Pipeline value" value="₹48.2L" tone="blue" note="sample" />
                <Metric label="Active customers" value="186" tone="green" note="sample" />
                <Metric label="Revenue sample" value="₹12.6L" tone="violet" note="sample" />
              </div>
              <PanelLabel>Pipeline board</PanelLabel>
              <div className="crm-product-flow">
                <div className="crm-product-step is-done">
                  <span><FileText size={13} /></span>
                  <strong>New</strong>
                  <small>48</small>
                </div>
                <div className="crm-product-step is-done">
                  <span><ClipboardCheck size={13} /></span>
                  <strong>Qualified</strong>
                  <small>32</small>
                </div>
                <div className="crm-product-step is-active">
                  <span><BriefcaseBusiness size={13} /></span>
                  <strong>Proposal</strong>
                  <small>24</small>
                </div>
                <div className="crm-product-step">
                  <span><Settings size={13} /></span>
                  <strong>Negotiation</strong>
                  <small>16</small>
                </div>
                <div className="crm-product-step">
                  <span><CheckCircle2 size={13} /></span>
                  <strong>Won</strong>
                  <small>18</small>
                </div>
              </div>
              <div className="crm-app-chart">
                <div className="crm-chart-head">
                  <span>Business performance</span>
                  <span className="crm-mono">sample</span>
                </div>
                <TinyChart line={performanceLine} fillId="crmHeroPerformance" />
              </div>
            </div>
          </div>

          <div className="crm-hero-col">
            <div className="crm-app-services">
              <PanelLabel>Customer profiles</PanelLabel>
              <div className="crm-profile-card">
                <span className="crm-student-avatar is-cyan">CA</span>
                <strong>
                  Customer A
                  <small>Profile · sample</small>
                </strong>
              </div>
              <div className="crm-profile-card">
                <span className="crm-student-avatar is-violet">CB</span>
                <strong>
                  Customer B
                  <small>Profile · sample</small>
                </strong>
              </div>
              <PanelLabel>Follow-up reminders</PanelLabel>
              <div className="crm-live-card">
                <span className="crm-live-icon">
                  <Phone size={14} />
                </span>
                <span>
                  Call Lead 104
                  <small>Due today · sample</small>
                </span>
                <Dot tone="amber" />
              </div>
              <div className="crm-live-card">
                <span className="crm-live-icon is-blue">
                  <Mail size={14} />
                </span>
                <span>
                  Email Customer A
                  <small>Due tomorrow · sample</small>
                </span>
                <Dot tone="cyan" />
              </div>
              <PanelLabel>Sales activity timeline</PanelLabel>
              <div className="crm-workflow-row">
                <span className="crm-workflow-icon">
                  <CheckCircle2 size={11} />
                </span>
                <span>Opportunity stage updated</span>
                <small className="crm-mono">sample</small>
              </div>
              <div className="crm-workflow-row">
                <span className="crm-workflow-icon">
                  <Mail size={11} />
                </span>
                <span>Follow-up email logged</span>
                <small className="crm-mono">sample</small>
              </div>
              <div className="crm-workflow-row">
                <span className="crm-workflow-icon is-run">
                  <RefreshCw size={11} />
                </span>
                <span>Lead assignment sync</span>
                <small className="crm-mono">sample</small>
              </div>
            </div>
          </div>
        </div>
      </Window>
      <div className="crm-float crm-float-monitor">
        <div className="crm-float-head">
          <BarChart3 size={13} /> <span>Revenue sample</span>
          <Dot tone="green" />
        </div>
        <div className="crm-float-row">
          <span>Current period</span>
          <span className="crm-mono">₹12.6L</span>
        </div>
        <div className="crm-float-row">
          <span>Deals</span>
          <span className="crm-badge is-cyan">18</span>
        </div>
      </div>
      <div className="crm-float crm-float-deploy">
        <div className="crm-float-head">
          <Clock size={13} /> <span>Follow-ups</span>
        </div>
        <div className="crm-float-row">
          <span>Open tasks</span>
          <b className="crm-mono">26 sample</b>
        </div>
        <div className="crm-attendance-dots" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      </div>
      <div className="crm-float crm-float-server">
        <Workflow size={16} />
        <span>Pipeline</span>
        <b>connected</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div
      className="crm-intro-visual"
      role="img"
      aria-label="Illustrative CRM system map connecting leads, customers, sales, activities and reporting with sample data"
    >
      <Window title="CRM / system map" meta="connected modules" className="crm-intro-window">
        <div className="crm-intro-head">
          <div className="crm-intro-portal">
            <PanelLabel>Management portal</PanelLabel>
            <div className="crm-intro-banner">
              <span>Customer overview</span>
              <small>Current period · sample</small>
            </div>
            <div className="crm-module-list">
              <ModuleRow title="Lead records" meta="source forms · sample" value={78} />
              <ModuleRow title="Customer profiles" meta="active records · sample" value={64} />
            </div>
          </div>
          <div className="crm-intro-flow">
            <PanelLabel>Core CRM areas</PanelLabel>
            <MiniNode icon={<FileText size={14} />} label="Leads" meta="capture" />
            <MiniNode icon={<UsersRound size={14} />} label="Customers" meta="profiles" tone="blue" />
            <MiniNode icon={<BriefcaseBusiness size={14} />} label="Sales" meta="pipeline" tone="violet" />
            <MiniNode icon={<BarChart3 size={14} />} label="Reports" meta="dashboards" tone="green" />
          </div>
        </div>
        <div className="crm-intro-bottom">
          <div className="crm-intro-activity">
            <PanelLabel>CRM workflows</PanelLabel>
            <div className="crm-workflow-row">
              <span className="crm-workflow-icon"><CheckCircle2 size={11} /></span>
              <span>Lead qualified</span>
              <small className="crm-mono">sample</small>
            </div>
            <div className="crm-workflow-row">
              <span className="crm-workflow-icon"><CheckCircle2 size={11} /></span>
              <span>Customer profile updated</span>
              <small className="crm-mono">sample</small>
            </div>
            <div className="crm-workflow-row">
              <span className="crm-workflow-icon is-run"><RefreshCw size={11} /></span>
              <span>Follow-up assigned</span>
              <small className="crm-mono">sample</small>
            </div>
          </div>
          <div className="crm-intro-metrics">
            <PanelLabel>Operational reporting</PanelLabel>
            <ResourceRow name="Lead records" value={78} detail="sample" />
            <ResourceRow name="Pipeline stages" value={64} tone="blue" detail="sample" />
            <ResourceRow name="Report readiness" value={71} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CustomCrmVisual() {
  return (
    <div
      className="crm-service-visual-inner"
      role="img"
      aria-label="Illustrative custom CRM workspace showing configurable modules, user roles, sample metrics and connected CRM workflows"
    >
      <Window title="Custom CRM / workspace" meta="sample" className="crm-custom-window" dense>
        <div className="crm-custom-shell">
          <div className="crm-custom-side">
            <PanelLabel>Modules</PanelLabel>
            <div className="crm-custom-module"><span><UsersRound size={13} /></span> Customers</div>
            <div className="crm-custom-module"><span><FileText size={13} /></span> Leads</div>
            <div className="crm-custom-module"><span><BriefcaseBusiness size={13} /></span> Sales</div>
            <div className="crm-custom-module"><span><Clock size={13} /></span> Activities</div>
            <div className="crm-custom-module"><span><BarChart3 size={13} /></span> Reports</div>
          </div>
          <div className="crm-custom-main">
            <div className="crm-app-metrics">
              <Metric label="Custom fields" value="24" tone="cyan" note="sample" />
              <Metric label="Team users" value="86" tone="blue" note="sample" />
              <Metric label="Workflows" value="18" tone="green" note="sample" />
            </div>
            <PanelLabel>Configurable records</PanelLabel>
            <div className="crm-module-list">
              <ModuleRow title="Customer fields" meta="sample structure" value={82} />
              <ModuleRow title="Lead stages" meta="sample process" value={64} />
              <ModuleRow title="Sales views" meta="sample dashboards" value={91} />
            </div>
          </div>
          <div className="crm-custom-roles">
            <PanelLabel>User roles</PanelLabel>
            <div className="crm-custom-module"><span><UserRoundCog size={13} /></span> Sales owner</div>
            <div className="crm-custom-module"><span><ShieldCheck size={13} /></span> Manager</div>
            <div className="crm-custom-module"><span><LockKeyhole size={13} /></span> Administrator</div>
            <PanelLabel>Build status</PanelLabel>
            <StatusLine label="Fields" value="configured" state="ok" />
            <StatusLine label="Workflows" value="draft" state="warn" />
            <StatusLine label="Reports" value="sample" state="run" />
          </div>
        </div>
      </Window>
      <div className="crm-service-float">
        <Layers3 size={14} /> <span>Custom CRM architecture</span>
        <b>modular</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function SalesVisual() {
  return (
    <div
      className="crm-service-visual-inner"
      role="img"
      aria-label="Illustrative sales management dashboard with pipeline stages, deal records, sales activities and sample performance data"
    >
      <Window title="Sales management / pipeline" meta="sample" dense>
        <div className="crm-app-shell">
          <div className="crm-app-sidebar">
            <span className="crm-app-logo"><BriefcaseBusiness size={15} /> Sales</span>
            <NavRow icon={<LayoutDashboard size={12} />} label="Overview" active />
            <NavRow icon={<FileText size={12} />} label="Leads" />
            <NavRow icon={<UsersRound size={12} />} label="Customers" />
            <NavRow icon={<Workflow size={12} />} label="Pipeline" />
            <NavRow icon={<Activity size={12} />} label="Activities" />
          </div>
          <div className="crm-app-main">
            <div className="crm-app-top">
              <span>Sales overview</span>
              <span className="crm-mono">sample period</span>
            </div>
            <div className="crm-app-metrics">
              <Metric label="Opportunities" value="64" tone="cyan" note="sample" />
              <Metric label="Pipeline value" value="₹48.2L" tone="blue" note="sample" />
              <Metric label="Won deals" value="18" tone="green" note="sample" />
            </div>
            <div className="crm-app-table">
              <div className="crm-app-table-head">
                <span>Deal</span>
                <span>Stage</span>
                <span>Value</span>
              </div>
              <DealRow name="Deal 104" stage="Proposal" value="₹4.8L" />
              <DealRow name="Deal 105" stage="Negotiation" value="₹3.2L" />
              <DealRow name="Deal 106" stage="Qualified" value="₹2.6L" />
            </div>
            <div className="crm-app-chart">
              <div className="crm-chart-head"><span>Sales activity</span><span className="crm-mono">sample</span></div>
              <TinyChart line={pipelineLine} fillId="crmSalesActivity" />
            </div>
          </div>
          <div className="crm-app-services">
            <PanelLabel>Pipeline stages</PanelLabel>
            <ResourceRow name="Qualified" value={64} detail="sample" />
            <ResourceRow name="Proposal" value={48} tone="blue" detail="sample" />
            <ResourceRow name="Negotiation" value={32} tone="violet" detail="sample" />
            <ResourceRow name="Won" value={18} tone="green" detail="sample" />
            <PanelLabel>Team activity</PanelLabel>
            <div className="crm-live-card">
              <span className="crm-live-icon"><Phone size={14} /></span>
              <span>Call logged<small>Sample activity</small></span>
              <Dot tone="green" />
            </div>
            <div className="crm-live-card">
              <span className="crm-live-icon is-blue"><Mail size={14} /></span>
              <span>Proposal sent<small>Sample activity</small></span>
              <Dot tone="cyan" />
            </div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function LeadVisual() {
  const steps = [
    { label: "Lead Capture", icon: <FileText size={14} /> },
    { label: "Qualification", icon: <ClipboardCheck size={14} /> },
    { label: "Assignment", icon: <UserRoundCog size={14} /> },
    { label: "Follow-Up", icon: <Clock size={14} /> },
    { label: "Conversion", icon: <CheckCircle2 size={14} /> },
  ];
  return (
    <div
      className="crm-workflow-process"
      role="img"
      aria-label="Illustrative lead management workflow from Lead Capture to Qualification, Assignment, Follow-Up and Conversion using sample records"
    >
      <Window title="Lead management / workflow" meta="sample" dense>
        <div className="crm-process-chain">
          {steps.map((step, index, all) => (
            <div className="crm-process-stage" key={step.label}>
              <div className="crm-process-flow-node">
                <span>{step.icon}</span>
                <strong>{step.label}</strong>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              {index < all.length - 1 ? <ArrowRight className="crm-process-arrow" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="crm-process-windows">
          <div className="crm-eco-window">
            <PanelLabel>Captured lead</PanelLabel>
            <RecordRow code="LD-104" title="Website form" status="new" />
          </div>
          <div className="crm-eco-window">
            <PanelLabel>Assigned owner</PanelLabel>
            <RecordRow code="LD-105" title="Sales owner A" status="assigned" tone="blue" />
          </div>
          <div className="crm-eco-window">
            <PanelLabel>Conversion status</PanelLabel>
            <ResourceRow name="Sample conversion" value={68} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CustomerVisual() {
  return (
    <div
      className="crm-service-visual-inner"
      role="img"
      aria-label="Illustrative customer management dashboard with customer profiles, interaction history, activity records and sample relationship data"
    >
      <Window title="Customer management / records" meta="sample" className="crm-student-window" dense>
        <div className="crm-app-shell">
          <div className="crm-app-sidebar">
            <span className="crm-app-logo"><UsersRound size={15} /> Customers</span>
            <NavRow icon={<LayoutDashboard size={12} />} label="Overview" active />
            <NavRow icon={<FileText size={12} />} label="Leads" />
            <NavRow icon={<UsersRound size={12} />} label="Customers" />
            <NavRow icon={<Clock size={12} />} label="Activities" />
            <NavRow icon={<BarChart3 size={12} />} label="Reports" />
          </div>
          <div className="crm-app-main">
            <div className="crm-app-top">
              <span>Customer records</span>
              <span className="crm-mono">sample data</span>
            </div>
            <div className="crm-app-metrics">
              <Metric label="Active customers" value="186" tone="cyan" note="sample" />
              <Metric label="Profiles" value="248" tone="blue" note="sample" />
              <Metric label="Interactions" value="72" tone="green" note="sample" />
            </div>
            <PanelLabel>Customer profiles</PanelLabel>
            <PersonRow name="Customer A" detail="Profile · sample" status="active" />
            <PersonRow name="Customer B" detail="Profile · sample" status="active" tone="blue" />
            <PersonRow name="Customer C" detail="Profile · sample" status="review" tone="amber" />
            <PersonRow name="Customer D" detail="Profile · sample" status="active" tone="violet" />
          </div>
          <div className="crm-app-services">
            <PanelLabel>Selected profile</PanelLabel>
            <div className="crm-profile-card">
              <span className="crm-student-avatar is-cyan">CA</span>
              <strong>
                Customer A
                <small>Record ID · sample</small>
              </strong>
            </div>
            <ResourceRow name="Profile completeness" value={92} detail="sample" />
            <ResourceRow name="Interaction history" value={76} tone="blue" detail="sample" />
            <ResourceRow name="Follow-up status" value={68} tone="green" detail="sample" />
            <PanelLabel>Interaction timeline</PanelLabel>
            <div className="crm-message-card">
              <Phone size={13} />
              <span>Call logged<small>Sample activity</small></span>
            </div>
            <div className="crm-message-card">
              <Mail size={13} />
              <span>Email recorded<small>Sample activity</small></span>
            </div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CrmIntegrationServiceVisual() {
  const steps = [
    { label: "CRM", icon: <Database size={14} /> },
    { label: "Website", icon: <Globe size={14} /> },
    { label: "Email", icon: <Mail size={14} /> },
    { label: "Sales", icon: <BriefcaseBusiness size={14} /> },
    { label: "Marketing", icon: <BarChart3 size={14} /> },
    { label: "Customer Data", icon: <UsersRound size={14} /> },
    { label: "Business Applications", icon: <BoxesIcon /> },
  ];
  return (
    <div
      className="crm-ecosystem-visual"
      role="img"
      aria-label="Illustrative CRM integration flow connecting CRM, Website, Email, Sales, Marketing, Customer Data and Business Applications through sample API and data-flow nodes"
    >
      <Chain steps={steps} separator="sync" />
      <div className="crm-eco-windows">
        <div className="crm-eco-window">
          <PanelLabel>API</PanelLabel>
          <StatusLine label="Endpoints" value="agreed" state="ok" />
          <StatusLine label="Permissions" value="defined" state="run" />
        </div>
        <div className="crm-eco-window">
          <PanelLabel>Data flow</PanelLabel>
          <ResourceRow name="Record sync" value={72} detail="sample" />
        </div>
        <div className="crm-eco-window">
          <PanelLabel>Integration map</PanelLabel>
          <StatusLine label="Lead forms" value="sample" state="ok" />
          <StatusLine label="Email activity" value="sample" state="run" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function FeatureVisual({ id }: { id: string }) {
  const label = humanize(id);
  return (
    <div
      className="crm-feature-visual"
      role="img"
      aria-label={`Illustrative ${label} CRM feature preview with sample records, workflow activity and reporting data`}
    >
      <Window title={label} meta="CRM feature · sample" dense>
        <div className="crm-feature-visual-grid">
          <div className="crm-feature-stat">
            <PanelLabel>Records</PanelLabel>
            <strong>248</strong>
            <small>sample</small>
          </div>
          <div className="crm-feature-stat">
            <PanelLabel>Workflow</PanelLabel>
            <strong>Configured</strong>
            <small>sample</small>
          </div>
          <div className="crm-feature-stat">
            <PanelLabel>Reporting</PanelLabel>
            <strong>Available</strong>
            <small>sample</small>
          </div>
        </div>
        <div className="crm-module-list">
          <ModuleRow title="Customer information" meta="sample" value={78} />
          <ModuleRow title="Sales activity" meta="sample" value={64} />
          <ModuleRow title="Management reporting" meta="sample" value={71} />
        </div>
        <div className="crm-chart-card">
          <div className="crm-chart-head"><span>{label}</span><span className="crm-mono">sample</span></div>
          <TinyChart line={performanceLine} fillId={chartKey(id)} />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function EnvironmentVisual({ id }: { id: string }) {
  const label = humanize(id);
  return (
    <div
      className="crm-environment-visual"
      role="img"
      aria-label={`Illustrative ${label} CRM interface with sample records, modules and reporting views`}
    >
      <Window title={`${label} / workspace`} meta="sample" dense>
        <div className="crm-environment-top">
          <div className="crm-environment-badge"><UsersRound size={14} /> {label}</div>
          <span className="crm-mono">sample view</span>
        </div>
        <div className="crm-environment-grid">
          <div><PanelLabel>Lead records</PanelLabel><strong>248</strong><small>sample</small></div>
          <div><PanelLabel>Customers</PanelLabel><strong>186</strong><small>sample</small></div>
          <div><PanelLabel>Reports</PanelLabel><strong>24</strong><small>sample</small></div>
        </div>
        <div className="crm-module-list">
          <ModuleRow title="Customer workflow" meta="sample" value={78} />
          <ModuleRow title="Sales pipeline" meta="sample" value={64} />
          <ModuleRow title="Reporting view" meta="sample" value={82} />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  const icons: Record<string, ReactNode> = {
    capture: <FileText size={17} />,
    organize: <ClipboardCheck size={17} />,
    assign: <UserRoundCog size={17} />,
    followup: <Clock size={17} />,
    opportunity: <BriefcaseBusiness size={17} />,
    conversion: <CheckCircle2 size={17} />,
    relationship: <UsersRound size={17} />,
    analytics: <BarChart3 size={17} />,
  };
  return (
    <div className="crm-workflow-mini" aria-hidden="true">
      <span>{icons[kind] ?? <Layers3 size={17} />}</span>
      <div>
        <i /><i /><i />
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div
      className="crm-analytics-visual"
      role="img"
      aria-label="Illustrative CRM analytics dashboard with lead, pipeline, customer, revenue, activity and performance metrics using sample data"
    >
      <Window title="CRM analytics / overview" meta="sample data" className="crm-analytics-window">
        <div className="crm-analytics-metrics">
          <Metric label="Total leads" value="248" tone="cyan" note="sample" />
          <Metric label="Pipeline value" value="₹48.2L" tone="blue" note="sample" />
          <Metric label="Won deals" value="18" tone="green" note="sample" />
          <Metric label="Active customers" value="186" tone="violet" note="sample" />
        </div>
        <div className="crm-analytics-main">
          <div className="crm-analytics-chart">
            <div className="crm-chart-head"><span>Business performance</span><span className="crm-mono">sample</span></div>
            <TinyChart line={performanceLine} fillId="crmAnalyticsPerformance" />
            <div className="crm-chart-legend"><span><i /> Pipeline</span><span><i className="is-violet" /> Activity</span></div>
          </div>
          <div className="crm-analytics-side">
            <PanelLabel>CRM KPIs</PanelLabel>
            <ResourceRow name="Lead capture" value={92} detail="sample" />
            <ResourceRow name="Follow-up completion" value={68} tone="blue" detail="sample" />
            <ResourceRow name="Reports published" value={81} tone="green" detail="sample" />
          </div>
        </div>
        <div className="crm-analytics-bottom">
          <div>
            <PanelLabel>Sales pipeline</PanelLabel>
            <TinyChart line={pipelineLine} fillId="crmAnalyticsPipeline" tone="violet" />
          </div>
          <div>
            <PanelLabel>Customer activity</PanelLabel>
            <TinyChart line={activityLine} fillId="crmAnalyticsActivity" />
          </div>
          <div className="crm-donut-card">
            <PanelLabel>Conversion</PanelLabel>
            <div className="crm-donut">
              <svg viewBox="0 0 42 42" aria-hidden="true">
                <circle className="crm-donut-bg" cx="21" cy="21" r="16" />
                <circle className="crm-donut-value" cx="21" cy="21" r="16" strokeDasharray="68 100" />
              </svg>
              <span>68%<small>sample</small></span>
            </div>
          </div>
        </div>
        <div className="crm-status-row">
          <StatusLine label="Lead module" value="active" state="ok" />
          <StatusLine label="Sales sync" value="active" state="ok" />
          <StatusLine label="Customer report" value="draft" state="warn" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function AutomationVisual() {
  const steps = [
    { label: "Trigger", icon: <Settings size={14} /> },
    { label: "Lead Created", icon: <FileText size={14} /> },
    { label: "Lead Assignment", icon: <UserRoundCog size={14} /> },
    { label: "Notification", icon: <Mail size={14} /> },
    { label: "Follow-Up", icon: <Clock size={14} /> },
    { label: "Status Update", icon: <CheckCircle2 size={14} /> },
  ];
  return (
    <div
      className="crm-workflow-process"
      role="img"
      aria-label="Illustrative CRM automation chain from Trigger to Lead Created, Lead Assignment, Notification, Follow-Up and Status Update with sample rules"
    >
      <Window title="CRM workflow / automation" meta="sample" dense>
        <div className="crm-process-chain">
          {steps.map((step, index, all) => (
            <div className="crm-process-stage" key={step.label}>
              <div className="crm-process-flow-node">
                <span>{step.icon}</span>
                <strong>{step.label}</strong>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              {index < all.length - 1 ? <ArrowRight className="crm-process-arrow" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="crm-process-windows">
          <div className="crm-eco-window">
            <PanelLabel>Rule</PanelLabel>
            <StatusLine label="New lead" value="trigger" state="run" />
            <StatusLine label="Owner" value="assigned" state="ok" />
          </div>
          <div className="crm-eco-window">
            <PanelLabel>Notification</PanelLabel>
            <StatusLine label="Email" value="queued" state="run" />
            <StatusLine label="Task" value="created" state="ok" />
          </div>
          <div className="crm-eco-window">
            <PanelLabel>Follow-up</PanelLabel>
            <ResourceRow name="Sample completion" value={64} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function IntegrationEcosystemVisual() {
  const steps = [
    { label: "Website", icon: <Globe size={14} /> },
    { label: "CRM", icon: <Database size={14} /> },
    { label: "Sales", icon: <BriefcaseBusiness size={14} /> },
    { label: "Customer Data", icon: <UsersRound size={14} /> },
    { label: "Email", icon: <Mail size={14} /> },
    { label: "Reporting", icon: <BarChart3 size={14} /> },
    { label: "Business Applications", icon: <BoxesIcon /> },
  ];
  return (
    <div
      className="crm-ecosystem-visual"
      role="img"
      aria-label="Illustrative CRM ecosystem flowing from Website to CRM, Sales, Customer Data, Email, Reporting and Business Applications with sample integration notes"
    >
      <Chain steps={steps} />
      <div className="crm-eco-windows">
        <div className="crm-eco-window">
          <PanelLabel>Website</PanelLabel>
          <StatusLine label="Lead form" value="sample" state="ok" />
          <StatusLine label="API" value="agreed" state="run" />
        </div>
        <div className="crm-eco-window">
          <PanelLabel>Data flow</PanelLabel>
          <ResourceRow name="Record sync" value={76} detail="sample" />
        </div>
        <div className="crm-eco-window">
          <PanelLabel>Business applications</PanelLabel>
          <StatusLine label="Scope" value="defined" state="ok" />
          <StatusLine label="Permissions" value="agreed" state="run" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div
      className="crm-industries-visual"
      role="img"
      aria-label="Illustrative CRM environment for technology, real estate, retail and healthcare industries with sample customer and lead activity"
    >
      <Window title="Industries / CRM environments" meta="sample" className="crm-industries-window" dense>
        <div className="crm-organization-grid">
          <div className="crm-org-card is-active">
            <Code2 size={15} />
            <span>Technology<small>Enquiries · sample</small></span>
            <Dot tone="cyan" />
          </div>
          <div className="crm-org-card">
            <Building2 size={15} />
            <span>Real estate<small>Site visits · sample</small></span>
            <Dot tone="blue" />
          </div>
          <div className="crm-org-card">
            <ShoppingCart size={15} />
            <span>Retail<small>Customers · sample</small></span>
            <Dot tone="green" />
          </div>
          <div className="crm-org-card">
            <Activity size={15} />
            <span>Healthcare<small>Enquiries · sample</small></span>
            <Dot tone="violet" />
          </div>
        </div>
        <div className="crm-org-chart">
          <div className="crm-chart-head"><span>Customer activity</span><span className="crm-mono">sample</span></div>
          <TinyChart line={activityLine} fillId="crmIndustryActivity" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WhyVisual() {
  return (
    <div
      className="crm-why-visual"
      role="img"
      aria-label="Illustrative custom CRM platform showing connected customer data, sales workflows and reporting with sample status notes"
    >
      <Window title="RoyalTech / CRM platform" meta="conceptual" className="crm-why-window-main">
        <div className="crm-why-map">
          <div className="crm-why-map-grid" aria-hidden="true" />
          <div className="crm-why-map-ring" aria-hidden="true" />
          <span className="crm-why-map-core"><UsersRound size={16} /></span>
        </div>
        <div className="crm-why-status">
          <StatusLine label="Customer data" value="organized" state="ok" />
          <StatusLine label="Sales workflows" value="connected" state="ok" />
          <StatusLine label="Reports" value="available" state="run" />
          <StatusLine label="Integrations" value="planned" state="warn" />
        </div>
      </Window>
      <div className="crm-why-float">
        <Sparkles size={14} />
        <span>Custom CRM software</span>
        <b>built around workflows</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  const icons: Record<string, ReactNode> = {
    discovery: <Search size={17} />,
    requirements: <FileText size={17} />,
    architecture: <Layers3 size={17} />,
    design: <BarChart3 size={17} />,
    development: <Code2 size={17} />,
    testing: <CheckCircle2 size={17} />,
    deployment: <Cloud size={17} />,
    support: <RefreshCw size={17} />,
  };
  return (
    <div className="crm-process-mini" aria-hidden="true">
      <span>{icons[kind] ?? <Layers3 size={17} />}</span>
      <div>
        <i /><i />
      </div>
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div
      className="crm-security-visual"
      role="img"
      aria-label="Illustrative CRM access and data architecture showing authentication, role-based access, customer data and sample review considerations"
    >
      <div className="crm-security-grid">
        <div className="crm-security-zones">
          <PanelLabel>Access layers</PanelLabel>
          <div className="crm-zone is-public">
            <strong>Authentication</strong>
            <small>User sign-in · sample</small>
          </div>
          <div className="crm-zone is-app">
            <strong>Role-based access</strong>
            <small>Sales · Managers · Administrators</small>
          </div>
          <div className="crm-zone is-data">
            <strong>Customer data</strong>
            <small>Profiles · interactions · records</small>
          </div>
          <div className="crm-zone-note">
            <ShieldCheck size={12} />
            <span>Permissions and data handling are defined to the agreed project scope.</span>
          </div>
        </div>
        <div className="crm-security-matrix">
          <PanelLabel>Application considerations</PanelLabel>
          <div className="crm-matrix-row is-head"><span>Area</span><span>Plan</span><span>Scope</span><span>Review</span></div>
          <div className="crm-matrix-row"><span>API</span><span>designed</span><span>agreed</span><span>sample</span></div>
          <div className="crm-matrix-row"><span>Data</span><span>structured</span><span>defined</span><span>sample</span></div>
          <div className="crm-matrix-row"><span>Access</span><span>roles</span><span>defined</span><span>sample</span></div>
          <div className="crm-matrix-row"><span>Activity</span><span>logged</span><span>agreed</span><span>sample</span></div>
        </div>
        <div className="crm-security-ops">
          <PanelLabel>Security practices</PanelLabel>
          <div className="crm-security-check"><LockKeyhole size={13} /><span>Authentication flows</span></div>
          <div className="crm-security-check"><CheckCircle2 size={13} /><span>Customer data validation</span></div>
          <div className="crm-security-check"><Database size={13} /><span>Database management</span></div>
          <div className="crm-security-check"><Activity size={13} /><span>Application testing</span></div>
          <div className="crm-security-highlight">
            <ShieldCheck size={15} />
            <span>No absolute security claim or certification is implied.</span>
          </div>
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div
      className="crm-benefits-visual"
      role="img"
      aria-label="Illustrative before and after comparison showing scattered customer information becoming a connected CRM platform"
    >
      <div className="crm-before">
        <PanelLabel>Before</PanelLabel>
        <div className="crm-before-list">
          <span>Lead details spread across tools</span>
          <span>Customer history in separate records</span>
          <span>Manual follow-up tracking</span>
          <span>Sales updates in different formats</span>
          <span>Difficult consolidated reporting</span>
        </div>
        <div className="crm-before-console">
          <FileText size={14} />
          <span>Fragmented records</span>
          <span className="crm-mono">manual</span>
        </div>
      </div>
      <div className="crm-benefit-arrow"><ArrowRight size={18} /></div>
      <div className="crm-after">
        <PanelLabel>After</PanelLabel>
        <div className="crm-after-grid">
          <div className="crm-after-card"><UsersRound size={14} /><span>Customer data</span><small>centralized</small></div>
          <div className="crm-after-card"><FileText size={14} /><span>Leads</span><small>connected</small></div>
          <div className="crm-after-card"><BriefcaseBusiness size={14} /><span>Sales</span><small>visible</small></div>
          <div className="crm-after-card"><BarChart3 size={14} /><span>Reporting</span><small>dashboards</small></div>
        </div>
        <div className="crm-after-status">
          <StatusLine label="CRM platform" value="connected" state="ok" />
          <StatusLine label="Reporting" value="available" state="run" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function CtaVisual() {
  return (
    <div
      className="crm-cta-visual"
      role="img"
      aria-label="Illustrative connected CRM composition showing customer records, sales pipeline and analytics windows with sample data"
    >
      <div className="crm-cta-orbit" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <Window title="CRM dashboard" meta="sample" className="crm-cta-window crm-cta-window-one" dense>
        <PanelLabel>Customer records</PanelLabel>
        <div className="crm-cta-course">
          <ModuleThumb icon={<UsersRound size={14} />} tone="cyan" />
          <span>Customer overview<small>sample</small></span>
          <b className="crm-mono">live</b>
        </div>
      </Window>
      <Window title="Sales pipeline" meta="sample" className="crm-cta-window crm-cta-window-two" dense>
        <PanelLabel>Pipeline stages</PanelLabel>
        <div className="crm-chip-row"><span>New</span><span className="is-active">Proposal</span><span>Won</span></div>
      </Window>
      <Window title="CRM analytics" meta="sample" className="crm-cta-window crm-cta-window-three" dense>
        <PanelLabel>Sales activity</PanelLabel>
        <TinyChart line={performanceLine} fillId="crmCtaPerformance" />
      </Window>
      <IllustrationNote />
    </div>
  );
}

export const industryIcons: Record<string, ReactNode> = {
  technology: <Code2 size={16} />,
  realestate: <Building2 size={16} />,
  retail: <ShoppingCart size={16} />,
  education: <UsersRound size={16} />,
  healthcare: <Activity size={16} />,
  manufacturing: <Building2 size={16} />,
  logistics: <Truck size={16} />,
  services: <BriefcaseBusiness size={16} />,
  financial: <Wallet size={16} />,
  hospitality: <UsersRound size={16} />,
  startup: <Sparkles size={16} />,
  smb: <Building2 size={16} />,
  enterprise: <Layers3 size={16} />,
};
