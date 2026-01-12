const osu = require("node-os-utils");
const cpu = osu.cpu;

module.exports = () => {
  setInterval(async () => {
    const usage = await cpu.usage();
    console.log(`CPU Usage: ${usage}%`);

    if (usage > 70) {
      console.error("CPU usage exceeded 70%. Restarting...");
      process.exit(1); // PM2 restarts automatically
    }
  }, 5000);
};
