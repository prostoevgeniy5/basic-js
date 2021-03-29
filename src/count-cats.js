const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(matrix === undefined || Array.isArray(matrix) && (matrix.length === 0)) {
    return [];
  }
  let temp = [];

  temp = matrix.reduce((ac, el, ind) => {
            el.forEach(elem => {
                ac.push(elem)
            })
            return ac
    }, []);
    temp = temp.filter((el => el === "^^"));
    if(temp.length === 0) {
      return 0;
    }

  return temp.length;
};
