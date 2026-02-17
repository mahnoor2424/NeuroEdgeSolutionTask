import React from "react";
import "../App.css";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-glow"></div>

      <div className="login-card">
        <div className="login-content">

          <div className="login-logo">
            <div className="logo-circle">
              {/* Simple SVG Logo */}
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#00d4ff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h2>
              <span className="white">NeuroEdge</span>{" "}
              <span className="blue">Solutions</span>
            </h2>
          </div>

          <div className="login-heading">
            <h1>Secure Access</h1>
            <p>Enter credentials to enter your workspace</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label>Email Terminal</label>
              <input type="email" placeholder="name@company.com" />
            </div>

            <div className="input-group">
              <label>Keyphrase</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember Node
              </label>
              <a href="#">Reset Access</a>
            </div>

            <button className="login-btn">
              Initialize Session
            </button>
          </form>

          <div className="divider">
            <span>Digital Auth</span>
          </div>

<div className="social-login">
  <button className="social-btn icon-only">
    {/* Google SVG */}
    <svg viewBox="0 0 48 48" className="social-icon">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.91-6.91C35.45 2.42 30.16 0 24 0 14.82 0 6.84 5.18 2.69 12.76l8.03 6.23C12.55 13.03 17.8 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.63-.14-2.84-.43-4.09H24v7.74h12.73c-.26 1.98-1.66 4.95-4.77 6.96l7.37 5.72C43.88 36.8 46.5 31.13 46.5 24.5z"/>
      <path fill="#FBBC05" d="M10.72 28.99A14.5 14.5 0 0 1 9.5 24c0-1.73.3-3.39.83-4.94l-8.03-6.23A23.93 23.93 0 0 0 0 24c0 3.88.93 7.55 2.69 10.76l8.03-6.23z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.92-2.13 15.89-5.79l-7.37-5.72c-2.05 1.42-4.8 2.42-8.52 2.42-6.2 0-11.45-3.53-13.28-8.49l-8.03 6.23C6.84 42.82 14.82 48 24 48z"/>
    </svg>
  </button>

  <button className="social-btn icon-only">
    {/* LinkedIn SVG */}
    <svg viewBox="0 0 24 24" className="social-icon">
      <path fill="#0A66C2" d="M4.98 3.5C4.98 5 3.89 6.1 2.49 6.1 1.1 6.1 0 5 0 3.5 0 2 1.1.9 2.49.9c1.4 0 2.49 1.1 2.49 2.6zM.21 8.09h4.56V24H.21zM8.09 8.09h4.37v2.17h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.95c0-1.9-.03-4.34-2.65-4.34-2.66 0-3.07 2.08-3.07 4.21V24H8.09z"/>
    </svg>
  </button>
</div>



          <p className="register-text">
            No account yet? <a href="#">Inquire Here</a>
          </p>

        </div>
      </div>
    </div>
  );
}
