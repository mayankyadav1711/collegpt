const mongoose = require("mongoose");

const eventFormSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  profilePic: {
    type: String,
  },
  link: {
    type: String,
  },
  extra: {
    type: String,
  },
  timestamp: {
    type: String,
    default: Date.now,
  },
});
mongoose.model("EventForm", eventFormSchema);
