import { useState } from "react";

// Keeps the values and errors of a form. `validators` maps a field name to a validator function.
export function useForm(initialValues, validators) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const setError = (name, message) => setErrors((prev) => ({ ...prev, [name]: message }));

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setError(name, ""); // clear the error as soon as the user edits the field
  };

  // Check a field when the user leaves it (empty fields are only reported on submit).
  const handleBlur = (event) => {
    const { name } = event.target;
    if (values[name]) setError(name, validators[name]?.(values[name], values) ?? "");
  };

  // Runs every validator. Returns true when the whole form is valid.
  const validateAll = () => {
    const next = {};
    for (const name of Object.keys(validators)) next[name] = validators[name](values[name], values);
    setErrors(next);
    return Object.values(next).every((message) => !message);
  };

  // Props every text input needs, so pages don't repeat them.
  const field = (name) => ({ name, value: values[name], error: errors[name], onChange: handleChange, onBlur: handleBlur });

  return { values, errors, setError, handleChange, validateAll, field };
}
