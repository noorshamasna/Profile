import StatCard from "./StatCard";

export default function StatsRow({ stats }) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
