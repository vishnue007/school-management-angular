import express from "express";
import {
  getStaffs,
  addStaff,
  getStaffById,
  updateStaff,
  deleteStaff
} from "../controllers/staffsController.js";

const router = express.Router();

router.post("/", addStaff);
router.get("/", getStaffs);
router.get("/:id", getStaffById);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
