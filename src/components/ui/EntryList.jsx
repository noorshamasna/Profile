// Shared by Education and Projects: a list of { id, title, meta }.
export default function EntryList({ items }) {
  return items.map((e) => (
    <div key={e.id} className="entry">
      <strong>{e.title}</strong>
      <p className="muted small">{e.meta}</p>
    </div>
  ));
}
