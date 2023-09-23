console.log(
  "date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js."
);

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log(uuid());
