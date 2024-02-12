import express from "express";
import {
  GET_ALL_QUESTIONS,
  INSERT_QUESTION,
  GET_QUESTION_BY_ID,
  DELETE_QUESTION_BY_ID,
} from "../controllers/question.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);

router.get("/questions/:id", GET_QUESTION_BY_ID);

router.post("/questions", INSERT_QUESTION);

// router.post("/questions", LIKE);

// router.post("/questions", DISLIKE);

// router.put("/questions/:id", UPDATE_QUESTION);

router.delete("/questions/:id", DELETE_QUESTION_BY_ID);

export default router;




POST /register
POST /login


// GET /questions
GET /questions/:userId
// POST /question
POST /question/:id/like
POST /question/:id/dislike
// DELETE /question/:id