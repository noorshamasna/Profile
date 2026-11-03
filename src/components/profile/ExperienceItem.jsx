import Badge from "../ui/Badge";

export default function ExperienceItem({ role, company, period, location, description, skills, status, source }) {
  return (
    <article className="exp">
      <div className="exp__top">
        <h3>{role}</h3>
        <Badge variant={status.variant}>{status.label}</Badge>
      </div>
      <p className="muted">
        {company} · {period}
        {location && ` · ${location}`}
      </p>
      <p>{description}</p>
      <div className="row">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
      <p className="muted small">Source: {source}</p>
    </article>
  );
}
