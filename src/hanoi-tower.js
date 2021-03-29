const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let quantity = 2 ** disksNumber - 1;
  let speed = Math.floor(quantity * 3600 / turnsSpeed);
  console.log("Quantity", quantity, "speed ", speed);

  return { turns: quantity, seconds: speed}
};
