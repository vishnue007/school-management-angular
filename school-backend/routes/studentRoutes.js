import express from "express";
import { getStudents,addStudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/", addStudent);
router.get("/", getStudents);

export default router;
