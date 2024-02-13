import express from "express";
import {
  GET_ALL_QUESTIONS,
  GET_QUESTION_BY_USER_ID,
  INSERT_QUESTION,
  QUESTION_LIKE,
  QUESTION_DISLIKE,
  DELETE_QUESTION_BY_ID,
} from "../controllers/question.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);

router.get("/questions/:userId", GET_QUESTION_BY_USER_ID);

router.post("/questions", INSERT_QUESTION);

router.post("/questions/:id/like", QUESTION_LIKE);

router.post("/questions/:id/dislike", QUESTION_DISLIKE);

router.delete("/questions/:id", DELETE_QUESTION_BY_ID);

export default router;

// POST / register;
// POST / login;

// GET /questions/:userId

// POST /question/:id/like
// POST /question/:id/dislike
