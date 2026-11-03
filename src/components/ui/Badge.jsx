// One component for every pill/label. Only `variant` changes the look.
export default function Badge({ children, variant = "neutral" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
