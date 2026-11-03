import { useState } from "react";
import Field from "./Field";

// Edits a list as comma-separated text. The raw text stays in local state
// so typing commas and spaces feels normal; the parent gets a clean array.
export default function TagsField({ label, tags, onChange }) {
  const [text, setText] = useState(tags.join(", "));

  return (
    <Field
      label={label}
      value={text}
      onChange={(value) => {
        setText(value);
        onChange(value.split(",").map((t) => t.trim()).filter(Boolean));
      }}
    />
  );
}
