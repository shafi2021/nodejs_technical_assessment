const express = require("express");
const router = express.Router();
const policyController = require("../controllers/policy.controller");


router.get("/aggregate", policyController.aggregatePolicies);

module.exports = router;
