// RolesPermissions.jsx
import "./rolesPermissions.css";

export default function RolesPermissions() {
  const roles = [
    {
      name: "Admin",
      description: "Full system control and configuration",
      permissions: [
        "Manage Users",
        "Manage Vehicles",
        "Assign Vehicles & Drivers",
        "View Reports",
        "Track Vehicles",
        "Manage Roles & Permissions",
      ],
    },
    {
      name: "Transport Officer",
      description: "Operational transport management",
      permissions: [
        "Approve / Reject Requests",
        "Assign Vehicles & Drivers",
        "Track Vehicles",
        "Handle Complaints",
        "View Reports",
      ],
    },
    {
      name: "Driver",
      description: "Vehicle operation and trip execution",
      permissions: [
        "View Assigned Trips",
        "Update Trip Status",
        "Manage Fuel Records",
        "AI Exit Tracking",
      ],
    },
    {
      name: "User",
      description: "Request and monitor transport services",
      permissions: [
        "Submit Vehicle Request",
        "View Request Status",
        "Receive Notifications",
        "Submit Complaints",
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h2>Roles & Permissions</h2>
          <p className="muted">
            Define access levels and control system capabilities
          </p>
        </div>

        <button className="primary-btn">+ Create Role</button>
      </div>

      {/* Roles Grid */}
      <div className="roles-grid">
        {roles.map((role, index) => (
          <div className="role-card" key={index}>
            <div className="role-header">
              <h3>{role.name}</h3>
              <span className={`role-badge ${role.name.toLowerCase()}`}>
                {role.name}
              </span>
            </div>

            <p className="role-desc">{role.description}</p>

            <div className="permissions">
              {role.permissions.map((perm, idx) => (
                <span key={idx} className="permission-pill">
                  {perm}
                </span>
              ))}
            </div>

            <div className="role-actions">
              <button className="icon-btn edit">Edit</button>
              <button className="icon-btn delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}