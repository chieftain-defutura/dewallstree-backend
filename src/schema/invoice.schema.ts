import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    invoiceId: { type: String },
    issuedOn: { type: Date },
    status: { type: String },
    client: {
      name: { type: String },
      mail: { type: String },
      designation: { type: String },
      phoneNo: { type: String },
    },
    billingSpecifics: { type: String },
    shippingSpeciics: { type: String },
    milestone: {
      pay: { type: String },
      currency: { type: String },
      dueDate: { type: String },
      deliveryDate: { type: String },
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
