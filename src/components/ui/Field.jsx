// A labelled input (or textarea when `multiline`).
export default function Field({ label, value, onChange, multiline = false }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <label className="field">
      <span className="small muted">{label}</span>
      <Control className="input" value={value} rows={multiline ? 3 : undefined} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
