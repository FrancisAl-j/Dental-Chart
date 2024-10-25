import React, { useEffect, useState } from "react";
import "./tooth.css";
import axios from "axios";

const Tooth = ({
  selectedTooth,
  clearSelection,
  currStatus,
  id,
  fetchChartData,
}) => {
  const updateStatus = async (e) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/chart/update/${id}/${selectedTooth}`,
        {
          status: e.target.value,
        }
      );
      if (res.status === 200) {
        await fetchChartData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Tooth</h1>

        <select value={currStatus} onChange={(e) => updateStatus(e)}>
          <option value="Healthy">Healthy</option>
          <option value="Missing">Missing</option>
          <option value="Crown">Crown</option>
          <option value="Decayed">Decayed</option>
        </select>
        <button
          onClick={() => {
            clearSelection();
            console.log("Set selectedTooth to null " + selectedTooth);
          }}
        >
          Clear Selected Tooth
        </button>
      </div>
    </div>
  );
};

export default Tooth;
