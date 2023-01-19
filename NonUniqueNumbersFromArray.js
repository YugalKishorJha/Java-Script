// get only duplicates results in the end array


let ar=[1,1,2,2,2,3];

let elementsThatAreRepeated=ar.filter((element,index,array)=>
array.indexOf(element)!==index);

let eleminataingMoreThanOneRepeatedElements=[...new Set(elementsThatAreRepeated)]
console.log(eleminataingMoreThanOneRepeatedElements);

