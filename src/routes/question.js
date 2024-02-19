import express from "express";
import {
  GET_ALL_QUESTIONS,
  GET_QUESTIONS_BY_USER_ID,
  INSERT_QUESTION,
  QUESTION_LIKE,
  QUESTION_DISLIKE,
  DELETE_QUESTION_BY_ID,
} from "../controllers/question.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);

router.get("/questions/:userId", auth, GET_QUESTIONS_BY_USER_ID);

router.post("/questions", auth, INSERT_QUESTION);

router.post("/questions/:id/like", auth, QUESTION_LIKE);

router.post("/questions/:id/dislike", auth, QUESTION_DISLIKE);

router.delete("/questions/:id", auth, DELETE_QUESTION_BY_ID);

export default router;
