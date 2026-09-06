import './Contact.css';

const contactItems = [
  {
    label: 'Email',
    value: 'dennysetiawan056@gmail.com',
    href: 'mailto:dennysetiawan056@gmail.com',
    note: 'Best for detailed enquiries',
  },
  {
    label: 'WhatsApp',
    value: '+62 858 1915 5363',
    href: 'https://wa.me/6285819155363',
    note: 'Quick questions or scheduling',
  },
  {
    label: 'Phone',
    value: '+62 858 1915 5363',
    href: 'tel:+6285819155363',
    note: 'Available during business hours',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dennysetiawan056',
    href: 'https://www.linkedin.com/in/dennysetiawan056/',
    note: 'Professional background & updates',
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="page-hero section">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="contact-hero__title">
            Let's discuss a business,<br />
            process, or data challenge.
          </h1>
          <p className="contact-hero__sub">
            Whether it's a consulting engagement, a diagnostic project, or a data
            and reporting problem — reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {contactItems.map(c => (
              <a
                key={c.label}
                href={c.href}
                className="contact-card"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-card__label">{c.label}</span>
                <span className="contact-card__value">{c.value}</span>
                <span className="contact-card__note">{c.note}</span>
                <span className="contact-card__arrow">→</span>
              </a>
            ))}
          </div>

          <div className="contact-note">
            <p>
              Based in Jakarta, Indonesia. Available for consulting engagements,
              project-based work, and professional collaborations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
