import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

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

  return (
    <div>
      <h1>Patient List</h1>
      <ol>
        {patients.map((patient, index) => {
          return (
            <li key={index}>
              <h1>Name: {patient.name}</h1>
              <p>Age: {patient.age}</p>
              <Link to={`/chart/${patient.dentaChart}`}>
                <button>Chart</button>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default List;
