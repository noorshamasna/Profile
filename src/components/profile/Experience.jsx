import EditableCard from "../ui/EditableCard";
import Field from "../ui/Field";
import TagsField from "../ui/TagsField";
import ExperienceItem from "./ExperienceItem";

export default function Experience({ items, onSave }) {
  return (
    <EditableCard
      title="Work Experience"
      value={items}
      onSave={onSave}
      renderForm={(draft, setDraft) => {
        // change(id, field) returns a function that updates one field of one job in the draft
        const change = (id, field) => (value) =>
          setDraft(draft.map((job) => (job.id === id ? { ...job, [field]: value } : job)));

        return draft.map((job) => (
          <fieldset key={job.id} className="exp-form">
            <Field label="Role" value={job.role} onChange={change(job.id, "role")} />
            <Field label="Company" value={job.company} onChange={change(job.id, "company")} />
            <Field label="Period" value={job.period} onChange={change(job.id, "period")} />
            <Field label="Description" value={job.description} onChange={change(job.id, "description")} multiline />
            <TagsField label="Skills (separated by commas)" tags={job.skills} onChange={change(job.id, "skills")} />
          </fieldset>
        ));
      }}
    >
      {items.map((job) => (
        <ExperienceItem key={job.id} {...job} />
      ))}
    </EditableCard>
  );
}
