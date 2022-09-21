const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

/*We can simplify the above code using them directly,
 instead of setting to them to new variables!*/
 
 const isNewEven = function (num) { //Renaming varialble to avoid syntax error! 
  return num % 2 === 0;
}

console.log(isNewEven(10));
console.log(isNewEven(11));