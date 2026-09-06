import { Link } from 'react-router-dom';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';
import './Work.css';

export default function Work() {
  return (
    <main className="work-page">
      <section className="page-hero section">
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h1 className="page-hero__title">Selected Work</h1>
          <p className="page-hero__sub">
            Case studies across consulting, analytics, and operational improvement —
            each following a consistent structure from problem through recommendation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-index">
            {projects.map((p, i) => (
              <Link key={p.id} to={`/work/${p.slug}`} className="work-index-row">
                <div className="work-index-row__n">{String(i + 1).padStart(2, '0')}</div>
                <div className="work-index-row__body">
                  <div className="work-index-row__meta">
                    <span className="work-index-row__client">{p.client}</span>
                    <span className="work-index-row__year">{p.year}</span>
                  </div>
                  <h2 className="work-index-row__title">{p.title}</h2>
                  <p className="work-index-row__summary">{p.summary}</p>
                  <div className="work-index-row__tags">
                    {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
                <span className="work-index-row__cta">View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
