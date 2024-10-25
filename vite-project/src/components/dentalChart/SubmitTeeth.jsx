import React, { useState } from "react";
import axios from "axios";
import { teeth_data } from "../../TeethData";

const SubmitTeeth = ({ patient }) => {
  const [teeth] = useState(teeth_data);

  console.log(teeth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const patientId = patient._id;
    try {
      const res = await axios.post("http://localhost:3000/api/chart/create", {
        patientId,
        teeth,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (patient) {
    console.log(patient._id);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {patient && (
          <div>
            <h1>{patient.name}</h1>
            <p>{patient.age}</p>
            <p>{patient.gender}</p>
          </div>
        )}

        <button>Create Chart</button>
      </form>
    </div>
  );
};

export default SubmitTeeth;
