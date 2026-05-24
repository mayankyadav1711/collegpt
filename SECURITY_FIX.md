# ColleGPT Security Hardening, Bug Fixes & AI Integration Proposal

Hey there! 👋 I saw in the README that you are **actively looking for contributors interested in AI integration** to make ColleGPT smarter! 

I am extremely passionate about AI and have recently built two extensive multi-LLM projects:
* **Zerio AI** — A advanced platform utilizing multiple LLMs for smart automation and features.
* **AI Battle Arena** — An interactive system running multiple LLMs against each other for capability comparison and evaluation.

I would absolutely love to collaborate, discuss how we can build a highly personalized **AI-Powered Learning Assistant** (such as Retrieval-Augmented Generation (RAG) over study notes, smart doubt solvers, or interactive study chatbots) inside ColleGPT, and schedule a quick meeting to explore these possibilities! 

To show my dedication and capabilities as a full-stack developer, I have gone ahead and resolved the core security issues and pre-existing bugs in your backend in this Pull Request. Below is the detailed changelog of what has been hardened and fixed. Let's make ColleGPT extremely secure and super smart together! 🚀

---

## 🔒 Crucial Security Vulnerabilities Fixed

### 1. Mass-Assignment & Broken Authorization on Profile Update
* **Issue**: The `/update-profile` route permitted updating profiles without token authentication (`requireLogin` was completely missing). Additionally, it accepted an `_id` parameter directly in the request body (`req.body._id`), allowing anyone to overwrite the profile fields of any other registered user in the database.
* **Fix**: Added the `requireLogin` middleware to enforce authentication. Changed the identifier to `req.user._id` (obtained securely from the verified JWT) and implemented an **allowed-fields whitelist** (`name`, `email`, `university`, `sem`, `gender`, etc.) to prevent mass-assignment attacks.

### 2. Unprotected Admin Endpoints and Data Leaks
* **Issue**: In `admin_pdf.js` and `adminRoutes.js`, critical administrative routes (such as fetching, creating, editing, and deleting users, doubts, feedback, event forms, and contributions) had no admin checks. Any registered user or unauthenticated visitor could query or modify these records.
* **Fix**: Secured all routes matching `/users`, `/pdf-form`, `/admin/contact`, `/admin/contributions`, `/admin/doubts`, `/admin/eventForms`, and `/admin/feedbacks` with the `requireAdmin` middleware. 

### 3. Hardcoded Credentials & Email Leakage
* **Issue**: NodeMailer configuration and transporter details had a hardcoded sender address (`"collegpt@gmail.com"`).
* **Fix**: Parameterized the sender and system credentials using environment variables (`SMTP_USER` tied to `process.env.EMAIL`).

### 4. Vulnerable JWT Verification & Crash Risks
* **Issue**: The `requireSignin` middleware verified JWT tokens using `process.env.JWT_SEC || JWT_SEC`. The fallback `JWT_SEC` was an undefined variable, which would throw a fatal reference error and crash the application if the environment variable was missing.
* **Fix**: Removed the undefined fallback, ensuring it resolves exclusively to `process.env.JWT_SEC`. Furthermore, added robust `try-catch` blocks and user validity checks in both auth middlewares.

---

## 🛡️ New Security Features Added

### 1. HTTP Security Headers (`helmet`)
* Installed and integrated `helmet` as global middleware to automatically set defensive HTTP response headers (preventing clickjacking, MIME sniffing, and cross-site scripting).

### 2. Global & Endpoint-Specific Rate Limiting (`express-rate-limit`)
* Set a global rate limiter of **500 requests per 15 minutes** to prevent brute-force and Denial of Service (DoS) attacks.
* Implemented a stricter auth-specific rate limiter (**20 attempts per 15 minutes**) for highly sensitive routes: `/signup`, `/verify-otp`, `/signin`, `/reset-password`, and `/new-password`.

### 3. NoSQL Injection Shield (`express-mongo-sanitize`)
* Integrated `express-mongo-sanitize` as global middleware to scrub incoming request bodies, query strings, and headers, stripping out keys starting with `$` or containing dots `.` to neutralize query injection.

### 4. Payload Size Restrictions & Env Validation
* Capped JSON body parsing at `1mb` to prevent large-payload memory exhaustion (DoS).
* Added startup validation inside `index.js`. The server will now print a friendly error message and exit cleanly if crucial variables (`MOGOURI`, `JWT_SEC`, `EMAIL`, `GPASS`) are missing from `.env`.

---

## 🐛 Notable Bug Fixes

### 1. Missing Database Imports
* **Issue**: The status patch endpoint `/contribution/:id/status` inside `routes/contributor.js` performed `User.findById(...)`, but the file never imported the `User` model, causing a runtime crash.
* **Fix**: Imported `User` via `const User = mongoose.model("User")`.

### 2. Reset Password Link Bug
* **Issue**: The email template for password reset used `${EMAIL}/resetpassword/${token}` as the link URL, which rendered as `your_email@gmail.com/resetpassword/...` (an invalid URL structure).
* **Fix**: Integrated a configurable `process.env.RESET_PASSWORD_URL` variable with clean fallbacks.

### 3. Redundant Express App Initializations
* **Issue**: Several route modules contained separate, duplicate instances of `express()` and `app.use(express.json())`, leading to memory overhead.
* **Fix**: Cleaned up the duplicates, standardizing on a clean `express.Router()` architecture.

---

## 📁 Files Impacted

* 📄 [index.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/index.js) — *Added defensive middlewares, validation, and security configs.*
* 📄 [adminlogin.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/middleware/adminlogin.js) — *Hardened admin token validation.*
* 📄 [requireSignin.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/middleware/requireSignin.js) — *Fixed runtime crash, improved async flow.*
* 📄 [auth.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/routes/auth.js) — *Hardened input validation, rate limiting, and password reset logic.*
* 📄 [contributor.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/routes/contributor.js) — *Fixed User import bug, configured dynamic SMTP.*
* 📄 [profile.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/routes/profile.js) — *Added authentication, whitelist verification, and ID validation.*
* 📄 [adminRoutes.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/routes/adminRoutes.js) — *Added strict admin authentication middleware.*
* 📄 [admin_pdf.js](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/routes/admin_pdf.js) — *Secured all endpoints under the `/admin` prefix.*
* 📄 [.env.example](file:///c:/Users/harsh/OneDrive/Desktop/collegpt/collegpt/server/.env.example) — *Added a standard environment template.*
