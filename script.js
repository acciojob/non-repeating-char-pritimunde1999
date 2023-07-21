//your JS code here. If required.


function nonRepeatingCharacter(s){

	let object = {};

   for(let char of s)
	{
		object[char] = (object[char] || 0)+1;
	}

	for(let char of s)
		{
			if(object[char]==1)
			{
				return char;
			}
		}
}

const userInput = prompt("Enter a String");
const result = nonRepeatingCharacter(userInput);
console.log(result);