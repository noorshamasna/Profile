export const MIN_PASSWORD_LENGTH = 10; // "configurable" in the design

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // something@something.tld, no spaces
const COMMON_PASSWORDS = ["password", "qwerty", "123456", "letmein", "welcome", "admin", "iloveyou"];

// Every validator has the same shape: (value, allValues) => "error message" or "" when valid.
export const validateRequired = (message) => (value) => (value ? "" : message);

export function validateEmail(email) {
  if (!email.trim()) return "Enter your email address.";
  if (!EMAIL_PATTERN.test(email.trim())) return "Enter a valid email address.";
  return "";
}

export function validateFullName(name) {
  const trimmed = name.trim();
  if (!trimmed) return "Enter your full name.";
  if (!/^\p{L}[\p{L}\s'’.-]*$/u.test(trimmed)) return "Use letters only in your name.";
  if (trimmed.split(/\s+/).length < 2) return "Enter your first and last name.";
  return "";
}

// The rules are data, so the checklist on screen and the validation always agree.
export const passwordRules = [
  { id: "length", label: `At least ${MIN_PASSWORD_LENGTH} characters`, test: (p) => p.length >= MIN_PASSWORD_LENGTH },
  {
    id: "common",
    label: "Not a commonly used password",
    test: (p) => p.length > 0 && !COMMON_PASSWORDS.some((word) => p.toLowerCase().includes(word)),
  },
  { id: "symbol", label: "Includes a number or symbol", test: (p) => /\d|[^\p{L}\p{N}\s]/u.test(p) },
];

export const checkPassword = (password) => passwordRules.map((rule) => ({ ...rule, passed: rule.test(password) }));

export function validatePassword(password) {
  if (!password) return "Create a password.";
  return checkPassword(password).every((rule) => rule.passed) ? "" : "Your password doesn't meet all the requirements yet.";
}

export function validateConfirmPassword(confirm, { password }) {
  if (!confirm) return "Re-enter your password.";
  return confirm === password ? "" : "Passwords don't match.";
}
