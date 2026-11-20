import {
  Check,
  X,
  Crown,
  Zap,
  TrendingUp,
  Handshake,
  Headset,
  MousePointerClick,
  SlidersHorizontal,
  IndianRupee,
  Plug,
  ShieldCheck,
  Scaling,
} from "lucide-react";
import "./why-choose-crm.css";

const quickBenefits = [
  {
    icon: Zap,
    title: "Boost Productivity",
    text: "Automate follow-ups and repetitive tasks so your team spends more time selling.",
  },
  {
    icon: TrendingUp,
    title: "Grow Sales",
    text: "Track every lead and deal in one pipeline and close more opportunities.",
  },
  {
    icon: Handshake,
    title: "Build Stronger Relationships",
    text: "Keep full customer history at hand for faster, more personal conversations.",
  },
  {
    icon: Headset,
    title: "Get Dedicated Support",
    text: "Work with a team that helps you set up, train and scale.",
  },
];

const comparison = [
  {
    icon: MousePointerClick,
    feature: "Ease of Use",
    ours: "Simple, intuitive interface your team can learn quickly",
    others: "Often complex and hard to navigate",
  },
  {
    icon: SlidersHorizontal,
    feature: "Customization",
    ours: "Customized to match your sales process and business needs",
    others: "Limited customization options",
  },
  {
    icon: Headset,
    feature: "Support",
    ours: "Dedicated support from the team that builds your CRM",
    others: "Generic support and delayed responses",
  },
  {
    icon: IndianRupee,
    feature: "Pricing",
    ours: "Transparent and flexible pricing",
    others: "Hidden costs and expensive plans",
  },
  {
    icon: Plug,
    feature: "Integrations",
    ours: "Connects with your website, marketing and communication tools",
    others: "Limited integrations",
  },
  {
    icon: ShieldCheck,
    feature: "Data Security",
    ours: "Secure handling and protection of your customer data",
    others: "Basic security measures",
  },
  {
    icon: Scaling,
    feature: "Scalability",
    ours: "Built to grow as your team and customer base grow",
    others: "May struggle with large-scale needs",
  },
];

export default function WhyChooseCrm() {
  return (
    <section
      className="wcc-section"
      id="why-crm"
      aria-labelledby="why-crm-title"
    >
      <div className="wcc-container">
        {/* HEADING */}
        <header className="wcc-heading">
          <span className="wcc-tag">
            <span className="wcc-tag-dot" />
            WHY CHOOSE OUR CRM
          </span>

          <h2 id="why-crm-title">
            More Than Just CRM Software,
            <br />
            <span>A Partner in Business Growth</span>
          </h2>

          <p>
            Many CRM tools give you features and leave the rest to you.
            RoyalTech CRM gives you a simpler, smarter way to manage leads,
            automate sales and build lasting customer relationships, with a
            team that supports you at every step.
          </p>
        </header>

        {/* QUICK BENEFITS */}
        <ul className="wcc-benefits">
          {quickBenefits.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className="wcc-benefit-icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>

        {/* COMPARISON TABLE */}
        <div
          className="wcc-table-wrap"
          role="region"
          aria-label="Comparison of RoyalTech CRM with other CRM software"
          tabIndex={0}
        >
          <table className="wcc-table">
            <caption className="wcc-sr">
              RoyalTech CRM compared with other CRM software
            </caption>
            <thead>
              <tr>
                <th scope="col" className="wcc-th-feature">
                  Features
                </th>
                <th scope="col" className="wcc-th-ours">
                  <span className="wcc-header-label">
                    <Crown size={20} aria-hidden="true" />
                    RoyalTech CRM
                  </span>
                </th>
                <th scope="col" className="wcc-th-others">
                  Other CRMs
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(({ icon: Icon, feature, ours, others }) => (
                <tr key={feature}>
                  <th scope="row" className="wcc-td-feature">
                    <span className="wcc-cell">
                      <Icon size={20} aria-hidden="true" />
                      {feature}
                    </span>
                  </th>
                  <td className="wcc-td-ours">
                    <span className="wcc-cell">
                      <span className="wcc-icon wcc-icon-check">
                        <Check size={13} strokeWidth={3} aria-label="Yes" />
                      </span>
                      {ours}
                    </span>
                  </td>
                  <td className="wcc-td-others">
                    <span className="wcc-cell">
                      <span className="wcc-icon wcc-icon-x">
                        <X size={13} strokeWidth={3} aria-label="No" />
                      </span>
                      {others}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}