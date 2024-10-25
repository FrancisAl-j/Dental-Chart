import express from "express";
import controller from "../controllers/chartController.js";

const router = express.Router();

router.post("/create", controller.createDentalChart);
router.get("/get/:id", controller.getPatientChart);
router.put("/update/:id/:toothId", controller.updateTooth);

export default router;
