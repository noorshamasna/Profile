import EditableCard from "../ui/EditableCard";
import TagsField from "../ui/TagsField";
import Badge from "../ui/Badge";

export default function Skills({ skills, onSave }) {
  // Turn the edited names back into skill objects, keeping the "needs review" flag of unchanged names.
  const toSkills = (names) =>
    names.map((name) => ({ name, needsReview: skills.find((s) => s.name === name)?.needsReview }));

  return (
    <EditableCard
      title="Skills"
      value={skills}
      onSave={onSave}
      renderForm={(draft, setDraft) => (
        <TagsField
          label="Skills (separated by commas)"
          tags={draft.map((s) => s.name)}
          onChange={(names) => setDraft(toSkills(names))}
        />
      )}
    >
      <div className="row">
        {skills.map((skill) => (
          <Badge key={skill.name} variant={skill.needsReview ? "warning" : "neutral"}>
            {skill.name}
            {skill.needsReview && " · Needs Review"}
          </Badge>
        ))}
      </div>
    </EditableCard>
  );
}
