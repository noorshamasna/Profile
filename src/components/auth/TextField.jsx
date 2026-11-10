import { useId, useState } from "react";

// A labelled input with an error message. Password fields get a Show/Hide button.
export default function TextField({ label, error, type = "text", ...inputProps }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="auth-field">
      <label className="auth-label" htmlFor={id}>
        {label}
      </label>
      <div className={`auth-input${error ? " auth-input--error" : ""}`}>
        <input id={id} type={isPassword && visible ? "text" : type} aria-invalid={Boolean(error)} {...inputProps} />
        {isPassword && (
          <button type="button" className="auth-link" onClick={() => setVisible((v) => !v)}>
            {visible ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p className="auth-error">{error}</p>}
    </div>
  );
}
