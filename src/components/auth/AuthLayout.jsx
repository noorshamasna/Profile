import logo from "../../assets/lumina-logo.png";
import "../../styles/auth.css";

// The frame shared by Login and Sign up: background, card, logo, title and footer.
export default function AuthLayout({ title, subtitle, stepper, children }) {
  return (
    <div className="auth-page">
      <main className="auth-card">
        <div className="auth-brand">
          <img className="auth-logo" src={logo} alt="" />
          <span className="auth-brand__name">
            Lumina <b>CV</b>
          </span>
        </div>
        {stepper}
        <h1 className="auth-title">{title}</h1>
        <p className="auth-subtitle">{subtitle}</p>
        {children}
      </main>
      <footer className="auth-footer">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
