const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const PdfForm = mongoose.model("PdfForm");
const Contact = mongoose.model("Contact");
const Contributor = mongoose.model("Contributor");
const Doubt = mongoose.model("Doubt");
const EventForm = mongoose.model("EventForm");
const Feedback = mongoose.model("Feedback");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


router.post("/pdf-forms", async (req, res) => {
  try {
    const { code, sem, sub, unit, link, author, description, extra, youtube } = req.body;

    // Create a new PdfForm instance with the form data

    const newPdfForm = new PdfForm({
      code,
      sem,
      sub,
      unit,
      link,
      author,
      description,
      extra,
      youtube,
      timestamp: new Date(),
    });

    console.log(newPdfForm);
    console.log(new Date());
    // Save the newPdfForm to the database
    await newPdfForm.save();

    // Respond with a success message
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    // Handle errors
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/pdf-forms/:code", async (req, res) => {
  try {
    const code = req.params.code; // Get the 'code' parameter from the URL

    // Find the PdfForm in the database with the given 'code'
    const pdfForm = await PdfForm.findOne({ code });

    if (!pdfForm) {
      // If no PdfForm is found with the given 'code', return an error response
      return res
        .status(404)
        .json({ error: "PDF not found for the given code" });
    }

    // Extract the 'link' property from the pdfForm and send it as the response
    const { sem, sub, unit, link, author, description, extra, youtube, timestamp } =
      pdfForm;
    res.json({ sem, sub, unit, link, author, description, extra, youtube, timestamp });
  } catch (error) {
    // Handle errors
    console.error("Error fetching PDF link:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Helper function for error handling
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
};

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email, password, university, sem, gender } = req.body;
    
    if (!name || !email || !password || !university || !sem || !gender) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      university,
      sem,
      gender
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    handleError(res, error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a specific user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Prevent password update through this route

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
});

// User Analytics
router.get('/users/analytics/overview', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const verifiedUsers = await User.countDocuments({ isVerified: true });
    const unverifiedUsers = totalUsers - verifiedUsers;
    const genderDistribution = await User.aggregate([
      { $group: { _id: '$gender', count: { $sum: 1 } } }
    ]);
    const universityDistribution = await User.aggregate([
      { $group: { _id: '$university', count: { $sum: 1 } } }
    ]);
    const semesterDistribution = await User.aggregate([
      { $group: { _id: '$sem', count: { $sum: 1 } } }
    ]);

    res.json({
      totalUsers,
      verifiedUsers,
      unverifiedUsers,
      genderDistribution,
      universityDistribution,
      semesterDistribution
    });
  } catch (error) {
    handleError(res, error);
  }
});

// User Activity Analytics
router.get('/users/analytics/activity', async (req, res) => {
  try {
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const newUsersLastWeek = await User.countDocuments({ createdAt: { $gte: lastWeek } });
    const verifiedUsersLastWeek = await User.countDocuments({ 
      isVerified: true, 
      createdAt: { $gte: lastWeek } 
    });

    res.json({
      newUsersLastWeek,
      verifiedUsersLastWeek,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// Detailed User Analytics
router.get('/users/analytics/detailed', async (req, res) => {
  try {
    const skillDistribution = await User.aggregate([
      { $unwind: '$Skills' },
      { $group: { _id: '$Skills', count: { $sum: 1 } } }
    ]);

    const hobbyDistribution = await User.aggregate([
      { $unwind: '$hobbies' },
      { $group: { _id: '$hobbies', count: { $sum: 1 } } }
    ]);

    const avgCPI = await User.aggregate([
      { $group: { _id: null, averageCPI: { $avg: '$cpi' } } }
    ]);

    const socialMediaPresence = await User.aggregate([
      { $project: {
          hasLinkedIn: { $cond: [{ $ne: ['$linkedinURL', null] }, 1, 0] },
          hasGitHub: { $cond: [{ $ne: ['$githubURL', null] }, 1, 0] },
          hasTwitter: { $cond: [{ $ne: ['$twitterURL', null] }, 1, 0] },
          hasInstagram: { $cond: [{ $ne: ['$instaURL', null] }, 1, 0] }
        }
      },
      { $group: {
          _id: null,
          linkedInUsers: { $sum: '$hasLinkedIn' },
          gitHubUsers: { $sum: '$hasGitHub' },
          twitterUsers: { $sum: '$hasTwitter' },
          instagramUsers: { $sum: '$hasInstagram' }
        }
      }
    ]);

    res.json({
      skillDistribution,
      hobbyDistribution,
      averageCPI: avgCPI[0]?.averageCPI || 0,
      socialMediaPresence: socialMediaPresence[0] || {}
    });
  } catch (error) {
    handleError(res, error);
  }
});



// ------- PDF Forms ------ //

router.post('/pdf-form', async (req, res) => {
  try {
    const newPdfForm = new PdfForm(req.body);
    await newPdfForm.save();
    res.status(201).json(newPdfForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all PDF forms
router.get('/pdf-form', async (req, res) => {
  try {
    const pdfForms = await PdfForm.find();
    res.json(pdfForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific PDF form
router.get('/pdf-form/:id', async (req, res) => {
  try {
    const pdfForm = await PdfForm.findById(req.params.id);
    if (!pdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json(pdfForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a PDF form
router.put('/pdf-form/:id', async (req, res) => {
  try {
    const updatedPdfForm = await PdfForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json(updatedPdfForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a PDF form
router.delete('/pdf-form/:id', async (req, res) => {
  try {
    const deletedPdfForm = await PdfForm.findByIdAndDelete(req.params.id);
    if (!deletedPdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json({ message: 'PDF form deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----- Contact Form ----- //

router.post("/admin/contact", async (req, res) => {
  try {
    const { name, email, message, postedBy } = req.body;
    const newContact = new Contact({ name, email, message, postedBy });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all contacts
router.get("/admin/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().populate("postedBy", "_id name");
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific contact
router.get("/admin/contact/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).populate("postedBy", "_id name");
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a contact
router.put("/admin/contact/:id", async (req, res) => {
  try {
    const { name, email, message, postedBy } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, message, postedBy },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a contact
router.delete("/admin/contact/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----- Contributor Form ----- //

router.get("/admin/contributions",  async (req, res) => {
  try {
    const contributions = await Contributor.find().populate("postedBy", "_id name");
    res.json(contributions);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Add a new contribution
router.post("/admin/contributions",  async (req, res) => {
  const { semester, subjectName, fileLinks, pdfDescription, postedBy } = req.body;
  if (!semester || !subjectName || !fileLinks || !pdfDescription || !postedBy) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const contribution = new Contributor({
    semester,
    subjectName,
    fileLinks,
    pdfDescription,
    postedBy: req.user._id,
  });
  try {
    await contribution.save();
    res.json({ message: "Contribution saved successfully" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Update a contribution
router.put("/admin/contributions/:id",  async (req, res) => {
  const { semester, subjectName, fileLinks, pdfDescription } = req.body;
  try {
    const updatedContribution = await Contributor.findByIdAndUpdate(
      req.params.id,
      { semester, subjectName, fileLinks, pdfDescription },
      { new: true }
    );
    res.json(updatedContribution);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Delete a contribution
router.delete("/admin/contributions/:id",  async (req, res) => {
  try {
    await Contributor.findByIdAndDelete(req.params.id);
    res.json({ message: "Contribution deleted successfully" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// ----- Doubts Section ----- //

router.get("/admin/doubts",  async (req, res) => {
  try {
    const doubts = await Doubt.find().populate("postedBy", "_id name");
    res.json(doubts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Create a new doubt
router.post("/admin/doubts",  async (req, res) => {
  const { code, semester, subjectName, unitName, author, doubt } = req.body;
  
  if (!doubt) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  
  req.user.password = undefined;
  const newDoubt = new Doubt({
    code,
    semester,
    subjectName,
    unitName,
    author,
    doubt,
    postedBy: req.user,
  });

  try {
    const savedDoubt = await newDoubt.save();
    res.json(savedDoubt);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Update a doubt
router.put("/admin/doubts/:id",  async (req, res) => {
  const { id } = req.params;
  const { code, semester, subjectName, unitName, author, doubt } = req.body;

  try {
    const updatedDoubt = await Doubt.findByIdAndUpdate(
      id,
      { code, semester, subjectName, unitName, author, doubt },
      { new: true }
    ).populate("postedBy", "_id name");
    
    if (!updatedDoubt) {
      return res.status(404).send("Doubt not found");
    }
    
    res.json(updatedDoubt);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Delete a doubt
router.delete("/admin/doubts/:id",  async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedDoubt = await Doubt.findByIdAndDelete(id).populate("postedBy", "_id name");

    if (!deletedDoubt) {
      return res.status(404).send("Doubt not found");
    }
    
    res.json(deletedDoubt);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// ----- Event Form ----- //

router.get("/admin/eventForms",  async (req, res) => {
  try {
    const eventForms = await EventForm.find();
    res.json(eventForms);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Create a new event form
router.post("/admin/eventForms",  async (req, res) => {
  const { title, description, date, profilePic, link, extra } = req.body;
  
  const newEventForm = new EventForm({
    title,
    description,
    date,
    profilePic,
    link,
    extra,
  });

  try {
    const savedEventForm = await newEventForm.save();
    res.json(savedEventForm);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Update an event form
router.put("/admin/eventForms/:id",  async (req, res) => {
  const { id } = req.params;
  const { title, description, date, profilePic, link, extra } = req.body;

  try {
    const updatedEventForm = await EventForm.findByIdAndUpdate(
      id,
      { title, description, date, profilePic, link, extra },
      { new: true }
    );

    if (!updatedEventForm) {
      return res.status(404).send("Event form not found");
    }

    res.json(updatedEventForm);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Delete an event form
router.delete("/admin/eventForms/:id",  async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEventForm = await EventForm.findByIdAndDelete(id);

    if (!deletedEventForm) {
      return res.status(404).send("Event form not found");
    }

    res.json(deletedEventForm);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// ----- Feedback Section ----- //

router.get("/admin/feedbacks",  async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("postedBy", "_id name");
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Create a new feedback
router.post("/admin/feedbacks",  async (req, res) => {
  const { feedback, rating } = req.body;

  if (!feedback || !rating) {
    return res.status(422).send("Please add all the fields");
  }

  const newFeedback = new Feedback({
    feedback,
    rating,
    postedBy: req.user._id,
  });

  try {
    const savedFeedback = await newFeedback.save();
    res.json(savedFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Update a feedback
router.put("/admin/feedbacks/:id",  async (req, res) => {
  const { id } = req.params;
  const { feedback, rating } = req.body;

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { feedback, rating },
      { new: true }
    );

    if (!updatedFeedback) {
      return res.status(404).send("Feedback not found");
    }

    res.json(updatedFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Delete a feedback
router.delete("/admin/feedbacks/:id",  async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);

    if (!deletedFeedback) {
      return res.status(404).send("Feedback not found");
    }

    res.json(deletedFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// ---- Admin Login ---- //

router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: 'Please provide email and password' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }

    const doMatch = await bcrypt.compare(password, user.password);

    if (!doMatch) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }

    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SEC, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/admin/getdashboardstats', async (req, res) => {
  try {
    const stats = await Promise.all([
      User.countDocuments(),
      Contributor.countDocuments(),
      Doubt.countDocuments(),
      PdfForm.countDocuments(),
      Feedback.countDocuments(),
      EventForm.countDocuments(),
      Contact.countDocuments()
    ]);

    const [
      totalUsers,
      totalContributions,
      totalDoubts,
      totalPdfForms,
      totalFeedbacks,
      totalEventForms,
      totalContacts
    ] = stats;

    res.json({
      totalUsers,
      totalContributions,
      totalDoubts,
      totalPdfForms,
      totalFeedbacks,
      totalEventForms,
      totalContacts
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
