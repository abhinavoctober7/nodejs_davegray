// How Node JS is different from Vanilla JS.
// 1. Node JS runs on a server- not in a Browser(Backend not Frontend)
// 2. The console is the terminal window
// 3. Global object instead of Window object
// 4. Has common core modules
// 5. Common JS modules instead of ES6 modules
// 6. Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add, substract, multiply, divide } = require("./math");

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
