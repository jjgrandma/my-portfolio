import { useState } from "react";
import "./manageUsers.css";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { username: "john_admin", password: "1234", role: "Admin", status: "Active" },
    { username: "driver01", password: "1234", role: "Driver", status: "Active" },
    { username: "transport01", password: "1234", role: "Transport Officer", status: "Inactive" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "Driver",
    status: "Active",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOrUpdateUser = (e) => {
    e.preventDefault();

    if (!newUser.username || !newUser.password) {
      alert("Please fill all required fields");
      return;
    }

    const duplicate = users.some(
      (u, index) =>
        u.username.toLowerCase() === newUser.username.toLowerCase() &&
        index !== editingIndex
    );

    if (duplicate) {
      alert("Username already exists.");
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, newUser]);
    }

    setNewUser({
      username: "",
      password: "",
      role: "Driver",
      status: "Active",
    });

    setShowForm(false);
  };

  const handleEdit = (index) => {
    setNewUser(users[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h2>Manage Users</h2>
          <p className="muted">Control system access and permissions</p>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search users..."
            className="table-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="primary-btn"
            onClick={() => {
              setShowForm(true);
              setEditingIndex(null);
            }}
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Add / Edit User Form */}
      {showForm && (
        <div className="user-form">
          <form onSubmit={handleAddOrUpdateUser}>
            <h3>{editingIndex !== null ? "Edit User" : "Add New User"}</h3>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={newUser.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newUser.password}
              onChange={handleChange}
            />

            <select
              name="role"
              value={newUser.role}
              onChange={handleChange}
            >
              <option value="User(Requestor)">User(Requestor)</option>
              <option value="Admin">Admin</option>
              <option value="Driver">Driver</option>
              <option value="Transport Officer">Transport Officer</option>
            </select>

            <select
              name="status"
              value={newUser.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                {editingIndex !== null ? "Update" : "Save"}
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="table-container">
        <table className="dark-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th align="right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="highlight-text">{user.username}</td>

                <td>
                  <span className={`badge ${user.role.replace(" ", "").toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`status ${
                      user.status === "Active" ? "active" : "inactive"
                    }`}
                  >
                    ● {user.status}
                  </span>
                </td>

                <td align="right">
                  <button
                    className="icon-btn edit"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="icon-btn delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
