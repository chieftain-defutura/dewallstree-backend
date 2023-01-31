import mongoose from "mongoose";
import { staffDetailsSchema } from ".";

const invoiceSchema = new mongoose.Schema(
  {
    staffDetails: [
      { type: mongoose.Schema.Types.ObjectId, ref: staffDetailsSchema },
    ],
    issuedOn: { type: Date },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
