import React, { useState } from "react";
import DentalChart from "./components/dentalChart/DentalChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List/List";
import Nav from "./components/Navigation/Nav";
import PatientChart from "./components/List/PatientChart";
import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            <Route path="/" element={<DentalChart />} />
            <Route path="/list" element={<List />} />
            <Route path="/chart/:id" element={<PatientChart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
