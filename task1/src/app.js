const express = require("express");
const mongoose = require("./config/db");
const cpuMonitor = require("./utils/cpuMonitor");

const uploadRoutes = require("./routes/upload.routes");
const policyRoutes = require("./routes/policy.routes");
const messageRoutes = require("./routes/message.routes");

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/upload", uploadRoutes);
app.use("/api/policy", policyRoutes);
app.use("/api/message", messageRoutes);

cpuMonitor();

module.exports = app;
