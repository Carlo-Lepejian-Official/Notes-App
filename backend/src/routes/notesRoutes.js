import express from "express";
import {
  createNote,
  deleteNote,
  updateNote,
  viewNote,
  viewNotes,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", viewNotes);
router.get("/:id", viewNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
