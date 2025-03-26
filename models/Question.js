const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
