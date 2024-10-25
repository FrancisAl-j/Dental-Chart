import Patient from "../models/patientModel.js";

const createPatient = async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const newPatient = new Patient({
      name,
      age,
      gender,
    });

    await newPatient.save();

    res.status(200).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createPatient, getPatients };
