import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question_text: { type: String, required: true, min: 3 },
  date: { type: String, required: true, min: 10 },
  user_id: { type: String, required: true, min: 3 },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
});

export default mongoose.model("question", questionSchema);
