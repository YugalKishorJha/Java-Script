let ar=[1,2,3,4,5];
let arNew=[];
for(let i=0;i<ar.length/2;i++){
	let temp=ar[i];
	ar[i]=ar[ar.length-1-i];
	ar[ar.length-1-i]=temp;
}
console.log(ar)
