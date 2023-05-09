const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
  relationship_id: {
    type: Number,
    ref: "Person",
  },
  source_id: {
    type: Number,
    ref: "Person",
  },
  target_id: {
    type: Number,
    ref: "Person",
  },
  type: {
    type: String,
    enum: ["mother", "father", "spouse"],
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Relationships", relationshipSchema);
