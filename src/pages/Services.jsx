import { Link } from 'react-router-dom';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <main className="services-page">
      <section className="page-hero section">
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h1 className="page-hero__title">Services</h1>
          <p className="page-hero__sub">
            Three interconnected capabilities — grounded in real operational
            and analytical experience, not generic consulting frameworks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <article key={s.id} className="svc-row">
              <div className="svc-row__header">
                <span className="svc-row__n">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="svc-row__title">{s.title}</h2>
              </div>

              <div className="svc-row__body">
                <p className="svc-row__positioning">{s.positioning}</p>

                <div className="svc-row__caps-block">
                  <p className="svc-row__sub-label">Capabilities</p>
                  <ul className="svc-row__caps">
                    {s.capabilities.map(c => (
                      <li key={c} className="svc-row__cap">{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="svc-row__meta-block">
                  <div>
                    <p className="svc-row__sub-label">Related Experience</p>
                    <div className="svc-row__exp">
                      {s.relatedExp.map(e => <Tag key={e} surface>{e}</Tag>)}
                    </div>
                  </div>

                  {s.relatedCase && (
                    <div>
                      <p className="svc-row__sub-label">Case Study</p>
                      <Link to={`/work/${s.relatedCase.slug}`} className="svc-row__case-link">
                        {s.relatedCase.label} →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="services-cta">
            <h2 className="services-cta__title">
              Ready to discuss a specific challenge?
            </h2>
            <p className="services-cta__sub">
              Whether it's a process improvement initiative, a diagnostic, or a reporting problem —
              let's figure out the right approach together.
            </p>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
