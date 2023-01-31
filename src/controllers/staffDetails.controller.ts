import { Request, Response } from "express";
import StaffDetails from "../schema/staffDetails.schema";

export const getAllStaffDetails = async (req: Request, res: Response) => {
  try {
    const data = await StaffDetails.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const getStaffDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await StaffDetails.findById(id);

    if (!data)
      return res.json({
        error: { id, message: "StaffDetails is not found with this id" },
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const createStaffDetails = async (req: Request, res: Response) => {
  try {
    // const isExistingStaffDetails = await StaffDetails.findById(id);

    // if (isExistingStaffDetails) return res.json({ data: isExistingStaffDetails });

    const data = await StaffDetails.create({ ...req.body });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const updateStaffDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const data = await StaffDetails.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const deleteStaffDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await StaffDetails.findByIdAndDelete(id);

    res.json({ message: "StaffDetails deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};
