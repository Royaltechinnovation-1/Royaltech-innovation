import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Factory,
  FileText,
  Globe2,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Landmark,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  Network,
  Plug,
  RefreshCw,
  Rocket,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  UserRoundCog,
  UsersRound,
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

const chartOne = "M0 66 L26 58 L52 62 L78 44 L104 52 L130 34 L156 42 L182 26 L208 34 L234 18 L260 26 L286 16 L320 12";
const chartTwo = "M0 72 L30 66 L60 68 L90 50 L120 56 L150 38 L180 46 L210 30 L240 36 L270 22 L300 28 L320 20";
const chartThree = "M0 74 L28 70 L56 58 L84 64 L112 48 L140 52 L168 38 L196 44 L224 28 L252 34 L280 22 L320 18";

function NavRow({ label, active = false, icon }: { label: string; active?: boolean; icon: React.ReactNode }) {
  return (
    <span className={active ? "is-active" : undefined}>
      {icon}
      {label}
    </span>
  );
}

export function HeroVisual() {
  return (
    <div
      className="sd-hero-visual"
      role="img"
      aria-label="Illustrative SaaS product dashboard showing user management, subscription analytics, tenant administration, reporting and connected integrations with sample data"
    >
      <div className="sd-hero-aurora" />
      <div className="sd-hero-gridlines" />
      <Window title="app.royaltech / product workspace" meta="production" className="sd-hero-window">
        <div className="sd-app-shell">
          <aside className="sd-app-sidebar">
            <span className="sd-app-logo"><Layers3 size={15} /> SaaS Suite</span>
            <NavRow label="Overview" active icon={<LayoutDashboard size={13} />} />
            <NavRow label="Users" icon={<UsersRound size={13} />} />
            <NavRow label="Organizations" icon={<Building2 size={13} />} />
            <NavRow label="Subscriptions" icon={<CreditCard size={13} />} />
            <NavRow label="Analytics" icon={<BarChart3 size={13} />} />
            <NavRow label="Integrations" icon={<Plug size={13} />} />
          </aside>

          <div className="sd-app-main">
            <div className="sd-app-top">
              <span>Product overview</span>
              <span className="sd-mono">last 30 days · sample</span>
            </div>
            <div className="sd-app-metrics">
              <Metric label="Active users" value="2,480" tone="cyan" note="sample" />
              <Metric label="Subscriptions" value="318" tone="blue" note="sample" />
              <Metric label="Modules" value="12" tone="violet" note="active" />
            </div>
            <div className="sd-chart-card">
              <div className="sd-chart-head"><span>Product usage</span><span className="sd-mono">30d</span></div>
              <TinyChart line={chartOne} fillId="saasHeroChart" />
            </div>
            <div className="sd-app-table">
              <div className="sd-app-table-head"><span>Module</span><span>Status</span><span>Owner</span></div>
              {[
                ["Customer portal", "running", "Team A"],
                ["Billing engine", "running", "Finance"],
                ["Reporting", "syncing", "Ops"],
              ].map(([module, status, owner]) => (
                <div className="sd-app-table-row" key={module}>
                  <span>{module}</span>
                  <span className={`sd-badge ${status === "running" ? "is-green" : "is-cyan"}`}>{status}</span>
                  <span className="sd-mono">{owner}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="sd-app-services">
            <PanelLabel>Tenants</PanelLabel>
            <MiniNode icon={<Building2 size={14} />} label="Acme Studio" meta="organization" />
            <MiniNode icon={<Building2 size={14} />} label="Northwind" meta="organization" tone="blue" />
            <MiniNode icon={<Building2 size={14} />} label="Bright Labs" meta="organization" tone="green" />
            <PanelLabel>Subscriptions</PanelLabel>
            <StatusLine label="Growth plan" value="active" />
            <StatusLine label="Business plan" value="trial" state="run" />
            <div className="sd-app-chart"><TinyChart line={chartTwo} fillId="saasHeroSideChart" tone="violet" /></div>
          </aside>
        </div>
      </Window>
      <div className="sd-float sd-float-monitor">
        <div className="sd-float-head"><Activity size={13} /> <span>Analytics</span><Dot tone="green" /></div>
        <strong>Usage overview updated</strong>
        <TinyChart line={chartThree} fillId="saasHeroFloatChart" />
      </div>
      <div className="sd-float sd-float-deploy">
        <div className="sd-float-head"><CreditCard size={13} /> <span>Billing</span></div>
        <div className="sd-float-row"><span>invoice #1048</span><span className="sd-badge is-green">paid</span></div>
        <div className="sd-float-row"><span>trial → growth</span><span className="sd-badge is-cyan">converted</span></div>
      </div>
      <div className="sd-float sd-float-server">
        <UsersRound size={16} />
        <span>user provisioning</span>
        <b>synced</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div className="sd-intro-visual" role="img" aria-label="Illustrative SaaS analytics workspace with subscription overview, tenant accounts and user activity using sample data">
      <Window title="SaaS product / analytics workspace" meta="environment map" className="sd-intro-window">
        <div className="sd-intro-top">
          <div className="sd-intro-environments">
            <PanelLabel>Organizations</PanelLabel>
            {[
              ["Acme Studio", "24 users", "cyan"],
              ["Northwind", "18 users", "blue"],
              ["Bright Labs", "32 users", "green"],
            ].map(([name, count, tone]) => (
              <div className={`sd-env-row is-${tone}`} key={name}>
                <Dot tone={tone === "green" ? "green" : "cyan"} />
                <span>{name}</span>
                <small>{count}</small>
              </div>
            ))}
          </div>
          <div className="sd-intro-map">
            <svg viewBox="0 0 360 170" aria-hidden="true">
              <path d="M30 85 H100 M100 85 C150 85 150 40 200 40 M100 85 C150 85 150 130 200 130 M200 40 H300 M200 130 H300" />
              <circle cx="30" cy="85" r="5" /><circle cx="100" cy="85" r="5" /><circle cx="200" cy="40" r="5" /><circle cx="200" cy="130" r="5" /><circle cx="300" cy="85" r="5" />
            </svg>
            <span className="sd-map-tag sd-map-tag-a">Users</span>
            <span className="sd-map-tag sd-map-tag-b">Modules</span>
            <span className="sd-map-tag sd-map-tag-c">Data</span>
          </div>
        </div>
        <div className="sd-intro-bottom">
          <div className="sd-intro-activity">
            <PanelLabel>Subscription activity</PanelLabel>
            {[
              ["New signup received", "done"],
              ["Plan selected", "done"],
              ["Invoice generated", "done"],
              ["Onboarding in progress", "run"],
            ].map(([label, state]) => (
              <div className="sd-workflow-row" key={label}>
                <span className={`sd-workflow-icon is-${state}`}>{state === "done" ? <Check size={11} /> : <RefreshCw size={11} />}</span>
                <span>{label}</span>
                <small className="sd-mono">{state === "done" ? "complete" : "running"}</small>
              </div>
            ))}
          </div>
          <div className="sd-intro-metrics">
            <PanelLabel>Resource usage</PanelLabel>
            <ResourceRow name="Application modules" value={62} detail="12 / 20" />
            <ResourceRow name="Customer accounts" value={38} tone="blue" detail="380" />
            <ResourceRow name="Data storage" value={54} tone="violet" detail="2.1 TB" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CustomSaasVisual() {
  return (
    <div className="sd-dashboard sd-custom-dashboard" role="img" aria-label="Custom SaaS application dashboard with business modules, user management, reporting and role-based interfaces using sample data">
      <Window title="Custom platform / operations" meta="business dashboard" className="sd-custom-window">
        <div className="sd-custom-shell">
          <div className="sd-custom-side">
            <PanelLabel>Modules</PanelLabel>
            {[
              ["Operations", <LayoutDashboard size={14} key="ops" />],
              ["Customers", <UsersRound size={14} key="customers" />],
              ["Reports", <BarChart3 size={14} key="reports" />],
              ["Settings", <Settings size={14} key="settings" />],
            ].map(([label, icon]) => (
              <div className="sd-custom-module" key={label as string}>
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
          <div className="sd-custom-main">
            <div className="sd-metric-grid">
              <Metric label="Active records" value="2,480" />
              <Metric label="Open workflows" value="36" tone="blue" />
              <Metric label="Reports" value="12" tone="violet" />
              <Metric label="Users" value="74" tone="green" />
            </div>
            <div className="sd-chart-card">
              <div className="sd-chart-head"><span>Business activity</span><span className="sd-mono">sample</span></div>
              <TinyChart line={chartOne} fillId="customSaasChart" />
            </div>
          </div>
          <div className="sd-custom-roles">
            <PanelLabel>Role views</PanelLabel>
            <StatusLine label="Administrator" value="full access" />
            <StatusLine label="Operations" value="modules" />
            <StatusLine label="Read only" value="reports" state="run" />
            <PanelLabel>Workflow</PanelLabel>
            <div className="sd-cap-flow"><span>Request</span><span>Review</span><span className="is-active">Approve</span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function ProductDevVisual() {
  return (
    <div className="sd-dashboard sd-product-dashboard" role="img" aria-label="SaaS product development workflow from idea and strategy through UI UX, development, testing and launch">
      <div className="sd-product-flow">
        {[
          ["IDEA", Sparkles],
          ["STRATEGY", ClipboardCheck],
          ["UI/UX", LayoutDashboard],
          ["DEVELOPMENT", Code2],
          ["TESTING", Check],
          ["LAUNCH", Rocket],
        ].map(([label, Icon], index) => (
          <div className={`sd-product-step${index === 5 ? " is-active" : ""}${index < 5 ? " is-done" : ""}`} key={label as string}>
            <span><Icon size={14} /></span>
            <small>{label as string}</small>
          </div>
        ))}
      </div>
      <Window title="Product build / MVP release" meta="sample roadmap" className="sd-product-window">
        <div className="sd-product-grid">
          <div>
            <PanelLabel>Product modules</PanelLabel>
            <MiniNode icon={<LayoutDashboard size={14} />} label="Dashboard" meta="designed" />
            <MiniNode icon={<UsersRound size={14} />} label="User accounts" meta="in build" tone="blue" />
            <MiniNode icon={<CreditCard size={14} />} label="Plans" meta="planned" tone="violet" />
          </div>
          <div>
            <PanelLabel>MVP progress</PanelLabel>
            <ResourceRow name="Interface screens" value={78} detail="18 / 24" />
            <ResourceRow name="Backend services" value={64} tone="blue" detail="9 / 14" />
            <ResourceRow name="Test coverage" value={42} tone="green" detail="planned" />
          </div>
          <div>
            <PanelLabel>Prototype</PanelLabel>
            <div className="sd-prototype-card">
              <span className="sd-prototype-top"><i /><i /><i /></span>
              <span className="sd-prototype-body"><b /><i /><i /></span>
            </div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function SubscriptionVisual() {
  return (
    <div className="sd-dashboard sd-subscription-dashboard" role="img" aria-label="Subscription management dashboard with plans, customer subscriptions, billing history and revenue analytics using sample data">
      <Window title="Billing / subscriptions" meta="sample data" className="sd-subscription-window">
        <div className="sd-subscription-top">
          <div>
            <PanelLabel>Subscription plans</PanelLabel>
            <div className="sd-plan-grid">
              {[
                ["Starter", "₹0", "trial"],
                ["Growth", "₹1,499", "active"],
                ["Business", "₹3,999", "active"],
              ].map(([name, price, status]) => (
                <div className={`sd-plan${status === "active" ? " is-active" : ""}`} key={name}>
                  <strong>{name}</strong>
                  <b>{price}</b>
                  <small>/ month · sample</small>
                  <span className={`sd-badge ${status === "active" ? "is-green" : "is-cyan"}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sd-revenue-card">
            <PanelLabel>Revenue overview</PanelLabel>
            <TinyChart line={chartTwo} fillId="saasRevenueChart" />
            <div className="sd-chart-legend"><span><i className="is-cyan" />Recurring</span><span><i className="is-violet" />One-time</span></div>
          </div>
        </div>
        <div className="sd-subscription-table">
          <div className="sd-subscription-row is-head"><span>Customer</span><span>Plan</span><span>Status</span><span>Next billing</span></div>
          {[
            ["Acme Studio", "Growth", "active", "12 Jun"],
            ["Northwind", "Business", "active", "18 Jun"],
            ["Bright Labs", "Starter", "trial", "02 Jun"],
          ].map(([customer, plan, status, date]) => (
            <div className="sd-subscription-row" key={customer}>
              <span>{customer}</span>
              <span className="sd-mono">{plan}</span>
              <span className={`sd-badge ${status === "active" ? "is-green" : "is-cyan"}`}>{status}</span>
              <span className="sd-mono">{date}</span>
            </div>
          ))}
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function MultiTenantVisual() {
  return (
    <div className="sd-dashboard sd-tenant-dashboard" role="img" aria-label="Multi-tenant SaaS architecture showing a central platform, organization tenants and logically separated accounts, dashboards, data and settings using sample data">
      <div className="sd-tenant-core">
        <span><Cloud size={17} /> Central SaaS platform</span>
        <small>shared application infrastructure · sample architecture</small>
      </div>
      <div className="sd-tenant-arrows" aria-hidden="true"><ArrowDown size={16} /><ArrowDown size={16} /><ArrowDown size={16} /></div>
      <div className="sd-tenant-grid">
        {[
          ["Organization A", "Acme Studio", "cyan"],
          ["Organization B", "Northwind", "blue"],
          ["Organization C", "Bright Labs", "violet"],
        ].map(([label, name, tone]) => (
          <div className={`sd-tenant-column is-${tone}`} key={label}>
            <div className="sd-tenant-head"><Building2 size={15} /><strong>{label}</strong><small>{name}</small></div>
            <div className="sd-tenant-items">
              <span><UsersRound size={13} />User accounts</span>
              <span><LayoutDashboard size={13} />Dashboards</span>
              <span><Database size={13} />Business data</span>
              <span><Settings size={13} />Org settings</span>
              <span><KeyRound size={13} />Permissions</span>
              <span><Boxes size={13} />App modules</span>
            </div>
          </div>
        ))}
      </div>
      <p className="sd-tenant-note"><ShieldCheck size={13} /> Logical separation depends on architecture, data models and access controls agreed for the project.</p>
      <IllustrationNote />
    </div>
  );
}

export function IntegrationVisual() {
  return (
    <div className="sd-dashboard sd-integration-dashboard" role="img" aria-label="SaaS integration ecosystem connecting a SaaS platform with CRM, ERP, payment, analytics, cloud, APIs and business tools using sample data">
      <div className="sd-integration-hub">
        <span><Cloud size={17} /> SaaS Platform</span>
        <small>integration layer</small>
      </div>
      <div className="sd-integration-ring">
        {[
          ["CRM", UsersRound, "customer data"],
          ["ERP", Boxes, "operations"],
          ["Payment", CreditCard, "billing"],
          ["Analytics", BarChart3, "reporting"],
          ["Cloud", Cloud, "services"],
          ["APIs", Code2, "exchange"],
          ["Business tools", Workflow, "workflows"],
        ].map(([label, Icon, note]) => {
          const IntegratedIcon = Icon as React.ComponentType<{ size?: number }>;
          return (
            <div className="sd-integration-node" key={label as string}>
              <IntegratedIcon size={15} />
              <strong>{label as string}</strong>
              <small>{note as string}</small>
            </div>
          );
        })}
      </div>
      <div className="sd-integration-status">
        <StatusLine label="Customer sync" value="active" state="run" />
        <StatusLine label="Invoice events" value="queued" state="warn" />
        <StatusLine label="Analytics feed" value="connected" />
      </div>
      <IllustrationNote />
    </div>
  );
}

export function FeatureVisual({ id }: { id: string }) {
  switch (id) {
    case "user-management":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>User directory</PanelLabel>
          <StatusLine label="A. Sharma" value="admin" />
          <StatusLine label="R. Verma" value="member" />
          <StatusLine label="S. Kaur" value="member" />
          <StatusLine label="Invite pending" value="2 users" state="run" />
        </div>
      );
    case "access-control":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Role matrix</PanelLabel>
          <div className="sd-role-grid">
            {["Admin", "Manager", "Member", "Viewer"].map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <ResourceRow name="Permission sets" value={72} detail="12 configured" />
        </div>
      );
    case "dashboards":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Application overview</PanelLabel>
          <TinyChart line={chartOne} fillId="featureDashChart" />
          <div className="sd-mini-stats"><span><b>12</b> modules</span><span><b>74</b> users</span><span><b>08</b> reports</span></div>
        </div>
      );
    case "subscriptions":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Subscription state</PanelLabel>
          <StatusLine label="Growth plan" value="active" />
          <StatusLine label="Business plan" value="trial" state="run" />
          <ResourceRow name="Plan usage" value={58} detail="sample" tone="green" />
        </div>
      );
    case "tenant-management":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Organizations</PanelLabel>
          <MiniNode icon={<Building2 size={14} />} label="Acme Studio" meta="configured" />
          <MiniNode icon={<Building2 size={14} />} label="Northwind" meta="configured" tone="blue" />
          <MiniNode icon={<Building2 size={14} />} label="Bright Labs" meta="pending" tone="violet" />
        </div>
      );
    case "analytics":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Product analytics</PanelLabel>
          <TinyChart line={chartThree} fillId="featureAnalyticsChart" tone="violet" />
          <div className="sd-chart-legend"><span><i className="is-cyan" />Users</span><span><i className="is-violet" />Usage</span></div>
        </div>
      );
    case "administration":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Admin console</PanelLabel>
          <StatusLine label="Application settings" value="updated" />
          <StatusLine label="User roles" value="3 roles" />
          <StatusLine label="Tenant admin" value="enabled" state="run" />
        </div>
      );
    case "api-support":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Connected services</PanelLabel>
          <div className="sd-cap-flow"><span>CRM</span><span>ERP</span><span className="is-active">API</span><span>Billing</span></div>
          <StatusLine label="Last sync" value="complete" />
        </div>
      );
    case "customer-portals":
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Customer workspace</PanelLabel>
          <MiniNode icon={<LayoutDashboard size={14} />} label="Overview" meta="portal" />
          <MiniNode icon={<CreditCard size={14} />} label="Subscription" meta="portal" tone="blue" />
        </div>
      );
    default:
      return (
        <div className="sd-feature-visual">
          <PanelLabel>Workflow automation</PanelLabel>
          <div className="sd-cap-flow"><span>Request</span><span>Review</span><span className="is-active">Automate</span></div>
          <StatusLine label="Rules active" value="8" state="run" />
        </div>
      );
  }
}

export function FeatureFlowVisual() {
  const steps = [
    ["User", UserRoundCog],
    ["Application", Layers3],
    ["Dashboard", LayoutDashboard],
    ["Workflows", Workflow],
    ["Subscriptions", CreditCard],
    ["Integrations", Plug],
    ["Analytics", BarChart3],
  ] as const;
  return (
    <div className="sd-feature-flow" role="img" aria-label="SaaS feature flow from user to application, dashboard, workflows, subscriptions, integrations and analytics">
      {steps.map(([label, Icon], index) => (
        <div className="sd-feature-node" key={label}>
          <span className="sd-feature-icon"><Icon size={16} /></span>
          <strong>{label}</strong>
          {index < steps.length - 1 ? <ArrowRight size={14} className="sd-feature-arrow" /> : null}
        </div>
      ))}
    </div>
  );
}

export function BusinessModelVisual({ id }: { id: string }) {
  switch (id) {
    case "subscription-platforms":
      return <SubscriptionVisual />;
    case "startups":
      return <ProductDevVisual />;
    case "multi-organization":
      return <MultiTenantVisual />;
    case "customer-apps":
      return (
        <div className="sd-dashboard sd-model-dashboard" role="img" aria-label="Customer-facing SaaS portal interface with dashboard, subscription and support information using sample data">
          <Window title="Customer portal" meta="workspace" className="sd-model-window" dense>
            <div className="sd-model-grid">
              <MiniNode icon={<LayoutDashboard size={14} />} label="Overview" meta="portal" />
              <MiniNode icon={<CreditCard size={14} />} label="Subscription" meta="growth plan" tone="blue" />
              <MiniNode icon={<LifeBuoy size={14} />} label="Support" meta="open" tone="green" />
            </div>
            <TinyChart line={chartTwo} fillId="modelPortalChart" />
          </Window>
          <IllustrationNote />
        </div>
      );
    case "custom-products":
      return <CustomSaasVisual />;
    default:
      return (
        <div className="sd-dashboard sd-model-dashboard" role="img" aria-label="Business SaaS application dashboard with operations, users and reporting using sample data">
          <Window title="Business application" meta="operations" className="sd-model-window" dense>
            <div className="sd-model-grid">
              <MiniNode icon={<Boxes size={14} />} label="Operations" meta="modules" />
              <MiniNode icon={<UsersRound size={14} />} label="Team" meta="74 users" tone="blue" />
              <MiniNode icon={<BarChart3 size={14} />} label="Reports" meta="12 saved" tone="violet" />
            </div>
            <StatusLine label="Workflow queue" value="8 active" state="run" />
          </Window>
          <IllustrationNote />
        </div>
      );
  }
}

function WorkflowIcon({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    access: <KeyRound size={15} />,
    accounts: <UsersRound size={15} />,
    modules: <Boxes size={15} />,
    data: <Database size={15} />,
    billing: <CreditCard size={15} />,
    api: <Plug size={15} />,
    analytics: <BarChart3 size={15} />,
  };
  return <div className="sd-workflow-mini" aria-hidden="true"><span>{icons[kind] ?? <Layers3 size={15} />}</span><i /><i /></div>;
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  return <WorkflowIcon kind={kind} />;
}

export function AnalyticsVisual() {
  return (
    <div className="sd-dashboard sd-analytics-dashboard" role="img" aria-label="SaaS analytics dashboard with application overview, user analytics, subscription metrics, product usage and activity information using sample data">
      <Window title="Product analytics / overview" meta="sample data" className="sd-analytics-window">
        <div className="sd-metric-grid sd-analytics-metrics">
          <Metric label="Active users" value="2,480" note="sample" />
          <Metric label="Subscriptions" value="318" tone="blue" note="sample" />
          <Metric label="Usage rate" value="72" unit="%" tone="violet" note="sample" />
          <Metric label="Open tickets" value="06" tone="green" note="sample" />
        </div>
        <div className="sd-monitor-main">
          <div className="sd-monitor-chart">
            <div className="sd-chart-head"><span>Product usage</span><span className="sd-mono">30 days · sample</span></div>
            <TinyChart line={chartOne} fillId="saasAnalyticsChart" />
            <div className="sd-chart-legend"><span><i className="is-cyan" />User activity</span><span><i className="is-violet" />Module usage</span></div>
          </div>
          <div className="sd-monitor-resources">
            <PanelLabel>Subscription mix</PanelLabel>
            <ResourceRow name="Growth plan" value={58} detail="184" />
            <ResourceRow name="Business plan" value={32} tone="blue" detail="102" />
            <ResourceRow name="Trials" value={18} tone="violet" detail="32" />
          </div>
        </div>
        <div className="sd-monitor-bottom">
          <div>
            <PanelLabel>User activity</PanelLabel>
            <StatusLine label="New signups" value="48" state="run" />
            <StatusLine label="Returning users" value="1,204" />
            <StatusLine label="Onboarding" value="in progress" state="warn" />
          </div>
          <div>
            <PanelLabel>Application modules</PanelLabel>
            <StatusLine label="Customer portal" value="active" />
            <StatusLine label="Billing" value="active" />
            <StatusLine label="Reporting" value="syncing" state="run" />
          </div>
          <div className="sd-monitor-donut">
            <svg viewBox="0 0 90 90" aria-hidden="true">
              <circle cx="45" cy="45" r="32" className="sd-donut-bg" />
              <circle cx="45" cy="45" r="32" className="sd-donut-value" strokeDasharray="150 201" />
            </svg>
            <span>72<small>% sample</small></span>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function UxJourneyVisual() {
  return (
    <div className="sd-ux-journey" role="img" aria-label="SaaS user journey from sign up and onboarding through dashboard, features, settings, subscription and support">
      {[
        ["Sign Up", UserRoundCog, "Account created"],
        ["Onboarding", Sparkles, "Guided setup"],
        ["Dashboard", LayoutDashboard, "Workspace view"],
        ["Features", Boxes, "Core modules"],
        ["Settings", Settings, "Preferences"],
        ["Subscription", CreditCard, "Plan details"],
        ["Support", LifeBuoy, "Help centre"],
      ].map(([label, Icon, note], index) => {
        const JourneyIcon = Icon as React.ComponentType<{ size?: number }>;
        return (
          <div className={`sd-ux-step${index === 2 ? " is-active" : ""}`} key={label as string}>
            <span className="sd-ux-icon"><JourneyIcon size={16} /></span>
            <strong>{label as string}</strong>
            <small>{note as string}</small>
            {index < 6 ? <ArrowRight size={13} className="sd-ux-arrow" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function IntegrationEcosystemVisual() {
  return (
    <div className="sd-ecosystem" role="img" aria-label="SaaS integration ecosystem connecting the SaaS platform with CRM, ERP, payment, analytics, cloud, APIs and business tools using sample data">
      <div className="sd-ecosystem-core">
        <Cloud size={20} />
        <strong>SaaS Platform</strong>
        <small>integration layer</small>
      </div>
      <div className="sd-ecosystem-nodes">
        {[
          ["CRM", UsersRound],
          ["ERP", Boxes],
          ["Payment", CreditCard],
          ["Analytics", BarChart3],
          ["Cloud", Cloud],
          ["APIs", Code2],
          ["Business tools", Workflow],
        ].map(([label, Icon]) => {
          const NodeIcon = Icon as React.ComponentType<{ size?: number }>;
          return (
            <div className="sd-ecosystem-node" key={label as string}>
              <NodeIcon size={15} />
              <span>{label as string}</span>
            </div>
          );
        })}
      </div>
      <div className="sd-ecosystem-foot">
        <StatusLine label="Data sync" value="active" state="run" />
        <StatusLine label="API events" value="connected" />
        <StatusLine label="Workflow rules" value="8 configured" />
      </div>
      <IllustrationNote />
    </div>
  );
}

export function ArchitectureVisual() {
  const layers = [
    ["Frontend", LayoutDashboard, "SaaS interface"],
    ["Application services", Boxes, "Product logic"],
    ["APIs", Code2, "Connectivity"],
    ["Database", Database, "Application data"],
    ["Cloud infrastructure", Cloud, "Deployment"],
    ["Integrations", Plug, "Business tools"],
  ] as const;
  return (
    <div className="sd-architecture" role="img" aria-label="SaaS technology architecture flow from frontend through application services, APIs, database, cloud infrastructure and integrations">
      <div className="sd-architecture-grid">
        {layers.map(([label, Icon, note], index) => (
          <div className="sd-architecture-node" key={label}>
            <span className="sd-architecture-icon"><Icon size={16} /></span>
            <strong>{label}</strong>
            <small>{note}</small>
            {index < layers.length - 1 ? <ArrowRight size={14} className="sd-architecture-arrow" /> : null}
          </div>
        ))}
      </div>
      <div className="sd-architecture-panels">
        <div><PanelLabel>Product</PanelLabel><StatusLine label="Modules" value="12 active" /><StatusLine label="User access" value="configured" /></div>
        <div><PanelLabel>Data</PanelLabel><StatusLine label="Records" value="structured" /><StatusLine label="Tenant data" value="planned" state="run" /></div>
        <div><PanelLabel>Delivery</PanelLabel><StatusLine label="Deployment" value="cloud app" /><StatusLine label="APIs" value="connected" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div className="sd-industries-visual" aria-hidden="true">
      <Window title="Industry solutions / workspace" meta="sample" className="sd-industries-window" dense>
        <div className="sd-industries-visual-grid">
          <div><PanelLabel>Application status</PanelLabel><StatusLine label="Portals" value="running" /><StatusLine label="Workflows" value="active" state="run" /><StatusLine label="Reports" value="ready" /></div>
          <div><PanelLabel>Accounts</PanelLabel><ResourceRow name="Users" value={62} detail="sample" /><ResourceRow name="Organizations" value={48} tone="blue" detail="sample" /></div>
        </div>
      </Window>
    </div>
  );
}

export function WhyVisual() {
  return (
    <div className="sd-why-visual" role="img" aria-label="Layered SaaS product interfaces showing dashboards, tenant administration and subscription management with sample data">
      <div className="sd-why-stack">
        <Window title="Product workspace / overview" meta="3 tenants" className="sd-why-window-main">
          <div className="sd-why-map">
            <svg viewBox="0 0 320 190" aria-hidden="true">
              <path d="M40 95 H110 M110 95 C160 95 160 45 210 45 M110 95 C160 95 160 145 210 145 M210 45 H280 M210 145 H280" />
              <circle cx="40" cy="95" r="5" /><circle cx="110" cy="95" r="5" /><circle cx="210" cy="45" r="5" /><circle cx="210" cy="145" r="5" /><circle cx="280" cy="95" r="5" />
            </svg>
            <span className="sd-why-tag sd-why-tag-a">Users</span>
            <span className="sd-why-tag sd-why-tag-b">Modules</span>
            <span className="sd-why-tag sd-why-tag-c">Data</span>
          </div>
          <div className="sd-why-status"><StatusLine label="Organizations" value="3 active" /><StatusLine label="Analytics" value="enabled" /></div>
        </Window>
        <Window title="Subscription activity" meta="sample" className="sd-why-window-small" dense>
          <div className="sd-why-deploy">
            <StatusLine label="New signup" value="received" />
            <StatusLine label="Plan selected" value="growth" />
            <StatusLine label="Onboarding" value="in progress" state="run" />
          </div>
        </Window>
        <div className="sd-why-float">
          <span><Activity size={14} /> Product usage</span>
          <TinyChart line={chartThree} fillId="whySaasChart" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

function ProcessIcon({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    discovery: <Sparkles size={15} />,
    requirements: <ClipboardCheck size={15} />,
    architecture: <Network size={15} />,
    design: <LayoutDashboard size={15} />,
    development: <Code2 size={15} />,
    testing: <Check size={15} />,
    deployment: <Cloud size={15} />,
    support: <LifeBuoy size={15} />,
  };
  return <div className="sd-process-mini" aria-hidden="true"><span>{icons[kind] ?? <Layers3 size={15} />}</span><i /><i /><i /></div>;
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  return <ProcessIcon kind={kind} />;
}

export function SecurityVisual() {
  return (
    <div className="sd-dashboard sd-security-dashboard" role="img" aria-label="SaaS security and data management diagram showing authentication, permissions, tenant separation, API access and database architecture with sample configuration">
      <Window title="Security & data / overview" meta="sample configuration" className="sd-security-window">
        <div className="sd-security-grid">
          <div className="sd-security-zones">
            <PanelLabel>Access controls</PanelLabel>
            <div className="sd-zone is-public"><span>Authentication</span><small>Sign in &amp; SSO</small></div>
            <div className="sd-zone is-app"><span>Permissions</span><small>Roles &amp; scopes</small></div>
            <div className="sd-zone is-data"><span>Tenant separation</span><small>Logical structure</small></div>
            <div className="sd-zone-note"><LockKeyhole size={13} /> Controls defined to agreed scope</div>
          </div>
          <div className="sd-security-matrix">
            <PanelLabel>Permission matrix</PanelLabel>
            <div className="sd-matrix-row is-head"><span>Role</span><span>App</span><span>Data</span><span>Billing</span></div>
            {[
              ["Member", "use", "own", "view"],
              ["Manager", "manage", "team", "view"],
              ["Admin", "manage", "manage", "manage"],
            ].map(([role, app, data, billing]) => (
              <div className="sd-matrix-row" key={role}>
                <span>{role}</span><span>{app}</span><span>{data}</span><span>{billing}</span>
              </div>
            ))}
          </div>
          <div className="sd-security-ops">
            <PanelLabel>Data management</PanelLabel>
            <StatusLine label="Validation rules" value="configured" />
            <StatusLine label="API access" value="reviewed" state="run" />
            <StatusLine label="Database" value="managed" />
            <StatusLine label="Security testing" value="planned" state="warn" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div className="sd-benefits-visual" role="img" aria-label="Before and after comparison of disconnected business software and a centralized SaaS platform with integrated workflows">
      <div className="sd-before">
        <div className="sd-benefit-head"><span className="sd-tag is-amber">Before</span><strong>Disconnected software</strong></div>
        <div className="sd-before-list">
          <span>Manual workflows</span>
          <span>Separate user management</span>
          <span>Limited application functionality</span>
          <span>Fragmented business processes</span>
          <span>Scattered reporting</span>
        </div>
        <div className="sd-before-console"><FileText size={13} /><span>spreadsheets &amp; separate tools</span><span className="sd-mono">manual</span></div>
      </div>
      <div className="sd-benefit-arrow"><ArrowRight size={20} /></div>
      <div className="sd-after">
        <div className="sd-benefit-head"><span className="sd-tag is-cyan">After</span><strong>Centralized SaaS platform</strong></div>
        <div className="sd-after-grid">
          <MiniNode icon={<Cloud size={14} />} label="Cloud application" meta="centralized" />
          <MiniNode icon={<Workflow size={14} />} label="Integrated workflows" meta="connected" tone="blue" />
          <MiniNode icon={<UsersRound size={14} />} label="User management" meta="roles" tone="green" />
          <MiniNode icon={<BarChart3 size={14} />} label="Analytics" meta="dashboards" tone="violet" />
        </div>
        <div className="sd-after-status"><StatusLine label="Application view" value="centralized" /><StatusLine label="Software services" value="connected" state="run" /></div>
      </div>
      <IllustrationNote>Conceptual workflow comparison · illustrative</IllustrationNote>
    </div>
  );
}

export function CtaVisual() {
  return (
    <div className="sd-cta-visual" aria-hidden="true">
      <div className="sd-cta-window sd-cta-window-one">
        <span className="sd-window-title">SaaS product overview</span>
        <div className="sd-cta-rows"><StatusLine label="users" value="active" /><StatusLine label="modules" value="running" /><StatusLine label="analytics" value="enabled" state="run" /></div>
      </div>
      <div className="sd-cta-window sd-cta-window-two">
        <span className="sd-window-title">Subscription plans</span>
        <div className="sd-cap-flow"><span>Starter</span><span className="is-active">Growth</span><span>Business</span></div>
      </div>
      <div className="sd-cta-window sd-cta-window-three">
        <span className="sd-window-title">Tenant administration</span>
        <ResourceRow name="Organizations" value={64} detail="sample" />
        <ResourceRow name="Usage" value={48} tone="blue" detail="sample" />
      </div>
      <div className="sd-cta-orbit"><span /><span /><span /><span /></div>
    </div>
  );
}

export const industryIcons: Record<string, React.ReactNode> = {
  healthcare: <HeartPulse size={17} />,
  education: <GraduationCap size={17} />,
  retail: <ShoppingBag size={17} />,
  "real-estate": <Building2 size={17} />,
  finance: <Landmark size={17} />,
  logistics: <Truck size={17} />,
  manufacturing: <Factory size={17} />,
  hr: <UsersRound size={17} />,
  startup: <Sparkles size={17} />,
  professional: <BriefcaseBusiness size={17} />,
  ecommerce: <Store size={17} />,
  enterprise: <Globe2 size={17} />,
};
