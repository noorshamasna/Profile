import Card from "../ui/Card";

export default function Completeness({ percent }) {
  return (
    <Card title="Complete Profile">
      <strong className="big">{percent}%</strong>
      <div className="bar">
        <div className="bar__fill" style={{ width: `${percent}%` }} />
      </div>
    </Card>
  );
}
