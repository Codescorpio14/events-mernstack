import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, DATABASEURL } from "./config.js";
import allRoutes from "./routes/eventRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/", allRoutes);

mongoose
  .connect(DATABASEURL)
  .then(() => {
    console.log("Connected successfully");
    app.listen(PORT, () =>
      console.log(`Server is running on: localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
