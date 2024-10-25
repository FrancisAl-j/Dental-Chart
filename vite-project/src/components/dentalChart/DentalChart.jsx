import React, { useEffect, useState } from "react";
import Patient from "./Patient";
import Teeth from "./Teeth";
import SubmitTeeth from "./SubmitTeeth";

const DentalChart = () => {
  const [teeth, setTeeth] = useState([]);
  const [patient, setPatient] = useState(undefined);

  return (
    <div>
      <h1>Dental Chart</h1>
      <Patient patient={patient} setPatient={setPatient} />
      <Teeth teeth={teeth} setTeeth={setTeeth} />
      <SubmitTeeth patient={patient} teeth={teeth} />
    </div>
  );
};

export default DentalChart;
