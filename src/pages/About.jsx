import { Link } from 'react-router-dom';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import heroPhoto from '../assets/About/WhatsApp Image 2026-08-13 at 11.28.00.jpeg';
import './About.css';

const strengths = [
  {
    title: 'Operational Understanding',
    desc: 'Seven years in the field — auditing 49 dealer sites, analyzing process execution, and validating operational data on-site — built a foundation in how businesses actually work, not just how they are designed.',
  },
  {
    title: 'Structured Analytical Thinking',
    desc: 'From KPI design to RACI development, risk identification, and root-cause analysis: a consistent pattern of breaking complex problems into structured, auditable components.',
  },
  {
    title: 'Business & Consulting Mindset',
    desc: 'Current consulting work requires translating operational findings into governance recommendations and presenting to commissioner-level stakeholders — combining analytical rigor with business communication.',
  },
  {
    title: 'Data-to-Decision Pipeline',
    desc: 'Building dashboards and automation is not the end goal — it is the infrastructure that makes better decisions faster. Every tool built has a business question it is designed to answer.',
  },
];

const timeline = [
  {
    period: '2019–2026',
    event: 'Joined PT Imora Motor as Field Operation Staff in the Aftersales division.',
    detail: 'Over seven years, built deep experience in operational audit, KPI analysis, performance reporting, and data visualization — covering a network of 49 Honda dealer sites.',
  },
  {
    period: '2020–2022',
    event: 'Developed Excel VBA automation and Power Query reporting infrastructure.',
    detail: 'Reduced manual reporting time by over 90%, creating capacity for deeper analysis and improvement work.',
  },
  {
    period: '2022–2024',
    event: 'Built integrated performance dashboards in Power BI and Looker Studio.',
    detail: 'Consolidated aftersales KPI data across all 49 dealer sites, reducing manual reporting effort by approximately 60%.',
  },
  {
    period: '2026',
    event: 'Joined PT BP Consulting Group as Strategy Associate Consultant.',
    detail: 'Moved into client-facing consulting, applying operational and analytical experience to organizational diagnostics, internal control, and strategic deliverable production.',
  },
];

export default function About() {
  return (
    <main className="about">
      {/* ── Page Header ── */}
      <section className="page-hero section">
        <div className="container">
          <div className="page-hero__inner">
            <div className="page-hero__text">
              <p className="section-label">About</p>
              <h1 className="page-hero__title">
                Business understanding built<br />
                from operations up.
              </h1>
              <p className="page-hero__sub">
                Seven years in operational audit and analytics. Now in consulting. The path wasn't
                a career change — it was a natural extension of what the work kept requiring.
              </p>
            </div>
            <div className="page-hero__photo-wrap">
              <img
                src={heroPhoto}
                alt="Denny Setiawan"
                className="page-hero__photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Summary ── */}
      <section className="about-summary section section--surface">
        <div className="container">
          <div className="about-summary__grid">
            <div>
              <SectionHeader label="Professional Summary" title="Who I Am" />
            </div>
            <div className="about-summary__text">
              <p>
                I am a Strategy Associate Consultant at PT BP Consulting Group, with a background
                spanning operational audit, business process analysis, KPI analytics, internal control,
                and data visualization.
              </p>
              <p>
                My work at PT Imora Motor involved auditing a 49-site dealer network twice annually —
                assessing workflow compliance, productivity, and performance data, then translating
                findings into recommendations presented to Board of Directors level. That experience
                required both the discipline to collect and validate data rigorously, and the judgment
                to communicate what it meant to operational management.
              </p>
              <p>
                In consulting, that same combination applies at an organizational level: understanding
                a client's business processes, identifying governance and control gaps, designing
                practical remediation, and structuring findings for decision-makers.
              </p>
              <p>
                The common thread is structured thinking: breaking complex operational and organizational
                problems into components that can be analyzed, diagnosed, and acted on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Timeline ── */}
      <section className="career section">
        <div className="container">
          <SectionHeader label="Career Progression" title="How I Got Here" />
          <div className="career__timeline">
            {timeline.map((t, i) => (
              <div key={i} className="career__item">
                <span className="career__period">{t.period}</span>
                <div className="career__body">
                  <p className="career__event">{t.event}</p>
                  <p className="career__detail">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Strengths ── */}
      <section className="strengths section section--surface">
        <div className="container">
          <SectionHeader
            label="Core Strengths"
            title="What I Bring to the Work"
          />
          <div className="strengths__grid">
            {strengths.map((s, i) => (
              <div key={i} className="strength-card">
                <span className="strength-card__n">0{i + 1}</span>
                <h3 className="strength-card__title">{s.title}</h3>
                <p className="strength-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Recognition ── */}
      <section className="edu section">
        <div className="container">
          <div className="edu__grid">
            <div className="edu__block">
              <SectionHeader label="Education" title="Academic Background" />
              <div className="edu__item">
                <p className="edu__degree">Bachelor's Degree (S1) — Business Administration, Business International</p>
                <p className="edu__school">Institut STIAMI, Jakarta</p>
                <p className="edu__gpa">GPA: 3.97 / 4.00</p>
              </div>
            </div>
            <div className="edu__block">
              <SectionHeader label="Recognition" title="Awards" />
              <div className="edu__item">
                <p className="edu__award">Best Employee Recognition</p>
                <p className="edu__award-detail">Received 3 times during tenure at PT Imora Motor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="philosophy section section--surface">
        <div className="container">
          <div className="philosophy__inner">
            <p className="philosophy__quote">
              "Good analysis is only useful if it leads to a decision. The goal is always
              to make the next step clearer — for the organization, the management, or the process."
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="about-ctas">
            <Link to="/experience" className="btn btn--primary">View Experience</Link>
            <Link to="/work" className="btn btn--ghost">See Case Studies</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
