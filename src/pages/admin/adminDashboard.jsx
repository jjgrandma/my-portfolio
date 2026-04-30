import "./adminDashboard.css";

export default function AdminDashboard() {
  return (
    <>
      <h1>Dashboard Overview</h1>
      <p className="subtitle">
        Welcome to Fleet Management System Admin Dashboard
      </p>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card active">
          <span>Total Users</span>
          <h2>142</h2>
          <small className="green">+12%</small>
        </div>

        <div className="stat-card">
          <span>Active Vehicles</span>
          <h2>89</h2>
          <small className="green">+5%</small>
        </div>

        <div className="stat-card">
          <span>Maintenance Due</span>
          <h2>12</h2>
          <small className="green">+3%</small>
        </div>

        <div className="stat-card">
          <span>System Health</span>
          <h2>98%</h2>
          <small className="green">+2%</small>
        </div>
      </div>

      {/* Panels */}
      <div className="panels">
        <div className="panel">
          <h3>Recent Activities</h3>

          <div className="activity">
            <strong>User registered</strong>
            <span>John Driver</span>
            <small>2 hours ago</small>
          </div>

          <div className="activity">
            <strong>Vehicle assigned</strong>
            <span>Transport Team</span>
            <small>4 hours ago</small>
          </div>
        </div>

        <div className="panel">
          <h3>System Status</h3>

          <div className="status">
            <span>API Server</span>
            <span className="online">● Online</span>
            <small>99.8%</small>
          </div>

          <div className="status">
            <span>Database</span>
            <span className="online">● Online</span>
            <small>99.9%</small>
          </div>
        </div>
      </div>
    </>
  );
}