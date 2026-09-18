import { useState } from "react";
import VendorRegistration from "./VendorRegistration";
import VendorDashboard from "./VendorDashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "registration") {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

        <VendorRegistration />
      </>
    );
  }

  if (page === "dashboard") {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

        <VendorDashboard />
      </>
    );
  }

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          VendoSafe
        </div>

        <div className="nav-links">

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("registration")}>
            Register
          </button>

          <button onClick={() => setPage("dashboard")}>
            Dashboard
          </button>

        </div>

      </nav>

      <section className="hero">

        <div className="hero-content">

          <h1>
            Empowering Street Vendors
            <br />
            with <span>VendoSafe</span>
          </h1>

          <p>
            A simple digital platform to help street vendors
            manage permits, locations and important updates.
          </p>

          <button
            className="primary-button"
            onClick={() => setPage("registration")}
          >
            Register as a Vendor
          </button>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>📍 Vending Zones</h3>
          <p>
            Find suitable and permitted vending locations.
          </p>
        </div>

        <div className="feature-card">
          <h3>📄 Easy Registration</h3>
          <p>
            Register your vending business through a simple form.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔔 Important Updates</h3>
          <p>
            Receive notifications about permits and vending zones.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;