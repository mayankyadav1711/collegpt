const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },

  postedBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});
mongoose.model("Feedback", feedbackSchema);
