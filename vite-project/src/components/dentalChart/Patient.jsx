import React, { useEffect, useState } from "react";
import axios from "axios";

const Patient = ({ patient, setPatient }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/patient/get");
      setPatients(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePatientChange = (e) => {
    const selectedPatient = patients.find((p) => p._id === e.target.value);
    setPatient(selectedPatient);
  };

  return (
    <div>
      <select value={patient ? patient._id : ""} onChange={handlePatientChange}>
        <option value="" disabled>
          Select Patient
        </option>
        {patients.map((patient, index) => (
          <option value={patient._id} key={index}>
            {patient.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Patient;
