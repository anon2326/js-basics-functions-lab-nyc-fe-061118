// Code your solution in this file!
let ridestart = 0;
let distancefromhqinB = 0;
function distanceFromHqInBlocks(ridestart){
  if (ridestart > 42)
  {
    distancefromhqinB = ridestart - 42;
    return distancefromhqinB;
  }
  else if (ridestart < 42)
  {
    distancefromhqinB = 42 - ridestart;
    return distancefromhqinB;
  }
  else if (ridestart === 42)
  {
    distancefromhqinB = 0;
    return distancefromhqinB;
  }
}

function distancefromhqinFeet(ridestart){
  if (ridestart > 42)
  {
    distancefromhqinF = (ridestart - 42) * 264;
    return distancefromhqinF;
  }
  else if (ridestart < 42)
  {
    distancefromhqinF = (42 - ridestart) * 264;
    return distancefromhqinF;
  }
  else if (ridestart === 42)
  {
    distancefromhqinF = 0;
    return distancefromhqinF;
  }
}
