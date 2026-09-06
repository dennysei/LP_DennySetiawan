import { useParams, Link, Navigate } from 'react-router-dom';
import Tag from '../components/Tag';
import { projects } from '../data/projects';
import './CaseStudy.css';

// Approach photos for Dashboard project (PT Imora Motor)
import dashImg1 from '../assets/Work/dashboard/5.png';
import dashImg2 from '../assets/Work/dashboard/6.png';
import dashImg3 from '../assets/Work/dashboard/7.png';

const approachPhotos = {
  'dashboard': [dashImg1, dashImg2, dashImg3],
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  const photos = approachPhotos[project.slug] || [];

  return (
    <main className="case-study">
      {/* ── Header ── */}
      <section className="cs-hero section">
        <div className="container">
          <Link to="/work" className="cs-hero__back">← All Work</Link>
          <div className="cs-hero__meta">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h1 className="cs-hero__title">{project.title}</h1>
          <p className="cs-hero__summary">{project.summary}</p>
          <div className="cs-hero__tags">
            {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </section>

      {/* ── Lifecycle (RMODA only if approach has 10+ steps) ── */}
      {project.approach && project.approach.length >= 8 && (
        <section className="cs-lifecycle section--surface">
          <div className="container">
            <p className="section-label">Engagement Lifecycle</p>
            <div className="cs-lifecycle__flow">
              {project.approach.map((a, i) => (
                <div key={i} className="cs-lifecycle__step">
                  <span className="cs-lifecycle__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cs-lifecycle__label">{a.step}</span>
                  {i < project.approach.length - 1 && (
                    <span className="cs-lifecycle__arrow" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container">
        <div className="cs-body">

          {/* 01 Context */}
          <section className="cs-section" aria-labelledby="cs-context">
            <div className="cs-section__label">01 — Context</div>
            <p className="cs-section__text">{project.context}</p>
          </section>

          {/* 02 Problem */}
          <section className="cs-section" aria-labelledby="cs-problem">
            <div className="cs-section__label">02 — Business Problem</div>
            <p className="cs-section__text">{project.problem}</p>
          </section>

          {/* 03 Approach */}
          <section className="cs-section">
            <div className="cs-section__label">03 — Approach</div>
            <div className="cs-approach">
              {project.approach.map((a, i) => (
                <div key={i} className="cs-approach__step">
                  <span className="cs-approach__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="cs-approach__title">{a.step}</h3>
                  <div className="cs-approach__content">
                    <p className="cs-approach__desc">{a.desc}</p>
                    {photos[i] && (
                      <img
                        src={photos[i]}
                        alt={a.step}
                        className="cs-approach__photo"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Deliverables */}
          {project.deliverables && (
            <section className="cs-section">
              <div className="cs-section__label">04 — Deliverables</div>
              <ul className="cs-deliverables">
                {project.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 05 Findings */}
          {project.findings && (
            <section className="cs-section">
              <div className="cs-section__label">05 — Findings</div>
              <div className="cs-findings">
                {project.findings.map((f, i) => (
                  <div key={i} className="cs-finding">
                    <h3 className="cs-finding__title">{f.title}</h3>
                    <p className="cs-finding__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 06 Root Causes */}
          {project.rootCauses && (
            <section className="cs-section">
              <div className="cs-section__label">06 — Root Causes</div>
              <ul className="cs-root-causes">
                {project.rootCauses.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 07 Recommendations */}
          {project.recommendations && (
            <section className="cs-section">
              <div className="cs-section__label">07 — Recommendations</div>
              <div className="cs-recs">
                {project.recommendations.map((r, i) => (
                  <div key={i} className="cs-rec">
                    <span className="cs-rec__n">R{i + 1}</span>
                    <p className="cs-rec__text">{r}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 08 Outcome */}
          <section className="cs-section">
            <div className="cs-section__label">08 — Outcome</div>
            <p className="cs-section__text cs-section__text--outcome">{project.outcome}</p>
          </section>

        </div>
      </div>

      {/* ── Nav between case studies ── */}
      <section className="cs-nav section section--surface">
        <div className="container">
          <div className="cs-nav__inner">
            <Link to="/work" className="btn btn--ghost">← Back to All Work</Link>
            <Link to="/contact" className="btn btn--primary">Discuss a Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
