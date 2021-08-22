require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { boltwall } = require("boltwall");

const userRoute = require("./routes/users.route");
const postRoute = require("./routes/post.route");
const app = express();

app.use(
  cors({
    exposedHeaders: ["www-authenticate"],
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/", userRoute);

app.use(boltwall());

app.use("/u", postRoute);

const MONGO_DB = process.env.MONGOOSE_CONNECTION;

mongoose.connect(MONGO_DB, {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
app.listen(5000, () => console.log("listening on port 5000"));
