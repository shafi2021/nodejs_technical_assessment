const osu = require("node-os-utils");
const cpu = osu.cpu;

setInterval(async () => {
  const usage = await cpu.usage();
  if (usage > 70) {
    console.log("CPU usage exceeded 70%, restarting...");
    process.exit(1); // Use PM2 to auto-restart
  }
}, 5000);

