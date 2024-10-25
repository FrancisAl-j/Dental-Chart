import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config.js";
import patientRoute from "./routes/patientRoute.js";
import chartRoute from "./routes/chartRoute.js";

const app = express();

// midllewares
app.use(express.json());
app.use(cors());

app.use("/api/patient", patientRoute);
app.use("/api/chart", chartRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening to port http://localhost:${PORT}`);
  connectDB();
});
