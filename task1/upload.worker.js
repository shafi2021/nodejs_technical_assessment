const { workerData, parentPort } = require("worker_threads");
const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("../config/db");

const Agent = require("../models/Agent");
const User = require("../models/User");
const Account = require("../models/UserAccount");
const Policy = require("../models/Policy");
const Category = require("../models/PolicyCategory");
const Carrier = require("../models/PolicyCarrier");

fs.createReadStream(workerData.filePath)
  .pipe(csv())
  .on("data", async (row) => {
    const agent = await Agent.findOneAndUpdate(
      { agentName: row.agent },
      { agentName: row.agent },
      { upsert: true, new: true }
    );

    const user = await User.findOneAndUpdate(
      { email: row.email },
      {
        firstName: row.firstname,
        dob: row.dob,
        address: row.address,
        phone: row.phone,
        state: row.state,
        zipCode: row.zip,
        gender: row.gender,
        userType: row.userType
      },
      { upsert: true, new: true }
    );

    const category = await Category.findOneAndUpdate(
      { categoryName: row.category_name },
      { categoryName: row.category_name },
      { upsert: true, new: true }
    );

    const carrier = await Carrier.findOneAndUpdate(
      { companyName: row.company_name },
      { companyName: row.company_name },
      { upsert: true, new: true }
    );

    await Policy.create({
      policyNumber: row.policy_number,
      startDate: row.policy_start_date,
      endDate: row.policy_end_date,
      userId: user._id,
      agentId: agent._id,
      categoryId: category._id,
      carrierId: carrier._id
    });
  })
  .on("end", () => parentPort.postMessage("done"));
