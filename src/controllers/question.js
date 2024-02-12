import question from "../models/question.js";
import QuestionModel from "../models/question.js";

const GET_ALL_QUESTIONS = async (req, res) => {
  const questions = await QuestionModel.find();
  return res.status(200).json({ questions: questions });
};

const GET_QUESTION_BY_ID = async (req, res) => {
  const question = await QuestionModel.findById(req.params.id);

  return res.status(200).json({ question: question });
};

const INSERT_QUESTION = async (req, res) => {
  console.log(req.body);
  try {
    const question = new QuestionModel({
      question_text: req.body.questionText,
      date: req.body.date,
      user_id: req.body.userId,
    });

    const response = await question.save();

    return res
      .status(201)
      .json({ message: "Question was added", response: response });
  } catch (err) {
    console.log(err);
  }
};

const DELETE_QUESTION_BY_ID = async (req, res) => {
  const question = await QuestionModel.findByIdAndDelete(req.params.id);

  return res.status(200).json({ question: question });
};

export {
  GET_ALL_QUESTIONS,
  INSERT_QUESTION,
  GET_QUESTION_BY_ID,
  DELETE_QUESTION_BY_ID,
};
