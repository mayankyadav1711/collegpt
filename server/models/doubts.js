const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const doubtSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  semester: {
    type: String,
  },
  subjectName: {
    type: String,
  },
  unitName: {
    type: String,
  },
  author: {
    type: String,
  },
  doubt: {
    type: String,
  },

  postedBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});
mongoose.model("Doubt", doubtSchema);
