const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  //.connect("localhost/DEV_CONNECT", { useNewUrlParser: true })
  .then(() => console.log("MongoDBConnected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello123"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port ${port}"));
