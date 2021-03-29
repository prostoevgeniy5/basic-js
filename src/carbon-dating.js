const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sa) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const MODERN_ACTIVITY = 15.0;
  const HALF_LIFE_PERIOD = 5730;
  if(((typeof sa) !== 'string') || (typeof sa == 'string' && Number(sa) == 0) || Number.isNaN(Number(sa)) || Number(sa) <= 0 || Number(sa) > 15 ) {
      return false;
  }
    let temp = Number(sa);
    let t, k;

    k = 0.693 / HALF_LIFE_PERIOD;
    t = Math.log(MODERN_ACTIVITY / temp) / k;
    t = Math.ceil(t);
    return t;
};
