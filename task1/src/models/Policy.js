const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema(
  {
    policyNumber: {
      type: String,
      required: true,
      unique: true
    },
    policyStartDate: {
      type: Date,
      required: true
    },
    policyEndDate: {
      type: Date,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PolicyCategory",
      required: true
    },
    carrierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PolicyCarrier",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Policy", PolicySchema);
