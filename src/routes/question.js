import express from "express";
import { GET_ALL_QUESTIONS, INSERT_QUESTION } from "../controllers/question.js";

const router = express.Router();

router.get("/question", GET_ALL_QUESTIONS);

// router.get("/question/:id", GET_QUESTION);

router.post("/question", INSERT_QUESTION);

// router.put("/question/:id", UPDATE_QUESTION);

// router.delete("/question/:id", DELETE_QUESTION);

export default router;
