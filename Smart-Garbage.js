const smartGarbage = function (trash, bins) {
  bins[trash] += 1; //Bracket notations needed to call up bins object. 
  return bins;
  }

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });