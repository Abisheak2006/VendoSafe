import "./VendorDashboard.css";

function VendorDashboard() {
  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome, Ravi 👋</h1>
          <p>Here's your VendoSafe dashboard</p>
        </div>

        <div className="vendor-profile">
          👤 Ravi
        </div>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card">
          <div className="card-icon">📍</div>
          <h3>Vending Zone</h3>
          <p>Approved</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📄</div>
          <h3>Permit</h3>
          <p>Active</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🔔</div>
          <h3>Alerts</h3>
          <p>2 New</p>
        </div>

      </div>

      {/* Location */}
      <div className="dashboard-section">

        <h2>My Vending Location</h2>

        <div className="location-box">

          <div className="location-icon">
            📍
          </div>

          <div>
            <h3>Gandhipuram</h3>
            <p>Your registered vending location</p>
          </div>

        </div>

      </div>

      {/* Permit */}
      <div className="dashboard-section">

        <h2>Permit Status</h2>

        <div className="permit-box">

          <div className="status-icon">
            ✓
          </div>

          <div>
            <h3>Permit Active</h3>
            <p>Your vending permit is currently active.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default VendorDashboard;