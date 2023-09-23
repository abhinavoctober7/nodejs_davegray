// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promisesWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promisesWrite.txt"),
      "\n\nNice to meet you!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promisesWrite.txt"),
      path.join(__dirname, "files", "promisesComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promisesComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};
fileOps();
// fs.readFile(path.join(__dirname, "files", "reply.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   // console.log(data.toString());
//   console.log(data);
// }); // Asynchronous Function

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "Testing",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// ); // Callback Hell

console.log("Hello...");

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error ${err}`);
  process.exit(1);
});
