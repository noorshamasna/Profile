import { checkPassword } from "../../utils/validators";

const LEVEL_NAMES = ["none", "weak", "fair", "good", "good"];

function getLevel(password, checks) {
  if (!password) return 0;
  const passed = checks.filter((check) => check.passed).length;
  if (passed === checks.length) return password.length >= 14 ? 4 : 3; // all rules met; longer is stronger
  return Math.max(1, Math.min(passed, 2));
}

export default function PasswordStrength({ password }) {
  const checks = checkPassword(password);
  const level = getLevel(password, checks);

  return (
    <div>
      <div className={`auth-meter auth-meter--${LEVEL_NAMES[level]}`} aria-hidden="true">
        {[1, 2, 3, 4].map((step) => (
          <span key={step} className={step <= level ? "on" : ""} />
        ))}
      </div>
      <p className="auth-hint">Password strength</p>
      <ul className="auth-rules">
        {checks.map((check) => (
          <li key={check.id} className={check.passed ? "passed" : ""}>
            {check.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
