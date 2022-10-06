const mongoose = require("mongoose");

const schema = mongoose.Schema({
  stopName: String,
  lat: String,
  lng: String,
  busses: [{ type: mongoose.Schema.Types.ObjectId, ref: "bus" }],
  city:String,
  state:String

  
});

module.exports = mongoose.model("stops", schema);
