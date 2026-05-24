const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

// Load environment variables
dotenv.config();

const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MOGOURI;

// ─── Validate required environment variables ───────────────────────────────
const requiredEnvVars = ["MOGOURI", "JWT_SEC", "EMAIL", "GPASS"];
const missingVars = requiredEnvVars.filter((key) => !process.env[key]);
if (missingVars.length > 0) {
  console.error(
    `❌ Missing required environment variables: ${missingVars.join(", ")}`
  );
  console.error("   Please check your .env file. See .env.example for reference.");
  process.exit(1);
}

// ─── Security middleware ────────────────────────────────────────────────────

// Helmet – sets various HTTP headers to help protect your app
app.use(helmet());

// Global rate limiter – 500 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});
app.use(globalLimiter);

// Prevent NoSQL injection by sanitising user-supplied data
app.use(mongoSanitize());

// ─── CORS policy ────────────────────────────────────────────────────────────
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",").map((o) => o.trim())
  : [
      "https://www.collegpt.com",
      "https://collegpt.com",
      "http://localhost:3000",
      "https://collegpt.vercel.app",
      "https://services-collegpt.vercel.app",
      "https://services.collegpt.com",
      "https://collegpt-admin.vercel.app",
      "https://admin.collegpt.com",
      "http://localhost:5173",
    ];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// ─── Body parser ────────────────────────────────────────────────────────────
// Limit payload size to prevent large-payload DoS attacks
app.use(express.json({ limit: "1mb" }));

// ─── Database connection ────────────────────────────────────────────────────
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

// ─── Models ─────────────────────────────────────────────────────────────────
require("./models/user");
require("./models/pdf");
require("./models/contributor");
require("./models/doubts");
require("./models/contact");
require("./models/event_form");
require("./models/feedback");
require("./models/servicecontact");
require("./models/GraduateFeedback");

// ─── Routes ─────────────────────────────────────────────────────────────────
app.use(require("./routes/auth"));
app.use(require("./routes/admin_pdf"));
app.use(require("./routes/profile"));
app.use(require("./routes/contributor"));
app.use(require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.json("Welcome to ColleGPT");
});

// ─── Start server ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log("Server is running on:", PORT);
});