import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Network,
  PlayCircle,
  Plug,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRoundCog,
  UsersRound,
  Video,
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

const learningLine = "M0 72 L28 66 L56 69 L84 52 L112 58 L140 40 L168 46 L196 30 L224 36 L252 22 L280 28 L320 12";
const attendanceLine = "M0 70 L30 68 L60 61 L90 65 L120 52 L150 56 L180 42 L210 48 L240 32 L270 38 L300 24 L320 20";
const resultsLine = "M0 76 L32 70 L64 74 L96 56 L128 62 L160 44 L192 50 L224 34 L256 40 L288 24 L320 18";

type Tone = "cyan" | "blue" | "violet" | "green" | "amber";

function CourseThumb({ icon, tone = "cyan", label }: { icon: React.ReactNode; tone?: Tone; label?: string }) {
  return (
    <span className={`ms-course-thumb is-${tone}`}>
      <span className="ms-course-thumb-art">{icon}</span>
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

function StudentRow({ name, program, status, tone = "green" }: { name: string; program: string; status: string; tone?: Tone }) {
  return (
    <div className="ms-student-row">
      <span className={`ms-student-avatar is-${tone}`}>{name.slice(0, 1)}</span>
      <span className="ms-student-row-name">{name}<small>{program}</small></span>
      <span className={`ms-badge is-${tone}`}>{status}</span>
    </div>
  );
}

function ModuleRow({ title, meta, value }: { title: string; meta: string; value: number }) {
  return (
    <div className="ms-module-row">
      <span><BookOpen size={12} /> {title}<small>{meta}</small></span>
      <span className="ms-mono">{value}%</span>
      <span className="ms-mini-bar"><i style={{ width: `${value}%` }} /></span>
    </div>
  );
}

function ExamRow({ code, title, status, tone = "cyan" }: { code: string; title: string; status: string; tone?: Tone }) {
  return (
    <div className="ms-exam-row">
      <span className="ms-mono">{code}</span>
      <span>{title}</span>
      <span className={`ms-badge is-${tone}`}>{status}</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="ms-hero-visual"
      role="img"
      aria-label="Illustrative education management dashboard showing students, courses, attendance, online classes, examinations and learning analytics with sample data"
    >
      <div className="ms-hero-aurora" />
      <div className="ms-hero-gridlines" />
      <Window title="learn.royaltech / education workspace" meta="sample data" className="ms-hero-window">
        <div className="ms-edu-shell">
          <aside className="ms-edu-sidebar">
            <span className="ms-edu-logo"><GraduationCap size={15} /> EduSuite</span>
            <NavRow icon={<LayoutDashboard size={13} />} label="Overview" active />
            <NavRow icon={<UsersRound size={13} />} label="Students" />
            <NavRow icon={<BookOpen size={13} />} label="Courses" />
            <NavRow icon={<Video size={13} />} label="Live classes" />
            <NavRow icon={<ClipboardCheck size={13} />} label="Examinations" />
            <NavRow icon={<BarChart3 size={13} />} label="Analytics" />
            <NavRow icon={<Settings size={13} />} label="Settings" />
          </aside>

          <div className="ms-edu-main">
            <div className="ms-edu-top">
              <span>Education overview</span>
              <span className="ms-mono">current term · sample</span>
            </div>
            <div className="ms-edu-metrics">
              <Metric label="Active students" value="1,248" tone="cyan" note="sample" />
              <Metric label="Courses" value="36" tone="blue" note="sample" />
              <Metric label="Attendance" value="92%" tone="green" note="sample" />
              <Metric label="Exams scheduled" value="12" tone="violet" note="sample" />
            </div>
            <div className="ms-edu-split">
              <div className="ms-edu-courses">
                <PanelLabel>Learning activity</PanelLabel>
                <div className="ms-course-grid">
                  <div className="ms-course-card"><CourseThumb icon={<BookOpen size={19} />} tone="cyan" label="Science" /><strong>Biology — Cell Structure</strong><span className="ms-mono">Module 04 · 72%</span></div>
                  <div className="ms-course-card"><CourseThumb icon={<Code2 size={19} />} tone="violet" label="Skills" /><strong>Frontend Fundamentals</strong><span className="ms-mono">Module 02 · 48%</span></div>
                  <div className="ms-course-card"><CourseThumb icon={<BriefcaseBusiness size={19} />} tone="amber" label="Business" /><strong>Marketing Basics</strong><span className="ms-mono">Module 06 · 86%</span></div>
                </div>
                <div className="ms-chart-card">
                  <div className="ms-chart-head"><span>Learning progress</span><span className="ms-mono">sample</span></div>
                  <TinyChart line={learningLine} fillId="msHeroLearning" />
                </div>
              </div>
              <div className="ms-edu-side-panel">
                <PanelLabel>Live classes</PanelLabel>
                <div className="ms-live-card"><span className="ms-live-icon"><Video size={15} /></span><span>Physics — Motion<small>10:30 · Room B</small></span><Dot tone="green" /></div>
                <div className="ms-live-card"><span className="ms-live-icon is-blue"><Headphones size={15} /></span><span>Language Lab<small>12:00 · Online</small></span><Dot tone="cyan" /></div>
                <PanelLabel>Recent students</PanelLabel>
                <StudentRow name="A. Sharma" program="Class 11 · Science" status="active" />
                <StudentRow name="R. Verma" program="BCA · Semester 3" status="active" tone="blue" />
                <StudentRow name="M. Kaur" program="Commerce · Class 12" status="new" tone="amber" />
              </div>
            </div>
          </div>
        </div>
      </Window>
      <div className="ms-float ms-float-exam">
        <div className="ms-float-head"><ClipboardCheck size={13} /> <span>Examination</span><Dot tone="green" /></div>
        <div className="ms-float-row"><span>Unit test · Mathematics</span><span className="ms-mono">scheduled</span></div>
        <div className="ms-float-row"><span>Candidates</span><span className="ms-badge is-cyan">248</span></div>
      </div>
      <div className="ms-float ms-float-attendance">
        <div className="ms-float-head"><CalendarDays size={13} /> <span>Attendance</span></div>
        <div className="ms-float-row"><span>Today</span><b className="ms-mono">92%</b></div>
        <div className="ms-attendance-dots"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="ms-float ms-float-course">
        <BookOpen size={16} />
        <span>course modules</span>
        <b>organized</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div
      className="ms-intro-visual"
      role="img"
      aria-label="Illustrative education software map connecting student management, courses, learning, examinations, attendance and reporting with sample data"
    >
      <Window title="Education / system map" meta="workflows" className="ms-intro-window">
        <div className="ms-intro-head">
          <div className="ms-intro-portal">
            <PanelLabel>Student portal</PanelLabel>
            <div className="ms-intro-banner"><span>Your learning dashboard</span><small>Current term · sample</small></div>
            <div className="ms-module-list">
              <ModuleRow title="Applied Mathematics" meta="Week 06" value={76} />
              <ModuleRow title="Digital Communication" meta="Week 04" value={54} />
            </div>
          </div>
          <div className="ms-intro-flow">
            <PanelLabel>Connected workflows</PanelLabel>
            <MiniNode icon={<UsersRound size={14} />} label="Students" meta="records" />
            <MiniNode icon={<BookOpen size={14} />} label="Courses" meta="modules" tone="blue" />
            <MiniNode icon={<PlayCircle size={14} />} label="Learning" meta="activities" tone="violet" />
            <MiniNode icon={<ClipboardCheck size={14} />} label="Exams" meta="results" tone="green" />
          </div>
        </div>
        <div className="ms-intro-bottom">
          <div className="ms-intro-activity">
            <PanelLabel>Attendance &amp; performance</PanelLabel>
            <div className="ms-workflow-row"><span className="ms-workflow-icon"><Check size={11} /></span><span>Attendance recorded</span><small className="ms-mono">sample</small></div>
            <div className="ms-workflow-row"><span className="ms-workflow-icon"><Check size={11} /></span><span>Course progress updated</span><small className="ms-mono">sample</small></div>
            <div className="ms-workflow-row"><span className="ms-workflow-icon is-run"><RefreshCw size={11} /></span><span>Assessment review</span><small className="ms-mono">pending</small></div>
          </div>
          <div className="ms-intro-metrics">
            <PanelLabel>Educational reporting</PanelLabel>
            <ResourceRow name="Student records" value={78} detail="sample" />
            <ResourceRow name="Course completion" value={64} tone="blue" detail="sample" />
            <ResourceRow name="Exam readiness" value={71} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function LmsVisual() {
  return (
    <div className="ms-service-visual-inner" role="img" aria-label="Illustrative LMS dashboard showing courses, modules, instructor tools and learning progress with sample data">
      <Window title="LMS / instructor workspace" meta="sample" className="ms-lms-window" dense>
        <div className="ms-lms-layout">
          <div className="ms-lms-sidebar">
            <NavRow icon={<LayoutDashboard size={12} />} label="Dashboard" active />
            <NavRow icon={<BookOpen size={12} />} label="Courses" />
            <NavRow icon={<UsersRound size={12} />} label="Learners" />
            <NavRow icon={<ClipboardCheck size={12} />} label="Assessments" />
            <NavRow icon={<BarChart3 size={12} />} label="Reports" />
          </div>
          <div className="ms-lms-content">
            <div className="ms-lms-metrics">
              <Metric label="Enrolled" value="486" tone="cyan" note="sample" />
              <Metric label="Active courses" value="18" tone="blue" note="sample" />
              <Metric label="Submissions" value="312" tone="green" note="sample" />
            </div>
            <PanelLabel>Learning modules</PanelLabel>
            <div className="ms-module-list">
              <ModuleRow title="Introduction to Biology" meta="6 lessons" value={82} />
              <ModuleRow title="Data &amp; Statistics" meta="8 lessons" value={64} />
              <ModuleRow title="Business Communication" meta="5 lessons" value={91} />
            </div>
          </div>
          <div className="ms-lms-video">
            <div className="ms-video-frame"><PlayCircle size={18} /><span>Lesson preview<small>Video learning</small></span></div>
            <PanelLabel>Learning activity</PanelLabel>
            <div className="ms-workflow-row"><span className="ms-workflow-icon"><Check size={11} /></span><span>Module published</span><small className="ms-mono">sample</small></div>
            <div className="ms-workflow-row"><span className="ms-workflow-icon"><Check size={11} /></span><span>Quiz added</span><small className="ms-mono">sample</small></div>
            <div className="ms-workflow-row"><span className="ms-workflow-icon is-run"><RefreshCw size={11} /></span><span>Progress sync</span><small className="ms-mono">active</small></div>
          </div>
        </div>
      </Window>
      <div className="ms-service-float"><GraduationCap size={14} /> <span>Student learning portal</span><b>connected</b></div>
      <IllustrationNote />
    </div>
  );
}

export function OnlineLearningVisual() {
  return (
    <div className="ms-service-visual-inner" role="img" aria-label="Illustrative online learning platform showing a course catalog, video player and module progress with sample data">
      <Window title="Online learning / course catalog" meta="sample" className="ms-learning-window" dense>
        <div className="ms-learning-top">
          <div className="ms-learning-search"><Search size={13} /> Find a course or learning resource<span className="ms-mono">⌘K</span></div>
          <div className="ms-chip-row"><span>All courses</span><span className="is-active">Popular</span><span>New</span></div>
        </div>
        <div className="ms-learning-layout">
          <div className="ms-learning-player">
            <div className="ms-video-frame is-large"><PlayCircle size={22} /><span>Interactive course lesson<small>Digital classroom preview</small></span></div>
            <div className="ms-lesson-tabs"><span className="is-active">Overview</span><span>Lessons</span><span>Resources</span><span>Discussion</span></div>
            <ModuleRow title="Lesson 04 — Applied Concepts" meta="12 min · sample" value={68} />
          </div>
          <div className="ms-learning-side">
            <PanelLabel>Course catalog</PanelLabel>
            <div className="ms-course-list">
              <div className="ms-course-list-row"><CourseThumb icon={<Code2 size={14} />} tone="violet" /><span>Web Development<small>24 lessons</small></span><b className="ms-mono">68%</b></div>
              <div className="ms-course-list-row"><CourseThumb icon={<BarChart3 size={14} />} tone="blue" /><span>Business Analytics<small>18 lessons</small></span><b className="ms-mono">42%</b></div>
              <div className="ms-course-list-row"><CourseThumb icon={<BookOpen size={14} />} tone="green" /><span>Communication Skills<small>16 lessons</small></span><b className="ms-mono">86%</b></div>
            </div>
            <PanelLabel>Instructor</PanelLabel>
            <div className="ms-instructor"><span className="ms-student-avatar is-blue">NR</span><span>Neha Rao<small>Course instructor</small></span><Dot tone="green" /></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function StudentManagementVisual() {
  return (
    <div className="ms-service-visual-inner" role="img" aria-label="Illustrative student management dashboard with profiles, admissions, attendance and reports using sample data">
      <Window title="Student management / records" meta="sample" className="ms-student-window" dense>
        <div className="ms-student-top">
          <div className="ms-student-search"><Search size={13} /> Search student records</div>
          <span className="ms-badge is-cyan">Admissions open</span>
        </div>
        <div className="ms-student-layout">
          <div className="ms-student-table">
            <PanelLabel>Student database</PanelLabel>
            <StudentRow name="A. Sharma" program="Class 11 · Science" status="active" />
            <StudentRow name="R. Verma" program="BCA · Semester 3" status="active" tone="blue" />
            <StudentRow name="M. Kaur" program="Commerce · Class 12" status="new" tone="amber" />
            <StudentRow name="S. Patel" program=" Diploma · IT" status="active" tone="violet" />
            <PanelLabel>Admission records</PanelLabel>
            <div className="ms-admission-grid">
              <div><strong>248</strong><small>Applications</small></div>
              <div><strong>186</strong><small>Verified</small></div>
              <div><strong>64</strong><small>Pending</small></div>
            </div>
          </div>
          <div className="ms-student-side">
            <PanelLabel>Student profile</PanelLabel>
            <div className="ms-profile-card"><span className="ms-student-avatar is-cyan">AS</span><strong>Aarav Sharma<small>Student ID · ST-1048</small></strong></div>
            <ResourceRow name="Attendance" value={92} detail="92%" />
            <ResourceRow name="Academic progress" value={76} tone="blue" detail="76%" />
            <ResourceRow name="Course completion" value={68} tone="green" detail="68%" />
            <PanelLabel>Parent communication</PanelLabel>
            <div className="ms-message-card"><MessageSquare size={13} /><span>Progress update sent<small>sample activity</small></span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function ExaminationVisual() {
  return (
    <div className="ms-service-visual-inner" role="img" aria-label="Illustrative online examination interface with timer, question navigation, question bank and results using sample data">
      <Window title="Examination / online test" meta="sample" className="ms-exam-window" dense>
        <div className="ms-exam-shell">
          <aside className="ms-exam-sidebar">
            <NavRow icon={<ClipboardCheck size={12} />} label="Tests" active />
            <NavRow icon={<FileText size={12} />} label="Question bank" />
            <NavRow icon={<CalendarDays size={12} />} label="Schedule" />
            <NavRow icon={<UsersRound size={12} />} label="Candidates" />
            <NavRow icon={<BarChart3 size={12} />} label="Results" />
          </aside>
          <div className="ms-exam-main">
            <div className="ms-exam-bar"><span>Unit Test · Mathematics</span><span className="ms-timer"><Clock size={12} /> 42:18</span></div>
            <div className="ms-question"><span className="ms-badge is-cyan">Q 12 / 40</span><strong>Which of the following represents a quadratic equation?</strong></div>
            <div className="ms-options"><span>A · ax + b = 0</span><span className="is-active">B · ax² + bx + c = 0</span><span>C · a/x + b = 0</span><span>D · ax³ + bx = 0</span></div>
            <div className="ms-question-nav"><span>11</span><span className="is-active">12</span><span>13</span><span>14</span><span>15</span><span>16</span></div>
          </div>
          <div className="ms-exam-results">
            <PanelLabel>Assessment results</PanelLabel>
            <ExamRow code="T-104" title="Mathematics" status="published" />
            <ExamRow code="T-103" title="Science" status="review" tone="amber" />
            <ExamRow code="T-102" title="English" status="published" tone="green" />
            <PanelLabel>Question bank</PanelLabel>
            <div className="ms-question-stats"><span><strong>1,248</strong><small>Questions</small></span><span><strong>12</strong><small>Topics</small></span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function CourseManagementVisual() {
  return (
    <div className="ms-service-visual-inner" role="img" aria-label="Illustrative course management dashboard showing catalog, modules, schedules and analytics with sample data">
      <Window title="Course management / administration" meta="sample" className="ms-course-window" dense>
        <div className="ms-course-admin">
          <div className="ms-course-catalog">
            <PanelLabel>Course catalog</PanelLabel>
            <div className="ms-course-list-row"><CourseThumb icon={<BookOpen size={14} />} tone="cyan" /><span>Applied Mathematics<small>8 modules · sample</small></span><b className="ms-mono">active</b></div>
            <div className="ms-course-list-row"><CourseThumb icon={<Code2 size={14} />} tone="violet" /><span>Web Development<small>12 modules · sample</small></span><b className="ms-mono">active</b></div>
            <div className="ms-course-list-row"><CourseThumb icon={<BriefcaseBusiness size={14} />} tone="amber" /><span>Business Communication<small>6 modules · sample</small></span><b className="ms-mono">draft</b></div>
            <PanelLabel>Schedule</PanelLabel>
            <div className="ms-schedule-row"><CalendarDays size={12} /><span>Mon · 10:00</span><small className="ms-mono">Room A</small></div>
            <div className="ms-schedule-row"><Video size={12} /><span>Wed · 15:30</span><small className="ms-mono">Online</small></div>
          </div>
          <div className="ms-course-detail">
            <PanelLabel>Modules &amp; materials</PanelLabel>
            <ModuleRow title="Module 01 · Fundamentals" meta="4 resources" value={100} />
            <ModuleRow title="Module 02 · Core Concepts" meta="6 resources" value={78} />
            <ModuleRow title="Module 03 · Practice" meta="5 resources" value={46} />
            <PanelLabel>Course analytics</PanelLabel>
            <div className="ms-chart-card"><div className="ms-chart-head"><span>Course activity</span><span className="ms-mono">sample</span></div><TinyChart line={resultsLine} fillId="msCourseActivity" tone="violet" /></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function FeatureVisual({ id }: { id: string }) {
  return (
    <div className="ms-feature-visual" role="img" aria-label={`Illustrative ${id.replaceAll("-", " ")} interface preview with sample data`}>
      <Window title={id.replaceAll("-", " ")} meta="preview" dense>
        <div className="ms-feature-visual-grid">
          <div className="ms-feature-stat"><PanelLabel>Records</PanelLabel><strong>1,248</strong><small>sample</small></div>
          <div className="ms-feature-stat"><PanelLabel>Workflow</PanelLabel><strong>Connected</strong><small>sample</small></div>
          <div className="ms-feature-stat"><PanelLabel>Reporting</PanelLabel><strong>Available</strong><small>sample</small></div>
        </div>
        <div className="ms-module-list">
          <ModuleRow title="Student information" meta="sample" value={78} />
          <ModuleRow title="Learning activity" meta="sample" value={64} />
          <ModuleRow title="Assessment workflow" meta="sample" value={71} />
        </div>
        <div className="ms-chart-card"><TinyChart line={learningLine} fillId={`msFeature${id}`} /></div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function EcosystemVisual() {
  return (
    <div className="ms-ecosystem-visual" role="img" aria-label="Illustrative education software ecosystem connecting students, courses, LMS, examinations, instructors, attendance and reporting">
      <div className="ms-eco-chain">
        {[
          { label: "Students", icon: <UsersRound size={14} /> },
          { label: "Courses", icon: <BookOpen size={14} /> },
          { label: "LMS", icon: <PlayCircle size={14} /> },
          { label: "Examinations", icon: <ClipboardCheck size={14} /> },
          { label: "Instructors", icon: <UserRoundCog size={14} /> },
          { label: "Attendance", icon: <CalendarDays size={14} /> },
          { label: "Reporting", icon: <BarChart3 size={14} /> },
        ].map((node, index, all) => (
          <div className="ms-eco-part" key={node.label}>
            <div className="ms-eco-node"><span>{node.icon}</span><strong>{node.label}</strong></div>
            {index < all.length - 1 ? <ArrowRight className="ms-eco-arrow" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <div className="ms-eco-windows">
        <div className="ms-eco-window"><PanelLabel>Student portal</PanelLabel><ResourceRow name="Enrollment" value={76} detail="sample" /></div>
        <div className="ms-eco-window"><PanelLabel>LMS activity</PanelLabel><ResourceRow name="Modules" value={64} tone="blue" detail="sample" /></div>
        <div className="ms-eco-window"><PanelLabel>Reports</PanelLabel><ResourceRow name="Dashboards" value={82} tone="green" detail="sample" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function EnvironmentVisual({ id }: { id: string }) {
  return (
    <div className="ms-environment-visual" role="img" aria-label={`Illustrative ${id.replaceAll("-", " ")} education software preview with sample data`}>
      <Window title={`${id.replaceAll("-", " ")} / workspace`} meta="sample" dense>
        <div className="ms-environment-top">
          <div className="ms-environment-badge"><GraduationCap size={14} /> {id.replaceAll("-", " ")}</div>
          <span className="ms-mono">sample view</span>
        </div>
        <div className="ms-environment-grid">
          <div><PanelLabel>Students</PanelLabel><strong>1,248</strong><small>sample</small></div>
          <div><PanelLabel>Courses</PanelLabel><strong>36</strong><small>sample</small></div>
          <div><PanelLabel>Exams</PanelLabel><strong>12</strong><small>sample</small></div>
        </div>
        <div className="ms-module-list">
          <ModuleRow title="Enrollment workflow" meta="sample" value={78} />
          <ModuleRow title="Learning modules" meta="sample" value={64} />
          <ModuleRow title="Reporting" meta="sample" value={82} />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    users: <UsersRound size={17} />,
    course: <BookOpen size={17} />,
    content: <FileText size={17} />,
    exam: <ClipboardCheck size={17} />,
    progress: <BarChart3 size={17} />,
    report: <Activity size={17} />,
  };
  return (
    <div className="ms-workflow-mini" aria-hidden="true">
      <span>{map[kind] ?? <Layers3 size={17} />}</span>
      <div><i /><i /><i /></div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div
      className="ms-analytics-visual"
      role="img"
      aria-label="Illustrative education analytics dashboard showing student overview, enrollment, attendance, examination results and learning progress with sample data"
    >
      <Window title="Learning analytics / overview" meta="sample data" className="ms-analytics-window">
        <div className="ms-analytics-metrics">
          <Metric label="Students" value="1,248" tone="cyan" note="sample" />
          <Metric label="Enrollments" value="486" tone="blue" note="sample" />
          <Metric label="Attendance" value="92%" tone="green" note="sample" />
          <Metric label="Avg. progress" value="68%" tone="violet" note="sample" />
        </div>
        <div className="ms-analytics-main">
          <div className="ms-analytics-chart">
            <div className="ms-chart-head"><span>Learning progress</span><span className="ms-mono">sample</span></div>
            <TinyChart line={learningLine} fillId="msAnalyticsLearning" />
            <div className="ms-chart-legend"><span><i /> Progress</span><span><i className="is-violet" /> Activity</span></div>
          </div>
          <div className="ms-analytics-side">
            <PanelLabel>Attendance</PanelLabel>
            <ResourceRow name="Present today" value={92} detail="92%" />
            <ResourceRow name="Course completion" value={68} tone="blue" detail="68%" />
            <ResourceRow name="Results published" value={81} tone="green" detail="sample" />
          </div>
        </div>
        <div className="ms-analytics-bottom">
          <div><PanelLabel>Student activity</PanelLabel><TinyChart line={attendanceLine} fillId="msAnalyticsAttendance" tone="violet" /></div>
          <div><PanelLabel>Examination results</PanelLabel><TinyChart line={resultsLine} fillId="msAnalyticsResults" /></div>
          <div className="ms-donut-card"><PanelLabel>Completion</PanelLabel><div className="ms-donut"><svg viewBox="0 0 42 42" aria-hidden="true"><circle className="ms-donut-bg" cx="21" cy="21" r="16" /><circle className="ms-donut-value" cx="21" cy="21" r="16" strokeDasharray="68 100" /></svg><span>68%<small>sample</small></span></div></div>
        </div>
        <div className="ms-status-row">
          <StatusLine label="Student portal" value="active" state="ok" />
          <StatusLine label="Course sync" value="active" state="ok" />
          <StatusLine label="Exam reports" value="draft" state="warn" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function ClassroomVisual() {
  return (
    <div
      className="ms-classroom-visual"
      role="img"
      aria-label="Illustrative digital classroom showing live video learning, course resources, modules and assignments with sample data"
    >
      <Window title="Digital classroom / live session" meta="sample" className="ms-classroom-window">
        <div className="ms-classroom-layout">
          <div className="ms-classroom-stage">
            <div className="ms-classroom-video"><PlayCircle size={26} /><span>Live lesson · Applied Concepts<small>Instructor view · sample</small></span></div>
            <div className="ms-classroom-tools"><span><Video size={13} /> Class</span><span><MessageSquare size={13} /> Chat</span><span><FileText size={13} /> Resources</span><span className="is-active"><ClipboardCheck size={13} /> Assignment</span></div>
            <PanelLabel>Course modules</PanelLabel>
            <div className="ms-module-list">
              <ModuleRow title="Module 03 · Core Concepts" meta="Video + notes" value={72} />
              <ModuleRow title="Module 04 · Practice Task" meta="Assignment" value={48} />
            </div>
          </div>
          <div className="ms-classroom-side">
            <PanelLabel>Participants</PanelLabel>
            <StudentRow name="A. Sharma" program="Online learner" status="active" />
            <StudentRow name="R. Verma" program="Online learner" status="active" tone="blue" />
            <StudentRow name="M. Kaur" program="Online learner" status="new" tone="amber" />
            <PanelLabel>Learning resources</PanelLabel>
            <div className="ms-resource-list"><span><FileText size={12} /> Lesson notes</span><span><BookOpen size={12} /> Reading material</span><span><Video size={12} /> Recording</span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function IntegrationVisual() {
  return (
    <div className="ms-integration-visual" role="img" aria-label="Illustrative education software integration ecosystem connecting LMS, student management, courses, examinations, payments, analytics and applications">
      <div className="ms-integration-core"><Network size={18} /><span>Education software</span><small>integration layer</small></div>
      <div className="ms-integration-ring">
        {[
          { label: "LMS", icon: <PlayCircle size={14} /> },
          { label: "Student management", icon: <UsersRound size={14} /> },
          { label: "Course management", icon: <BookOpen size={14} /> },
          { label: "Examinations", icon: <ClipboardCheck size={14} /> },
          { label: "Payments", icon: <BriefcaseBusiness size={14} /> },
          { label: "Analytics", icon: <BarChart3 size={14} /> },
          { label: "Applications", icon: <Plug size={14} /> },
        ].map((node) => (
          <div className="ms-integration-node" key={node.label}><span>{node.icon}</span><strong>{node.label}</strong><small>API · sample</small></div>
        ))}
      </div>
      <div className="ms-integration-foot"><StatusLine label="Data synchronization" value="configured" state="ok" /><StatusLine label="Connected services" value="7 sample" state="run" /></div>
      <IllustrationNote />
    </div>
  );
}

export function TechnologyVisual() {
  return (
    <div className="ms-tech-visual" role="img" aria-label="Illustrative education software architecture from frontend and backend to databases, LMS modules, APIs, integrations and cloud deployment">
      <Window title="Education software / architecture" meta="conceptual" dense>
        <div className="ms-arch-chain">
          {[
            { label: "Frontend", icon: <LayoutDashboard size={14} /> },
            { label: "Backend", icon: <Code2 size={14} /> },
            { label: "Database", icon: <Database size={14} /> },
            { label: "LMS modules", icon: <BookOpen size={14} /> },
            { label: "APIs", icon: <Plug size={14} /> },
            { label: "Integrations", icon: <Network size={14} /> },
            { label: "Cloud", icon: <Cloud size={14} /> },
          ].map((node, index, all) => (
            <div className="ms-arch-part" key={node.label}>
              <div className="ms-arch-node"><span>{node.icon}</span><strong>{node.label}</strong></div>
              {index < all.length - 1 ? <ArrowRight className="ms-arch-arrow" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="ms-arch-layers">
          <div><PanelLabel>User interfaces</PanelLabel><span>Student portal · Instructor dashboard · Administrator console</span></div>
          <div><PanelLabel>Application services</PanelLabel><span>Courses · Assessments · Attendance · Reporting</span></div>
          <div><PanelLabel>Data &amp; integration</PanelLabel><span>Databases · APIs · Learning services · Cloud deployment</span></div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div className="ms-industries-visual" role="img" aria-label="Illustrative education organization dashboard showing different learning environments with sample data">
      <Window title="Organizations / education environments" meta="sample" dense>
        <div className="ms-organization-grid">
          <div className="ms-org-card is-active"><GraduationCap size={16} /><span>Schools<small>Student records</small></span><Dot tone="green" /></div>
          <div className="ms-org-card"><Building2 size={16} /><span>Universities<small>Academic data</small></span><Dot tone="cyan" /></div>
          <div className="ms-org-card"><BriefcaseBusiness size={16} /><span>Training<small>Course delivery</small></span><Dot tone="blue" /></div>
          <div className="ms-org-card"><Video size={16} /><span>Online learning<small>Digital classrooms</small></span><Dot tone="violet" /></div>
        </div>
        <div className="ms-org-chart"><div className="ms-chart-head"><span>Learning activity</span><span className="ms-mono">sample</span></div><TinyChart line={attendanceLine} fillId="msOrgActivity" /></div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function WhyVisual() {
  return (
    <div className="ms-why-visual" role="img" aria-label="Illustrative education software workspace showing connected LMS modules and reporting with sample data">
      <Window title="RoyalTech / education platform" meta="conceptual" className="ms-why-window-main">
        <div className="ms-why-map"><div className="ms-why-map-grid" /><div className="ms-why-map-ring" /><span className="ms-why-map-core"><GraduationCap size={16} /></span></div>
        <div className="ms-why-status">
          <StatusLine label="Student data" value="organized" state="ok" />
          <StatusLine label="Course workflows" value="connected" state="ok" />
          <StatusLine label="Reports" value="available" state="run" />
          <StatusLine label="Integrations" value="planned" state="warn" />
        </div>
      </Window>
      <div className="ms-why-float"><Sparkles size={14} /><span>Custom education software</span><b>built around requirements</b></div>
      <IllustrationNote />
    </div>
  );
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    discovery: <MessageSquare size={17} />,
    requirements: <FileText size={17} />,
    architecture: <Layers3 size={17} />,
    design: <LayoutDashboard size={17} />,
    development: <Code2 size={17} />,
    testing: <CheckCircle2 size={17} />,
    deployment: <Cloud size={17} />,
    support: <RefreshCw size={17} />,
  };
  return (
    <div className="ms-process-mini" aria-hidden="true">
      <span>{map[kind] ?? <Layers3 size={17} />}</span>
      <div><i /><i /></div>
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div className="ms-security-visual" role="img" aria-label="Illustrative education data architecture showing authentication, role-based access, data organization and application security considerations">
      <div className="ms-security-grid">
        <div className="ms-security-zones">
          <PanelLabel>Access layers</PanelLabel>
          <div className="ms-zone is-public"><strong>Authentication</strong><small>User sign-in · sample</small></div>
          <div className="ms-zone is-app"><strong>Role-based access</strong><small>Students · Instructors · Administrators</small></div>
          <div className="ms-zone is-data"><strong>Student data</strong><small>Records · Academic information</small></div>
          <div className="ms-zone-note"><ShieldCheck size={12} /><span>Permissions and data handling are defined to the agreed project scope.</span></div>
        </div>
        <div className="ms-security-matrix">
          <PanelLabel>Application considerations</PanelLabel>
          <div className="ms-matrix-row is-head"><span>Area</span><span>Plan</span><span>Scope</span><span>Review</span></div>
          <div className="ms-matrix-row"><span>API</span><span>designed</span><span>agreed</span><span>testing</span></div>
          <div className="ms-matrix-row"><span>Data</span><span>structured</span><span>defined</span><span>testing</span></div>
          <div className="ms-matrix-row"><span>Access</span><span>roles</span><span>defined</span><span>testing</span></div>
          <div className="ms-matrix-row"><span>Content</span><span>organized</span><span>agreed</span><span>testing</span></div>
        </div>
        <div className="ms-security-ops">
          <PanelLabel>Security practices</PanelLabel>
          <div className="ms-security-check"><LockKeyhole size={13} /><span>Authentication flows</span></div>
          <div className="ms-security-check"><CheckCircle2 size={13} /><span>Data validation</span></div>
          <div className="ms-security-check"><Database size={13} /><span>Database management</span></div>
          <div className="ms-security-check"><Activity size={13} /><span>Application testing</span></div>
          <div className="ms-security-highlight"><ShieldCheck size={15} /><span>No absolute security claim or certification is implied.</span></div>
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div className="ms-benefits-visual" role="img" aria-label="Illustrative before and after education workflow comparison showing disconnected processes becoming a connected education platform">
      <div className="ms-before">
        <PanelLabel>Before</PanelLabel>
        <div className="ms-before-list"><span>Separate student spreadsheets</span><span>Manual attendance registers</span><span>Scattered course materials</span><span>Separate examination records</span><span>Difficult consolidated reporting</span></div>
        <div className="ms-before-console"><FileText size={14} /><span>Fragmented tools</span><span className="ms-mono">manual</span></div>
      </div>
      <div className="ms-benefit-arrow"><ArrowRight size={18} /></div>
      <div className="ms-after">
        <PanelLabel>After</PanelLabel>
        <div className="ms-after-grid">
          <div className="ms-after-card"><UsersRound size={14} /><span>Student records</span><small>centralized</small></div>
          <div className="ms-after-card"><BookOpen size={14} /><span>Course management</span><small>digital</small></div>
          <div className="ms-after-card"><ClipboardCheck size={14} /><span>Examinations</span><small>connected</small></div>
          <div className="ms-after-card"><BarChart3 size={14} /><span>Reporting</span><small>dashboards</small></div>
        </div>
        <div className="ms-after-status"><StatusLine label="Education platform" value="connected" state="ok" /><StatusLine label="Reporting" value="available" state="run" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function CtaVisual() {
  return (
    <div className="ms-cta-visual" role="img" aria-label="Illustrative connected education software composition showing LMS, student portal, courses, examinations and analytics with sample data">
      <div className="ms-cta-orbit" aria-hidden="true"><span /><span /><span /><span /></div>
      <Window title="Digital education platform" meta="sample" className="ms-cta-window ms-cta-window-one" dense>
        <PanelLabel>LMS dashboard</PanelLabel>
        <div className="ms-cta-course"><CourseThumb icon={<PlayCircle size={14} />} tone="cyan" /><span>Course progress<small>sample</small></span><b className="ms-mono">68%</b></div>
      </Window>
      <Window title="Student portal" meta="sample" className="ms-cta-window ms-cta-window-two" dense>
        <PanelLabel>My learning</PanelLabel>
        <div className="ms-chip-row"><span>Courses</span><span className="is-active">Assignments</span><span>Results</span></div>
      </Window>
      <Window title="Education analytics" meta="sample" className="ms-cta-window ms-cta-window-three" dense>
        <PanelLabel>Learning activity</PanelLabel>
        <TinyChart line={learningLine} fillId="msCtaLearning" />
      </Window>
      <IllustrationNote />
    </div>
  );
}

export const industryIcons: Record<string, React.ReactNode> = {
  school: <GraduationCap size={16} />,
  university: <Building2 size={16} />,
  coaching: <BookOpen size={16} />,
  training: <BriefcaseBusiness size={16} />,
  elearning: <Video size={16} />,
  corporate: <UsersRound size={16} />,
  consultant: <MessageSquare size={16} />,
  skill: <Layers3 size={16} />,
  professional: <FileText size={16} />,
  educator: <PlayCircle size={16} />,
};
