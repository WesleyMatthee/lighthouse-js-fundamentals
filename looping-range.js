let range = function(start, end, step) {
  let myArray = [];
  if (start === undefined || end === undefined || step === undefined || start >= end || step <= 0) {
    return [];
  } else {
    let i = start;
    while (i <= end) {
      myArray.push(i);
      i = i + step;
    
    }

    return myArray;
  }

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));