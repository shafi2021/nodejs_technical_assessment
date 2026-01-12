const mongoose = require("mongoose");

const PolicyCarrierSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PolicyCarrier", PolicyCarrierSchema);
