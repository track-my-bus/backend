const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
var bodyParser = require("body-parser");
var cors = require("cors");

connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tmb", require("./routes/busRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
