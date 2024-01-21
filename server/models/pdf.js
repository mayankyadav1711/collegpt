const mongoose = require("mongoose");

const pdfFormSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  sem: {
    type: String,
  },
  sub: {
    type: String,
  },
  unit: {
    type: String,
  },
  link: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  extra: {
    type: String,
  },
  timestamp: {
    type: String,
  },
});
mongoose.model("PdfForm", pdfFormSchema);
