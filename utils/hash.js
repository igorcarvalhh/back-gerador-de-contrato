const { randomBytes } = require("crypto");

exports.getRandomHash = (size = 32) => {
  return randomBytes(size).toString("hex");
};
