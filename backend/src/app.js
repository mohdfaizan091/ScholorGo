const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const inquiryRoutes = require("./routes/inquiry.routes");
app.use("/api/inquiry", inquiryRoutes);

module.exports = app;
