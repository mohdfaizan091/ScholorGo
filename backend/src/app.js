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

const adminRoutes = require("./routes/admin.routes");
app.use("/api/admin", adminRoutes);


module.exports = app;
