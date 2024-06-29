import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";

import jobRouter from "./routes/jobRouter.js";
app.use("/api/v1/jobs", jobRouter);
app.use(morgan("dev"));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  prices.exit(1);
}
