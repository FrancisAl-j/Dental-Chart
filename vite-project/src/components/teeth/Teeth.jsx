import React, { useState, useEffect } from "react";
import Tooth from "./Tooth";
import ToothImage from "./ToothImage";
import "./tooth.css";

const Teeth = ({ data, fetchChartData }) => {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [show, setShow] = useState(false);
  const [topTeeth, setTopTeeth] = useState([]);

  useEffect(() => {
    console.log("Selected Tooth updated:", selectedTooth);
  }, [selectedTooth]);

  const handleClearSelection = () => {
    console.log("Clearing selection...");
    setSelectedTooth(null);
  };

  /* 
    <div className="top-teeth">
          {data &&
            data.teeth &&
            data.teeth.map((tooth, index) => {
              if (tooth.toothNumber <= 16) {
                return (
                  <div onClick={() => setSelectedTooth(tooth._id)}>
                    <p>{tooth.toothNumber}</p>
                    <ToothImage status={tooth.status} />
                  </div>
                );
              }
            })}
        </div>

        <div className="bottom-teeth">
          {data &&
            data.teeth &&
            data.teeth.map((tooth, index) => {
              if (tooth.toothNumber > 16) {
                return (
                  <div onClick={() => setSelectedTooth(tooth._id)}>
                    <p>{tooth.toothNumber}</p>
                    <ToothImage status={tooth.status} />
                  </div>
                );
              }
            })}
        </div>

        {selectedTooth === tooth._id && (
                  <Tooth
                    key={tooth._id}
                    selectedTooth={selectedTooth}
                    clearSelection={handleClearSelection}
                    currStatus={tooth.status}
                    id={data._id}
                    fetchChartData={fetchChartData}
                  />
                )}
  */

  return (
    <div>
      <h1>Teeth</h1>
      <div className="teeth-container">
        <div className="top-teeth">
          {data &&
            data.teeth &&
            data.teeth.map((tooth, index) => {
              if (tooth.toothNumber <= 16) {
                return (
                  <div key={index}>
                    <div onClick={() => setSelectedTooth(tooth._id)}>
                      <p>{tooth.toothNumber}</p>
                      <ToothImage status={tooth.status} />
                    </div>
                    {selectedTooth === tooth._id && (
                      <Tooth
                        key={tooth._id}
                        selectedTooth={selectedTooth}
                        clearSelection={handleClearSelection}
                        currStatus={tooth.status}
                        id={data._id}
                        fetchChartData={fetchChartData}
                      />
                    )}
                  </div>
                );
              }
            })}
        </div>

        <div className="bottom-teeth">
          {data &&
            data.teeth &&
            data.teeth.map((tooth, index) => {
              if (tooth.toothNumber > 16) {
                return (
                  <div key={index}>
                    <div onClick={() => setSelectedTooth(tooth._id)}>
                      <p>{tooth.toothNumber}</p>
                      <ToothImage status={tooth.status} />
                    </div>
                    {selectedTooth === tooth._id && (
                      <Tooth
                        key={tooth._id}
                        selectedTooth={selectedTooth}
                        clearSelection={handleClearSelection}
                        currStatus={tooth.status}
                        id={data._id}
                        fetchChartData={fetchChartData}
                      />
                    )}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Teeth;
