const mongoose = require("mongoose");

const schema = mongoose.Schema({
  bus: String,
  startName: String,
  sLat: String,
  sLng: String,
  destName: String,
  dLat: String,
  dLng: String,
});

module.exports = mongoose.model("bus", schema);
