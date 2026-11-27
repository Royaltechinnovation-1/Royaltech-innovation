import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  Check,
  CircleCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  FolderGit2,
  Gauge,
  GitBranch,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  Bar,
  Dot,
  IllustrationNote,
  Metric,
  ResourceRow,
  StatusLine,
  TinyChart,
  Window,
} from "./ui";

const chartOne = "M0 64 L24 58 L48 62 L72 46 L96 52 L120 35 L144 43 L168 28 L192 36 L216 20 L240 30 L264 22 L288 34 L320 14";
const chartTwo = "M0 70 L32 62 L64 66 L96 48 L128 54 L160 38 L192 46 L224 30 L256 36 L288 24 L320 30";

function PanelLabel({ children }: { children: React.ReactNode }) {
  return <p className="cd-panel-label">{children}</p>;
}

function MiniNode({ icon, label, meta, tone = "cyan" }: { icon: React.ReactNode; label: string; meta?: string; tone?: "cyan" | "blue" | "green" | "violet" }) {
  return (
    <div className={`cd-mini-node is-${tone}`}>
      <span className="cd-mini-node-icon">{icon}</span>
      <span>
        <strong>{label}</strong>
        {meta ? <small>{meta}</small> : null}
      </span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="cd-hero-visual"
      role="img"
      aria-label="Illustrative cloud operations dashboard showing application servers, databases, deployment pipeline and monitoring panels with sample data"
    >
      <div className="cd-hero-aurora" />
      <div className="cd-hero-gridlines" />
      <Window title="ops.royaltech / infrastructure" meta="production" className="cd-hero-window">
        <div className="cd-hero-window-grid">
          <div className="cd-hero-col cd-hero-col-left">
            <PanelLabel>Cloud regions</PanelLabel>
            <div className="cd-region-list">
              <div className="cd-region is-active">
                <Dot tone="green" />
                <span>ap-southeast-1</span>
                <span className="cd-mono">primary</span>
              </div>
              <div className="cd-region">
                <Dot tone="green" />
                <span>eu-west-1</span>
                <span className="cd-mono">secondary</span>
              </div>
              <div className="cd-region">
                <Dot tone="muted" />
                <span>staging</span>
                <span className="cd-mono">internal</span>
              </div>
            </div>
            <PanelLabel>Infrastructure</PanelLabel>
            <ResourceRow name="Compute" value={64} detail="8 vCPU" />
            <ResourceRow name="Memory" value={48} tone="blue" detail="24 GB" />
            <ResourceRow name="Storage" value={72} tone="violet" detail="1.4 TB" />
          </div>

          <div className="cd-hero-col cd-hero-col-center">
            <div className="cd-topology">
              <svg className="cd-topology-lines" viewBox="0 0 420 260" aria-hidden="true">
                <path d="M210 38 C210 82 100 78 100 120" />
                <path d="M210 38 C210 82 320 78 320 120" />
                <path d="M100 148 C100 188 210 184 210 218" />
                <path d="M320 148 C320 188 210 184 210 218" />
                <path d="M100 148 L320 148" />
                <circle cx="210" cy="38" r="4" />
                <circle cx="100" cy="120" r="4" />
                <circle cx="320" cy="120" r="4" />
                <circle cx="210" cy="218" r="4" />
              </svg>
              <div className="cd-topology-node cd-top-edge"><Cloud size={17} /> <span>Edge / DNS</span></div>
              <div className="cd-topology-node cd-top-app"><Server size={17} /> <span>App server 01</span></div>
              <div className="cd-topology-node cd-top-app2"><Server size={17} /> <span>App server 02</span></div>
              <div className="cd-topology-node cd-top-data"><Database size={17} /> <span>Database cluster</span></div>
              <div className="cd-topology-badge cd-topology-badge-one">Load balanced</div>
              <div className="cd-topology-badge cd-topology-badge-two">Managed storage</div>
            </div>
          </div>

          <div className="cd-hero-col cd-hero-col-right">
            <PanelLabel>Live overview</PanelLabel>
            <div className="cd-metric-grid">
              <Metric label="CPU" value="42" unit="%" note="sample" />
              <Metric label="Requests" value="1.2" unit="k/min" tone="blue" note="sample" />
            </div>
            <div className="cd-chart-card">
              <div className="cd-chart-head"><span>Application activity</span><span className="cd-mono">24h</span></div>
              <TinyChart line={chartOne} fillId="heroFill" />
            </div>
            <PanelLabel>Services</PanelLabel>
            <StatusLine label="Web application" value="healthy" />
            <StatusLine label="API service" value="healthy" />
            <StatusLine label="Worker queue" value="running" state="run" />
          </div>
        </div>
        <div className="cd-hero-pipeline">
          <span className="cd-mono">main · 8f2c1ab</span>
          {["Build", "Test", "Stage", "Deploy"].map((stage, index) => (
            <span className={`cd-pipe-chip${index === 3 ? " is-active" : ""}`} key={stage}>
              {index < 3 ? <Check size={12} aria-hidden="true" /> : <RefreshCw size={12} aria-hidden="true" />}
              {stage}
            </span>
          ))}
          <span className="cd-pipe-done">release ready</span>
        </div>
      </Window>
      <div className="cd-float cd-float-monitor">
        <div className="cd-float-head"><Activity size={13} /> <span>Monitoring</span><Dot tone="green" /></div>
        <strong>All services responding</strong>
        <TinyChart line={chartTwo} fillId="heroFloatFill" />
      </div>
      <div className="cd-float cd-float-deploy">
        <div className="cd-float-head"><GitBranch size={13} /> <span>Deployment</span></div>
        <div className="cd-float-row"><span>feature/billing-api</span><span className="cd-badge is-green">passed</span></div>
        <div className="cd-float-row"><span>staging</span><span className="cd-badge is-cyan">live</span></div>
      </div>
      <div className="cd-float cd-float-server">
        <Server size={16} />
        <span>node-app-02</span>
        <b>healthy</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div className="cd-intro-visual" role="img" aria-label="Illustrative cloud architecture and deployment workflow with sample data">
      <Window title="Infrastructure workspace" meta="environment map" className="cd-intro-window">
        <div className="cd-intro-top">
          <div className="cd-intro-environments">
            <PanelLabel>Environments</PanelLabel>
            {[
              ["development", "2 services", "cyan"],
              ["staging", "4 services", "blue"],
              ["production", "9 services", "green"],
            ].map(([name, count, tone]) => (
              <div className={`cd-env-row is-${tone}`} key={name}>
                <Dot tone={tone === "green" ? "green" : "cyan"} />
                <span>{name}</span>
                <small>{count}</small>
              </div>
            ))}
          </div>
          <div className="cd-intro-map">
            <svg viewBox="0 0 360 170" aria-hidden="true">
              <path d="M30 85 H100 M100 85 C150 85 150 40 200 40 M100 85 C150 85 150 130 200 130 M200 40 H300 M200 130 H300" />
              <circle cx="30" cy="85" r="5" />
              <circle cx="100" cy="85" r="5" />
              <circle cx="200" cy="40" r="5" />
              <circle cx="200" cy="130" r="5" />
              <circle cx="300" cy="85" r="5" />
            </svg>
            <span className="cd-map-tag cd-map-tag-a">Gateway</span>
            <span className="cd-map-tag cd-map-tag-b">Compute</span>
            <span className="cd-map-tag cd-map-tag-c">Database</span>
          </div>
        </div>
        <div className="cd-intro-bottom">
          <div className="cd-intro-activity">
            <PanelLabel>Deployment workflow</PanelLabel>
            {[
              ["Commit received", "done"],
              ["Build image", "done"],
              ["Run tests", "done"],
              ["Deploy to staging", "run"],
            ].map(([label, state]) => (
              <div className="cd-workflow-row" key={label}>
                <span className={`cd-workflow-icon is-${state}`}>{state === "done" ? <Check size={11} /> : <RefreshCw size={11} />}</span>
                <span>{label}</span>
                <small className="cd-mono">{state === "done" ? "complete" : "running"}</small>
              </div>
            ))}
          </div>
          <div className="cd-intro-metrics">
            <PanelLabel>Resource usage</PanelLabel>
            <ResourceRow name="Application servers" value={62} detail="6 / 10" />
            <ResourceRow name="Database" value={38} tone="blue" detail="380 GB" />
            <ResourceRow name="Object storage" value={54} tone="violet" detail="2.1 TB" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function InfrastructureVisual() {
  return (
    <div className="cd-dashboard cd-infra-dashboard" role="img" aria-label="Cloud infrastructure architecture diagram with application servers, database, storage, networking and monitoring panels using sample data">
      <Window title="Infrastructure / production" meta="region overview" className="cd-infra-window">
        <div className="cd-infra-grid">
          <div className="cd-infra-side">
            <PanelLabel>Resource groups</PanelLabel>
            {[
              ["Compute cluster", <Cpu key="cpu" size={14} />, "8 nodes"],
              ["Database tier", <Database key="database" size={14} />, "3 nodes"],
              ["Object storage", <HardDrive key="storage" size={14} />, "2.1 TB"],
              ["Virtual network", <Network key="network" size={14} />, "4 subnets"],
            ].map(([label, icon, meta]) => (
              <div className="cd-side-row" key={label as string}>
                <span className="cd-side-icon">{icon}</span>
                <span>{label}</span>
                <small>{meta}</small>
              </div>
            ))}
            <PanelLabel>Load distribution</PanelLabel>
            <ResourceRow name="App server 01" value={58} detail="58%" />
            <ResourceRow name="App server 02" value={42} tone="blue" detail="42%" />
          </div>
          <div className="cd-infra-map">
            <svg viewBox="0 0 520 320" aria-hidden="true">
              <rect x="12" y="12" width="496" height="296" rx="18" className="cd-map-boundary" />
              <path d="M260 58 V102 M260 102 H125 V146 M260 102 H395 V146 M125 186 V230 H260 M395 186 V230 H260 M260 230 V270" />
              <circle cx="260" cy="58" r="6" />
              <circle cx="125" cy="102" r="5" />
              <circle cx="395" cy="102" r="5" />
              <circle cx="125" cy="186" r="5" />
              <circle cx="395" cy="186" r="5" />
              <circle cx="260" cy="230" r="5" />
            </svg>
            <div className="cd-map-node cd-map-node-a"><Network size={16} /><span>Load balancer</span></div>
            <div className="cd-map-node cd-map-node-b"><Server size={16} /><span>App servers</span></div>
            <div className="cd-map-node cd-map-node-c"><Server size={16} /><span>Worker nodes</span></div>
            <div className="cd-map-node cd-map-node-d"><Database size={16} /><span>Database</span></div>
            <div className="cd-map-node cd-map-node-e"><HardDrive size={16} /><span>Storage</span></div>
            <div className="cd-map-node cd-map-node-f"><Activity size={16} /><span>Monitoring</span></div>
            <span className="cd-map-zone">cloud environment · sample architecture</span>
          </div>
        </div>
        <div className="cd-infra-foot">
          <Metric label="Compute" value="08" unit="nodes" />
          <Metric label="Network" value="04" unit="subnets" tone="blue" />
          <Metric label="Storage" value="2.1" unit="TB" tone="violet" />
          <Metric label="Alerts" value="00" unit="open" tone="green" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function MigrationVisual() {
  return (
    <div className="cd-dashboard cd-migration-dashboard" role="img" aria-label="Cloud migration workflow from on-premise infrastructure through planning and migration to cloud environment, testing and validation">
      <div className="cd-migration-panel is-source">
        <div className="cd-migration-head"><Server size={15} /><span>On-premise infrastructure</span></div>
        <div className="cd-rack" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <div className="cd-rack-unit" key={n}>
              <span className="cd-mono">node-0{n}</span>
              <i /><i /><i />
            </div>
          ))}
        </div>
        <div className="cd-migration-list">
          <span><Database size={13} /> Local database</span>
          <span><FolderGit2 size={13} /> Application files</span>
        </div>
      </div>

      <div className="cd-migration-track">
        {[
          ["01", "Assessment", "done"],
          ["02", "Migration planning", "done"],
          ["03", "Application & database migration", "run"],
          ["04", "Cloud environment", "next"],
          ["05", "Testing & validation", "next"],
        ].map(([number, label, state]) => (
          <div className={`cd-migration-step is-${state}`} key={number}>
            <span className="cd-migration-number">{number}</span>
            <span className="cd-migration-label">{label}</span>
            <ArrowDown size={13} aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="cd-migration-panel is-target">
        <div className="cd-migration-head"><Cloud size={15} /><span>Cloud environment</span><Dot tone="green" /></div>
        <div className="cd-cloud-cards">
          <MiniNode icon={<Server size={15} />} label="Application servers" meta="2 instances" tone="cyan" />
          <MiniNode icon={<Database size={15} />} label="Managed database" meta="migrating" tone="blue" />
          <MiniNode icon={<HardDrive size={15} />} label="Cloud storage" meta="configured" tone="green" />
        </div>
        <div className="cd-migration-progress">
          <div><span>Data transfer</span><b className="cd-mono">in progress</b></div>
          <Bar value={68} />
          <div><span>Validation</span><b className="cd-mono">queued</b></div>
          <Bar value={24} tone="blue" />
        </div>
        <div className="cd-migration-note"><CircleCheck size={13} /> Rollback plan documented</div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function AppDevVisual() {
  return (
    <div className="cd-dashboard cd-app-dashboard" role="img" aria-label="Cloud application dashboard showing business software interface, API services, database modules and deployment status with sample data">
      <Window title="Business Operations / overview" meta="cloud application" className="cd-app-window">
        <div className="cd-app-shell">
          <aside className="cd-app-sidebar">
            <span className="cd-app-logo"><Layers3 size={15} /> OpsSuite</span>
            {["Overview", "Applications", "Customers", "Reports", "Integrations"].map((item, index) => (
              <span className={index === 0 ? "is-active" : ""} key={item}>{item}</span>
            ))}
          </aside>
          <div className="cd-app-main">
            <div className="cd-app-top"><span>Workspace overview</span><span className="cd-mono">last 30 days</span></div>
            <div className="cd-app-metrics">
              <Metric label="Active records" value="2,480" tone="cyan" />
              <Metric label="API requests" value="18.4" unit="k" tone="blue" />
              <Metric label="Modules" value="12" tone="violet" />
            </div>
            <div className="cd-app-table">
              <div className="cd-app-table-head"><span>Module</span><span>Service</span><span>Status</span></div>
              {[
                ["Customer portal", "web-app", "running"],
                ["Billing API", "api-service", "running"],
                ["Reporting", "worker", "syncing"],
              ].map(([module, service, status]) => (
                <div className="cd-app-table-row" key={module}>
                  <span>{module}</span>
                  <span className="cd-mono">{service}</span>
                  <span className={`cd-badge ${status === "running" ? "is-green" : "is-cyan"}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="cd-app-services">
            <PanelLabel>Backend services</PanelLabel>
            <MiniNode icon={<Code2 size={14} />} label="REST API" meta="v2 endpoints" />
            <MiniNode icon={<Database size={14} />} label="Database" meta="primary" tone="blue" />
            <MiniNode icon={<Boxes size={14} />} label="App modules" meta="12 active" tone="violet" />
            <PanelLabel>Deployment</PanelLabel>
            <StatusLine label="web-app" value="v2.4.1" />
            <StatusLine label="api-service" value="v1.8.0" />
            <div className="cd-app-chart"><TinyChart line={chartTwo} fillId="appFill" /></div>
          </aside>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function PipelineVisual() {
  const stages = [
    ["Commit", GitBranch],
    ["Build", Boxes],
    ["Test", Check],
    ["Staging", Server],
    ["Deploy", Rocket],
    ["Monitor", Activity],
  ] as const;
  return (
    <div className="cd-dashboard cd-pipeline-dashboard" role="img" aria-label="CI CD pipeline dashboard with code, version control, build, test, staging, deployment and monitoring stages using sample data">
      <Window title="Delivery pipeline / web-application" meta="main branch" className="cd-pipeline-window">
        <div className="cd-pipeline-top">
          <span className="cd-mono">commit 8f2c1ab</span>
          <span>Update invoice API</span>
          <span className="cd-badge is-green">build passed</span>
        </div>
        <div className="cd-pipeline-stages">
          {stages.map(([label, Icon], index) => (
            <div className={`cd-stage${index === 4 ? " is-active" : ""}${index < 4 ? " is-done" : ""}`} key={label}>
              <span className="cd-stage-icon"><Icon size={15} /></span>
              <strong>{label}</strong>
              <small className="cd-mono">{index < 4 ? "0" + (index + 1) + "s" : index === 4 ? "running" : "pending"}</small>
            </div>
          ))}
        </div>
        <div className="cd-pipeline-bottom">
          <div className="cd-console">
            <PanelLabel>Build log</PanelLabel>
            <div className="cd-console-lines">
              <p><span>$</span> npm run build</p>
              <p><span>✓</span> compiled 42 modules</p>
              <p><span>✓</span> unit tests: 128 passed</p>
              <p><span>✓</span> image pushed to registry</p>
              <p><span>›</span> deploying to production…</p>
            </div>
          </div>
          <div className="cd-pipeline-env">
            <PanelLabel>Environments</PanelLabel>
            <StatusLine label="development" value="synced" />
            <StatusLine label="staging" value="verified" />
            <StatusLine label="production" value="deploying" state="run" />
            <div className="cd-pipeline-release"><span>Release</span><b className="cd-mono">v2.4.1</b></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function ServerVisual() {
  const servers = [
    ["web-01", "Ubuntu", 42, 56, "healthy"],
    ["api-02", "Ubuntu", 68, 48, "healthy"],
    ["db-01", "Linux", 54, 72, "review"],
    ["worker-03", "Windows", 31, 44, "healthy"],
  ] as const;
  return (
    <div className="cd-dashboard cd-server-dashboard" role="img" aria-label="Server management console showing server health, CPU, memory, storage and alerts with sample data">
      <Window title="Server operations / fleet" meta="4 servers" className="cd-server-window">
        <div className="cd-server-head">
          <div><PanelLabel>Fleet health</PanelLabel><strong className="cd-server-big">4 <small>servers monitored</small></strong></div>
          <div className="cd-server-head-meter"><ResourceRow name="CPU utilization" value={49} detail="49%" /><ResourceRow name="Memory usage" value={55} tone="blue" detail="55%" /></div>
        </div>
        <div className="cd-server-table">
          <div className="cd-server-row is-head"><span>Server</span><span>OS</span><span>CPU</span><span>Memory</span><span>Status</span></div>
          {servers.map(([name, os, cpu, memory, status]) => (
            <div className="cd-server-row" key={name}>
              <span className="cd-server-name"><Server size={13} />{name}</span>
              <span className="cd-mono">{os}</span>
              <span><Bar value={cpu} /></span>
              <span><Bar value={memory} tone="blue" /></span>
              <span className={`cd-badge ${status === "healthy" ? "is-green" : "is-amber"}`}>{status}</span>
            </div>
          ))}
        </div>
        <div className="cd-server-foot">
          <div className="cd-alert-card">
            <PanelLabel>Recent alerts</PanelLabel>
            <StatusLine label="db-01 · storage threshold" value="review" state="warn" />
            <StatusLine label="web-01 · backup completed" value="done" />
          </div>
          <div className="cd-alert-card">
            <PanelLabel>Maintenance queue</PanelLabel>
            <StatusLine label="Security updates" value="2 pending" state="warn" />
            <StatusLine label="Log rotation" value="scheduled" state="run" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CapabilityVisual({ id }: { id: string }) {
  switch (id) {
    case "architecture":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-map">
            <svg viewBox="0 0 280 150" aria-hidden="true"><path d="M20 75 H80 M80 75 C130 75 130 35 180 35 M80 75 C130 75 130 115 180 115 M180 35 H250 M180 115 H250" /><circle cx="20" cy="75" r="4" /><circle cx="80" cy="75" r="4" /><circle cx="180" cy="35" r="4" /><circle cx="180" cy="115" r="4" /><circle cx="250" cy="75" r="4" /></svg>
            <span className="cd-cap-tag cd-cap-tag-1">Gateway</span><span className="cd-cap-tag cd-cap-tag-2">Compute</span><span className="cd-cap-tag cd-cap-tag-3">Data</span>
          </div>
          <div className="cd-cap-rows"><StatusLine label="Compute plan" value="8 nodes" /><StatusLine label="Network zones" value="4" /><StatusLine label="Storage tiers" value="3" /></div>
        </div>
      );
    case "provisioning":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-rows is-wide"><StatusLine label="server-node-03" value="created" /><StatusLine label="database-replica" value="creating" state="run" /><StatusLine label="storage-bucket" value="created" /><StatusLine label="network-rules" value="queued" state="warn" /></div>
          <div className="cd-cap-meter"><ResourceRow name="Provisioning progress" value={72} detail="3 / 4" /></div>
        </div>
      );
    case "environment":
      return (
        <div className="cd-cap-visual">
          <div className="cd-env-tabs"><span>development</span><span>staging</span><span className="is-active">production</span></div>
          <div className="cd-cap-rows"><StatusLine label="Application config" value="versioned" /><StatusLine label="Environment variables" value="12 set" /><StatusLine label="Access groups" value="3 roles" /><StatusLine label="Change log" value="updated" /></div>
        </div>
      );
    case "automation":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-flow">{["Build", "Test", "Stage", "Deploy"].map((s, i) => <span key={s} className={i === 3 ? "is-active" : ""}>{s}</span>)}</div>
          <div className="cd-cap-rows"><StatusLine label="Latest run" value="passed" /><StatusLine label="Test stage" value="128 checks" /><StatusLine label="Release target" value="production" state="run" /></div>
        </div>
      );
    case "monitoring":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-chart"><TinyChart line={chartOne} fillId="capFill" /><span className="cd-mono">application availability · sample</span></div>
          <div className="cd-cap-rows"><StatusLine label="Services tracked" value="12" /><StatusLine label="Open alerts" value="1" state="warn" /></div>
        </div>
      );
    case "administration":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-rows is-wide"><StatusLine label="Update window" value="scheduled" state="run" /><StatusLine label="User access review" value="complete" /><StatusLine label="Backup job" value="complete" /><StatusLine label="Service restart" value="pending" state="warn" /></div>
          <div className="cd-cap-meter"><ResourceRow name="Server queue" value={36} tone="green" detail="2 to review" /></div>
        </div>
      );
    case "integration":
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-flow">{["API", "Database", "Storage", "Webhooks"].map((s) => <span key={s}>{s}</span>)}</div>
          <div className="cd-cap-rows"><StatusLine label="Endpoints connected" value="8" /><StatusLine label="Data sync" value="active" state="run" /><StatusLine label="Credentials" value="managed" /></div>
        </div>
      );
    default:
      return (
        <div className="cd-cap-visual">
          <div className="cd-cap-rows is-wide"><StatusLine label="Configuration updates" value="3 logged" /><StatusLine label="Backup verification" value="complete" /><StatusLine label="Patch review" value="scheduled" state="run" /><StatusLine label="Troubleshooting" value="none open" /></div>
          <div className="cd-cap-meter"><ResourceRow name="Maintenance plan" value={64} tone="violet" detail="Q3 cycle" /></div>
        </div>
      );
  }
}

export function SolutionVisual({ id }: { id: string }) {
  switch (id) {
    case "hosting":
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><Server size={14} /> Business applications <span className="cd-badge is-green">hosted</span></div>
          <div className="cd-solution-grid"><MiniNode icon={<Layers3 size={14} />} label="Finance portal" meta="app server" /><MiniNode icon={<Database size={14} />} label="Records DB" meta="managed" tone="blue" /><MiniNode icon={<Activity size={14} />} label="Monitoring" meta="enabled" tone="green" /></div>
          <ResourceRow name="Resource allocation" value={58} detail="sample" />
        </div>
      );
    case "web":
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><Network size={14} /> Web infrastructure <span className="cd-badge is-cyan">edge ready</span></div>
          <div className="cd-solution-flow"><span>CDN</span><ArrowRight size={12} /><span>Web app</span><ArrowRight size={12} /><span>API</span><ArrowRight size={12} /><span>DB</span></div>
          <div className="cd-cap-chart"><TinyChart line={chartTwo} fillId="webFill" /><span className="cd-mono">requests · sample</span></div>
        </div>
      );
    case "product":
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><Boxes size={14} /> Product platform <span className="cd-badge is-green">operational</span></div>
          <div className="cd-solution-grid"><MiniNode icon={<Boxes size={14} />} label="Core modules" meta="6 active" /><MiniNode icon={<GitBranch size={14} />} label="Release train" meta="weekly" tone="blue" /><MiniNode icon={<Gauge size={14} />} label="Usage view" meta="sample data" tone="violet" /></div>
        </div>
      );
    case "migration":
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><ArrowRight size={14} /> Migration workload <span className="cd-badge is-cyan">in progress</span></div>
          <div className="cd-solution-flow"><span>On-prem</span><ArrowRight size={12} /><span>Plan</span><ArrowRight size={12} /><span>Cloud</span><ArrowRight size={12} /><span>Validate</span></div>
          <ResourceRow name="Workloads moved" value={70} detail="7 / 10" tone="green" />
        </div>
      );
    case "devops":
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><Workflow size={14} /> Delivery pipelines <span className="cd-badge is-green">3 active</span></div>
          <div className="cd-cap-flow">{["Build", "Test", "Stage", "Deploy"].map((s) => <span key={s}>{s}</span>)}</div>
          <div className="cd-cap-rows"><StatusLine label="Last release" value="v2.4.1" /><StatusLine label="Automation coverage" value="4 stages" state="run" /></div>
        </div>
      );
    default:
      return (
        <div className="cd-solution-visual">
          <div className="cd-solution-head"><Activity size={14} /> Server operations <span className="cd-badge is-green">monitored</span></div>
          <div className="cd-cap-rows"><StatusLine label="Server fleet" value="4 nodes" /><StatusLine label="Alerts" value="1 review" state="warn" /><StatusLine label="Maintenance" value="scheduled" state="run" /></div>
        </div>
      );
  }
}

export function MonitoringVisual() {
  return (
    <div className="cd-dashboard cd-monitoring-dashboard" role="img" aria-label="Cloud monitoring dashboard with server status, CPU, memory, storage, application status, charts, alerts and deployment activity using illustrative sample data">
      <Window title="Cloud operations / overview" meta="sample data" className="cd-monitoring-window">
        <div className="cd-monitor-metrics">
          <Metric label="Server status" value="4 / 4" note="responding" />
          <Metric label="Avg. CPU" value="43" unit="%" tone="blue" note="sample" />
          <Metric label="Memory usage" value="56" unit="%" tone="violet" note="sample" />
          <Metric label="Open alerts" value="1" note="under review" tone="green" />
        </div>
        <div className="cd-monitor-main">
          <div className="cd-monitor-chart">
            <div className="cd-chart-head"><span>Application performance</span><span className="cd-mono">last 24 hours · sample</span></div>
            <TinyChart line={chartOne} fillId="monitorFill" />
            <div className="cd-chart-legend"><span><i className="is-cyan" />Response activity</span><span><i className="is-violet" />Resource usage</span></div>
          </div>
          <div className="cd-monitor-resources">
            <PanelLabel>Cloud resources</PanelLabel>
            <ResourceRow name="Compute" value={64} detail="8 vCPU" />
            <ResourceRow name="Memory" value={48} tone="blue" detail="24 GB" />
            <ResourceRow name="Storage" value={72} tone="violet" detail="1.4 TB" />
            <ResourceRow name="Database" value={38} tone="green" detail="380 GB" />
          </div>
        </div>
        <div className="cd-monitor-bottom">
          <div>
            <PanelLabel>System alerts</PanelLabel>
            <StatusLine label="db-01 · storage threshold" value="review" state="warn" />
            <StatusLine label="api-02 · auto scaling event" value="resolved" />
            <StatusLine label="web-01 · backup completed" value="done" />
          </div>
          <div>
            <PanelLabel>Deployment activity</PanelLabel>
            <StatusLine label="web-app v2.4.1" value="deployed" state="run" />
            <StatusLine label="api-service v1.8.0" value="verified" />
            <StatusLine label="worker v1.2.6" value="queued" state="warn" />
          </div>
          <div className="cd-monitor-donut">
            <svg viewBox="0 0 90 90" aria-hidden="true">
              <circle cx="45" cy="45" r="32" className="cd-donut-bg" />
              <circle cx="45" cy="45" r="32" className="cd-donut-value" strokeDasharray="150 201" />
            </svg>
            <span>72<small>% sample</small></span>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function DevOpsVisual() {
  return (
    <div className="cd-dashboard cd-devops-dashboard" role="img" aria-label="DevOps automation workflow from development through version control, build, test, staging, production and monitoring">
      <div className="cd-devops-code">
        <Window title="pipeline.yml" meta="repository" className="cd-code-window" dense>
          <div className="cd-code-lines">
            <p><span className="cd-code-line">01</span><span className="cd-code-key">name:</span> application-delivery</p>
            <p><span className="cd-code-line">02</span><span className="cd-code-key">on:</span> push</p>
            <p><span className="cd-code-line">03</span><span className="cd-code-key">stages:</span></p>
            <p><span className="cd-code-line">04</span>&nbsp;&nbsp;- build</p>
            <p><span className="cd-code-line">05</span>&nbsp;&nbsp;- test</p>
            <p><span className="cd-code-line">06</span>&nbsp;&nbsp;- stage</p>
            <p><span className="cd-code-line">07</span>&nbsp;&nbsp;- deploy</p>
            <p><span className="cd-code-line">08</span><span className="cd-code-key">deploy:</span> production</p>
          </div>
        </Window>
      </div>
      <div className="cd-devops-pipeline">
        <div className="cd-devops-steps">
          {[
            ["Development", <Code2 key="development" size={14} />],
            ["Version control", <GitBranch key="version-control" size={14} />],
            ["Build", <Boxes key="build" size={14} />],
            ["Test", <Check key="test" size={14} />],
            ["Staging", <Server key="staging" size={14} />],
            ["Production", <Cloud key="production" size={14} />],
            ["Monitoring", <Activity key="monitoring" size={14} />],
          ].map(([label, icon], index) => (
            <div className={`cd-devops-step${index === 5 ? " is-active" : ""}`} key={label as string}>
              <span>{icon}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>
        <div className="cd-devops-status">
          <StatusLine label="Workflow run #184" value="in progress" state="run" />
          <StatusLine label="Test suite" value="128 passed" />
          <StatusLine label="Production rollout" value="deploying" state="run" />
          <StatusLine label="Post-deploy checks" value="queued" state="warn" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function MigrationJourneyVisual() {
  return (
    <div className="cd-dashboard cd-journey-dashboard" role="img" aria-label="Cloud migration and modernization journey from existing infrastructure to assessment, planning, migration, testing and cloud environment">
      <div className="cd-journey-bar">
        {[
          ["Existing infrastructure", "Server"],
          ["Assessment", "Gauge"],
          ["Migration planning", "Workflow"],
          ["Cloud migration", "ArrowRight"],
          ["Testing", "Check"],
          ["Cloud environment", "Cloud"],
        ].map(([label, icon], index) => (
          <div className={`cd-journey-step${index === 3 ? " is-active" : ""}${index < 3 ? " is-done" : ""}`} key={label}>
            <span>{icon === "Server" ? <Server size={15} /> : icon === "Gauge" ? <Gauge size={15} /> : icon === "Workflow" ? <Workflow size={15} /> : icon === "ArrowRight" ? <ArrowRight size={15} /> : icon === "Check" ? <Check size={15} /> : <Cloud size={15} />}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <Window title="Migration workspace / workloads" meta="sample plan" className="cd-journey-window">
        <div className="cd-journey-grid">
          <div className="cd-journey-list">
            <PanelLabel>Workload inventory</PanelLabel>
            {[
              ["web-application", "ready", "done"],
              ["orders-database", "migrating", "run"],
              ["file-storage", "assessed", "done"],
              ["reporting-worker", "queued", "warn"],
            ].map(([name, status, state]) => (
              <div className="cd-journey-row" key={name}>
                <span>{name}</span>
                <span className={`cd-badge is-${state === "done" ? "green" : state === "run" ? "cyan" : "amber"}`}>{status}</span>
              </div>
            ))}
          </div>
          <div className="cd-journey-detail">
            <PanelLabel>Target environment</PanelLabel>
            <div className="cd-journey-arch">
              <MiniNode icon={<Server size={14} />} label="Application" meta="2 instances" />
              <ArrowRight size={14} />
              <MiniNode icon={<Database size={14} />} label="Database" meta="managed" tone="blue" />
              <ArrowRight size={14} />
              <MiniNode icon={<Activity size={14} />} label="Validation" meta="testing" tone="green" />
            </div>
            <ResourceRow name="Migration progress" value={62} detail="5 / 8 workloads" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function TechEcosystemVisual() {
  const nodes = [
    ["Cloud platform", <Cloud key="cloud" size={16} />],
    ["Infrastructure", <Server key="infrastructure" size={16} />],
    ["Application", <Layers3 key="application" size={16} />],
    ["CI/CD", <GitBranch key="cicd" size={16} />],
    ["Monitoring", <Activity key="monitoring" size={16} />],
    ["Operations", <Workflow key="operations" size={16} />],
  ] as const;
  return (
    <div className="cd-tech-ecosystem" role="img" aria-label="Cloud technology ecosystem flow from cloud platform through infrastructure, application, CI CD, monitoring and operations">
      <div className="cd-tech-flow">
        {nodes.map(([label, icon], index) => (
          <div className="cd-tech-node" key={label}>
            <span className="cd-tech-icon">{icon}</span>
            <strong>{label}</strong>
            {index < nodes.length - 1 ? <ArrowRight className="cd-tech-arrow" size={15} /> : null}
          </div>
        ))}
      </div>
      <div className="cd-tech-panels">
        <div><PanelLabel>Provisioning</PanelLabel><StatusLine label="Compute & network" value="configured" /><StatusLine label="Storage" value="attached" /></div>
        <div><PanelLabel>Delivery</PanelLabel><StatusLine label="Build & test" value="automated" state="run" /><StatusLine label="Release" value="tracked" /></div>
        <div><PanelLabel>Operations</PanelLabel><StatusLine label="Dashboards" value="active" /><StatusLine label="Alerts" value="review" state="warn" /></div>
      </div>
    </div>
  );
}

export function WhyVisual() {
  return (
    <div className="cd-why-visual" role="img" aria-label="Editorial composition of cloud architecture, deployment interface and monitoring dashboards with sample data">
      <div className="cd-why-stack">
        <Window title="Architecture / environments" meta="3 regions" className="cd-why-window-main">
          <div className="cd-why-map">
            <svg viewBox="0 0 320 190" aria-hidden="true">
              <path d="M40 95 H110 M110 95 C160 95 160 45 210 45 M110 95 C160 95 160 145 210 145 M210 45 H280 M210 145 H280" />
              <circle cx="40" cy="95" r="5" /><circle cx="110" cy="95" r="5" /><circle cx="210" cy="45" r="5" /><circle cx="210" cy="145" r="5" /><circle cx="280" cy="95" r="5" />
            </svg>
            <span className="cd-why-tag cd-why-tag-a">Access</span>
            <span className="cd-why-tag cd-why-tag-b">Compute</span>
            <span className="cd-why-tag cd-why-tag-c">Data</span>
          </div>
          <div className="cd-why-status"><StatusLine label="Environments" value="3 active" /><StatusLine label="Monitoring" value="enabled" /></div>
        </Window>
        <Window title="Deployment activity" meta="sample" className="cd-why-window-small" dense>
          <div className="cd-why-deploy">
            <StatusLine label="Build #184" value="passed" />
            <StatusLine label="Staging" value="verified" />
            <StatusLine label="Production" value="deploying" state="run" />
          </div>
        </Window>
        <div className="cd-why-float">
          <span><Activity size={14} /> Monitoring</span>
          <TinyChart line={chartTwo} fillId="whyFill" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div className="cd-dashboard cd-security-dashboard" role="img" aria-label="Cloud security and infrastructure management diagram showing access zones, permissions and monitoring with sample data">
      <Window title="Access & infrastructure / overview" meta="sample configuration" className="cd-security-window">
        <div className="cd-security-grid">
          <div className="cd-security-zones">
            <PanelLabel>Network zones</PanelLabel>
            <div className="cd-zone is-public"><span>Public edge</span><small>HTTPS / entry</small></div>
            <div className="cd-zone is-app"><span>Application zone</span><small>App servers</small></div>
            <div className="cd-zone is-data"><span>Data zone</span><small>Database / storage</small></div>
            <div className="cd-zone-note"><LockKeyhole size={13} /> Access reviewed per role</div>
          </div>
          <div className="cd-security-matrix">
            <PanelLabel>Permission matrix</PanelLabel>
            <div className="cd-matrix-row is-head"><span>Role</span><span>App</span><span>Data</span><span>Deploy</span></div>
            {[
              ["Developer", "read", "—", "staging"],
              ["Operations", "read", "read", "approve"],
              ["Admin", "manage", "manage", "manage"],
            ].map(([role, app, data, deploy]) => (
              <div className="cd-matrix-row" key={role}>
                <span>{role}</span><span>{app}</span><span>{data}</span><span>{deploy}</span>
              </div>
            ))}
          </div>
          <div className="cd-security-ops">
            <PanelLabel>Operational controls</PanelLabel>
            <StatusLine label="Access review" value="scheduled" state="run" />
            <StatusLine label="Backup job" value="completed" />
            <StatusLine label="Security updates" value="2 planned" state="warn" />
            <StatusLine label="Monitoring" value="enabled" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div className="cd-benefits-visual" role="img" aria-label="Before and after infrastructure comparison showing manual workflows versus organized cloud infrastructure and monitoring dashboards">
      <div className="cd-before">
        <div className="cd-benefit-head"><span className="cd-tag is-amber">Before</span><strong>Disconnected workflows</strong></div>
        <div className="cd-before-list">
          <span>Manual deployments</span>
          <span>Disconnected environments</span>
          <span>Limited infrastructure visibility</span>
          <span>Complex application hosting</span>
          <span>Manual operational workflows</span>
        </div>
        <div className="cd-before-console"><Terminal size={13} /><span>deploy.sh — run manually</span><span className="cd-mono">waiting</span></div>
      </div>
      <div className="cd-benefit-arrow"><ArrowRight size={20} /></div>
      <div className="cd-after">
        <div className="cd-benefit-head"><span className="cd-tag is-cyan">After</span><strong>Connected cloud operations</strong></div>
        <div className="cd-after-grid">
          <MiniNode icon={<Cloud size={14} />} label="Organized infrastructure" meta="environments" />
          <MiniNode icon={<Workflow size={14} />} label="Automated delivery" meta="pipelines" tone="blue" />
          <MiniNode icon={<Activity size={14} />} label="Application monitoring" meta="dashboards" tone="green" />
          <MiniNode icon={<Server size={14} />} label="Managed servers" meta="operations" tone="violet" />
        </div>
        <div className="cd-after-status"><StatusLine label="Deployment workflow" value="automated" state="run" /><StatusLine label="Infrastructure view" value="centralized" /></div>
      </div>
      <IllustrationNote>Conceptual workflow comparison · illustrative</IllustrationNote>
    </div>
  );
}

export function CtaVisual() {
  return (
    <div className="cd-cta-visual" aria-hidden="true">
      <div className="cd-cta-window cd-cta-window-one">
        <span className="cd-window-title">Infrastructure overview</span>
        <div className="cd-cta-rows"><StatusLine label="app servers" value="healthy" /><StatusLine label="database" value="healthy" /><StatusLine label="monitoring" value="enabled" state="run" /></div>
      </div>
      <div className="cd-cta-window cd-cta-window-two">
        <span className="cd-window-title">Delivery pipeline</span>
        <div className="cd-cap-flow">{["Build", "Test", "Deploy"].map((s) => <span key={s}>{s}</span>)}</div>
      </div>
      <div className="cd-cta-window cd-cta-window-three">
        <span className="cd-window-title">Resource usage</span>
        <ResourceRow name="Compute" value={64} detail="sample" />
        <ResourceRow name="Storage" value={48} tone="blue" detail="sample" />
      </div>
      <div className="cd-cta-orbit"><span /><span /><span /><span /></div>
    </div>
  );
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    discovery: <FileCode2 size={15} />,
    assessment: <Gauge size={15} />,
    architecture: <Network size={15} />,
    configuration: <Server size={15} />,
    cicd: <GitBranch size={15} />,
    testing: <Check size={15} />,
    launch: <Cloud size={15} />,
    monitoring: <Activity size={15} />,
  };
  return (
    <div className="cd-process-mini" aria-hidden="true">
      <span>{icons[kind] ?? <Layers3 size={15} />}</span>
      <i /><i /><i />
    </div>
  );
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    requirements: <FileCode2 size={15} />,
    architecture: <Network size={15} />,
    provisioning: <Server size={15} />,
    deployment: <Cloud size={15} />,
    pipeline: <GitBranch size={15} />,
    monitoring: <Activity size={15} />,
    maintenance: <RefreshCw size={15} />,
  };
  return (
    <div className="cd-workflow-mini" aria-hidden="true">
      <span>{icons[kind] ?? <Layers3 size={15} />}</span>
      <i /><i />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div className="cd-industries-visual" aria-hidden="true">
      <Window title="Industry solutions / dashboard" meta="sample" className="cd-industries-window" dense>
        <div className="cd-industries-visual-grid">
          <div><PanelLabel>Application status</PanelLabel><StatusLine label="Portals" value="running" /><StatusLine label="APIs" value="running" /><StatusLine label="Data sync" value="active" state="run" /></div>
          <div><PanelLabel>Environments</PanelLabel><ResourceRow name="Hosting" value={62} detail="sample" /><ResourceRow name="Monitoring" value={48} tone="blue" detail="sample" /></div>
        </div>
      </Window>
    </div>
  );
}

export function SecurityIcon() {
  return <ShieldCheck size={18} aria-hidden="true" />;
}
