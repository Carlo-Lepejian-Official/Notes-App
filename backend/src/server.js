import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRouter);

app.listen(5001, () => {
  console.log("Listening on: http://localhost:5001/");
});
