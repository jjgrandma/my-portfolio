import { useState } from "react";
import "./manageVehicles.css";

export default function ManageVehicles() {
  const [vehicles, setVehicles] = useState([
    { plate: "ET-12345", type: "Bus", model: "Toyota Coaster", status: "Available" },
    { plate: "ET-67890", type: "Pickup", model: "Hilux", status: "On Trip" },
    { plate: "ET-44556", type: "Truck", model: "Isuzu NPR", status: "Maintenance" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [newVehicle, setNewVehicle] = useState({
    plate: "",
    type: "Bus",
    model: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();

    if (!newVehicle.plate || !newVehicle.model) {
      alert("Please fill all required fields");
      return;
    }

    // Prevent duplicate plate numbers
    const exists = vehicles.some(
      (v) => v.plate.toLowerCase() === newVehicle.plate.toLowerCase()
    );

    if (exists) {
      alert("Vehicle with this plate already exists.");
      return;
    }

    setVehicles([...vehicles, newVehicle]);

    setNewVehicle({
      plate: "",
      type: "Bus",
      model: "",
      status: "Available",
    });

    setShowForm(false);
  };

  // FILTER + SEARCH LOGIC
  const filteredVehicles = vehicles.filter((v) => {
    const matchesStatus =
      filterStatus === "All" ? true : v.status === filterStatus;

    const matchesSearch =
      v.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.model.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h2>Manage Vehicles</h2>
          <p className="muted">Register, monitor, and manage fleet vehicles</p>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search by plate or model..."
            className="table-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="primary-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Vehicle
          </button>
        </div>
      </div>

      {/* Status Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilterStatus("All")}>All</button>
        <button onClick={() => setFilterStatus("Available")}>Available</button>
        <button onClick={() => setFilterStatus("On Trip")}>Assigned</button>
        <button onClick={() => setFilterStatus("Maintenance")}>Maintenance</button>
      </div>

      {/* Add Vehicle Form */}
      {showForm && (
        <div className="vehicle-form">
          <form onSubmit={handleAddVehicle}>
            <h3>Add New Vehicle</h3>

            <input
              type="text"
              name="plate"
              placeholder="Plate Number"
              value={newVehicle.plate}
              onChange={handleChange}
            />

            <select
              name="type"
              value={newVehicle.type}
              onChange={handleChange}
            >
              <option value="Bus">Bus</option>
              <option value="Truck">Truck</option>
              <option value="Pickup">Pickup</option>
            </select>

            <input
              type="text"
              name="model"
              placeholder="Vehicle Model"
              value={newVehicle.model}
              onChange={handleChange}
            />

            <select
              name="status"
              value={newVehicle.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="On Trip">On Trip</option>
              <option value="Maintenance">Maintenance</option>
            </select>

            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                Save
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
              <th>Plate Number</th>
              <th>Type</th>
              <th>Model</th>
              <th>Status</th>
              <th align="right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredVehicles.map((v, index) => (
              <tr key={index}>
                <td className="highlight-text">{v.plate}</td>
                <td>{v.type}</td>
                <td>{v.model}</td>
                <td>
                  <span
                    className={`vehicle-status ${v.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    ● {v.status}
                  </span>
                </td>
                <td align="right">
                  <button className="icon-btn edit">Edit</button>
                  <button className="icon-btn delete">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
