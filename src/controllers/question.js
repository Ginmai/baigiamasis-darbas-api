import QuestionModel from "../models/question.js";

import jwt from "jsonwebtoken";

const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    let questions = await QuestionModel.find();

    return res.status(200).json({ questions: questions });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const GET_QUESTIONS_BY_USER_ID = async (req, res) => {
  try {
    const questions = await QuestionModel.find({ userId: req.params.id });

    return res.status(200).json({ questions: questions });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const INSERT_QUESTION = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const user_id = await jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        return decoded.id;
      }
    );

    const question = new QuestionModel({
      question_text: req.body.question_text,
      date: new Date().toDateString(),
      user_id: user_id,
      likes: 0,
      dislikes: 0,
    });

    const response = await question.save();

    return res
      .status(201)
      .json({ message: "Question was added", response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const QUESTION_LIKE = async (req, res) => {
  try {
    let question = await QuestionModel.findById(req.params.id);

    question.likes = question.likes + 1;

    const response = await question.save();

    return res.status(200).json({ question: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something wnt wrong" });
  }
};

const QUESTION_DISLIKE = async (req, res) => {
  try {
    let question = await QuestionModel.findById(req.params.id);

    question.dislikes = question.dislikes + 1;

    const response = await question.save();

    return res.status(200).json({ question: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something wnt wrong" });
  }
};

const DELETE_QUESTION_BY_ID = async (req, res) => {
  try {
    const question = await QuestionModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({ question: question });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something wnt wrong" });
  }
};

export {
  GET_ALL_QUESTIONS,
  GET_QUESTIONS_BY_USER_ID,
  INSERT_QUESTION,
  QUESTION_LIKE,
  QUESTION_DISLIKE,
  DELETE_QUESTION_BY_ID,
};
