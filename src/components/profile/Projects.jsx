import EditableEntries from "../ui/EditableEntries";

export default function Projects({ items, onSave }) {
  return <EditableEntries title="Projects & Certifications" items={items} onSave={onSave} />;
}
