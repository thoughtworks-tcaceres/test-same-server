express = require("express");
app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.get("/data", (req, res) => {
  console.log("does this run??");
  res.json("wait wurt");
});

app.listen(PORT, () => {
  console.log(`Node server started on port : ${PORT}`);
});
