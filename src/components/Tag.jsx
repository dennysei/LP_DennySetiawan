export default function Tag({ children, surface = false }) {
  return (
    <span className={`tag ${surface ? 'tag--surface' : ''}`}>{children}</span>
  );
}
