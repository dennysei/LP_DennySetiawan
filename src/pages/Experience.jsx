import { Link } from 'react-router-dom';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/experience';
import expPhoto1 from '../assets/Experience/About - 1.jpg';
import expPhoto2 from '../assets/Experience/About - 2.jpeg';
import expPhoto3 from '../assets/Experience/About - 3.jpeg';
import './Experience.css';

const expPhotos = {
  'bp-consulting': [expPhoto1],
  'imora-motor': [expPhoto2, expPhoto3],
};

export default function Experience() {
  return (
    <main className="experience-page">
      <section className="page-hero section">
        <div className="container">
          <p className="section-label">Career</p>
          <h1 className="page-hero__title">Experience</h1>
          <p className="page-hero__sub">
            Seven years in operations, analytics, and audit — now in consulting.
            Each role built directly on the previous one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="exp-list">
            {experiences.map((e, idx) => (
              <article key={e.id} className="exp-full-row" aria-label={`${e.role} at ${e.company}`}>
                <div className="exp-full-row__header">
                  <div className="exp-full-row__meta">
                    <span className="exp-full-row__period">{e.period}</span>
                    <span className="exp-full-row__type">{e.type}</span>
                  </div>
                  <div className="exp-full-row__title-block">
                    <h2 className="exp-full-row__role">{e.role}</h2>
                    <p className="exp-full-row__company">{e.company} · {e.location}</p>
                  </div>
                </div>

                <div className="exp-full-row__body">
                  <p className="exp-full-row__desc">{e.shortDesc}</p>
                  {expPhotos[e.id] && expPhotos[e.id].length > 0 && (
                    <div className="exp-full-row__photo-wrap">
                      {expPhotos[e.id].map((photo, i) => (
                        <img
                          key={i}
                          src={photo}
                          alt={`${e.role} at ${e.company} - photo ${i + 1}`}
                          className="exp-full-row__photo"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="exp-full-row__highlights">
                  <p className="exp-full-row__hl-label">Key Highlights</p>
                  <ul>
                    {e.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="exp-full-row__footer">
                  <div className="exp-full-row__tags">
                    {e.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {e.caseStudy && (
                    <Link to={e.caseStudy} className="btn btn--ghost btn--sm">
                      View Case Study →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education block */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeader label="Education" title="Academic Background" />
          <div className="edu-row">
            <div className="edu-row__meta">
              <span className="edu-row__period">2015–2019</span>
            </div>
            <div className="edu-row__body">
              <p className="edu-row__degree">Bachelor's Degree (S1) — Business Administration, Business International</p>
              <p className="edu-row__school">Institut STIAMI, Jakarta</p>
              <p className="edu-row__gpa">GPA: 3.97 / 4.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
