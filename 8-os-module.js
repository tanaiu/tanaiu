const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
