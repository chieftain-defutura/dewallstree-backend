import express from "express";
import * as staffDetails from "../controllers/staffDetails.controller";

const router = express.Router();

router.get("/", staffDetails.getAllStaffDetails);
router.get("/:id", staffDetails.getStaffDetails);
router.post("/create", staffDetails.createStaffDetails);
router.patch("/:id", staffDetails.updateStaffDetails);
router.delete("/:id", staffDetails.deleteStaffDetails);

export default router;
