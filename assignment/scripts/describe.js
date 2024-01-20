// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set its value to 'Dane'. The checks if name is exactly equal to 'Mary'. 
// If statement is true, it'll log 'Hi, Mary!' on the console, if not it'll log 'How do you do?'
// Since name is not exactly equal to 'Mary', the console will log'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make two variable; the first variable is named secret with is value undefined. The second variable isnamed code 
// with its value set at 123. We then check if the value of code is equal to 123, it is so, the value of secret gets updated
// to 'super' and  the value of code is multipled by two to make 246. Next, we check if the updated value of code is 
//greater than 250 which is false so we will not update the value of secret to 'duper'. The console.log displays 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make three variables declared: isStudent (value set to true), age (value set to 34), and zip (value set to 55407).
//The first statement checks if isStudent is true & if zip is greater than 80000. If both are true, it logs "You're a  
// student on the West Coast!" to the console. If not true, it checks if isStudent is false or if age is less than 30.
// If either is true, it logs "What are your hobbies?" to the console. If the first nor the second conditions are met,
// the next statement checks if isStudent is true. If this condition is true, it logs the message "Welcome to Prime!" 
// to the console. Since isStudent is true and zip is not greater than 80000, it’ll log "Welcome to Prime!" to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
// FIX: per instrucions colorOne = 'blue'
let colorTwo = 'blue';
// FIX: per instrucions colorTwo = 'red'
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX: per instrucions include colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  // FIX: per instrucions replace || with &&
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  // FIX: per instrucions replace <= with >=
  console.log('no entry');
} else {
  console.log('enter');
}
*/

