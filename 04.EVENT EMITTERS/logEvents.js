const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const newDate = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${newDate}\t${uuid()}\t${message}`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      `${logItem}\n`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
