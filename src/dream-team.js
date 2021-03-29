const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if( Array.isArray(members) == false || members.length == 0) {
    return false
}
let temp;
let i;
temp = members.filter((el) => (typeof el == 'string') && (el.length > 0))
console.log(temp)
temp = temp.map(el => el.trim().slice(0, 1));
console.log("temp trim ", temp)
temp = temp.map(el => el.toUpperCase());
console.log("temp upperCase ", temp)
temp = temp.filter(el => el != "")
i = 0;
while(i < temp.length) {
    let item;
  for(let j = 0; j < temp.length; j++) {
      let elem;
      if(j < temp.length -1){
          if(temp[i] < temp[j]){
              elem = temp[i];
              temp[i] = temp[j]
              temp[j] = elem
          }
      }
  }
  i++;
}
  temp = temp.join('');
  return temp;
};
