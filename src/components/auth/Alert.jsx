// variant: "success" | "error" | "warning"
export default function Alert({ variant, children }) {
  return (
    <div className={`auth-alert auth-alert--${variant}`} role={variant === "error" ? "alert" : "status"}>
      <span className="auth-alert__dot" />
      <span>{children}</span>
    </div>
  );
}
