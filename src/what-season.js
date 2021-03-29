const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(date == undefined) {
    return "Unable to determine the time of year!"
}
if(isNaN(date)){
  throw new CustomError('Not implemented');
}
let dat = date.getMonth();
let season = '';
if(dat >= 0 && dat < 2 || dat == 11) {
    season = 'winter';
} else if(dat >= 2 && dat < 5) {
    season = 'spring';
} else if(dat >= 5 && dat < 8) {
    season = 'summer';
} else if(dat >= 8 && dat < 11) {
    season = 'autumn';
}

return season;
};
