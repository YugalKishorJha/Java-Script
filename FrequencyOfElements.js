
let ar=[1,2,1,5,1,4,5];

let resultObj={}

ar.forEach(ele=> resultObj[ele]?resultObj[ele]++:resultObj[ele]=1)

//here resultObj[ele] is checking the key is present in the object or not
//here resultObj[ele]++ is increasing the value of the particular key
console.log(resultObj)

/*another way*/


let map = new Map();

for (let i=0;i<ar.length;i++){
	if(map.has(ar[i]))
	map.set(ar[i],map.get(ar[i])+1)
	else
	map.set(ar[i],1)
} 
console.log(map)