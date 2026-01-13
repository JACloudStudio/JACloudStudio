export default function Section({ id, children }) {
  return (
    <section id={id} className="snap-section">
      {children}
    </section>
  );
}
