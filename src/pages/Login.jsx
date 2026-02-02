import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (isLogin) {
      // Check if user exists
      try {
        const users = JSON.parse(localStorage.getItem("task-management-users") || "[]");
        const user = users.find((u) => u.email === email);
        
        if (!user) {
          setError("User not found. Please sign up first.");
          return;
        }

        // Login successful
        login(user.name, email);
        navigate("/");
      } catch (error) {
        setError("Login failed. Please try again.");
      }
    } else {
      // Signup
      const result = signup(name.trim(), email.trim());
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message || "Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>
        <p className="subtitle">
          {isLogin
            ? "Login to manage your tasks"
            : "Sign up to start managing your tasks"}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-primary btn-full">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="toggle-auth">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="link-button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
