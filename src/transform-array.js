const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if(!Array.isArray(arr)) {
    throw new CustomError('Not implemented');
  }
  let length = arr.length;
    let result = arr.map((el, ind) => {
        if(el === '--discard-next' && (ind + 1) < arr.length) {
            arr[ind + 1] = undefined;
        } else if((ind + 1) < arr.length && arr[ind + 1] === '--discard-prev') {
            el = undefined;
        } else if(el === '--double-next' && (ind + 1) < arr.length) {
            arr[ind + 1] *= arr[ind + 1];
        } else if( (ind - 1) >= 0 && arr[ind + 1] === '--double-prev') {
            el *= el;
        }
        return el;
    })

    result = result.filter((el) => {
        if(el != undefined && typeof el != 'string') {
            return el
        }

        return el;
    })
    result = result.filter(el => typeof el != "string")
    console.log(result)

    return result
};
