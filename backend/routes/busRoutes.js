const express = require("express");
const router = express.Router();
const {
  addBusData,
  getBusData,
  getStopsData,
  addStopsData,
  updateStopsData,
  busStops,
  updateBusData,
} = require("./controller/dataController");

router.get("/getBus", getBusData);
router.get("/getStops", getStopsData);
router.post("/postBus", addBusData);
router.post("/postStops", addStopsData);
router.post("/updateStops", updateStopsData);
router.get("/getBusStops", busStops);
router.post("/updateBus", updateBusData);

module.exports = router;
