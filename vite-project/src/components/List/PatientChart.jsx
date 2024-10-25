import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Teeth from "../teeth/Teeth";

const PatientChart = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setData(null);
    fetchChartData();

    return () => {
      setData(null);
    };
  }, [id]);

  const fetchChartData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/chart/get/${id}`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {data ? (
        <>
          <h1>Name: {data.patient.name}</h1>
          <p>Age: {data.patient.age}</p>
          <div className="teeth-container">
            <Teeth data={data} fetchChartData={fetchChartData} />
          </div>
        </>
      ) : (
        <div>
          <h1>No dental chart yet....</h1>
          <Link to="/">
            <button>Create One</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PatientChart;
