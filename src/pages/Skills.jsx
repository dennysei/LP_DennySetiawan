import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import { professionalSkills, technicalSkills } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <main className="skills-page">
      <section className="page-hero section">
        <div className="container">
          <p className="section-label">Toolkit</p>
          <h1 className="page-hero__title">Skills</h1>
          <p className="page-hero__sub">
            Professional capabilities and technical tools — built through seven years of
            operational, analytical, and consulting work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="skills-grid">
            <div className="skills-block">
              <p className="skills-block__label">Professional Skills</p>
              <div className="skills-block__tags">
                {professionalSkills.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
            <div className="skills-block">
              <p className="skills-block__label">Technical Tools</p>
              <div className="skills-block__tags">
                {technicalSkills.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
