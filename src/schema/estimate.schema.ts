import mongoose from "mongoose";

const estimateSchema = new mongoose.Schema(
  {
    projectId: { type: String, trim: true, required: true },
    publisheOn: { type: Date },
    client: {
      name: { type: String },
      mail: { type: String },
      designation: { type: String },
      phoneNo: { type: String },
    },
    milestone: {
      type: [
        {
          plan: { type: String },
          pay: { type: String },
          currency: { type: String },
          dueDate: { type: String },
          deliveryDate: { type: String },
        },
      ],
    },
  },
  { timestamps: true }
);

const Estimate = mongoose.model("Estimate", estimateSchema);

export default Estimate;
