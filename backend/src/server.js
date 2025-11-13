import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:5001/");
});
