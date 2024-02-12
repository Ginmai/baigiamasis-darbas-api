import express from "express";
import questionRouter from "./src/routes/question.js";
const app = express();

app.use(questionRouter);

app.listen(3000);
