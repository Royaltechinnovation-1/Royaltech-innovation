import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  HardDrive,
  LayoutDashboard,
  Layers3,
  LockKeyhole,
  Network,
  Package,
  Plug,
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

const performanceLine = "M0 72 L28 66 L56 69 L84 52 L112 58 L140 40 L168 46 L196 30 L224 36 L252 22 L280 28 L320 12";
const financeLine = "M0 70 L30 68 L60 61 L90 65 L120 52 L150 56 L180 42 L210 48 L240 32 L270 38 L300 24 L320 20";
const supplyLine = "M0 76 L32 70 L64 74 L96 56 L128 62 L160 44 L192 50 L224 34 L256 40 L288 24 L320 18";

type Tone = "cyan" | "blue" | "violet" | "green" | "amber";

function ModuleThumb({ icon, tone = "cyan", label }: { icon: React.ReactNode; tone?: Tone; label?: string }) {
  return (
    <span className={`erp-course-thumb is-${tone}`}>
      <span className="erp-course-thumb-art">{icon}</span>
      {label ? <small>{label}</small> : null}
    </span>
  );
}

function NavRow({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <span className={active ? "is-active" : undefined}>
      {icon}
      {label}
    </span>
  );
}

function PersonRow({ name, program, status, tone = "green" }: { name: string; program: string; status: string; tone?: Tone }) {
  return (
    <div className="erp-student-row">
      <span className={`erp-student-avatar is-${tone}`}>{name.slice(0, 1)}</span>
      <span className="erp-student-row-name">{name}<small>{program}</small></span>
      <span className={`erp-badge is-${tone}`}>{status}</span>
    </div>
  );
}

function ModuleRow({ title, meta, value }: { title: string; meta: string; value: number }) {
  return (
    <div className="erp-module-row">
      <span><Boxes size={12} /> {title}<small>{meta}</small></span>
      <span className="erp-mono">{value}%</span>
      <span className="erp-mini-bar"><i style={{ width: `${value}%` }} /></span>
    </div>
  );
}

function RecordRow({ code, title, status, tone = "cyan" }: { code: string; title: string; status: string; tone?: Tone }) {
  return (
    <div className="erp-exam-row">
      <span className="erp-mono">{code}</span>
      <span>{title}</span>
      <span className={`erp-badge is-${tone}`}>{status}</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="erp-hero-visual"
      role="img"
      aria-label="Illustrative ERP enterprise dashboard showing business overview, inventory metrics, financial analytics, HR overview, procurement, supply chain operations and business KPIs with sample data"
    >
      <div className="erp-hero-aurora" />
      <div className="erp-hero-gridlines" />
      <Window title="erp.royaltech / enterprise workspace" meta="sample data" className="erp-hero-window">
        <div className="erp-edu-shell">
          <aside className="erp-edu-sidebar">
            <span className="erp-edu-logo"><Layers3 size={15} /> ERP Suite</span>
            <NavRow icon={<LayoutDashboard size={13} />} label="Overview" active />
            <NavRow icon={<Package size={13} />} label="Inventory" />
            <NavRow icon={<UsersRound size={13} />} label="HR" />
            <NavRow icon={<Wallet size={13} />} label="Finance" />
            <NavRow icon={<ShoppingCart size={13} />} label="Procurement" />
            <NavRow icon={<Truck size={13} />} label="Supply chain" />
            <NavRow icon={<BarChart3 size={13} />} label="Reports" />
            <NavRow icon={<Settings size={13} />} label="Settings" />
          </aside>

          <div className="erp-edu-main">
            <div className="erp-edu-top">
              <span>Business overview</span>
              <span className="erp-mono">current period · sample</span>
            </div>
            <div className="erp-edu-metrics">
              <Metric label="Revenue" value="₹48.2L" tone="cyan" note="sample" />
              <Metric label="Stock value" value="₹12.6L" tone="blue" note="sample" />
              <Metric label="Employees" value="248" tone="green" note="sample" />
              <Metric label="Open orders" value="36" tone="violet" note="sample" />
            </div>
            <div className="erp-edu-split">
              <div className="erp-edu-courses">
                <PanelLabel>Connected modules</PanelLabel>
                <div className="erp-course-grid">
                  <div className="erp-course-card"><ModuleThumb icon={<Package size={19} />} tone="cyan" label="Stock" /><strong>Inventory</strong><span className="erp-mono">4 warehouses · live</span></div>
                  <div className="erp-course-card"><ModuleThumb icon={<UsersRound size={19} />} tone="violet" label="People" /><strong>HR &amp; workforce</strong><span className="erp-mono">248 records · synced</span></div>
                  <div className="erp-course-card"><ModuleThumb icon={<Wallet size={19} />} tone="amber" label="Finance" /><strong>Finance</strong><span className="erp-mono">Period closing · sample</span></div>
                </div>
                <div className="erp-chart-card">
                  <div className="erp-chart-head"><span>Business performance</span><span className="erp-mono">sample</span></div>
                  <TinyChart line={performanceLine} fillId="erpHeroPerformance" />
                </div>
              </div>
              <div className="erp-edu-side-panel">
                <PanelLabel>Procurement</PanelLabel>
                <div className="erp-live-card"><span className="erp-live-icon"><Truck size={15} /></span><span>PO-2048 · Supplier A<small>Approved · sample</small></span><Dot tone="green" /></div>
                <div className="erp-live-card"><span className="erp-live-icon is-blue"><ClipboardCheck size={15} /></span><span>PO-2049 · Supplier B<small>Pending review</small></span><Dot tone="amber" /></div>
                <PanelLabel>Recent activity</PanelLabel>
                <PersonRow name="Purchase order" program="Procurement · approved" status="done" />
                <PersonRow name="Stock transfer" program="Warehouse 02 · completed" status="done" tone="blue" />
                <PersonRow name="Expense claim" program="Finance · review" status="new" tone="amber" />
              </div>
            </div>
          </div>
        </div>
      </Window>
      <div className="erp-float erp-float-exam">
        <div className="erp-float-head"><Wallet size={13} /> <span>Finance</span><Dot tone="green" /></div>
        <div className="erp-float-row"><span>Expenses this period</span><span className="erp-mono">₹8.4L</span></div>
        <div className="erp-float-row"><span>Invoices</span><span className="erp-badge is-cyan">124</span></div>
      </div>
      <div className="erp-float erp-float-attendance">
        <div className="erp-float-head"><Package size={13} /> <span>Inventory</span></div>
        <div className="erp-float-row"><span>Stock accuracy</span><b className="erp-mono">94%</b></div>
        <div className="erp-attendance-dots"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="erp-float erp-float-course">
        <Workflow size={16} />
        <span>ERP modules</span>
        <b>connected</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div
      className="erp-intro-visual"
      role="img"
      aria-label="Illustrative ERP system map connecting inventory, finance, HR, procurement, sales, supply chain and reporting with sample data"
    >
      <Window title="ERP / system map" meta="connected modules" className="erp-intro-window">
        <div className="erp-intro-head">
          <div className="erp-intro-portal">
            <PanelLabel>Management portal</PanelLabel>
            <div className="erp-intro-banner"><span>Enterprise overview</span><small>Current period · sample</small></div>
            <div className="erp-module-list">
              <ModuleRow title="Inventory value" meta="4 locations" value={78} />
              <ModuleRow title="Finance close" meta="Period 09" value={64} />
            </div>
          </div>
          <div className="erp-intro-flow">
            <PanelLabel>Core modules</PanelLabel>
            <MiniNode icon={<Package size={14} />} label="Inventory" meta="records" />
            <MiniNode icon={<UsersRound size={14} />} label="HR" meta="employees" tone="blue" />
            <MiniNode icon={<Wallet size={14} />} label="Finance" meta="transactions" tone="violet" />
            <MiniNode icon={<Truck size={14} />} label="Supply chain" meta="orders" tone="green" />
          </div>
        </div>
        <div className="erp-intro-bottom">
          <div className="erp-intro-activity">
            <PanelLabel>Business workflows</PanelLabel>
            <div className="erp-workflow-row"><span className="erp-workflow-icon"><Check size={11} /></span><span>Purchase order approved</span><small className="erp-mono">sample</small></div>
            <div className="erp-workflow-row"><span className="erp-workflow-icon"><Check size={11} /></span><span>Stock level updated</span><small className="erp-mono">sample</small></div>
            <div className="erp-workflow-row"><span className="erp-workflow-icon is-run"><RefreshCw size={11} /></span><span>Finance reconciliation</span><small className="erp-mono">pending</small></div>
          </div>
          <div className="erp-intro-metrics">
            <PanelLabel>Operational reporting</PanelLabel>
            <ResourceRow name="Inventory records" value={78} detail="sample" />
            <ResourceRow name="Process completion" value={64} tone="blue" detail="sample" />
            <ResourceRow name="Report readiness" value={71} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CustomErpVisual() {
  return (
    <div className="erp-service-visual-inner" role="img" aria-label="Illustrative custom ERP dashboard showing modules, business overview, analytics and reporting with sample data">
      <Window title="Custom ERP / business workspace" meta="sample" className="erp-lms-window" dense>
        <div className="erp-lms-layout">
          <div className="erp-lms-sidebar">
            <NavRow icon={<LayoutDashboard size={12} />} label="Overview" active />
            <NavRow icon={<Package size={12} />} label="Inventory" />
            <NavRow icon={<UsersRound size={12} />} label="HR" />
            <NavRow icon={<Wallet size={12} />} label="Finance" />
            <NavRow icon={<BarChart3 size={12} />} label="Reports" />
          </div>
          <div className="erp-lms-content">
            <div className="erp-lms-metrics">
              <Metric label="Active modules" value="12" tone="cyan" note="sample" />
              <Metric label="Business users" value="86" tone="blue" note="sample" />
              <Metric label="Workflows" value="34" tone="green" note="sample" />
            </div>
            <PanelLabel>Module activity</PanelLabel>
            <div className="erp-module-list">
              <ModuleRow title="Inventory control" meta="4 warehouses" value={82} />
              <ModuleRow title="Finance management" meta="Period 09" value={64} />
              <ModuleRow title="HR operations" meta="248 employees" value={91} />
            </div>
          </div>
          <div className="erp-lms-video">
            <div className="erp-video-frame"><BarChart3 size={18} /><span>Business overview<small>Management dashboard</small></span></div>
            <PanelLabel>Operational activity</PanelLabel>
            <div className="erp-workflow-row"><span className="erp-workflow-icon"><Check size={11} /></span><span>Module published</span><small className="erp-mono">sample</small></div>
            <div className="erp-workflow-row"><span className="erp-workflow-icon"><Check size={11} /></span><span>Workflow configured</span><small className="erp-mono">sample</small></div>
            <div className="erp-workflow-row"><span className="erp-workflow-icon is-run"><RefreshCw size={11} /></span><span>Data sync</span><small className="erp-mono">active</small></div>
          </div>
        </div>
      </Window>
      <div className="erp-service-float"><Layers3 size={14} /> <span>Custom ERP architecture</span><b>modular</b></div>
      <IllustrationNote />
    </div>
  );
}

export function InventoryVisual() {
  return (
    <div className="erp-service-visual-inner" role="img" aria-label="Illustrative inventory management dashboard with stock levels, product records, warehouses and low-stock alerts using sample data">
      <Window title="Inventory management / stock overview" meta="sample" className="erp-learning-window" dense>
        <div className="erp-learning-top">
          <div className="erp-learning-search"><Search size={13} /> Search products or stock records<span className="erp-mono">⌘K</span></div>
          <div className="erp-chip-row"><span>All items</span><span className="is-active">Low stock</span><span>Warehouses</span></div>
        </div>
        <div className="erp-learning-layout">
          <div className="erp-learning-player">
            <div className="erp-video-frame is-large"><Package size={22} /><span>Stock level overview<small>Inventory analytics · sample</small></span></div>
            <div className="erp-lesson-tabs"><span className="is-active">Overview</span><span>Products</span><span>Movement</span><span>Reports</span></div>
            <ModuleRow title="Stock accuracy by location" meta="4 warehouses · sample" value={68} />
          </div>
          <div className="erp-learning-side">
            <PanelLabel>Product records</PanelLabel>
            <div className="erp-course-list">
              <div className="erp-course-list-row"><ModuleThumb icon={<Boxes size={14} />} tone="violet" /><span>Electronic components<small>1,248 units</small></span><b className="erp-mono">82%</b></div>
              <div className="erp-course-list-row"><ModuleThumb icon={<Package size={14} />} tone="blue" /><span>Packaging material<small>640 units</small></span><b className="erp-mono">46%</b></div>
              <div className="erp-course-list-row"><ModuleThumb icon={<HardDrive size={14} />} tone="green" /><span>Finished goods<small>920 units</small></span><b className="erp-mono">86%</b></div>
            </div>
            <PanelLabel>Low-stock alerts</PanelLabel>
            <div className="erp-instructor"><span className="erp-student-avatar is-amber">!</span><span>3 items need review<small>sample activity</small></span><Dot tone="amber" /></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function HrVisual() {
  return (
    <div className="erp-service-visual-inner" role="img" aria-label="Illustrative HR management dashboard with employee profiles, attendance, leave requests and workforce analytics using sample data">
      <Window title="HR management / workforce" meta="sample" className="erp-student-window" dense>
        <div className="erp-student-top">
          <div className="erp-student-search"><Search size={13} /> Search employee records</div>
          <span className="erp-badge is-cyan">Workforce active</span>
        </div>
        <div className="erp-student-layout">
          <div className="erp-student-table">
            <PanelLabel>Employee database</PanelLabel>
            <PersonRow name="A. Sharma" program="Operations · Manager" status="active" />
            <PersonRow name="R. Verma" program="Finance · Executive" status="active" tone="blue" />
            <PersonRow name="M. Kaur" program="HR · Specialist" status="leave" tone="amber" />
            <PersonRow name="S. Patel" program="Warehouse · Supervisor" status="active" tone="violet" />
            <PanelLabel>Attendance &amp; leave</PanelLabel>
            <div className="erp-admission-grid">
              <div><strong>238</strong><small>Present</small></div>
              <div><strong>8</strong><small>On leave</small></div>
              <div><strong>2</strong><small>Pending</small></div>
            </div>
          </div>
          <div className="erp-student-side">
            <PanelLabel>Employee profile</PanelLabel>
            <div className="erp-profile-card"><span className="erp-student-avatar is-cyan">AS</span><strong>Aarav Sharma<small>Employee ID · EMP-1048</small></strong></div>
            <ResourceRow name="Attendance" value={92} detail="92%" />
            <ResourceRow name="Task completion" value={76} tone="blue" detail="76%" />
            <ResourceRow name="Onboarding" value={68} tone="green" detail="68%" />
            <PanelLabel>HR activity</PanelLabel>
            <div className="erp-message-card"><ClipboardCheck size={13} /><span>Leave request updated<small>sample activity</small></span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function FinanceVisual() {
  return (
    <div className="erp-service-visual-inner" role="img" aria-label="Illustrative finance management interface with revenue, expenses, invoices, budgets and cash flow visualization using sample data">
      <Window title="Finance management / financial console" meta="sample" className="erp-exam-window" dense>
        <div className="erp-exam-shell">
          <aside className="erp-exam-sidebar">
            <NavRow icon={<Wallet size={12} />} label="Overview" active />
            <NavRow icon={<FileText size={12} />} label="Invoices" />
            <NavRow icon={<BarChart3 size={12} />} label="Reports" />
            <NavRow icon={<BriefcaseBusiness size={12} />} label="Budget" />
            <NavRow icon={<Activity size={12} />} label="Transactions" />
          </aside>
          <div className="erp-exam-main">
            <div className="erp-exam-bar"><span>Financial overview · Period 09</span><span className="erp-timer"><Clock size={12} /> sample</span></div>
            <div className="erp-exam-metric-strip">
              <Metric label="Revenue" value="₹48.2L" tone="cyan" note="sample" />
              <Metric label="Expenses" value="₹8.4L" tone="blue" note="sample" />
            </div>
            <div className="erp-question">
              <span className="erp-badge is-cyan">Cash flow</span>
              <strong>Financial activity across business operations</strong>
              <TinyChart line={financeLine} fillId="erpFinanceFlow" tone="violet" />
            </div>
            <div className="erp-options"><span>Invoices · 124</span><span className="is-active">Expenses · 86</span><span>Budget · on track</span></div>
          </div>
          <div className="erp-exam-results">
            <PanelLabel>Financial records</PanelLabel>
            <RecordRow code="INV-204" title="Invoice batch" status="posted" />
            <RecordRow code="EXP-118" title="Expense claim" status="review" tone="amber" />
            <RecordRow code="BGT-009" title="Period budget" status="active" tone="green" />
            <PanelLabel>Reporting</PanelLabel>
            <div className="erp-question-stats"><span><strong>₹48.2L</strong><small>Revenue</small></span><span><strong>₹8.4L</strong><small>Expenses</small></span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function SupplyChainVisual() {
  return (
    <div className="erp-service-visual-inner" role="img" aria-label="Illustrative supply chain dashboard showing suppliers, purchase orders, inventory movement and order tracking with sample data">
      <Window title="Supply chain / operations console" meta="sample" className="erp-course-window" dense>
        <div className="erp-course-admin">
          <div className="erp-course-catalog">
            <PanelLabel>Suppliers &amp; procurement</PanelLabel>
            <div className="erp-course-list-row"><ModuleThumb icon={<Truck size={14} />} tone="cyan" /><span>Supplier A<small>Active · 18 orders</small></span><b className="erp-mono">active</b></div>
            <div className="erp-course-list-row"><ModuleThumb icon={<BriefcaseBusiness size={14} />} tone="violet" /><span>Supplier B<small>12 orders · sample</small></span><b className="erp-mono">active</b></div>
            <div className="erp-course-list-row"><ModuleThumb icon={<Package size={14} />} tone="amber" /><span>Supplier C<small>4 orders · review</small></span><b className="erp-mono">draft</b></div>
            <PanelLabel>Order tracking</PanelLabel>
            <div className="erp-schedule-row"><Truck size={12} /><span>PO-2048 · In transit</span><small className="erp-mono">Warehouse 02</small></div>
            <div className="erp-schedule-row"><CheckCircle2 size={12} /><span>PO-2047 · Delivered</span><small className="erp-mono">Warehouse 01</small></div>
          </div>
          <div className="erp-course-detail">
            <PanelLabel>Supply chain movement</PanelLabel>
            <ModuleRow title="Procurement cycle" meta="Sample workflow" value={78} />
            <ModuleRow title="Inventory coordination" meta="4 locations" value={64} />
            <ModuleRow title="Logistics tracking" meta="Live sample" value={46} />
            <PanelLabel>Supplier analytics</PanelLabel>
            <div className="erp-chart-card"><div className="erp-chart-head"><span>Supply activity</span><span className="erp-mono">sample</span></div><TinyChart line={supplyLine} fillId="erpSupplyActivity" tone="violet" /></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function FeatureVisual({ id }: { id: string }) {
  return (
    <div className="erp-feature-visual" role="img" aria-label={`Illustrative ${id.replaceAll("-", " ")} ERP module preview with sample data`}>
      <Window title={id.replaceAll("-", " ")} meta="module preview" dense>
        <div className="erp-feature-visual-grid">
          <div className="erp-feature-stat"><PanelLabel>Records</PanelLabel><strong>1,248</strong><small>sample</small></div>
          <div className="erp-feature-stat"><PanelLabel>Workflow</PanelLabel><strong>Connected</strong><small>sample</small></div>
          <div className="erp-feature-stat"><PanelLabel>Reporting</PanelLabel><strong>Available</strong><small>sample</small></div>
        </div>
        <div className="erp-module-list">
          <ModuleRow title="Business information" meta="sample" value={78} />
          <ModuleRow title="Operational activity" meta="sample" value={64} />
          <ModuleRow title="Management reporting" meta="sample" value={71} />
        </div>
        <div className="erp-chart-card"><TinyChart line={performanceLine} fillId={`erpFeature${id}`} /></div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function EcosystemVisual() {
  const nodes = [
    { label: "ERP Core", icon: <Layers3 size={14} /> },
    { label: "Inventory", icon: <Package size={14} /> },
    { label: "HR", icon: <UsersRound size={14} /> },
    { label: "Finance", icon: <Wallet size={14} /> },
    { label: "Procurement", icon: <ShoppingCart size={14} /> },
    { label: "Sales", icon: <BarChart3 size={14} /> },
    { label: "Supply Chain", icon: <Truck size={14} /> },
    { label: "Reporting", icon: <Activity size={14} /> },
  ];
  return (
    <div className="erp-ecosystem-visual" role="img" aria-label="Illustrative ERP module ecosystem connecting ERP core, inventory, HR, finance, procurement, sales, supply chain and reporting">
      <div className="erp-eco-chain">
        {nodes.map((node, index, all) => (
          <div className="erp-eco-part" key={node.label}>
            <div className="erp-eco-node"><span>{node.icon}</span><strong>{node.label}</strong></div>
            {index < all.length - 1 ? <ArrowRight className="erp-eco-arrow" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <div className="erp-eco-windows">
        <div className="erp-eco-window"><PanelLabel>Inventory</PanelLabel><ResourceRow name="Stock records" value={76} detail="sample" /></div>
        <div className="erp-eco-window"><PanelLabel>Finance</PanelLabel><ResourceRow name="Transactions" value={64} tone="blue" detail="sample" /></div>
        <div className="erp-eco-window"><PanelLabel>Reporting</PanelLabel><ResourceRow name="Dashboards" value={82} tone="green" detail="sample" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function EnvironmentVisual({ id }: { id: string }) {
  return (
    <div className="erp-environment-visual" role="img" aria-label={`Illustrative ${id.replaceAll("-", " ")} ERP interface with sample data`}>
      <Window title={`${id.replaceAll("-", " ")} / workspace`} meta="sample" dense>
        <div className="erp-environment-top">
          <div className="erp-environment-badge"><Layers3 size={14} /> {id.replaceAll("-", " ")}</div>
          <span className="erp-mono">sample view</span>
        </div>
        <div className="erp-environment-grid">
          <div><PanelLabel>Business records</PanelLabel><strong>1,248</strong><small>sample</small></div>
          <div><PanelLabel>Modules</PanelLabel><strong>12</strong><small>sample</small></div>
          <div><PanelLabel>Reports</PanelLabel><strong>24</strong><small>sample</small></div>
        </div>
        <div className="erp-module-list">
          <ModuleRow title="Business workflow" meta="sample" value={78} />
          <ModuleRow title="Module activity" meta="sample" value={64} />
          <ModuleRow title="Reporting" meta="sample" value={82} />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    data: <Database size={17} />,
    central: <Layers3 size={17} />,
    modules: <Boxes size={17} />,
    process: <Workflow size={17} />,
    processing: <Settings size={17} />,
    report: <BarChart3 size={17} />,
    visibility: <Activity size={17} />,
  };
  return (
    <div className="erp-workflow-mini" aria-hidden="true">
      <span>{map[kind] ?? <Layers3 size={17} />}</span>
      <div><i /><i /><i /></div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div
      className="erp-analytics-visual"
      role="img"
      aria-label="Illustrative ERP analytics dashboard showing business overview, inventory metrics, finance analytics, HR overview, sales performance, procurement analytics and operational KPIs with sample data"
    >
      <Window title="ERP analytics / business overview" meta="sample data" className="erp-analytics-window">
        <div className="erp-analytics-metrics">
          <Metric label="Revenue" value="₹48.2L" tone="cyan" note="sample" />
          <Metric label="Stock value" value="₹12.6L" tone="blue" note="sample" />
          <Metric label="Employees" value="248" tone="green" note="sample" />
          <Metric label="Orders" value="36" tone="violet" note="sample" />
        </div>
        <div className="erp-analytics-main">
          <div className="erp-analytics-chart">
            <div className="erp-chart-head"><span>Business performance</span><span className="erp-mono">sample</span></div>
            <TinyChart line={performanceLine} fillId="erpAnalyticsPerformance" />
            <div className="erp-chart-legend"><span><i /> Revenue</span><span><i className="is-violet" /> Activity</span></div>
          </div>
          <div className="erp-analytics-side">
            <PanelLabel>Operational KPIs</PanelLabel>
            <ResourceRow name="Inventory accuracy" value={92} detail="92%" />
            <ResourceRow name="Process completion" value={68} tone="blue" detail="68%" />
            <ResourceRow name="Reports published" value={81} tone="green" detail="sample" />
          </div>
        </div>
        <div className="erp-analytics-bottom">
          <div><PanelLabel>Finance activity</PanelLabel><TinyChart line={financeLine} fillId="erpAnalyticsFinance" tone="violet" /></div>
          <div><PanelLabel>Supply chain</PanelLabel><TinyChart line={supplyLine} fillId="erpAnalyticsSupply" /></div>
          <div className="erp-donut-card"><PanelLabel>Completion</PanelLabel><div className="erp-donut"><svg viewBox="0 0 42 42" aria-hidden="true"><circle className="erp-donut-bg" cx="21" cy="21" r="16" /><circle className="erp-donut-value" cx="21" cy="21" r="16" strokeDasharray="68 100" /></svg><span>68%<small>sample</small></span></div></div>
        </div>
        <div className="erp-status-row">
          <StatusLine label="Inventory module" value="active" state="ok" />
          <StatusLine label="Finance sync" value="active" state="ok" />
          <StatusLine label="Supply report" value="draft" state="warn" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WorkflowProcessVisual() {
  const stages = [
    { label: "Purchase Request", icon: <FileText size={14} /> },
    { label: "Approval", icon: <CheckCircle2 size={14} /> },
    { label: "Procurement", icon: <ShoppingCart size={14} /> },
    { label: "Inventory", icon: <Package size={14} /> },
    { label: "Finance", icon: <Wallet size={14} /> },
    { label: "Reporting", icon: <BarChart3 size={14} /> },
  ];
  return (
    <div className="erp-workflow-process" role="img" aria-label="Illustrative ERP business workflow from purchase request through approval, procurement, inventory, finance and reporting">
      <Window title="Business process / workflow" meta="sample" dense>
        <div className="erp-process-chain">
          {stages.map((stage, index, all) => (
            <div className="erp-process-stage" key={stage.label}>
              <div className="erp-process-flow-node"><span>{stage.icon}</span><strong>{stage.label}</strong><small>0{index + 1}</small></div>
              {index < all.length - 1 ? <ArrowRight className="erp-process-arrow" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="erp-process-windows">
          <div className="erp-eco-window"><PanelLabel>Request</PanelLabel><RecordRow code="PR-048" title="Purchase request" status="submitted" /></div>
          <div className="erp-eco-window"><PanelLabel>Approval</PanelLabel><RecordRow code="AP-048" title="Manager review" status="approved" tone="green" /></div>
          <div className="erp-eco-window"><PanelLabel>Reporting</PanelLabel><ResourceRow name="Process status" value={76} detail="sample" /></div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function IntegrationVisual() {
  return (
    <div className="erp-integration-visual" role="img" aria-label="Illustrative ERP integration ecosystem connecting ERP, CRM, ecommerce, inventory, finance, HR, supply chain and business applications">
      <div className="erp-integration-core"><Network size={18} /><span>ERP system</span><small>integration layer</small></div>
      <div className="erp-integration-ring">
        {[
          { label: "CRM", icon: <UsersRound size={14} /> },
          { label: "Ecommerce", icon: <ShoppingCart size={14} /> },
          { label: "Inventory", icon: <Package size={14} /> },
          { label: "Finance", icon: <Wallet size={14} /> },
          { label: "HR", icon: <UserRoundCog size={14} /> },
          { label: "Supply chain", icon: <Truck size={14} /> },
          { label: "Applications", icon: <Plug size={14} /> },
          { label: "Database", icon: <Database size={14} /> },
        ].map((node) => (
          <div className="erp-integration-node" key={node.label}><span>{node.icon}</span><strong>{node.label}</strong><small>API · sample</small></div>
        ))}
      </div>
      <div className="erp-integration-foot"><StatusLine label="Data synchronization" value="configured" state="ok" /><StatusLine label="Connected services" value="8 sample" state="run" /></div>
      <IllustrationNote />
    </div>
  );
}

export function TechnologyVisual() {
  return (
    <div className="erp-tech-visual" role="img" aria-label="Illustrative ERP software architecture from frontend and backend to database, ERP modules, APIs, integrations and cloud infrastructure">
      <Window title="ERP / architecture" meta="conceptual" dense>
        <div className="erp-arch-chain">
          {[
            { label: "Frontend", icon: <LayoutDashboard size={14} /> },
            { label: "Backend", icon: <Code2 size={14} /> },
            { label: "Database", icon: <Database size={14} /> },
            { label: "ERP modules", icon: <Boxes size={14} /> },
            { label: "APIs", icon: <Plug size={14} /> },
            { label: "Integrations", icon: <Network size={14} /> },
            { label: "Cloud", icon: <Cloud size={14} /> },
          ].map((node, index, all) => (
            <div className="erp-arch-part" key={node.label}>
              <div className="erp-arch-node"><span>{node.icon}</span><strong>{node.label}</strong></div>
              {index < all.length - 1 ? <ArrowRight className="erp-arch-arrow" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="erp-arch-layers">
          <div><PanelLabel>User interfaces</PanelLabel><span>ERP dashboard · Management portal · Module screens</span></div>
          <div><PanelLabel>Application services</PanelLabel><span>Inventory · Finance · HR · Procurement · Reporting</span></div>
          <div><PanelLabel>Data &amp; integration</PanelLabel><span>Databases · APIs · Business systems · Cloud deployment</span></div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div className="erp-industries-visual" role="img" aria-label="Illustrative enterprise dashboard showing ERP use across different industries with sample data">
      <Window title="Industries / ERP environments" meta="sample" dense>
        <div className="erp-organization-grid">
          <div className="erp-org-card is-active"><Building2 size={16} /><span>Manufacturing<small>Operations data</small></span><Dot tone="green" /></div>
          <div className="erp-org-card"><ShoppingCart size={16} /><span>Retail<small>Order records</small></span><Dot tone="cyan" /></div>
          <div className="erp-org-card"><Truck size={16} /><span>Logistics<small>Supply data</small></span><Dot tone="blue" /></div>
          <div className="erp-org-card"><UsersRound size={16} /><span>Enterprises<small>Module access</small></span><Dot tone="violet" /></div>
        </div>
        <div className="erp-org-chart"><div className="erp-chart-head"><span>Business activity</span><span className="erp-mono">sample</span></div><TinyChart line={financeLine} fillId="erpOrgActivity" /></div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WhyVisual() {
  return (
    <div className="erp-why-visual" role="img" aria-label="Illustrative ERP workspace showing connected modules and business reporting with sample data">
      <Window title="RoyalTech / ERP platform" meta="conceptual" className="erp-why-window-main">
        <div className="erp-why-map"><div className="erp-why-map-grid" /><div className="erp-why-map-ring" /><span className="erp-why-map-core"><Layers3 size={16} /></span></div>
        <div className="erp-why-status">
          <StatusLine label="Business data" value="organized" state="ok" />
          <StatusLine label="Module workflows" value="connected" state="ok" />
          <StatusLine label="Reports" value="available" state="run" />
          <StatusLine label="Integrations" value="planned" state="warn" />
        </div>
      </Window>
      <div className="erp-why-float"><Sparkles size={14} /><span>Custom ERP software</span><b>built around operations</b></div>
      <IllustrationNote />
    </div>
  );
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    discovery: <Search size={17} />,
    requirements: <FileText size={17} />,
    architecture: <Layers3 size={17} />,
    design: <LayoutDashboard size={17} />,
    development: <Code2 size={17} />,
    testing: <CheckCircle2 size={17} />,
    deployment: <Cloud size={17} />,
    support: <RefreshCw size={17} />,
  };
  return (
    <div className="erp-process-mini" aria-hidden="true">
      <span>{map[kind] ?? <Layers3 size={17} />}</span>
      <div><i /><i /></div>
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div className="erp-security-visual" role="img" aria-label="Illustrative ERP data architecture showing authentication, role-based access, data organization and application security considerations">
      <div className="erp-security-grid">
        <div className="erp-security-zones">
          <PanelLabel>Access layers</PanelLabel>
          <div className="erp-zone is-public"><strong>Authentication</strong><small>User sign-in · sample</small></div>
          <div className="erp-zone is-app"><strong>Role-based access</strong><small>Employees · Managers · Administrators</small></div>
          <div className="erp-zone is-data"><strong>Business data</strong><small>Records · Financial information</small></div>
          <div className="erp-zone-note"><ShieldCheck size={12} /><span>Permissions and data handling are defined to the agreed project scope.</span></div>
        </div>
        <div className="erp-security-matrix">
          <PanelLabel>Application considerations</PanelLabel>
          <div className="erp-matrix-row is-head"><span>Area</span><span>Plan</span><span>Scope</span><span>Review</span></div>
          <div className="erp-matrix-row"><span>API</span><span>designed</span><span>agreed</span><span>testing</span></div>
          <div className="erp-matrix-row"><span>Data</span><span>structured</span><span>defined</span><span>testing</span></div>
          <div className="erp-matrix-row"><span>Access</span><span>roles</span><span>defined</span><span>testing</span></div>
          <div className="erp-matrix-row"><span>Content</span><span>organized</span><span>agreed</span><span>testing</span></div>
        </div>
        <div className="erp-security-ops">
          <PanelLabel>Security practices</PanelLabel>
          <div className="erp-security-check"><LockKeyhole size={13} /><span>Authentication flows</span></div>
          <div className="erp-security-check"><CheckCircle2 size={13} /><span>Data validation</span></div>
          <div className="erp-security-check"><Database size={13} /><span>Database management</span></div>
          <div className="erp-security-check"><Activity size={13} /><span>Application testing</span></div>
          <div className="erp-security-highlight"><ShieldCheck size={15} /><span>No absolute security claim or certification is implied.</span></div>
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div className="erp-benefits-visual" role="img" aria-label="Illustrative before and after business operations comparison showing disconnected systems becoming a connected ERP platform">
      <div className="erp-before">
        <PanelLabel>Before</PanelLabel>
        <div className="erp-before-list"><span>Disconnected business applications</span><span>Information spread across tools</span><span>Manual workflows and approvals</span><span>Separate departmental systems</span><span>Difficult consolidated reporting</span></div>
        <div className="erp-before-console"><FileText size={14} /><span>Fragmented tools</span><span className="erp-mono">manual</span></div>
      </div>
      <div className="erp-benefit-arrow"><ArrowRight size={18} /></div>
      <div className="erp-after">
        <PanelLabel>After</PanelLabel>
        <div className="erp-after-grid">
          <div className="erp-after-card"><Layers3 size={14} /><span>Centralized data</span><small>one platform</small></div>
          <div className="erp-after-card"><Package size={14} /><span>Inventory</span><small>connected</small></div>
          <div className="erp-after-card"><Wallet size={14} /><span>Finance</span><small>integrated</small></div>
          <div className="erp-after-card"><BarChart3 size={14} /><span>Reporting</span><small>dashboards</small></div>
        </div>
        <div className="erp-after-status"><StatusLine label="ERP platform" value="connected" state="ok" /><StatusLine label="Reporting" value="available" state="run" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function CtaVisual() {
  return (
    <div className="erp-cta-visual" role="img" aria-label="Illustrative connected ERP software composition showing ERP dashboard, inventory, HR, finance and supply chain interfaces with sample data">
      <div className="erp-cta-orbit" aria-hidden="true"><span /><span /><span /><span /></div>
      <Window title="ERP platform" meta="sample" className="erp-cta-window erp-cta-window-one" dense>
        <PanelLabel>ERP dashboard</PanelLabel>
        <div className="erp-cta-course"><ModuleThumb icon={<BarChart3 size={14} />} tone="cyan" /><span>Business overview<small>sample</small></span><b className="erp-mono">live</b></div>
      </Window>
      <Window title="Inventory module" meta="sample" className="erp-cta-window erp-cta-window-two" dense>
        <PanelLabel>Stock overview</PanelLabel>
        <div className="erp-chip-row"><span>Products</span><span className="is-active">Warehouses</span><span>Movement</span></div>
      </Window>
      <Window title="Finance analytics" meta="sample" className="erp-cta-window erp-cta-window-three" dense>
        <PanelLabel>Financial activity</PanelLabel>
        <TinyChart line={performanceLine} fillId="erpCtaPerformance" />
      </Window>
      <IllustrationNote />
    </div>
  );
}

export const industryIcons: Record<string, React.ReactNode> = {
  manufacturing: <Building2 size={16} />,
  retail: <ShoppingCart size={16} />,
  logistics: <Truck size={16} />,
  healthcare: <Activity size={16} />,
  education: <UsersRound size={16} />,
  realestate: <Building2 size={16} />,
  technology: <Code2 size={16} />,
  construction: <HardDrive size={16} />,
  distribution: <Package size={16} />,
  services: <BriefcaseBusiness size={16} />,
  hospitality: <UsersRound size={16} />,
  startup: <Sparkles size={16} />,
  business: <Building2 size={16} />,
  enterprise: <Layers3 size={16} />,
};
