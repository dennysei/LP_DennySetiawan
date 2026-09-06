export default function SectionHeader({ label, title, desc, align = 'left' }) {
  return (
    <div className="section-header" style={{ textAlign: align }}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc" style={{ marginInline: align === 'center' ? 'auto' : undefined }}>{desc}</p>}
    </div>
  );
}
