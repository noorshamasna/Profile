import Card from "../ui/Card";

export default function DataQuality({ items }) {
  const openItems = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card title="Data Quality">
      <p className="muted small">{openItems} open items</p>
      <div className="quality">
        {items.map((item) => (
          <div key={item.label} className={`quality__box quality__box--${item.tone}`}>
            <strong>{item.count}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
