import { useState } from "react";
import Card from "./Card";

// A Card with an Edit button. While editing we change a *draft copy*;
// the real data only changes when Save is pressed (Cancel throws the draft away).
export default function EditableCard({ title, value, onSave, renderForm, children }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const startEditing = () => {
    setDraft(value);
    setEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(draft);
    setEditing(false);
  };

  const editButton = (
    <button type="button" className="btn" onClick={startEditing}>
      Edit
    </button>
  );

  return (
    <Card title={title} action={editing ? null : editButton}>
      {editing ? (
        <form onSubmit={handleSubmit}>
          {renderForm(draft, setDraft)}
          <div className="row">
            <button type="submit" className="btn btn--primary">Save</button>
            <button type="button" className="btn" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        children
      )}
    </Card>
  );
}
