import { Request, Response } from "express";
import Payslip from "../schema/payslip.schema";
import StaffDetails from "../schema/staffDetails.schema";

export const getAllPayslip = async (req: Request, res: Response) => {
  try {
    const staffData = await StaffDetails.find({});

    const data = await Promise.all(
      staffData.map(async (staff) => {
        const paySlipData = await Payslip.findOne({
          staffId: staff._id,
          month: "febuary",
        });

        if (!paySlipData)
          return {
            ...staff.toJSON(),
            status: "pending",
          };

        return { ...staff.toJSON(), ...paySlipData.toJSON() };
      })
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const getPayslip = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await Payslip.findById(id);

    if (!data)
      return res.json({
        error: { id, message: "Payslip is not found with this id" },
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const createPayslip = async (req: Request, res: Response) => {
  try {
    // const isExistingPayslip = await Payslip.findById(id);

    // if (isExistingPayslip) return res.json({ data: isExistingPayslip });

    const data = await Payslip.create({ ...req.body });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const updatePayslip = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const data = await Payslip.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const deletePayslip = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await Payslip.findByIdAndDelete(id);

    res.json({ message: "Payslip deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};
