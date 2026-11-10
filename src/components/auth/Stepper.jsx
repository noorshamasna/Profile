// `current` is the index of the active step.
export default function Stepper({ steps, current }) {
  return (
    <ol className="auth-stepper">
      {steps.map((label, index) => (
        <li key={label} className={index === current ? "active" : ""}>
          {index + 1} {label}
        </li>
      ))}
    </ol>
  );
}
