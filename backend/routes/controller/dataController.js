const asyncHandler = require("express-async-handler");
const Bus = require("../../model/getBusModel");
const Stops = require("../../model/getStopsModel");

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
  const { bus } = req.body;

  const data = await Bus.findOne({ bus: bus });

  res.json({ data: [data] });
});

//get function
const getStopsData = asyncHandler(async (req, res) => {
  const data = await Stops.find();

  res.json({ data: data });
});

//post function

const addStopsData = asyncHandler(async (req, res) => {
  const { stopName, lat, lng, busses } = req.body;

  data = await Stops.create({
    stopName: stopName,
    lat: lat,
    lng: lng,
    busses: busses,
  });

  res.json({ data: data });
});

const updateStopsData = asyncHandler(async (req, res) => {
  const { stopName, busName } = req.body;

  data = await Stops.findOneAndUpdate(
    { stopName: stopName },
    { $push: { busses: { name: busName } } },
    { new: true }
  );

  res.json({ data: data });
});

const busStops = asyncHandler(async (req, res) => {
  const { bus } = req.body;

  const data = await Stops.find({ busses: { $elemMatch: { name: bus } } });

  res.json({ data: data });
});

module.exports = {
  busStops,
  updateStopsData,
  addBusData,
  getBusData,
  getStopsData,
  addStopsData,
};
