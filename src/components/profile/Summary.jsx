import EditableCard from "../ui/EditableCard";
import Field from "../ui/Field";

export default function Summary({ text, onSave }) {
  return (
    <EditableCard
      title="Professional Summary"
      value={text}
      onSave={onSave}
      renderForm={(draft, setDraft) => <Field label="Summary" value={draft} onChange={setDraft} multiline />}
    >
      <p>{text}</p>
    </EditableCard>
  );
}
