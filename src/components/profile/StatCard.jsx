export default function StatCard({ label, value, note }) {
  return (
    <div className="card stat">
      <span className="stat__label">{label}</span>
      <strong className="stat__value">{value}</strong>
      <span className="stat__note">{note}</span>
    </div>
  );
}
