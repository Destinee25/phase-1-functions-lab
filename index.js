// Code your solution in this file!

const hQ = 42
const feet = 264

function distanceFromHqInBlocks(pickUpLocation){
    if(pickUpLocation >= 42){
        return (pickUpLocation - hQ);
    } else if (pickUpLocation < 42){
        return (hQ - pickUpLocation);
    }
}
function distanceFromHqInFeet(pickUpLocation){
        return distanceFromHqInBlocks(pickUpLocation)*264;
}

function distanceTravelledInFeet(block1,block2){
    if(block1 >= block2){
        return (block1 - block2)*264;
    } else if (block1 < block2){
        return (block2 - block1)*264;
    }
}

function calculatesFarePrice(start, destination){

let newDist = distanceTravelledInFeet(start, destination)

  if (newDist <= 400){
      return (newDist*0)
  } 
  else if (newDist > 400 && newDist <= 2000){
      return (newDist-400) * 0.02
  } 
  else if (newDist > 2000 && newDist <= 2500){
      return 25
  }
  else if (newDist > 2500){
      return 'cannot travel that far';
  }
}
calculatesFarePrice(distanceFromHqInFeet(43,44))
calculatesFarePrice(distanceFromHqInFeet(34,32))

