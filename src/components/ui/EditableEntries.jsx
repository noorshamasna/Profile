import EditableCard from "./EditableCard";
import EntryList from "./EntryList";
import Field from "./Field";

// Shared by Education and Projects: an editable list of { id, title, meta }.
export default function EditableEntries({ title, items, onSave }) {
  return (
    <EditableCard
      title={title}
      value={items}
      onSave={onSave}
      renderForm={(draft, setDraft) =>
        draft.map((entry) => {
          const change = (field) => (value) =>
            setDraft(draft.map((e) => (e.id === entry.id ? { ...e, [field]: value } : e)));
          return (
            <div key={entry.id} className="entry">
              <Field label="Title" value={entry.title} onChange={change("title")} />
              <Field label="Details" value={entry.meta} onChange={change("meta")} />
            </div>
          );
        })
      }
    >
      <EntryList items={items} />
    </EditableCard>
  );
}
