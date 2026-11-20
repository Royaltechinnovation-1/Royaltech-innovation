import Image from "next/image";
import {
  ArrowUpRight,
  Play,
  Users,
  TrendingUp,
  Check,
  Bell,
  Search,
  Zap,
  Handshake,
  LayoutDashboard,
  Contact,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  Settings,
  CircleUserRound,
  UserPlus,
  GitBranch,
  Bot,
  MessageCircle,
  ChartColumnIncreasing,
  Plug,
} from "lucide-react";
import WhyChooseCrm from "./WhyChooseCrm";
import FaqSection from "./FaqSection";
import PowerfulFeatures from "./PowerfulFeatures";

const aboutFocusCards = [
  {
    number: "01",
    title: "Customer Focused",
    description:
      "Build stronger customer relationships and deliver better experiences.",
    icon: Users,
  },
  {
    number: "02",
    title: "Sales Automation",
    description:
      "Reduce repetitive manual tasks and streamline your entire sales process.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Data Driven",
    description:
      "Make smarter business decisions with real-time insights and meaningful data.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "04",
    title: "Business Growth",
    description:
      "Improve your sales processes, boost productivity and scale your business.",
    icon: TrendingUp,
  },
];

export default function HomeHero() {
  return (
    <div className="crm-page">
      <div className="glow glow-top" />
      <div className="glow glow-bottom" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <section className="hero-section" id="crm">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>CRM SOFTWARE</span>
            <b>|</b>
            <span className="green-text">LEAD MANAGEMENT</span>
            <b>|</b>
            <span className="green-text">SALES AUTOMATION</span>
          </div>

          <h1>
            Smart <span className="cyan-text">CRM</span> Software
            <br />
            to Manage Leads,
            <br />
            Sales &amp; Grow
            <br />
            <span className="gradient-text">Your Business</span>
          </h1>

          <p className="hero-description">
            <strong>RoyalTech Innovation</strong> delivers powerful CRM
            software solutions designed to simplify lead management,
            automate sales processes, track customer interactions, and improve
            business performance.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="primary-btn">
              <span className="button-icon">
                <ArrowUpRight size={23} />
              </span>
              Get a Free CRM Demo
            </a>

            <a href="#crm-features" className="secondary-btn">
              <span className="play-icon">
                <Play size={17} fill="currentColor" />
              </span>
              Explore CRM Features
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-glow" />

          <div className="dashboard">
            <aside className="dashboard-sidebar">
              <div className="dashboard-brand">
                <div className="mini-logo">R</div>
                <span>RoyalTech CRM</span>
              </div>

              <div className="side-menu">
                <div className="menu-item selected">
                  <LayoutDashboard size={15} />
                  Dashboard
                </div>
                <div className="menu-item">
                  <Users size={15} /> Leads
                </div>
                <div className="menu-item">
                  <Contact size={15} /> Contacts
                </div>
                <div className="menu-item">
                  <BriefcaseBusiness size={15} /> Deals
                </div>
                <div className="menu-item">
                  <Check size={15} /> Tasks
                </div>
                <div className="menu-item">
                  <CalendarDays size={15} /> Calendar
                </div>
                <div className="menu-item">
                  <ChartNoAxesCombined size={15} /> Reports
                </div>
                <div className="menu-item">
                  <Settings size={15} /> Settings
                </div>
              </div>
            </aside>

            <div className="dashboard-main">
              <div className="dashboard-topbar">
                <div className="search-box">
                  <Search size={14} />
                  <span>Search...</span>
                </div>

                <div className="top-actions">
                  <Bell size={19} />
                  <div className="avatar">
                    <CircleUserRound size={22} />
                  </div>
                </div>
              </div>

              <div className="overview-grid">
                <div className="overview-card">
                  <div className="overview-icon blue">
                    <Users size={22} />
                  </div>
                  <div>
                    <small>Total Leads</small>
                    <h3>2,540</h3>
                    <span className="growth">↑ 12.5%</span>
                  </div>
                </div>

                <div className="overview-card">
                  <div className="overview-icon green">
                    <Check size={22} />
                  </div>
                  <div>
                    <small>Deals Closed</small>
                    <h3>742</h3>
                    <span className="growth">↑ 18.2%</span>
                  </div>
                </div>

                <div className="overview-card">
                  <div className="overview-icon teal">
                    <ChartNoAxesCombined size={22} />
                  </div>
                  <div>
                    <small>Revenue</small>
                    <h3>$245K</h3>
                    <span className="growth">↑ 22.6%</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-middle">
                <div className="chart-card">
                  <h4>Sales Growth</h4>

                  <div className="chart-area">
                    <div className="chart-lines">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <svg
                      viewBox="0 0 360 140"
                      className="sales-chart"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#10c98d" />
                          <stop offset="100%" stopColor="#00aaff" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M5 112 C25 95, 35 128, 55 104 S85 83, 105 96 S130 115, 150 76 S180 50, 200 77 S220 96, 240 56 S270 30, 290 53 S325 25, 355 12"
                        fill="none"
                        stroke="url(#chartGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      <path
                        d="M5 112 C25 95, 35 128, 55 104 S85 83, 105 96 S130 115, 150 76 S180 50, 200 77 S220 96, 240 56 S270 30, 290 53 S325 25, 355 12 L355 140 L5 140Z"
                        fill="#12c99b"
                        opacity="0.08"
                      />

                      <circle cx="240" cy="56" r="5" fill="#00ae91" />
                    </svg>

                    <div className="chart-tooltip">+28.5%</div>
                  </div>

                  <div className="chart-months">
                    <span>Jan</span><span>Feb</span>
                    <span>Mar</span><span>Apr</span>
                    <span>May</span><span>Jun</span>
                    <span>Jul</span><span>Aug</span>
                  </div>
                </div>

                <div className="activity-card">
                  <h4>Recent Activity</h4>

                  <div className="activity-item">
                    <span className="activity-icon orange">♟</span>
                    <div>
                      <b>New lead from Website</b>
                      <small>2 min ago</small>
                    </div>
                  </div>

                  <div className="activity-item">
                    <span className="activity-icon purple">▣</span>
                    <div>
                      <b>Deal Closed</b>
                      <small>12 min ago</small>
                    </div>
                  </div>

                  <div className="activity-item">
                    <span className="activity-icon green">✓</span>
                    <div>
                      <b>Follow-up Task</b>
                      <small>30 min ago</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pipeline-card">
                <h4>Lead Pipeline</h4>

                <div className="pipeline">
                  <div className="pipeline-step step-one">
                    <small>New Leads</small>
                    <b>1,020</b>
                  </div>
                  <div className="pipeline-step step-two">
                    <small>In Contact</small>
                    <b>720</b>
                  </div>
                  <div className="pipeline-step step-three">
                    <small>Proposal</small>
                    <b>420</b>
                  </div>
                  <div className="pipeline-step step-four">
                    <small>Won</small>
                    <b>280</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card grow-card">
            <TrendingUp size={29} />
            <div>
              <b>Grow Faster</b>
              <small>With Smart CRM</small>
            </div>
          </div>

          <div className="floating-card automate-card">
            <Zap size={30} />
            <div>
              <b>Automate Tasks</b>
              <small>Save Time</small>
            </div>
          </div>

          <div className="floating-card relation-card">
            <Handshake size={32} />
            <div>
              <b>Build Stronger</b>
              <small>Relationships</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-crm-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <span className="about-tag">
              <span className="about-dot" />
              ABOUT ROYALTECH CRM
            </span>

            <h2>
              Simplify Customer Management
              <span>&amp; Accelerate Business Growth</span>
            </h2>

            <p className="about-intro">
              At RoyalTech Innovation, we build intelligent CRM software
              solutions that help businesses manage customer relationships,
              organize sales activities, and streamline daily operations.
            </p>

            <p className="about-description">
              Our Customer Relationship Management (CRM) solutions bring lead
              tracking, contact management, sales automation, and customer
              communication together in one centralized platform. With
              real-time insights and smart workflows, businesses can improve
              productivity, strengthen customer relationships, and make
              informed decisions.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span>✓</span>
                Smart Lead &amp; Contact Management
              </div>
              <div className="about-point">
                <span>✓</span>
                Automated Sales Workflows
              </div>
              <div className="about-point">
                <span>✓</span>
                Real-Time Business Insights
              </div>
              <div className="about-point">
                <span>✓</span>
                Centralized Customer Information
              </div>
            </div>

            <a href="/contact" className="about-btn">
              Discover Our CRM Solutions
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="about-visual">
            <div className="about-image-bg" />

            <div className="about-dashboard">
              <div className="about-dashboard-header">
                <div>
                  <small>BUSINESS OVERVIEW</small>
                  <h3>CRM Performance</h3>
                </div>
                <span className="live-status">● Live</span>
              </div>

              <div className="about-metrics">
                <div className="about-metric">
                  <span>Total Customers</span>
                  <h3>2,450</h3>
                  <small>↗ Growing steadily</small>
                </div>
                <div className="about-metric">
                  <span>Conversion Rate</span>
                  <h3>68.5%</h3>
                  <small>↗ Sales performance</small>
                </div>
              </div>

              <div className="about-chart-card">
                <div className="about-chart-heading">
                  <b>Customer Growth</b>
                  <span>Monthly Overview</span>
                </div>

                <div className="about-bars">
                  {[35, 50, 42, 65, 54, 78, 68, 92, 75, 100, 83, 95].map(
                    (height, index) => (
                      <div className="about-bar-column" key={index}>
                        <span style={{ height: `${height}%` }} />
                      </div>
                    ),
                  )}
                </div>

                <div className="about-chart-labels">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="about-dashboard-footer">
                <span className="footer-check">✓</span>
                <div>
                  <b>Everything in one place</b>
                  <small>Manage your customer journey smarter</small>
                </div>
              </div>
            </div>

            <div className="about-floating-card">
              <div className="about-floating-icon">↗</div>
              <div>
                <b>Better Productivity</b>
                <small>Streamlined workflows</small>
              </div>
            </div>

            <div className="about-floating-bottom">
              <span>✦</span>
              Smarter Customer Relationships
            </div>
          </div>
        </div>

        <div className="about-focus" aria-labelledby="about-focus-title">
          <div className="about-focus-heading">
            <span className="about-focus-eyebrow">
              <span aria-hidden="true" />
              Our Focus
              <span aria-hidden="true" />
            </span>
            <h3 id="about-focus-title">
              What Drives <span>Our Solutions</span>
            </h3>
            <p>
              We build technology solutions that help you serve customers
              better, automate sales, work with data and grow your business
              faster.
            </p>
          </div>

          <div className="about-focus-grid">
            {aboutFocusCards.map(({ number, title, description, icon: Icon }) => (
              <a
                className="about-focus-card"
                href="#crm-features"
                key={number}
              >
                <div className="about-focus-card-top">
                  <span className="about-focus-icon">
                    <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="about-focus-number">{number}</span>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span className="about-focus-arrow" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PowerfulFeatures />

      <div id="contact" />

      <section className="crm-features-section" id="crm-features">
        <div className="features-heading">
          <span className="features-label">
            <span>✳</span> OUR CRM FEATURES
          </span>

          <h2>
            Powerful <span>CRM</span> Features
            <br />
            Built to Grow <span>Your Business</span>
          </h2>

          <p>
            Discover powerful CRM software features designed to simplify lead
            management, automate sales processes, organize customer
            relationships and help your business grow smarter.
          </p>
        </div>

        <div className="features-grid">
          {[
            {
              number: "01",
              title: "Smart Lead Management",
              description:
                "Capture, organize and track potential customers from multiple channels. Manage every lead efficiently and turn more opportunities into customers.",
              image: "lead-management.png",
              alt: "CRM lead management dashboard showing customer leads and lead statuses",
            },
            {
              number: "02",
              title: "Sales Process Automation",
              description:
                "Automate repetitive sales activities, streamline workflows and improve team productivity with intelligent CRM sales automation.",
              image: "sales-automation.png",
              alt: "CRM sales automation workflow showing lead assignment and follow-up",
            },
            {
              number: "03",
              title: "Customer & Contact Management",
              description:
                "Keep customer information, contact details and interaction history organized in one place for better communication and stronger relationships.",
              image: "contact-management.png",
              alt: "Customer contact management interface with customer profile details",
            },
            {
              number: "04",
              title: "Sales Analytics & Reports",
              description:
                "Track sales performance, monitor conversion rates and understand business growth through clear CRM analytics and reports.",
              image: "sales-analytics.png",
              alt: "CRM sales analytics dashboard with revenue and performance chart",
            },
            {
              number: "05",
              title: "Deal & Pipeline Tracking",
              description:
                "Monitor every sales opportunity from the first interaction to deal closure. Keep your sales pipeline organized and visible.",
              image: "deal-pipeline.png",
              alt: "CRM sales pipeline showing new leads, proposals and closed deals",
            },
            {
              number: "06",
              title: "Tasks & Follow-up Management",
              description:
                "Schedule customer follow-ups, organize daily activities and help your sales team stay on top of every important task.",
              image: "task-management.png",
              alt: "CRM task management interface showing follow-up activities and tasks",
            },
          ].map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-copy">
                <span className="feature-number">
                  {feature.number} / ROYALTECH CRM
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="/contact" className="feature-link">
                  Explore Feature <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="feature-visual">
                <Image
                  src={`/crm/images/crm-features/${feature.image}`}
                  alt={feature.alt}
                  width={420}
                  height={320}
                  className="feature-image"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="features-bottom">
          <span className="bottom-dot" />
          One Platform. Smarter Workflows. Better Business Growth.
        </div>
      </section>

      <WhyChooseCrm />

      {/* WHAT WE OFFER SECTION */}

      <section className="what-we-offer" id="what-we-offer">
        <div className="offer-container">
          {/* SECTION HEADING */}

          <div className="offer-heading">
            <span className="offer-tag">
              <span className="offer-tag-dot" />
              WHAT WE OFFER
            </span>

            <h2>
              Everything Your Business Needs
              <br />
              <span>To Grow Smarter</span>
            </h2>

            <p>
              Discover powerful CRM solutions designed to simplify business
              operations, strengthen customer relationships and accelerate
              sales growth. RoyalTech Innovation brings your entire customer
              journey together in one intelligent platform.
            </p>
          </div>

          {/* OFFER CARDS */}

          <div className="offer-grid">
            {[
              {
                number: "01",
                icon: UserPlus,
                title: "Smart Lead Capture",
                description:
                  "Capture leads from websites, landing pages and multiple marketing channels. Keep every prospect organized and ready for follow-up.",
              },
              {
                number: "02",
                icon: GitBranch,
                title: "Sales Pipeline Management",
                description:
                  "Track every opportunity from the first interaction to deal closure. Get a clear view of your sales pipeline and business progress.",
              },
              {
                number: "03",
                icon: Bot,
                title: "AI-Powered Automation",
                description:
                  "Reduce repetitive work with intelligent automation. Streamline follow-ups, task assignments and everyday sales activities.",
              },
              {
                number: "04",
                icon: MessageCircle,
                title: "Customer Engagement",
                description:
                  "Manage customer conversations, interaction history and communication in one place to build meaningful and lasting relationships.",
              },
              {
                number: "05",
                icon: ChartColumnIncreasing,
                title: "Reports & Business Insights",
                description:
                  "Make informed decisions with detailed sales reports, performance tracking and actionable business insights through CRM analytics.",
              },
              {
                number: "06",
                icon: Plug,
                title: "Seamless Integrations",
                description:
                  "Connect your CRM with compatible business tools, marketing platforms and communication systems for a more connected workflow.",
              },
            ].map((offer) => {
              const Icon = offer.icon;

              return (
                <div className="offer-card" key={offer.number}>
                  <div className="offer-top">
                    <div className="offer-icon">
                      <Icon size={27} />
                    </div>
                    <span>{offer.number}</span>
                  </div>

                  <h3>{offer.title}</h3>

                  <p>{offer.description}</p>

                  <a href="/contact">
                    Discover More <ArrowUpRight size={17} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}

          <div className="offer-bottom">
            <div>
              <h3>Ready to transform your sales process?</h3>
              <p>Let&apos;s create a smarter CRM experience for your business.</p>
            </div>

            <a href="/contact">
              Get Started Today <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  );
}
