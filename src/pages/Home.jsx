import { Link } from 'react-router-dom';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import './Home.css';

const metrics = [
  { value: '7+',   label: 'Years Experience — Operations, Audit & Analytics' },
  { value: '49',   label: 'Dealer Sites Audited Nationwide' },
  { value: '~60%', label: 'Reporting Time Reduced via Automation' },
  { value: '5–15%', label: 'Client KPI Performance Improvement' },
];

const services = [
  {
    title: 'Business Consulting',
    desc: 'Process analysis, governance, KPI frameworks, risk identification, and internal control — structured into practical recommendations.',
    caps: ['Business Process Analysis', 'Internal Control', 'KPI Design', 'Risk Assessment'],
    to: '/services',
  },
  {
    title: 'Data Analysis',
    desc: 'Turning operational and business data into decisions that hold up under scrutiny.',
    caps: ['KPI & Performance Analysis', 'Root Cause Analysis', 'Trend Analysis', 'Data-Driven Recommendations'],
    to: '/services',
  },
  {
    title: 'Data Visualization',
    desc: 'Making performance data easier to understand and act on — across Power BI, Looker Studio, and Excel.',
    caps: ['Dashboard Development', 'KPI Monitoring', 'Management Reporting', 'Automated Reporting'],
    to: '/services',
  },
];

const methodology = [
  { n: '01', label: 'Discover & Audit',     desc: 'Stakeholder goals, process mapping, and operational baselines.' },
  { n: '02', label: 'Diagnose & Map',       desc: 'Root cause analysis, risk identification, and RACI governance.' },
  { n: '03', label: 'Control & Automate',   desc: 'Designing SOPs, internal controls, and Power BI dashboards.' },
  { n: '04', label: 'Deliver & Benchmark',  desc: 'Executive reporting, KPI tracking, and continuous follow-up.' },
];

const featuredProjects = projects.slice(0, 4);
const featuredExp = experiences.slice(0, 2);

export default function Home() {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero section" aria-label="Introduction">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__headline">
              Transforming Complex<br />
              Operations & Data Into<br />
              Strategic Clarity.
            </h1>
            <p className="hero__sub">
              Strategy & Operations Consultant with 7+ years spanning
              operational audit, process control, and performance analytics
              across 49+ dealer networks.
            </p>
            <div className="hero__ctas">
              <Link to="/work" className="btn btn--primary">Explore Case Studies</Link>
              <Link to="/contact" className="btn btn--ghost">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="metrics section section--surface" aria-label="Key facts">
        <div className="container">
          <div className="metrics__grid">
            {metrics.map(m => (
              <div key={m.label} className="metric">
                <span className="metric__value">{m.value}</span>
                <span className="metric__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="what section" aria-labelledby="what-title">
        <div className="container">
          <SectionHeader
            label="Capabilities"
            title="What I Do"
            desc="Three interconnected capabilities — each grounded in real operational and analytical experience."
          />
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <ul className="service-card__caps">
                  {s.caps.map(c => <li key={c}><Tag surface>{c}</Tag></li>)}
                </ul>
                <Link to={s.to} className="service-card__link">
                  Explore service <span className="service-card__arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED EXPERIENCE ── */}
      <section className="feat-exp section section--surface" aria-labelledby="exp-title">
        <div className="container">
          <SectionHeader label="Background" title="Featured Experience" />
          <div className="feat-exp__list">
            {featuredExp.map(e => (
              <div key={e.id} className="exp-row">
                <div className="exp-row__meta">
                  <span className="exp-row__period">{e.period}</span>
                  <span className="exp-row__type">{e.type}</span>
                </div>
                <div className="exp-row__body">
                  <p className="exp-row__role">{e.role}</p>
                  <p className="exp-row__company">{e.company}</p>
                  <p className="exp-row__desc">{e.shortDesc}</p>
                  <ul className="exp-row__highlights">
                    {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                  <div className="exp-row__tags">
                    {e.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="feat-exp__cta">
            <Link to="/experience" className="btn btn--ghost">View Full Experience</Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="feat-work section" aria-labelledby="work-title">
        <div className="container">
          <SectionHeader
            label="Selected Work"
            title="Case Studies"
            desc="Representative engagements — from end-to-end organizational diagnostics to performance analytics and automation."
          />
          <div className="work-grid">
            {featuredProjects.map((p, i) => (
              <Link key={p.id} to={`/work/${p.slug}`} className={`work-card ${i === 0 ? 'work-card--featured' : ''}`}>
                <div className="work-card__inner">
                  <div className="work-card__meta">
                    <span className="work-card__client">{p.client}</span>
                    <span className="work-card__year">{p.year}</span>
                  </div>
                  <h3 className="work-card__title">{p.title}</h3>
                  <p className="work-card__summary">{p.summary}</p>
                  <div className="work-card__tags">
                    {p.tags.slice(0, 3).map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <span className="work-card__cta">View case study <span className="work-card__cta-arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="method section section--surface" aria-labelledby="method-title">
        <div className="container">
          <SectionHeader
            label="Approach"
            title="How I Work"
            desc="A consistent, structured process from problem definition through delivery."
          />
          <div className="method__steps">
            {methodology.map((m, i) => (
              <div key={m.n} className="method__step">
                <span className="method__n">{m.n}</span>
                <div className="method__body">
                  <p className="method__label">{m.label}</p>
                  <p className="method__desc">{m.desc}</p>
                </div>
                {i < methodology.length - 1 && <span className="method__arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta section" aria-label="Contact call to action">
        <div className="container">
          <div className="final-cta__inner">
            <h2 className="final-cta__title">
              Have a business problem, process challenge,<br />
              or data that needs to be turned into insight?
            </h2>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
