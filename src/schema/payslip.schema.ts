import mongoose from "mongoose";
import StaffDetails from "./staffDetails.schema";
const payslipSchema = new mongoose.Schema(
  {
    staffId: { type: mongoose.SchemaTypes.ObjectId, ref: StaffDetails },
    deduction: { type: Number },
    issuedOn: { type: Date },
  },
  { timestamps: true }
);

const Payslip = mongoose.model("Payslip", payslipSchema);

export default Payslip;
