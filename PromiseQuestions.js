const promise= new promise((res)=>res(2));
promise.then((v)=>{
	console.log(v);
	return v*2
})
.then((v)=>{
	console.log(v);
	return v*2
})
.then((v)=>{
	console.log(v);
	return 0
})