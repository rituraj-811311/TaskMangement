import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>📋 Task Management Dashboard</h1>
      <p className="welcome-message">
        Welcome back, <span className="user-highlight">{user?.name}</span>! 👋
      </p>
      <p>Manage your daily and monthly tasks efficiently.</p>

      <div className="cards">
        <div className="card">
          <h3>🗓 Daily Tasks</h3>
          <p>Add and complete your daily to-dos.</p>
          <Link to="/daily">Go to Daily Tasks →</Link>
        </div>

        <div className="card">
          <h3>📆 Monthly Tasks</h3>
          <p>Plan tasks for the whole month.</p>
          <Link to="/monthly">Go to Monthly Tasks →</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
