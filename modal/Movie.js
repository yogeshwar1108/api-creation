const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  // title , year , ott
  tittle: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  ott: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("movie", moviesSchema);
