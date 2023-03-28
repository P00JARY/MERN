import React, { useState } from "react";
import '../css/userapplication.css'

function UserApplicationForm() {
  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [address, setAddress] = useState("");
  const [userPic, setUserPic] = useState(null);
  const [adharPic, setAdharPic] = useState(null);
  const [sslcPic, setSSLCPic] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: submit the form data to the server
    console.log("Form submitted successfully");
  };

  const handleUserPicUpload = (event) => {
    setUserPic(event.target.files[0]);
  };

  const handleAdharPicUpload = (event) => {
    setAdharPic(event.target.files[0]);
  };

  const handleSSLCPicUpload = (event) => {
    setSSLCPic(event.target.files[0]);
  };

  const handleSignatureUpload = (event) => {
    setSignature(event.target.files[0]);
  };

  return (
    <div className="user-application-form">
      <h2>Prakruthi User Application Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Applicant Name:
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
        </label>
        <label>
          Vehicle Type:
          <select
            value={vehicleType}
            onChange={(event) => setVehicleType(event.target.value)}
          >
            <option value="">-- Select Vehicle Type --</option>
            <option value="bike">2 wheeler with gear</option>
            <option value="bike">2 wheeler without gear</option>
            <option value="car">4 wheeler with gear</option>
            <option value="both">2 wheeler and 4 wheeler</option>
          </select>
        </label>
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          User Picture Upload:
          <input type="file" accept="image/*" onChange={handleUserPicUpload} />
        </label>
        <label>
          Adhar Card Picture Upload:
          <input type="file" accept="image/*" onChange={handleAdharPicUpload} />
        </label>
        <label>
          SSLC Photo Upload:
          <input type="file" accept="image/*" onChange={handleSSLCPicUpload} />
        </label>
        <label>
          Signature Photo Upload:
          <input type="file" accept="image/*" onChange={handleSignatureUpload} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserApplicationForm;
