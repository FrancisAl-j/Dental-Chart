import React from "react";
import Healthy from "../../assets/healthy.png";
import Decayed from "../../assets/decayed.jpg";
import Missing from "../../assets/missing.jpg";
import "./tooth.css";

const ToothImage = ({ status }) => {
  return (
    <div>
      {status && status === "Healthy" ? (
        <img src={Healthy} />
      ) : status === "Decayed" ? (
        <img src={Decayed} />
      ) : status === "Missing" ? (
        <img src={Missing} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToothImage;
