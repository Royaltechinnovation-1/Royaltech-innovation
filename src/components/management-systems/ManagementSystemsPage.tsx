import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Plug,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  analyticsItems,
  benefits,
  classroomItems,
  coreServices,
  environments,
  faqs,
  features,
  industries,
  integrationItems,
  processSteps,
  relatedLinks,
  securityItems,
  technologyGroups,
  whyChoose,
  workflowSteps,
} from "./data";
import { FaqAccordion, ScrollReveal, TabShowcase } from "./interactions";
import {
  CheckItem,
  Dot,
  Eyebrow,
  IconCta,
  PrimaryCta,
  SectionHeading,
  TagList,
} from "./ui";
import {
  AnalyticsVisual,
  BenefitsVisual,
  ClassroomVisual,
  CourseManagementVisual,
  CtaVisual,
  EcosystemVisual,
  EnvironmentVisual,
  ExaminationVisual,
  FeatureVisual,
  HeroVisual,
  IndustriesVisual,
  IntegrationVisual,
  IntroVisual,
  LmsVisual,
  OnlineLearningVisual,
  ProcessMiniVisual,
  SecurityVisual,
  StudentManagementVisual,
  TechnologyVisual,
  WhyVisual,
  WorkflowMiniVisual,
  industryIcons,
} from "./visuals";
import "./management-systems.css";

const serviceVisuals = {
  "custom-lms-development": <LmsVisual />,
  "online-learning-platforms": <OnlineLearningVisual />,
  "student-management-systems": <StudentManagementVisual />,
  "online-examination-systems": <ExaminationVisual />,
  "course-management-systems": <CourseManagementVisual />,
} as const;

function Breadcrumbs() {
  return (
    <nav className="ms-breadcrumb" aria-label="Breadcrumb">
      <div className="ms-container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Management Systems</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="ms-hero" id="top" aria-labelledby="ms-hero-title">
      <div className="ms-hero-bg" aria-hidden="true" />
      <div className="ms-container ms-hero-inner">
        <div className="ms-hero-copy">
          <div className="ms-hero-badge"><span className="ms-badge-pulse" />EDTECH &amp; EDUCATION SOFTWARE SOLUTIONS</div>
          <h1 id="ms-hero-title">Smart Management Systems for Modern Education</h1>
          <p className="ms-hero-lead">
            RoyalTech Innovation develops custom management systems, learning management platforms,
            student management software, online examination systems, and digital learning applications
            designed to support modern educational institutions and learning businesses.
          </p>
          <div className="ms-hero-keywords" aria-label="Education software development services">
            <span>Custom LMS Development</span>
            <span>Online Learning Platforms</span>
            <span>Student Management Systems</span>
            <span>Online Examination Systems</span>
            <span>Course Management Systems</span>
          </div>
          <div className="ms-hero-actions">
            <PrimaryCta service="Education Management System" source="management-hero-primary">Build Your Education Platform</PrimaryCta>
            <PrimaryCta variant="outline" service="Education Software Consultation" source="management-hero-secondary">Discuss Your Project</PrimaryCta>
          </div>
          <div className="ms-hero-meta">
            <span><Check size={14} /> Custom LMS and digital learning platforms</span>
            <span><Check size={14} /> Student, course, exam and reporting workflows</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="ms-container ms-hero-bottom">
        <span className="ms-scroll-cue"><i /> Scroll to explore</span>
        <span>Education Software Development · LMS Platforms · Student Management · Online Examinations</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="ms-section ms-intro-section" id="introduction" aria-labelledby="ms-intro-title">
      <div className="ms-container ms-intro-layout">
        <div className="ms-intro-copy" data-reveal>
          <SectionHeading
            id="ms-intro-title"
            eyebrow="Introduction"
            title="Transform Educational Operations With Digital Management Systems"
          />
          <p>
            Educational institutions, training organizations, coaching businesses, universities, and online
            learning platforms require structured systems to manage students, courses, learning activities,
            examinations, educational content, and administrative workflows.
          </p>
          <p>
            RoyalTech Innovation develops custom management systems designed around educational requirements,
            learning processes, institutional workflows, user roles, and digital learning objectives.
          </p>
          <p>
            From learning management systems and online learning platforms to student management, online
            examinations, and course management applications, we build education software tailored to your requirements.
          </p>
          <div className="ms-intro-points">
            <CheckItem>Custom LMS and online learning platform development</CheckItem>
            <CheckItem>Student information, attendance and academic records</CheckItem>
            <CheckItem>Online examination and assessment workflows</CheckItem>
            <CheckItem>Course management, reporting and education integrations</CheckItem>
          </div>
          <div className="ms-hero-actions">
            <PrimaryCta service="Education Management System" source="management-intro">Talk to an Education Software Engineer</PrimaryCta>
            <PrimaryCta variant="quiet" href="/services/software-development" source="management-intro-software">Explore Custom Software</PrimaryCta>
          </div>
        </div>
        <div className="ms-intro-visual-wrap" data-reveal><IntroVisual /></div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="ms-section ms-services-section is-dark" id="services" aria-labelledby="ms-services-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-services-title"
          eyebrow="Our Core Management Systems"
          title="Custom Education Management Systems for Digital Learning"
          description="We develop education management applications designed to organize learning environments, student information, educational content, academic workflows, and digital learning experiences."
          light
          center
        />
        <div className="ms-service-list">
          {coreServices.map((service, index) => (
            <article
              className={`ms-service-block ms-service-${service.id}${index % 2 ? " is-reverse" : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className="ms-service-copy">
                <div className="ms-service-meta">
                  <span className="ms-service-number">{service.number} / 05</span>
                  <span className="ms-service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <TagList items={service.items} light />
                <div className="ms-service-cta">
                  <PrimaryCta service={service.category} source={`management-${service.id}`}>{service.cta}</PrimaryCta>
                </div>
              </div>
              <div className="ms-service-visual">{serviceVisuals[service.id]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = features.map((feature) => ({
    id: feature.id,
    label: feature.title,
    content: (
      <div className="ms-feature-panel">
        <div className="ms-feature-copy">
          <Eyebrow>Functionality</Eyebrow>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          <div className="ms-feature-metric"><span>{feature.metric}</span><strong>Defined in scope</strong></div>
          <IconCta service={feature.title} source={`management-feature-${feature.id}`}>Discuss this feature</IconCta>
        </div>
        <div className="ms-feature-visual-wrap"><FeatureVisual id={feature.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="ms-section ms-features-section" id="features" aria-labelledby="ms-features-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-features-title"
          eyebrow="Education Management Software Features"
          title="Powerful Features for Connected Digital Education"
          description="Explore education software functionality that can be planned around your students, courses, learning activities, examinations, instructors and reporting requirements."
        />
        <div data-reveal><TabShowcase items={items} label="Education management software features" /></div>
        <div className="ms-feature-flow-wrap" data-reveal><EcosystemVisual /></div>
      </div>
    </section>
  );
}

function Environments() {
  const items = environments.map((environment) => ({
    id: environment.id,
    label: environment.label,
    content: (
      <div className="ms-environment-panel">
        <div className="ms-environment-copy">
          <Eyebrow>Educational requirement</Eyebrow>
          <h3>{environment.title}</h3>
          <p>{environment.text}</p>
          <div className="ms-environment-dashboard"><span className="ms-mono">{environment.dashboard}</span><Dot tone="green" /></div>
          <PrimaryCta service={environment.label} source={`management-environment-${environment.id}`}>Discuss your platform</PrimaryCta>
        </div>
        <div className="ms-environment-visual"><EnvironmentVisual id={environment.id} /></div>
      </div>
    ),
  }));

  return (
    <section className="ms-section ms-environments-section" id="educational-requirements" aria-labelledby="ms-environments-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-environments-title"
          eyebrow="Learning Environments"
          title="Education Software Designed for Different Learning Environments"
          description="Different educational organizations require different software functionality, learning structures, student workflows, educational processes, and administrative systems. We develop management systems tailored to your requirements."
        />
        <div data-reveal><TabShowcase items={items} label="Education environments" variant="solutions" /></div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="ms-section ms-how-section" id="how-it-works" aria-labelledby="ms-how-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-how-title"
          eyebrow="How Education Management Systems Work"
          title="Connect Learning, Administration, and Educational Operations"
          description="Education management software connects relevant student information, educational content, learning activities, course administration, examination processes, and institutional workflows through integrated digital applications."
        />
        <ol className="ms-workflow" data-reveal>
          {workflowSteps.map((step) => (
            <li className="ms-workflow-step" key={step.number}>
              <div className="ms-workflow-top"><span className="ms-step-number">{step.number}</span><WorkflowMiniVisual kind={step.visual} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="ms-section-foot-cta">
          <span>Need help defining your education workflow?</span>
          <IconCta service="Education Platform Architecture" source="management-how-cta">Request an education discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function DashboardsAnalytics() {
  return (
    <section className="ms-section ms-analytics-section is-dark" id="dashboards" aria-labelledby="ms-analytics-title">
      <div className="ms-container">
        <div className="ms-analytics-layout">
          <div className="ms-analytics-copy" data-reveal>
            <SectionHeading
              id="ms-analytics-title"
              eyebrow="LMS Dashboards & Educational Analytics"
              title="Monitor Learning Progress and Educational Performance"
              description="Educational dashboards provide visibility into relevant student activities, course progress, enrollment information, learning performance, examination results, attendance, and educational workflows. We develop dashboards tailored to institutional requirements, user roles, reporting needs, learning objectives, and application functionality."
              light
            />
            <TagList items={analyticsItems} light />
            <PrimaryCta service="Educational Dashboard Development" source="management-analytics">Build an education dashboard</PrimaryCta>
            <p className="ms-note-light">All figures shown in the dashboard mockup are illustrative sample data.</p>
          </div>
          <div data-reveal><AnalyticsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function DigitalClassroom() {
  return (
    <section className="ms-section ms-classroom-section" id="digital-classroom" aria-labelledby="ms-classroom-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-classroom-title"
          eyebrow="Online Learning & Digital Classroom"
          title="Create Connected Digital Learning Experiences"
          description="Online learning applications support digital course delivery, educational content, student learning, remote training, online teaching, and learning activities. We develop digital learning experiences tailored to course requirements, educational workflows, learner needs, platform functionality, and business objectives."
        />
        <div className="ms-classroom-layout" data-reveal>
          <div><ClassroomVisual /></div>
          <div className="ms-classroom-copy">
            <TagList items={classroomItems} />
            <div className="ms-classroom-highlight"><Sparkles size={18} /><p>Student dashboards, instructor interfaces, course resources and digital classroom tools can be designed around your learning model.</p></div>
            <PrimaryCta service="Online Learning Platform" source="management-classroom">Plan your learning platform</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="ms-section ms-integrations-section" id="integrations" aria-labelledby="ms-integrations-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-integrations-title"
          eyebrow="Educational Software Integration"
          title="Connect Your Education Software With Relevant Applications"
          description="Education software integration connects relevant learning platforms, applications, databases, educational services, payment systems, communication platforms, and business applications. We develop integrations according to educational requirements, technical architecture, application functionality, and relevant workflows."
        />
        <div className="ms-integrations-layout" data-reveal>
          <div className="ms-integrations-copy">
            <TagList items={integrationItems} />
            <div className="ms-integration-highlight"><Plug size={18} /><span>Integration scope is agreed around the services, permissions, documentation and data exchange available for your institution.</span></div>
            <PrimaryCta service="Education Software Integration" source="management-integrations">Plan your integrations</PrimaryCta>
          </div>
          <div><IntegrationVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const icons = [
    <LayoutDashboard size={17} key="frontend" />,
    <Code2 size={17} key="backend" />,
    <Database size={17} key="database" />,
    <Plug size={17} key="api" />,
    <Cloud size={17} key="cloud" />,
    <LockKeyhole size={17} key="security" />,
  ];
  return (
    <section className="ms-section ms-tech-section is-dark" id="technologies" aria-labelledby="ms-tech-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-tech-title"
          eyebrow="Technology & Software Architecture"
          title="Built With Modern Education Software Technologies"
          description="We develop education software using suitable frontend technologies, backend frameworks, databases, APIs, cloud infrastructure, application architecture, and integrations selected according to project requirements."
          light
        />
        <div className="ms-tech-ecosystem-wrap" data-reveal><TechnologyVisual /></div>
        <div className="ms-tech-grid" data-reveal>
          {technologyGroups.map((group, index) => (
            <div className="ms-tech-card" key={group.title}>
              <div className="ms-tech-card-head"><span className="ms-tech-card-icon">{icons[index]}</span><h3>{group.title}</h3></div>
              <p className="ms-tech-note">{group.note}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="ms-note-light">Technology choices are confirmed during discovery. We do not claim certifications, partnerships or technologies that have not been verified for your project.</p>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="ms-section ms-industries-section" id="industries" aria-labelledby="ms-industries-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-industries-title"
          eyebrow="Industries & Educational Organizations"
          title="Education Management Software for Different Organizations"
          description="Education software can be shaped around the requirements of schools, universities, training providers, e-learning businesses and independent educators."
        />
        <div className="ms-industries-layout" data-reveal>
          <div className="ms-industry-list">
            {industries.map((industry, index) => (
              <div className="ms-industry-row" key={industry.name}>
                <span className="ms-industry-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="ms-industry-icon">{industryIcons[industry.icon]}</span>
                <div><h3>{industry.name}</h3><p>{industry.text}</p></div>
              </div>
            ))}
          </div>
          <div className="ms-industries-side">
            <IndustriesVisual />
            <div className="ms-industries-aside">
              <CheckItem>Student information and academic records</CheckItem>
              <CheckItem>Course delivery and digital learning</CheckItem>
              <CheckItem>Examinations, attendance and reporting</CheckItem>
              <CheckItem>Portals for students, instructors and administrators</CheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="ms-section ms-why-section is-dark" id="why-royaltech" aria-labelledby="ms-why-title">
      <div className="ms-container">
        <div className="ms-why-layout">
          <div className="ms-why-copy" data-reveal>
            <SectionHeading
              id="ms-why-title"
              eyebrow="Why RoyalTech Innovation"
              title="Your Technology Partner for Education Software Development"
              description="We focus on practical education software: understanding learning workflows, planning the right modules, developing user-friendly interfaces and connecting relevant systems."
              light
            />
            <div className="ms-why-list">
              {whyChoose.map((item) => (
                <div className="ms-why-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="ms-why-visual-wrap" data-reveal><WhyVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="ms-section ms-process-section" id="process" aria-labelledby="ms-process-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-process-title"
          eyebrow="Education Software Development Process"
          title="From Educational Requirements to Digital Learning Software"
          description="Every engagement follows a clear path from discovery and requirements through architecture, design, development, testing, deployment and maintenance."
        />
        <ol className="ms-process-timeline" data-reveal>
          {processSteps.map((step) => (
            <li className="ms-process-step" key={step.number}>
              <div className="ms-process-node"><span>{step.number}</span></div>
              <ProcessMiniVisual kind={step.visual} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="ms-section-foot-cta">
          <span>Have an education platform idea that needs review?</span>
          <IconCta service="Education Software Consultation" source="management-process-cta">Request a project discussion</IconCta>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="ms-section ms-security-section" id="security" aria-labelledby="ms-security-title">
      <div className="ms-container">
        <div className="ms-security-layout">
          <div className="ms-security-copy" data-reveal>
            <SectionHeading
              id="ms-security-title"
              eyebrow="Security & Student Data Management"
              title="Develop Education Software With Responsible Data Management"
              description="Education applications manage important student information, educational records, user accounts, learning activities, institutional information, and academic data. We plan applications around appropriate user permissions, access controls, data structures, application security considerations, integrations, and project-specific data management requirements."
            />
            <ul className="ms-security-list">
              {securityItems.map((item) => <li key={item}><LockKeyhole size={14} /> {item}</li>)}
            </ul>
            <div className="ms-security-highlight"><ShieldCheck size={18} /><span>Access, permissions and data structures are defined to the agreed project scope and platform requirements.</span></div>
            <p className="ms-note">No absolute security claim or certification is implied.</p>
          </div>
          <div data-reveal><SecurityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="ms-section ms-benefits-section is-dark" id="benefits" aria-labelledby="ms-benefits-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-benefits-title"
          eyebrow="Benefits of Education Management Software"
          title="Organize Educational Operations Through Digital Systems"
          description="A well-planned education management system brings student information, courses, learning content, examinations, attendance and reporting into a connected digital experience."
          light
        />
        <div data-reveal><BenefitsVisual /></div>
        <ul className="ms-benefit-grid" data-reveal>
          {benefits.map((benefit) => (
            <li key={benefit.title}><CheckItem><strong>{benefit.title}</strong> — {benefit.text}</CheckItem></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="ms-section ms-faq-section" id="faq" aria-labelledby="ms-faq-title">
      <div className="ms-container ms-faq-layout">
        <div className="ms-faq-intro" data-reveal>
          <SectionHeading
            id="ms-faq-title"
            eyebrow="FAQ"
            title="Frequently Asked Questions About Education Management Systems"
            description="Clear answers about LMS development, online learning platforms, student management software, online examinations, course management and education software planning."
          />
          <div className="ms-faq-help">
            <span className="ms-faq-help-icon"><GraduationCap size={18} /></span>
            <h3>Still have a question?</h3>
            <p>Tell us about your institution, learners and workflows. We will outline a practical next step based on your requirements.</p>
            <PrimaryCta service="Education Management System" source="management-faq">Talk to our team</PrimaryCta>
          </div>
        </div>
        <div data-reveal><FaqAccordion items={faqs} /></div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="ms-section ms-related-section" aria-labelledby="ms-related-title">
      <div className="ms-container">
        <SectionHeading
          id="ms-related-title"
          eyebrow="Related Services"
          title="Custom Education Management Systems for Modern Learning"
          description="Education platforms work best when connected to the wider web, software, mobile, design, AI, marketing and consulting ecosystem around them."
        />
        <div className="ms-related-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} className="ms-related-link" key={link.label}>
              <span>{link.label}</span>
              <small>{link.note}</small>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="ms-related-extra">
          <Link href="/services/website-development">Website Development</Link>
          <Link href="/services/crm-development">CRM Development</Link>
          <Link href="/services/it-consulting">IT Consulting</Link>
          <Link href="/services/ecommerce-development">E-commerce Development</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="ms-section ms-final-cta" id="contact" aria-labelledby="ms-final-title">
      <div className="ms-cta-bg" aria-hidden="true" />
      <div className="ms-container ms-final-cta-inner">
        <div className="ms-final-cta-copy">
          <Eyebrow light>Start a Conversation</Eyebrow>
          <h2 id="ms-final-title">Ready to Build Your Digital Education Platform?</h2>
          <p>
            Whether you need custom LMS development, an online learning platform, student management software,
            an online examination system, or course management software, RoyalTech Innovation can help you plan
            and develop an education software solution tailored to your requirements.
          </p>
          <div className="ms-hero-actions">
            <PrimaryCta variant="light" service="Education Management System" source="management-final-primary">Start Your Education Software Project</PrimaryCta>
            <PrimaryCta variant="outline" service="Education Software Consultation" source="management-final-secondary">Discuss Your Requirements</PrimaryCta>
          </div>
          <div className="ms-final-contact">
            <a href="tel:+918679016505">+91 86790 16505</a>
            <a href="mailto:info@royaltechinnovation.co.in">info@royaltechinnovation.co.in</a>
            <span><MapPin size={14} /> CP 67, Mohali, Punjab</span>
          </div>
        </div>
        <CtaVisual />
      </div>
    </section>
  );
}

export default function ManagementSystemsPage() {
  return (
    <div className="ms-page">
      <ScrollReveal />
      <Breadcrumbs />
      <Hero />
      <Introduction />
      <CoreServices />
      <Features />
      <Environments />
      <HowItWorks />
      <DashboardsAnalytics />
      <DigitalClassroom />
      <Integrations />
      <Technologies />
      <Industries />
      <WhyChoose />
      <Process />
      <Security />
      <Benefits />
      <FaqSection />
      <RelatedServices />
      <FinalCta />
    </div>
  );
}
