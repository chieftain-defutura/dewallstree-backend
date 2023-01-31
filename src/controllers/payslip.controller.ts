import { Request, Response } from "express";
import Payslip from "../schema/payslip.schema";

export const getAllPayslip = async (req: Request, res: Response) => {
  try {
    const data = await Payslip.find({}).populate("staffId");
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
