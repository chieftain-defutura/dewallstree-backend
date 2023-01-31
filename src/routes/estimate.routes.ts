import express from "express";
import * as estimate from "../controllers/estimate.controller";

const router = express.Router();

router.get("/", estimate.getAllEstimate);
router.get("/:id", estimate.getEstimate);
router.post("/create", estimate.createEstimate);
router.patch("/:id", estimate.updateEstimate);
router.delete("/:id", estimate.deleteEstimate);

export default router;
