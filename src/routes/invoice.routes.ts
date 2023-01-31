import express from "express";
import * as invoice from "../controllers/invoice.controller";

const router = express.Router();

router.get("/", invoice.getAllInvoice);
router.get("/:id", invoice.getInvoice);
router.post("/create", invoice.createInvoice);
router.patch("/:id", invoice.updateInvoice);
router.delete("/:id", invoice.deleteInvoice);

export default router;
