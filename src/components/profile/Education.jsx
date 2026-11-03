import EditableEntries from "../ui/EditableEntries";

export default function Education({ items, onSave }) {
  return <EditableEntries title="Education" items={items} onSave={onSave} />;
}
