const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const Circular = require("./models/Circular");

app.use(cors());
app.use(express.json());

// Serve React frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("/api/circulars", async (req, res) => {
  try {
    const circulars = await Circular.findAll();
    res.json(circulars);
  } catch (error) {
    console.error("Error fetching circulars:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});