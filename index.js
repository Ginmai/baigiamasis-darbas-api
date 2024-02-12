import express from "express";
import mongoose from "mongoose";
import questionRouter from "./src/routes/question.js";
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://gintarekort:Serveris1@cluster0.l2fl77s.mongodb.net/question-api"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

app.use(questionRouter);

app.listen(3000);
