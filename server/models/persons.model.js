const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["m", "f"],
  },
  birth_date: {
    type: Date,
  },
  death_date: {
    type: Date,
  },
  description: {
    type: String,
  },
  nick_name: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Persons", personSchema);
