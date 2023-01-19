var ar=[5,2,6,1,54,2,1,5,5,6];
var arNew=new Set(...ar);
console.log(arNew)

// get only unique results in the end array


let ar=[1,1,2,2,2,3];//1,2,3

let elementsareNotRepeated=ar.filter((element,index,array)=>
array.indexOf(element)===index);

console.log(elementsareNotRepeated);


//unique Elements
let eleminataingMoreThanOneRepeatedElements=[...new Set(ar)]
console.log(eleminataingMoreThanOneRepeatedElements);


// without using map no direct way to get result as only [3]