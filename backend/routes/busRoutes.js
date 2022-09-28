const express = require("express");
const router = express.Router();
const {
  addBusData,
  getBusData,
  getStopsData,
  addStopsData,
  updateStopsData,
  busStops,
} = require("./controller/dataController");

router.post("/getBus", getBusData);
router.get("/getStops", getStopsData);
router.post("/postBus", addBusData);
router.post("/postStops", addStopsData);
router.post("/updateStops", updateStopsData);
router.post("/getBusStops", busStops);

module.exports = router;
