const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) { //Function that finds a good station.
  const goodStations = []

  for (const station of stations) { //Loop that runs through an array! 
    const capacity = station[1] 

    if (capacity >= 20) { //IF statement to check that the capacity is good! 

      const type = station[2] //

      if (type === 'school' || type === 'community centre') { //IF statement to check the venue
        goodStations.push(station[0]) 
      }
    }
  }

  return goodStations; //use a return statement to log the function outside in a console.log
}

console.log(chooseStations(stations)); 