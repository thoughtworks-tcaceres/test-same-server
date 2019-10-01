const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/data", async (req, res) => {
  try {
    return res.json("wait wurt");
  } catch (err) {
    return res.json("error");
  }
});

app.get("/cow/:something", async (req, res) => {
  try {
    return res.json("wait wurt");
  } catch (err) {
    return res.json("error");
  }
});

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
