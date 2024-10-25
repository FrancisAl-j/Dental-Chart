import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dentaChart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DentalChart",
  },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
