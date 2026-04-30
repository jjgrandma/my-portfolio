import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./adminLayout.css";

export default function AdminLayout() {
  // System support messages (password/login issues)
  const [messages, setMessages] = useState([
    { id: 1, sender: "user01", type: "Password Reset", content: "I forgot my password. Please help.", read: false },
    { id: 2, sender: "driver02", type: "Login Issue", content: "Cannot login after password change.", read: false },
    { id: 3, sender: "user02", type: "Password Reset", content: "Password reset link not working.", read: false },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // For topbar search (global)

  const unreadCount = messages.filter((m) => !m.read).length;

  const markAsRead = (id) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  // Notification panel messages are filtered independently (optional: can add search here)
  const filteredMessages = messages;

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🚚 <span>FleetHub</span></div>
        <nav>
          <NavLink to="/admin" end className="nav-link">Overview</NavLink>
          <NavLink to="/admin/users" className="nav-link">Users</NavLink>
          <NavLink to="/admin/vehicles" className="nav-link">Vehicles</NavLink>
          <NavLink to="/admin/roles" className="nav-link">Roles & Permissions</NavLink>
          <NavLink to="/admin/reports" className="nav-link">Reports</NavLink>
        </nav>
        <div className="sidebar-footer">⚠ {unreadCount} System Issue(s)</div>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Topbar */}
        <header className="topbar">
          {/* Search input with icon */}
          <div className="topbar-left">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search users, vehicles..."
                className="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="topbar-right">
            {/* Notification Bell */}
            <div
              className="notification-bell"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              🔔
              {unreadCount > 0 && <span className="badge">{unreadCount}</span>}

              {showNotifications && (
                <div className="notification-panel">
                  {filteredMessages.length === 0 && <p className="no-msg">No system messages</p>}
                  {filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-item ${msg.read ? "read" : "unread"}`}
                      onClick={() => markAsRead(msg.id)}
                    >
                      <strong>{msg.sender}</strong> - {msg.type}
                      <p>{msg.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="profile">
              <div className="avatar">A</div>
              <div>
                <strong>Admin User</strong>
                <span>System Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
