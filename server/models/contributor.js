const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const contributionSchema = new mongoose.Schema({
  semester: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  fileLinks: {
    type: String,
    required: true,
  },
  pdfDescription: {
    type: String,
    required: true,
  },

  postedBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});
mongoose.model("Contributor", contributionSchema);
