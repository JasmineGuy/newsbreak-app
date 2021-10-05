const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
