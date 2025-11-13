import express from "express";
import {
  createNote,
  deleteNote,
  updateNote,
  viewNotes,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", viewNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
