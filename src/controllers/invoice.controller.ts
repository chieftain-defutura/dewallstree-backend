import { Request, Response } from "express";
import Invoice from "../schema/invoice.schema";

export const getAllInvoice = async (req: Request, res: Response) => {
  try {
    const data = await Invoice.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const getInvoice = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await Invoice.findById(id);

    if (!data)
      return res.json({
        error: { id, message: "Invoice is not found with this id" },
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const createInvoice = async (req: Request, res: Response) => {
  try {
    // const isExistingInvoice = await Invoice.findById(id);

    // if (isExistingInvoice) return res.json({ data: isExistingInvoice });

    const data = await Invoice.create({ ...req.body });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const updateInvoice = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const data = await Invoice.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await Invoice.findByIdAndDelete(id);

    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};
