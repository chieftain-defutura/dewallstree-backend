import { Request, Response } from "express";
import Estimate from "../schema/estimate.schema";

export const getAllEstimate = async (req: Request, res: Response) => {
  try {
    const data = await Estimate.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const getEstimate = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await Estimate.findById(id);

    if (!data)
      return res.json({
        error: { id, message: "Estimate is not found with this id" },
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const createEstimate = async (req: Request, res: Response) => {
  try {
    // const isExistingEstimate = await Estimate.findById(id);

    // if (isExistingEstimate) return res.json({ data: isExistingEstimate });

    const data = await Estimate.create({ ...req.body });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const updateEstimate = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const data = await Estimate.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const deleteEstimate = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await Estimate.findByIdAndDelete(id);

    res.json({ message: "Estimate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};
