import React, { useState } from "react";

const Teeth = ({ teeth, setTeeth, patient }) => {
  const [tooth, setTooth] = useState({
    toothNumber: "",
    status: "Healthy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTooth({
      ...tooth,
      [name]: value,
    });
  };

  const addTooth = (e) => {
    e.preventDefault();
    setTeeth([...teeth, tooth]);
    setTooth({
      toothNumber: "",
      status: "Healthy",
    });
  };

  return (
    <div>
      <h1>Teeths</h1>
      <form>
        <section className="form-content">
          <input
            type="number"
            name="toothNumber"
            value={tooth.toothNumber}
            onChange={handleChange}
          />
          <select name="status" value={tooth.status} onChange={handleChange}>
            <option value="Healthy">Healthy</option>
            <option value="Missing">Missing</option>
          </select>
        </section>

        <button onClick={addTooth}>Add Tooth</button>
      </form>
    </div>
  );
};

export default Teeth;
