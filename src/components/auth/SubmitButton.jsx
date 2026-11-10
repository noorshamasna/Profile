// While `busy` the button is disabled and shows a spinner, so it can't be clicked twice.
export default function SubmitButton({ busy, children }) {
  return (
    <button type="submit" className="auth-button" disabled={busy}>
      {busy && <span className="auth-spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}
