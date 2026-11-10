import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, resendVerification } from "../api/authApi";
import { useForm } from "../hooks/useForm";
import { validateEmail, validateRequired } from "../utils/validators";
import AuthLayout from "../components/auth/AuthLayout";
import Alert from "../components/auth/Alert";
import TextField from "../components/auth/TextField";
import SubmitButton from "../components/auth/SubmitButton";

// Every message shown above the form, keyed by the backend's answer.
const ALERTS = {
  INVALID_CREDENTIALS: { variant: "error", text: "Email or password is incorrect. Check your details and try again." },
  EMAIL_NOT_VERIFIED: { variant: "warning", text: "Verify your email address to continue. We sent a link when you registered." },
  SERVER_ERROR: { variant: "error", text: "We couldn't sign you in right now. Please try again in a moment." },
  SUCCESS: { variant: "success", text: "Signed in. Taking you to your profile…" },
};

const BUTTON_LABEL = { idle: "Sign in", loading: "Signing in…", success: "Redirecting…" };

const validators = { email: validateEmail, password: validateRequired("Enter your password.") };

export default function LoginPage() {
  const navigate = useNavigate();
  const { state } = useLocation(); // Sign up sends { notice: "verify", email } after registering
  const { values, validateAll, handleChange, field } = useForm(
    { email: state?.email ?? "", password: "", remember: false },
    validators,
  );
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [alertKey, setAlertKey] = useState(state?.notice === "verify" ? "EMAIL_NOT_VERIFIED" : null);
  const [resent, setResent] = useState(false);
  const alert = ALERTS[alertKey];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlertKey(null);
    if (!validateAll()) return;

    setStatus("loading");
    try {
      await login(values);
      setAlertKey("SUCCESS");
      setStatus("success");
      setTimeout(() => navigate("/profile"), 1200);
    } catch (error) {
      setAlertKey(ALERTS[error.code] ? error.code : "SERVER_ERROR");
      setStatus("idle");
    }
  };

  const handleResend = async () => {
    await resendVerification(values.email);
    setResent(true);
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to manage your profile and keep your information up to date.">
      {alert && <Alert variant={alert.variant}>{alert.text}</Alert>}
      {alertKey === "EMAIL_NOT_VERIFIED" && (
        <button type="button" className="auth-link auth-resend" onClick={handleResend} disabled={resent}>
          {resent ? "Verification email sent" : "Resend verification email"}
        </button>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <TextField label="Email address" type="email" placeholder="name@example.com" autoComplete="email" {...field("email")} />
        <TextField label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" {...field("password")} />

        <div className="auth-row">
          <label className="auth-check">
            <input type="checkbox" name="remember" checked={values.remember} onChange={handleChange} />
            Keep me signed in on this device
          </label>
          <a href="#" className="auth-link">Forgot password?</a>
        </div>

        <SubmitButton busy={status !== "idle"}>{BUTTON_LABEL[status]}</SubmitButton>
      </form>

      <a href="#" className="auth-link auth-center">Email me a sign-in link instead</a>
      <p className="auth-switch">
        New to LuminaCV? <Link to="/signup" className="auth-link auth-bold">Create an account</Link>
      </p>
    </AuthLayout>
  );
}
