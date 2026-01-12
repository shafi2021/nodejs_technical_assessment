const express = require("express");
const router = express.Router();
const { scheduleMessage } = require("../controllers/message.controller");


router.post("/schedule", scheduleMessage);

module.exports = router;
