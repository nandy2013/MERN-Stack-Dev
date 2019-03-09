const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to  MongoDB
mongoose
  .connect("mongodb://localhost/test", { useNewUrlParser: true })
  //.connect(db, { useNewUrlParser: true })
  //.connect("localhost/DEV_CONNECT", { useNewUrlParser: true })
  .then(() => console.log("MongoDBConnected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello123"));

//Use routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port ${port}"));
