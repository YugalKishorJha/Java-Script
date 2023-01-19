let s1 = "aeiou";
let s2 = "uemoa";


let first = s1.split("").sort().join();
let second = s2.split("").sort().join();


if (first === second)
	console.log(`The ${s1} and ${s2} are palindromes`);
else
	console.log(`The ${s1} and ${s2} are not palindromes`);
