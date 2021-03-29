const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options = {repeatTimes: 0,
  separator: '+', addition: '', additionRepeatTimes: 0, 
  additionSeparator: '|'} ) {
// throw new CustomError('Not implemented');
// remove line with error and write your code here
if(typeof str != 'string') {
  throw new CustomError('Not implemented');
} let newstr = String(str);
options.addition = String(options.addition)
      let strRepeat = newstr;
      let result = '';

      for(let i = 1; i <= options.repeatTimes; i++) {
          if(i == 1) {
              result += strRepeat;
          } else if(i != options.repeatTimes){
              result += options.separator + strRepeat
          }
           else if(i == options.repeatTimes) {
              result += options.separator + strRepeat
          }

          for(let j = 1; j <= options.additionRepeatTimes; j++){
              if(j != options.additionRepeatTimes){
                  result += options.addition + options.additionSeparator
              } else if(j == options.additionRepeatTimes) {
                  result += options.addition
              }

          }
      }

      return result;
};
  