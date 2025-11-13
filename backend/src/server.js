import express from "express";
import notesRouter from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRouter);

app.listen(5001, () => {
  console.log("Listening on: http://localhost:5001/");
});
