var ar=[5,1,1,5,2,63,1];
//ar.sort();
//console.log(`Second Highest element in the array is ${ar.length-2}`);

//var highest=Math.max(...ar);
//console.log(highest)
//var newArray=ar.splice(ar.indexOf(highest),);
//console.log(newArray)


ar=[...new Set(ar)] // this is to remove the duplicates
let secondHighestElement=ar.sort((x,y)=>y-x)[1] // this to sort in descending order 
//and get first index element 
console.log(secondHighestElement)