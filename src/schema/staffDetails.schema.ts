import mongoose from "mongoose";

const staffDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    mobile_no: { type: Number, required: true },
    designation: {
      type: {
        position: { type: String },
        wing: { type: String },
        companyName: { type: String },
      },
      required: true,
    },
    address: {
      type: {
        plot_no: { type: String },
        street: { type: String },
        area: { type: String },
        pincode: { type: Number },
      },
      required: true,
    },
    mail: { type: String },
    basicPay: { type: Number },
  },
  { timestamps: true }
);

const StaffDetails = mongoose.model("StaffDetails", staffDetailsSchema);

export default StaffDetails;
