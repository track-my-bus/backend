const mongoose = require("mongoose");

const schema = mongoose.Schema({
  stopName: String,
  lat: String,
  lng: String,
  busses: [{ name: String }],
});

module.exports = mongoose.model("stops", schema);
