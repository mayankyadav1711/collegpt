const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require('./config/keys')
//cors policy 
app.use(cors (
  {
    origin: ["https://collegpt.vercel.app", "http://localhost:3000", "https://collegpt.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
     credentials: true

  }
));
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDb!");
});
mongoose.connection.on("error", (err) => {
  console.log("Error on Connecting MongoDb!", err);
});

require("./models/user");
require("./models/pdf");
require("./models/contributor");
require("./models/doubts");
require("./models/contact");
require("./models/event_form");
require("./models/feedback");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/admin_pdf"));
app.use(require("./routes/profile"));
app.use(require("./routes/contributor"));

app.get("/", (req,res)=>{
  res.json("Welcome to ColleGPT")
})

app.listen(PORT, () => {
  console.log("Server is running on:", PORT);
});
