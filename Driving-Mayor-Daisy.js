const carPassing = function (cars, speed) {
  let newObject = {}; //create a new object for the cars variable! 
  newObject.time = Date.now(speed); 
  newObject.speed = speed;
  cars.push(newObject);
  return cars;

}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)