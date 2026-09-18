import { useState } from "react";

function VendorRegistration() {
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegistered(true);
  };

  if (registered) {
    return (
      <div className="registration-page">
        <div className="registration-card success-card">
          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Your vendor registration has been submitted
            successfully.
          </p>

          <p>
            VendoSafe will help you manage your vending
            information and permits.
          </p>

          <button
            onClick={() => setRegistered(false)}
          >
            Register Another Vendor
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h1>Vendor Registration</h1>

        <p>
          Register your vending business with VendoSafe
        </p>

        <form onSubmit={handleSubmit}>
          <label>Vendor Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />

          <label>Business Type</label>
          <select required>
            <option value="">
              Select business type
            </option>
            <option>Food</option>
            <option>Flower</option>
            <option>Clothing</option>
            <option>Fruits & Vegetables</option>
            <option>Other</option>
          </select>

          <label>Vending Location</label>
          <input
            type="text"
            placeholder="Enter your vending location"
            required
          />

          <label>Aadhaar / ID Number</label>
          <input
            type="text"
            placeholder="Enter your ID number"
            required
          />

          <button type="submit">
            Register Vendor
          </button>
        </form>
      </div>
    </div>
  );
}

export default VendorRegistration;