import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../api/authApi";
import { useForm } from "../hooks/useForm";
import {
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
} from "../utils/validators";
import AuthLayout from "../components/auth/AuthLayout";
import Alert from "../components/auth/Alert";
import Stepper from "../components/auth/Stepper";
import TextField from "../components/auth/TextField";
import PasswordStrength from "../components/auth/PasswordStrength";
import SubmitButton from "../components/auth/SubmitButton";

const STEPS = ["Account"];

const validators = {
  fullName: validateFullName,
  email: validateEmail,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
  terms: (checked) =>
    checked
      ? ""
      : "Please accept the Terms of Service and Privacy Policy to continue.",
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const { values, errors, setError, handleChange, validateAll, field } =
    useForm(
      {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      },
      validators,
    );
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    if (!validateAll()) return;

    setLoading(true);
    try {
      await signUp(values);
      // Step 2 (verify email) isn't built yet: the login page shows the "verify your email" notice instead.
      navigate("/login", {
        state: { notice: "verify", email: values.email.trim() },
      });
    } catch (error) {
      if (error.code === "EMAIL_EXISTS") {
        setError(
          "email",
          "An account with this email already exists. Try signing in instead.",
        );
      } else {
        setFormError(
          "We couldn't create your account right now. Please try again in a moment.",
        );
      }
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      stepper={<Stepper steps={STEPS} current={0} />}
      title="Create your account"
      subtitle="Build your professional profile from your resume and other supported sources."
    >
      {formError && <Alert variant="error">{formError}</Alert>}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          placeholder="Alex Morgan"
          autoComplete="name"
          {...field("fullName")}
        />
        <TextField
          label="Email address"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          {...field("email")}
        />

        <div>
          <TextField
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...field("password")}
          />
          <PasswordStrength password={values.password} />
        </div>

        <TextField
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          {...field("confirmPassword")}
        />

        <div>
          <label className="auth-check">
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={handleChange}
            />
            <span>
              I agree to the Terms of Service and have read the{" "}
              <a href="#" className="auth-link">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && <p className="auth-error">{errors.terms}</p>}
        </div>

        <SubmitButton busy={loading}>
          {loading ? "Creating account…" : "Create account"}
        </SubmitButton>
      </form>

      <p className="auth-note">
        Your profile is private to you. Documents are processed only to extract
        professional information, and are never shared with other candidates.
      </p>
      <p className="auth-switch">
        Already have an account?{" "}
        <Link to="/login" className="auth-link auth-bold">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
