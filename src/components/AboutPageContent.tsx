import AboutConsult from "@/components/AboutConsult";
import { OpenFormButton } from "@/components/FormModal";
import Image from "next/image";
import CardSlider from './CardSlider'
import TeamSection from './TeamSection'

function GoalIcon({ name }: { name: string }) {
  switch (name) {
    case "Growth":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M5 25h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 21v4M13 16v9M18 12v13M23 7v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7 14c3.2-1.2 6.4.4 9.2-1.2C19.2 11 21.4 8.6 24.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M21.5 8H24.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Innovation":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M12.5 21.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M13.5 24.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M11.2 18.8c-1.8-1.5-2.9-3.7-2.9-6.1A7.2 7.2 0 0 1 16 5.5a7.2 7.2 0 0 1 7.7 7.2c0 2.4-1.1 4.6-2.9 6.1l-.8.6v2.1h-8.4v-2.1l-.8-.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M16 9.2v3.4M14.1 11.1 16 13l1.9-1.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Efficiency":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 9.5v6.5l4.2 2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 5.5V7.2M16 24.8v1.7M5.5 16H7.2M24.8 16h1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Partnership":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="11" cy="10.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="21" cy="10.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5.5 24.5c.8-3.4 3.1-5.2 5.5-5.2s4.7 1.8 5.5 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M15.5 24.5c.8-3.4 3.1-5.2 5.5-5.2s4.7 1.8 5.5 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14.2 14.8c.8.7 1.8 1.1 2.8 1.1s2-.4 2.8-1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Success":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 4.8 25 8.2v6.4c0 5.1-3.5 8.8-9 11-5.5-2.2-9-5.9-9-11V8.2L16 4.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="m11.8 15.4 2.8 2.8 5.6-5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Progress":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M7 22c3.5-1.2 6.2.2 9.2-1.5 3.2-1.8 5.2-4.8 8.8-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M20.5 11.2 25 15.2l-4 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8.2" cy="22.2" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M6 26.5h16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

const goals = [
  {
    title: "Growth",
    text: "Drive measurable business growth.",
  },
  {
    title: "Innovation",
    text: "Build future-ready solutions.",
  },
  {
    title: "Efficiency",
    text: "Optimize processes with technology.",
  },
  {
    title: "Partnership",
    text: "Work as an extension of your team.",
  },
  {
    title: "Success",
    text: "Deliver results that last.",
  },
  {
    title: "Progress",
    text: "Keep improving, together.",
  },
];

const team = [
  {
    name: "Shreya Choudhary",
    role: "Founder & CEO",
    image:
      "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794308627/WhatsApp_Image_2026-11-10_at_16.03.54.jpg",
    linkedin: "https://www.linkedin.com/in/shreya-choudhary-1667b3272/",
    portraitClass: "ae-portrait-shreya",
    paragraphs: [
      "Shreya Choudhary is the Founder and CEO of RoyalTech Innovation, driven by a vision to build innovative, scalable, and technology-focused solutions that help businesses grow in an increasingly digital world. With an academic foundation in engineering from Seth Jai Prakash Mukand Lal Institute of Engineering & Technology (JMIT), she brings a technology-oriented perspective to business leadership and digital innovation.",
      "As the driving force behind RoyalTech Innovation, Shreya focuses on building a forward-thinking technology company that bridges the gap between business challenges and modern digital solutions. Her leadership encompasses strategic business development, innovation, team building, and creating opportunities for technological advancement. Under her direction, the company focuses on delivering solutions across web development, SaaS platforms, mobile and application development, custom software, and digital design.",
      "With a strong entrepreneurial mindset and a commitment to continuous learning, she believes in transforming ideas into practical solutions that create real business value. Her vision is to establish RoyalTech Innovation as a trusted technology partner, helping organisations embrace digital transformation, streamline operations, and achieve sustainable growth through technology.",
      "Her approach to leadership is rooted in innovation, collaboration, quality, and the belief that great technology begins with understanding people’s needs.",
    ],
  },
  {
    name: "Mayank Royal",
    role: "Founder & Managing Director",
    image:
      "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794308829/WhatsApp_Image_2026-11-10_at_16.36.52.jpg",
    linkedin: "https://www.linkedin.com/in/mayank-royal-7b1626443/",
    reverse: true,
    portraitClass: "ae-portrait-mayank",
    paragraphs: [
      "Mayank Royal serves as the Founder & Managing Director of RoyalTech Innovation, where he plays a key role in driving the company’s strategic direction, business growth, and organisational development. With a forward-thinking leadership approach, he focuses on building a strong foundation for innovation, operational excellence, and sustainable business success.",
      "As Founder & Managing Director, Mayank is committed to aligning business objectives with emerging technological opportunities, encouraging creative problem-solving, and developing strategies that deliver meaningful value to clients. His leadership emphasises team collaboration, effective execution, continuous improvement, and the adoption of modern digital solutions to address evolving business challenges.",
      "At RoyalTech Innovation, he works towards strengthening the company’s capabilities, expanding its business opportunities, and fostering a culture where technology and innovation come together to create practical, scalable solutions. His vision is to help establish RoyalTech Innovation as a trusted technology partner, empowering businesses through innovation, quality, and digital advancement.",
    ],
  },
  {
    name: "Mathan Murugan",
    role: "Senior UI/UX Developer",
    image: "/team-mathan-design.jpg",
    linkedin: "https://www.linkedin.com/in/mathan-murugan-m8300917717/",
    portraitClass: "ae-portrait-mathan",
    paragraphs: [
      "Mathan Murugan is an experienced design and digital innovation professional with over 7 years of industry experience, bringing together creative thinking, technical understanding, and a problem-solving mindset. With an engineering background from GKM College of Engineering and Technology, he has developed a strong foundation for approaching digital challenges through innovative and user-focused solutions.",
      "Throughout his professional journey, Mathan has focused on creative problem-solving, user experience, interface design, and developing meaningful digital experiences. His expertise in UX design, combined with his knowledge of Lean Six Sigma AI principles, reflects his commitment to improving design processes, enhancing usability, and creating solutions that balance functionality with creativity.",
      "At RoyalTech Innovation, he contributes his industry knowledge and design perspective towards building intuitive, engaging, and effective digital solutions. He believes that successful digital products go beyond visual appeal — they must deliver seamless user experiences, solve real-world challenges, and create lasting value.",
      "Driven by continuous learning, innovation, and a passion for design excellence, Mathan strives to bring fresh perspectives and thoughtful solutions to every project, supporting the company’s commitment to quality and technological advancement.",
    ],
  },
  {
    name: "Vashnavi",
    role: "Human Resources",
    image:
      "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794308744/Change_background_logo_e60c8784.jpg",
    linkedin: "https://www.linkedin.com/in/vashnavi/",
    reverse: true,
    portraitClass: "ae-portrait-vashnavi",
    paragraphs: [
      "Vashnavi leads Human Resources at RoyalTech Innovation, where she plays a central role in building a people-first culture and supporting the company’s growth through thoughtful talent practices. She partners with leadership to shape organisational development, workforce planning, and employee engagement across engineering, design, delivery, and operations.",
      "Her HR focus includes end-to-end talent acquisition, recruitment coordination, onboarding, employee relations, performance support, and day-to-day workforce management. She works to create clear hiring processes, a welcoming join experience, and an environment where team members feel heard, supported, and motivated to do their best work.",
      "At RoyalTech Innovation, Vashnavi strengthens internal coordination between teams, helps resolve people-related needs with fairness and clarity, and supports policies that encourage accountability, collaboration, and professional growth. She also contributes to engagement initiatives that keep the workplace positive, inclusive, and aligned with company values.",
      "With a strong emphasis on communication, empathy, and continuous improvement, she is committed to building a productive HR function that attracts strong talent, retains high performers, and helps every team member grow with RoyalTech Innovation.",
    ],
  },
  {
    name: "Aditi Mehra",
    role: "Full Stack Developer",
    image: "/team-aditi-dev.jpg",
    linkedin: "https://www.linkedin.com/in/aditimehra0298/",
    portraitClass: "ae-portrait-aditi",
    paragraphs: [
      "Aditi Mehra is a Full Stack Developer at RoyalTech Innovation, specialising in backend engineering, software architecture, API development, and scalable application solutions. She has a strong technical focus on designing robust backend systems, developing efficient server-side applications, and building secure, high-performance digital platforms.",
      "Her technical expertise includes Python, FastAPI, Node.js, REST API development, database management, authentication systems, workflow automation, and AI integration. She focuses on developing reliable application architectures, optimising backend performance, and ensuring seamless communication between frontend interfaces, databases, and third-party services.",
      "At RoyalTech Innovation, Aditi contributes to the development of innovative software solutions, enterprise applications, and technology-driven platforms. She is passionate about solving complex technical challenges, improving system efficiency, and transforming business requirements into scalable digital solutions.",
      "With a problem-solving mindset and a commitment to engineering excellence, she aims to build dependable technology that supports business growth, operational efficiency, and digital innovation.",
    ],
  },
  {
    name: "Pankaj",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/ugqc5gb8/image/upload/v1794400474/Create_professional_corporate_he__c4f6cc1f.jpg",
    linkedin: "https://www.linkedin.com/in/pankaj1915",
    portraitClass: "ae-portrait-pankaj",
    reverse: true,
    paragraphs: [
      "Pankaj is a Frontend Developer at RoyalTech Innovation, specialising in React.js development, modern user interfaces, responsive web design, and interactive application experiences. He has a strong technical focus on building visually appealing, high-performance frontend solutions and creating seamless digital experiences.",
      "His technical expertise includes React.js, JavaScript, HTML5, CSS3, Tailwind CSS, responsive web development, component-based architecture, UI implementation, API integration, and frontend optimisation. He focuses on developing reusable components, improving application performance, and ensuring seamless interaction between frontend interfaces and backend services.",
      "At RoyalTech Innovation, Pankaj contributes to the development of modern web applications, business platforms, and innovative digital solutions. He is passionate about creating intuitive user experiences, implementing creative designs, and transforming business requirements into functional and engaging web interfaces.",
      "With a creative mindset and a commitment to quality development, he aims to build scalable, user-friendly, and performance-driven frontend solutions that support business growth and digital innovation.",
    ],
  },
];



export default function AboutPageContent() {
  return (
    <div className="ae">
      <section className="ae-hero" aria-label="About RoyalTech Innovation">
        <div className="ae-hero-media" aria-hidden="true">
          <Image
            src="/about-hero-team.jpg"
            alt="RoyalTech Innovation team collaborating in the Mohali office"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="ae-hero-photo"
          />
        </div>
        <div className="ae-hero-shade" aria-hidden="true" />
        <div className="ae-hero-inner">
          <p className="ae-badge">About Us</p>
          <h1>Technology that moves your business forward</h1>
          <p className="ae-hero-lead">
            Practical technology for startups, SMEs, and established
            organisations shaped around how your team works.
          </p>
          <div className="ae-hero-actions">
            <OpenFormButton
              className="ae-consult"
              title="Talk to us"
              source="about-hero"
            >
              Talk to us <span aria-hidden="true">→</span>
            </OpenFormButton>
          </div>
        </div>
      </section>

      <section className="ae-beliefs" aria-label="Our core beliefs">
        <div className="ae-center">
          <p className="ae-badge">Our core beliefs</p>
          <h2 className="ae-belief-title">
            <strong>RoyalTech</strong> Where technology meets purpose
          </h2>
        </div>
        <div className="ae-cards">
          <article className="ae-card">
            <span className="ae-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3.2 14.2 8.6 20 9.2 15.7 13.1 17 18.8 12 15.8 7 18.8 8.3 13.1 4 9.2 9.8 8.6 12 3.2Z" />
              </svg>
            </span>
            <h3>Collaboration</h3>
            <p>Working hand-in-hand to deliver solutions tailored to your needs.</p>
          </article>
          <article className="ae-card">
            <span className="ae-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20 12a8 8 0 0 1-13.7 5.6" />
                <path d="M4 12a8 8 0 0 1 13.7-5.6" />
                <path d="M16 4h2.5v2.6" />
                <path d="M8 20H5.5v-2.6" />
              </svg>
            </span>
            <h3>Transformation</h3>
            <p>Turning your ideas into scalable solutions that empower growth.</p>
          </article>
          <article className="ae-card">
            <span className="ae-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3.5 19 6.2v5.4c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6.2L12 3.5Z" />
                <path d="M9.2 12.1 11.1 14l3.8-4" />
              </svg>
            </span>
            <h3>Trust</h3>
            <p>Building strong support grounded in transparency and results.</p>
          </article>
        </div>
        <div className="ae-panel">
          <div>
            <p className="ae-panel-badge">About Us</p>
            <h2>
              RoyalTech
              <br />
              Tailored for Your
              <br />
              Business
            </h2>
          </div>
          <div>
            <p>
              RoyalTech is a trusted technology partner dedicated to delivering
              cutting-edge IT solutions that drive innovation and growth. With a
              team of experienced developers, AI specialists, and software
              engineers, we empower businesses to achieve their digital
              transformation goals.
            </p>
            <p>
              Our mission is to provide scalable, future-proof solutions that
              combine the latest technologies with agile development practices.
              From startups to enterprises, we tailor our services to meet your
              unique business needs, ensuring 100% client satisfaction.
            </p>
            <OpenFormButton
              className="ae-panel-btn"
              title="Book consultation"
              source="about-panel"
            >
              Book consultation <span aria-hidden="true">→</span>
            </OpenFormButton>
          </div>
        </div>
      </section>

      <section className="ae-beliefs ae-mission" aria-label="Mission and vision">
        <div className="ae-mission-grid">
          <div>
            <div className="ae-center">
              <p className="ae-badge">Mission &amp; Vision</p>
              <h2>Why we exist—and where we are going</h2>
              <p>
                Our mission keeps every project grounded in business outcomes.
                Our vision keeps us focused on becoming the partner clients
                trust for long-term digital progress.
              </p>
            </div>
            <div className="ae-cards ae-cards-two">
              <article className="ae-card">
                <h3>Our Mission</h3>
                <p className="ae-line">Built around your business.</p>
                <p>
                  Deliver customised technology solutions that strengthen digital
                  presence, make day-to-day work more efficient, and support
                  sustainable growth—without unnecessary complexity, lock-in, or
                  generic templates that ignore how your organisation operates.
                </p>
                <ul>
                  <li>Customised technology solutions for real workflows</li>
                  <li>Stronger websites, apps, and brand presence</li>
                  <li>More efficient day-to-day operations</li>
                  <li>Growth that can scale with your team</li>
                </ul>
              </article>
              <article className="ae-card">
                <h3>Our Vision</h3>
                <p className="ae-line">A trusted partner, wherever you are.</p>
                <p>
                  Become a trusted global technology partner known for innovative,
                  reliable IT solutions and meaningful digital transformation—
                  supporting businesses of every size as they modernise, compete,
                  and expand across markets.
                </p>
                <ul>
                  <li>Trusted technology partner across regions</li>
                  <li>Innovative and dependable IT delivery</li>
                  <li>Transformation that creates lasting value</li>
                  <li>Long-term relationships beyond launch day</li>
                </ul>
              </article>
            </div>
          </div>
          <div className="ae-mission-photo">
            <Image
              src="/about-office-entrance.jpg"
              alt="RoyalTech Innovation office entrance"
              fill
              sizes="(max-width: 860px) 100vw, 448px"
            />
          </div>
        </div>
      </section>

      <section className="ae-goals" aria-label="Our goals">
        <div className="ae-goals-shell">
          <div className="ae-goals-copy">
            <p className="ae-goals-label">Our Goals</p>
            <h2>Six goals that guide every engagement</h2>
            <p>
              We focus on what matters most — your success. These six goals
              shape how we work and help us deliver consistent results.
            </p>
          </div>

          <div className="ae-goals-grid">
            {goals.map((goal) => (
              <article key={goal.title} className="ae-goals-card">
                <span className="ae-goals-icon">
                  <GoalIcon name={goal.title} />
                </span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ae-team ae-team-band" id="team" aria-label="Our team">
        <div className="ae-team-wrap">
          <div className="ae-center">
            <p className="ae-badge">Our Team</p>
            <h2>A team of innovators and strategists driving AI solutions.</h2>
            <p>
              At RoyalTech Innovation, our team brings together leadership,
              design, engineering, and client growth to build practical
              technology for businesses.
            </p>
          </div>
          {/* ================Team Part============= */}
          {/* <div className="ae-team-list">
            {team.map((member) => (
              <article
                key={member.name}
                className={`ae-row${member.reverse ? " is-reverse" : ""}`}
              >
                <div
                  className={`ae-portrait${
                    "portraitClass" in member && member.portraitClass
                      ? ` ${member.portraitClass}`
                      : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    sizes="(max-width: 860px) 100vw, 416px"
                    quality={95}
                    unoptimized={
                      member.image.includes("mayank") ||
                      member.image.includes("shreya") ||
                      member.image.includes("cloudinary.com") ||
                      member.image.includes("aditi-dev") ||
                      member.image.includes("vashnavi-hr") ||
                      member.image.includes("mathan-design")
                    }
                  />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="ae-role">{member.role}</p>
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <a
                    className="ae-linkedin"
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn profile <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div> */}
          <TeamSection/>
        </div>
      </section>

      {/*============== Slider ============== */}

            {/* <CardSlider/> */}


      <AboutConsult />
    </div>
  );
}
