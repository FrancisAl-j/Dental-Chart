import DentalChart from "../models/dentaChart.js";
import Patient from "../models/patientModel.js";

const createDentalChart = async (req, res) => {
  const { patientId, teeth } = req.body;
  try {
    const patient = await Patient.findById(patientId);

    const newDentalChart = new DentalChart({
      patient: patientId,
      teeth,
    });

    await newDentalChart.save();

    patient.dentaChart = newDentalChart._id;
    await patient.save();

    res.status(200).json(newDentalChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatientChart = async (req, res) => {
  const { id } = req.params;
  try {
    const dentalChart = await DentalChart.findById(id).populate("patient");
    if (!dentalChart) {
      return res.status(404).json({ message: "No Dental Chart Found!" });
    }
    res.status(200).json(dentalChart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Updating tooth status
const updateTooth = async (req, res) => {
  const { id, toothId } = req.params;
  const { status } = req.body;
  try {
    const dentalChart = await DentalChart.findById(id);

    let tooth = dentalChart.teeth.id(toothId);

    tooth.status = status;

    await dentalChart.save();

    res.status(200).json(dentalChart);
  } catch (error) {
    console.log(error);
  }
};

export default { createDentalChart, getPatientChart, updateTooth };
