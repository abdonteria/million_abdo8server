const mongoose = require("mongoose");

function arrayLimit(val) {
  return val.length === 4;
}

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["very_easy", "easy", "medium", "semi_hard", "hard", "very_hard"],
    required: true,
  },
  time: { type: Number, required: true, min: 1 },
  category: { type: String, required: true },
  answers: {
    type: [String],
    validate: [arrayLimit, "{PATH} يجب أن يحتوي على 4 إجابات"],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return this.answers.includes(val);
      },
      message: "الإجابة الصحيحة يجب أن تكون ضمن الخيارات المحددة.",
    },
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
