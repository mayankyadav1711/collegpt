const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const contributionSchema = new mongoose.Schema({
  // Basic fields (existing)
  semester: {
    type: String,
    required: function() { return this.contributionType === 'college_notes'; } // Only required for college notes
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
  
  // New field for contribution type
  contributionType: {
    type: String,
    required: true,
    enum: ['college_notes', 'gate_notes', 'placement', 'web_dev', 'reference', 'exam_prep'],
    default: 'college_notes'
  },
  
  // User reference (existing)
  postedBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  
  // Additional metadata
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamps on save
contributionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

mongoose.model("Contributor", contributionSchema);