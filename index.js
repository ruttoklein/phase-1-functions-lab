// Code your solution in this file!
  
function distanceFromHqInBlocks(pickupDistance){
  return Math.abs(pickupDistance-42);
}
function distanceFromHqInFeet(pickupDistance){
const blocks = distanceFromHqInBlocks(pickupDistance);
return blocks*264;
}
function distanceTravelledInFeet(start, end){ 
return Math.abs((start-end)*264);
}
function calculatesFarePrice(start, end){
  const distanceFromHqInFeet=264;
  const totalDistance=Math.abs ((end-start)* distanceFromHqInFeet);
  if (totalDistance<400){
      return 0;
}
else if (totalDistance>400 && totalDistance<2000)
{
return ((totalDistance-400)*1/50);
}
else if (totalDistance>2000 && totalDistance<2500)
{
  return 25;
}
else return ("cannot travel that far")
}
 

