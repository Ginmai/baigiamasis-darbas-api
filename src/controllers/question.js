import QuestionModel from "../models/question.js";

const GET_ALL_QUESTIONS = async (req, res) => {
  const questions = await QuestionModel.find();
  return res.status(200).json({ questions: questions });
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

export { GET_ALL_QUESTIONS, INSERT_QUESTION };
