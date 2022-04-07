let headQuarterBlock=42
let pickUpLocation=0;
function distanceFromHqInBlocks(pickUpLocation){
    let distanceInBlocks=Math.abs((pickUpLocation-headQuarterBlock))
    return distanceInBlocks
}
// console.log(distanceFromHqInBlocks(10))
function distanceFromHqInFeet(pickUpLocation){
    let distanceInFeet=Math.abs((pickUpLocation-headQuarterBlock))*264
    return distanceInFeet
}
function distanceTravelledInFeet(start,end){
    return Math.abs((end-start))*264
}

function calculatesFarePrice(start, destination){
    let distanceTravelledInFeet=Math.abs((destination-start))*264
    let farePrice;
    if(distanceTravelledInFeet<=400){
        farePrice=0
    }
    else if(distanceTravelledInFeet>400&&distanceTravelledInFeet<=2000){
     farePrice=((distanceTravelledInFeet-400)*2)/100
    }
    else if(distanceTravelledInFeet>2000&&distanceTravelledInFeet<2500){
        farePrice=25
    }
    else if(distanceTravelledInFeet>2500){
        return `cannot travel that far`
    }
    return farePrice
    
}
console.log(calculatesFarePrice(34,24))