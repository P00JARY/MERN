import React, { useState } from 'react';
import '../css/ApplicationForm.css'; // import CSS file

const ApplicationForm = () => {
  const [registerYear, setRegisterYear] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [traineeName, setTraineeName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [sonOf, setSonOf] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [classOfVehicle, setClassOfVehicle] = useState('');
  const [dateOfEnrollment, setDateOfEnrollment] = useState('');
  const [learnersLicenceNumber, setLearnersLicenceNumber] = useState('');
  const [learnersLicenceExpiryDate, setLearnersLicenceExpiryDate] = useState('');
  const [dateOfCompletionOfCourse, setDateOfCompletionOfCourse] = useState('');
  const [dateOfPassingTest, setDateOfPassingTest] = useState('');
  const [remark, setRemark] = useState('');
  const [signature, setSignature] = useState(null);

  const handlePhotoUpload = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSignatureUpload = (event) => {
    setSignature(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register Year:', registerYear);
    console.log('Enrollment Number:', enrollmentNumber);
    console.log('Trainee Name:', traineeName);
    console.log('Photo:', photo);
    console.log('Son Of:', sonOf);
    console.log('Address:', address);
    console.log('Date of Birth:', dob);
    console.log('Class of Vehicle:', classOfVehicle);
    console.log('Date of Enrollment:', dateOfEnrollment);
    console.log('Learners Licence Number:', learnersLicenceNumber);
    console.log('Learners Licence Expiry Date:', learnersLicenceExpiryDate);
    console.log('Date of Completion of Course:', dateOfCompletionOfCourse);
    console.log('Date of Passing Test:', dateOfPassingTest);
    console.log('Remark:', remark);
    console.log('Signature:', signature);
    // Send form data to server or perform other actions here
  };

  return (
    
    <div className="application-form-container">
      
      <h1 id='appltitle'>Prakruthi Trainee Application</h1><br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="register-year">Register Year:</label>
          <input
            type="text"
            id="register-year"
            value={registerYear}
            onChange={(event) => setRegisterYear(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="enrollment-number">Enrollment Number:</label>
          <input
            type="text"
            id="enrollment-number"
            value={enrollmentNumber}
            onChange={(event) => setEnrollmentNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="trainee-name">Trainee Name:</label>
          <input
            type="text"
            id="trainee-name"
            value={traineeName}
            onChange={(event) => setTraineeName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" accept="image/*" onChange={handlePhotoUpload}/>
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="Trainee"
              className="uploaded-photo"
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="son-of">Son /wife /Daughter of:</label>
          <input
            type="text"
            id="son-of"
            value={sonOf}
            onChange={(event) => setSonOf(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            rows="4"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="class-of-vehicle">Class of Vehicle Imparted:</label>
          <input
            type="text"
            id="class-of-vehicle"
            value={classOfVehicle}
            onChange={(event) => setClassOfVehicle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-of-enrollment">Date of Enrollment:</label>
          <input
            type="date"
            id="date-of-enrollment"
            value={dateOfEnrollment}
            onChange={(event) => setDateOfEnrollment(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="learners-licence-number">Learners Licence Number:</label>
          <input
            type="text"
            id="learners-licence-number"
            value={learnersLicenceNumber}
            onChange={(event) => setLearnersLicenceNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="learners-licence-expiry-date">Learners Licence Expiry Date:</label>
          <input
            type="date"
            id="learners-licence-expiry-date"
            value={learnersLicenceExpiryDate}
            onChange={(event) => setLearnersLicenceExpiryDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-of-completion-of-course">Date of Completion of Course:</label>
          <input
            type="date"
            id="date-of-completion-of-course"
            value={dateOfCompletionOfCourse}
            onChange={(event) => setDateOfCompletionOfCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-of-passing-test">Date of Passing Test:</label>
          <input
            type="date"
            id="date-of-passing-test"
            value={dateOfPassingTest}
            onChange={(event) => setDateOfPassingTest(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="remark">Remark:</label>
          <textarea
            id="remark"
            rows="4"
            value={remark}
            onChange={(event) => setRemark(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="signature">Signature of Licence Holder/
          Instructor:</label>
<input
         type="file"
         id="signature"
         accept="image/*"
         onChange={handleSignatureUpload}
       />
{signature && (
<img
           src={URL.createObjectURL(signature)}
           alt="Signature"
           className="uploaded-photo"
         />
)}
</div>
<div className="form-group">
<button type="submit" className="submit-button">
Submit
</button>
</div>
</form>

</div>
);
}


export default ApplicationForm;

