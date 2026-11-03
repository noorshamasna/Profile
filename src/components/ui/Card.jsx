// Any box with a title. `action` is an optional button next to the title.
export default function Card({ title, action, children }) {
  return (
    <section className="card">
      <div className="card__head">
        <h2 className="card__title">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
