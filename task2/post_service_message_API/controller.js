const cron = require("node-cron");
const Message = require("../models/Message");

exports.scheduleMessage = async (req, res) => {
  const { message, day, time } = req.body;
  const executeAt = new Date(`${day}T${time}:00`);

  cron.schedule(
    `${executeAt.getMinutes()} ${executeAt.getHours()} ${executeAt.getDate()} ${executeAt.getMonth() + 1} *`,
    async () => {
      await Message.create({ message, executeAt });
    }
  );

  res.json({ message: "Message scheduled successfully" });
};
