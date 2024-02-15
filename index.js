import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import questionRouter from "./src/routes/question.js";
import userRouter from "./src/routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

app.use(questionRouter);
app.use(userRouter);

app.listen(process.env.PORT);
