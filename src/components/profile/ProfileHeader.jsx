import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";

export default function ProfileHeader({ name, photo, status, title, email, location, linkedin, tags }) {
  return (
    <header className="card header">
      <Avatar name={name} photo={photo} />
      <div className="header__info">
        <h1>
          {name} <Badge variant="warning">{status}</Badge>
        </h1>
        <p className="muted">{title}</p>
        <p className="muted">{email} · {location} · {linkedin}</p>
        <div className="row">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="row">
        <button className="btn btn--primary">Review Data</button>
      </div>
    </header>
  );
}
