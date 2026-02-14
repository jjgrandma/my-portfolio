import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import busLogo from "../../assets/bus.png"; // local logo
import "./login.css";

export default function Login() {
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.role) {
      alert("Please select your role");
      return;
    }

    setUser({
      username: formData.username,
      role: formData.role,
    });
  };

  return (
    <div className="login-page">

      {/* ===== HEADER ===== */}
      <header className="top-header">
        <div className="header-left">
          <h2>HARAMAYA UNIVERSITY</h2>
          <p>Vehicle Management System</p>
        </div>

        <div className="header-right">
          <span>Email HU-VMS Alert</span>
        </div>
      </header>

      {/* ===== CENTER CONTENT ===== */}
      <div className="login-container">
        <div className="login-card">
          <div className="logo-wrapper">
            <img 
              src={busLogo} 
              alt="Haramaya University Logo" 
              className="login-logo"
            />
          </div>

          <p className="subtitle">Login to Secure Access</p>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength={3}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />

            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="ADMIN">Admin</option>
              <option value="TRANSPORT">Transport Officer</option>
              <option value="DRIVER">Driver</option>
              <option value="USER">User</option>
            </select>

            <div className="login-actions">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="support">
            Need help? <a href="#">Contact Support</a>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="login-footer">
        © 2026 Haramaya University. All rights reserved.
      </footer>
    </div>
  );
}
