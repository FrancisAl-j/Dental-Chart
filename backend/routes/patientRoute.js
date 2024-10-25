import express from "express";
import controller from "../controllers/patientController.js";

const router = express.Router();

router.post("/create", controller.createPatient);
router.get("/get", controller.getPatients);

export default router;
