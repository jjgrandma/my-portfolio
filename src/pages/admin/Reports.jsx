import { useState } from "react";
import { Download, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./reports.css";

export default function Reports() {
  const navigate = useNavigate();

  /* ===== REQUEST STATUS WITH REQUESTOR TYPE ===== */
  const requestStats = {
    total: 124,
    approved: 86,
    pending: 20,
    rejected: 18,
  };

  const requestors = [
    { name: "IT Department", count: 48 },
    { name: "Research Institute", count: 36 },
    { name: "Finance Office", count: 22 },
    { name: "Other Units", count: 18 },
  ];

  /* ===== REPORT DATA ===== */
  const [reports, setReports] = useState([
    {
      id: "1",
      name: "Vehicle Movement Report",
      type: "Vehicle Movement",
      requester: "IT Department",
      generatedDate: "2024-02-10",
      format: "PDF",
      kmTravelled: 1240,
    },
    {
      id: "2",
      name: "Fuel Cost Analysis",
      type: "Fuel Cost",
      requester: "Research Institute",
      generatedDate: "2024-02-12",
      format: "Excel",
      fuelUsed: 155,
    },
    {
      id: "3",
      name: "Request Approval Summary",
      type: "Request Summary",
      requester: "Finance Office",
      generatedDate: "2024-02-14",
      format: "PDF",
    },
  ]);

  const [reportType, setReportType] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reportTypes = [
    "All",
    "Vehicle Movement",
    "Fuel Cost",
    "Request Summary",
  ];

  /* ===== FILTER LOGIC ===== */
  const filteredReports = reports.filter((r) => {
    const reportDate = new Date(r.generatedDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (reportType !== "All" && r.type !== reportType) return false;
    if (start && reportDate < start) return false;
    if (end && reportDate > end) return false;

    return true;
  });

  const generateReport = () => {
    const newReport = {
      id: Date.now().toString(),
      name: "Generated Request Report",
      type: "Request Summary",
      requester: "Other Units",
      generatedDate: new Date().toISOString().split("T")[0],
      format: "PDF",
    };
    setReports([newReport, ...reports]);
  };

  return (
    <div className="page-container">
      {/* ===== HEADER ===== */}
      <div className="page-header">
        <div>
          <h2>Reports & Analytics</h2>
          <p className="muted">
            Requests, requester units, approvals, fuel & movement analysis
          </p>
        </div>
        <button className="primary-btn" onClick={generateReport}>
          <Plus size={18} /> Generate Report
        </button>
      </div>

      {/* ===== REQUEST STATUS SUMMARY ===== */}
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Requests</h4>
          <span className="stat-number">{requestStats.total}</span>
        </div>

        <div
          className="stat-card approved clickable"
          onClick={() => navigate("/admin/requests?status=approved")}
        >
          <h4>Approved</h4>
          <span className="stat-number">{requestStats.approved}</span>
          <small>View approved requests →</small>
        </div>

        <div className="stat-card pending">
          <h4>Pending</h4>
          <span className="stat-number">{requestStats.pending}</span>
        </div>

        <div className="stat-card rejected">
          <h4>Rejected</h4>
          <span className="stat-number">{requestStats.rejected}</span>
        </div>
      </div>

      {/* ===== REQUESTOR BREAKDOWN ===== */}
      <div className="requestor-section">
        <h3>Requests by Requestor Unit</h3>
        <div className="requestor-grid">
          {requestors.map((r, i) => (
            <div key={i} className="requestor-card">
              <span>{r.name}</span>
              <strong>{r.count}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="filter-bar">
        <div className="filter-group">
          <label>Report Type</label>
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            {reportTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>From</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <div className="filter-group">
          <label>To</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div className="table-container">
        <table className="dark-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Type</th>
              <th>Requester</th>
              <th>Date</th>
              <th>Format</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((r) => (
              <tr key={r.id}>
                <td className="highlight-text">{r.name}</td>
                <td><span className="badge">{r.type}</span></td>
                <td>{r.requester}</td>
                <td className="muted">{r.generatedDate}</td>
                <td>{r.format}</td>
                <td>
                  <button className="icon-btn">
                    <Download size={18} />
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