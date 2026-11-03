import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function Sources({ items }) {
  return (
    <Card title="Sources">
      {items.map((source) => (
        <div key={source.name} className="line">
          <span>{source.name}</span>
          <Badge variant={source.variant}>{source.status}</Badge>
        </div>
      ))}
    </Card>
  );
}
