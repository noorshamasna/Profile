// MOCK backend. When the real API is ready, replace the bodies with fetch() calls
// that throw AuthError(code) for the same codes. The pages won't need to change.
//
// Try it: demo@lumina.cv / Lumina#2026       -> success
//         unverified@lumina.cv / Lumina#2026 -> "verify your email"
//         error@lumina.cv                    -> server error
//         anything else                      -> wrong email or password
const wait = (ms = 900) => new Promise((resolve) => setTimeout(resolve, ms));

const users = [
  { email: "demo@lumina.cv", password: "Lumina#2026", verified: true },
  { email: "unverified@lumina.cv", password: "Lumina#2026", verified: false },
];

export class AuthError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
  }
}

export async function login({ email, password }) {
  await wait();
  const address = email.trim().toLowerCase();
  if (address === "error@lumina.cv") throw new AuthError("SERVER_ERROR");

  const user = users.find((u) => u.email === address && u.password === password);
  if (!user) throw new AuthError("INVALID_CREDENTIALS");
  if (!user.verified) throw new AuthError("EMAIL_NOT_VERIFIED");
  return { email: user.email };
}

export async function signUp({ fullName, email, password }) {
  await wait();
  const address = email.trim().toLowerCase();
  if (users.some((u) => u.email === address)) throw new AuthError("EMAIL_EXISTS");
  users.push({ fullName, email: address, password, verified: false });
}

export async function resendVerification() {
  await wait(600);
}
