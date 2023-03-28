import React, { useState, useEffect } from 'react';
import '../css/statement.css'
const DrivingSchoolStatement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from API and update state
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error(error));
  }, []);

  const handlePeriodOfTrainingChange = (event, studentId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return { ...student, periodOfTraining: event.target.value };
      } else {
        return student;
      }
    });
    setStudents(updatedStudents);
  };

  const handleSaveClick = (studentId) => {
    // Send updated student data to API for persistence
    const updatedStudent = students.find(student => student.id === studentId);
    fetch(`/api/students/${studentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStudent),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Driving School Statement</h2>
      <p>Month: March 2023</p>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name of Candidate</th>
            <th>Date of Admission</th>
            <th>Driving Test Date</th>
            <th>Period of Training</th>
            <th>Vehicle Number for Trainee</th>
            <th>Class of Vehicle</th>
            <th>Instructor Name</th>
            <th>Result</th>
            <th>Remark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.dateOfAdmission}</td>
              <td>{student.drivingTestDate}</td>
              <td>
                <input
                  type="text"
                  value={student.periodOfTraining}
                  onChange={event => handlePeriodOfTrainingChange(event, student.id)}
                />
              </td>
              <td>{student.vehicleNumber}</td>
              <td>{student.vehicleClass}</td>
              <td>{student.instructorName}</td>
              <td>{student.result}</td>
              <td>{student.remark}</td>
              <td>
                <button onClick={() => handleSaveClick(student.id)}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrivingSchoolStatement;
