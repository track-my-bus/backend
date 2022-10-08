const asyncHandler = require("express-async-handler");
const Bus = require("../../model/Bus");
const Stops = require("../../model/Stops");

//api endpoint go post the location to the server

//get function
const addBusData = asyncHandler(async (req, res) => {
  const { bus, startName, sLat, sLng, destName, dLat, dLng } = req.body;

  const check = await Bus.findOne({ bus: bus });

  if (!check) {
    const data = await Bus.create({
      bus: bus,
      startName: startName,
      sLat: sLat,
      sLng: sLng,
      destName: destName,
      dLat: dLat,
      dLng: dLng,
    });

    res.status(200).json(data);
  } else {
    res.json({ message: "bus already exists" });
  }
});

//api endpoint to get the locations and their time

//post function
const getBusData = asyncHandler(async (req, res) => {
  let busId = req.get("busId");

  const data = await Bus.findOne({ _id: busId });

  res.json({ data: [data] });
});

//get function
const getStopsData = asyncHandler(async (req, res) => {
  const data = await Stops.find().populate("busses");

  res.json({ data: data });
});

//post function

const addStopsData = asyncHandler(async (req, res) => {
  const { stopName, lat, lng, busses, city, state } = req.body;

  data = await Stops.create({
    stopName: stopName,
    lat: lat,
    lng: lng,
    busses: busses,
    city: city,
    state: state
  });

  res.json({ data: data });
});

const updateStopsData = asyncHandler(async (req, res) => {
  let stopId = req.get("stopId");
  const { stopName, city, state, busses } = req.body;

  data = await Stops.findOneAndUpdate(
    { _id: stopId },
    { $set: { "stopName": stopName, "city": city, "state": state, "busses": busses } },
    { new: true }
  );

  res.json({ data: data });
});

const busStops = asyncHandler(async (req, res) => {
  let busId = req.get("busId");

  const data = await Stops.find({ busses: busId });

  res.json({ data: data });
});

const updateBusData = asyncHandler(async (req, res) => {
  let busId = req.get("busId");
  const { bus, startName, sLat, sLng, destName, dLat, dLng, busNumber } = req.body;

  data = await Bus.findOneAndUpdate(
    { _id: busId },
    { $set: { "bus": bus, "startName": startName, "sLat": sLat, "sLng": sLng, "destName": destName, "dLat": dLat, "dLng": dLng, "busNumber": busNumber } },
    { new: true }
  );

  res.json({ data: data });
})

module.exports = {
  busStops,
  updateStopsData,
  addBusData,
  getBusData,
  getStopsData,
  addStopsData,
  updateBusData
};
