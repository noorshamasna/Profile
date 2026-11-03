import Card from "../ui/Card";

export default function RecentActivity({ items }) {
  return (
    <Card title="Recent Activity">
      <ul className="activity">
        {items.map((a) => (
          <li key={a.id}>
            {a.text}
            <span className="muted small">{a.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
