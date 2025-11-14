import express from "express";
import cors from "cors";
import "dotenv/config";

import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: ["http://localhost:5173"]
}));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on: http://localhost:5001/");
  });
}).catch((error) => {
  console.error("Couldn't connect to database: ", error)
})

