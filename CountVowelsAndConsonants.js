let str="aeioumnbv";


let noOfVowels=str.split("").filter((element)=>element==="a"||element==="e"||
element==="o"||element==="i"||element==="u").length;

let noOfConsonants=str.split("").filter((element)=>!(element==="a"||element==="e"||
element==="o"||element==="i"||element==="u")).length;

console.log(noOfVowels);
console.log(noOfConsonants);

let noOfVowels2 = str.split("")
				.filter(a => "aeiou".includes(a)).length;
console.log(noOfVowels2);

