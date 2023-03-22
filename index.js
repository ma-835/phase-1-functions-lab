function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
    return (someValue-42);
    }
    else{
        return (42-someValue);
    }
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)* 264 ;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination){
       let distance = start-destination;
        return (distance * 264);
        }
        else{
            let distance = destination-start;
            return (distance * 264);
        }
    }
function calculatesFarePrice(start, destination) {
    let distance =(distanceTravelledInFeet(start, destination));
    if (distance<=400){
        return 0;
    }else if ((distance>400) && (distance<2000)){
        return (0.02 * (distance-400));
    }
    else if ((distance >2000) && (distance<2500)) {
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
