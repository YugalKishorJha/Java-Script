let str = "1214";
var i = 0, j = str.length- 1, check = 0;

while (i < j) {
	if (str.charAt(i) !== str.charAt(j)) {
		console.log("The string is not a palindrome")
		check++;
		break;
		//keyword to terminate directly the loop
	}
	i++;j--;
}
if(check===0)
console.log("The string is palindrome")


// Second method is to reverse the string and then compare
const reversedString =str.split("").reverse().join("");


if(reversedString===str)
console.log("The string is a palindrome");
else
console.log("The string are not palindrome");
