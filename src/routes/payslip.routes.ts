import express from "express";
import * as payslip from "../controllers/payslip.controller";

const router = express.Router();

router.get("/", payslip.getAllPayslip);
router.get("/:id", payslip.getPayslip);
router.post("/create", payslip.createPayslip);
router.patch("/:id", payslip.updatePayslip);
router.delete("/:id", payslip.deletePayslip);

export default router;
