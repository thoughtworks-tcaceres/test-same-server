const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

// Create the server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

// Serve our api route /cow that returns a custom talking text cow
app.get("/api/data", (req, res) => {
  return res.json("selin tyler");
});

// Anything that doesn't match the above, send back the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

// Choose the port and start the server
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
