let ar = [1, 1, 2, 2, 4];


var desiredArray = ar.filter((arrayElement, indexOfarrayElement) => 
ar.indexOf(arrayElement) !== indexOfarrayElement)// this logIc checks which elements 
//are duplicate and returns the second duplicate
console.log(desiredArray)