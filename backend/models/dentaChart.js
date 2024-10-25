import mongoose from "mongoose";

const toothSchema = new mongoose.Schema({
  toothNumber: {
    type: Number,
  },
  status: {
    type: String,
  },
});

const DentalChartSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    teeth: [toothSchema],
  },
  {
    timestamps: true,
  }
);

const DentalChart = mongoose.model("DentalChart", DentalChartSchema);

export default DentalChart;
