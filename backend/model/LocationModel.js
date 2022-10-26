const mongoose = require("mongoose");

const schema = mongoose.Schema({
  stopName: String,
  lat: String,
  lng: String,
  bus: String,
});

module.exports = mongoose.model("Location", schema);
