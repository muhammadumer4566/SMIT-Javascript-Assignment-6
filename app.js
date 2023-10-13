// ! chapter 35 to 38

// ? Q1)

// function date() {
//     var date = new Date();
//     document.write(date);
// }
// date();

// ? Q2)
// function name(firstname, lastname) {
//     alert(`hello ${firstname + " " + lastname}`)
// }
// name("muhammad", "umer")

// ? Q3)

// function sum() {
//     var input = +prompt("Enter a number 1")
//     var input2 = +prompt("Enter a number 2")
//     var result= input + input2;
//     document.write(result)
//    return result;
// }
// sum();

// ? Q4)

// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;

//         default:
//            return "Invalid operator!";

//     }
//     document.write("Result " + result +"<br>");
// }
// calculate(3,7,"*");
// calculate(12,6,"/");
// calculate(12,6,"+");
// calculate(12,6,"-");

// ? Q5)

// function sqare(number,number){
//     var result= number*number;
//     document.write(result);
// }
// sqare(12,12);

// ? Q6)

// function factorial(number) {
//     var result = 1;
//     if (number === 0 || number === 1) {
//       return result;
//     }
//      else {
//       for (var i = 2; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
//   var num = 8;
//   var factorialNum = factorial(num);
//   document.write(`The factorial of ${num} is ${factorialNum}`);

// ? Q7)

// function counting(Start,End){
//     if (Start<=End){
//         for(var i=Start; i<=End; i++){
//         document.write(i+"<br>");
//         }
//     }
// } 
// counting(1,10);

// ? Q8)

// function Hypotenuse(base, perpendicular) {
//     function Square(number) {
//         return number * number;
//     }
//     var baseSquare = Square(base);
//     var perpendicularSquare = Square(perpendicular);

//     var hypotenuse = baseSquare + perpendicularSquare;

//     return hypotenuse;
// }
// var base = 5;
// var perpendicular = 3;
// var result = Hypotenuse(base, perpendicular);
// document.write(result);

// ? Q9)
//   using arguments  as values

// function rectangularArea(width, height) {
//     return width * height;
// }
// var result=rectangularArea(4,5);
// document.write(result +"<br>");

//   using arguments as varaibles

// function rectangularAreaVaraiables(){
//          var width=arguments[0];
//          var height=arguments[1];
//          return width*height;
// }
// var result2=rectangularAreaVaraiables(3,7);
// document.write(result2);

// ? Q10)

// function isPalindrome(str){

//     var a =str.split('').reverse().join('')
//   if(a===str){
//     console.log(str+' is palindrome')
// }
//     else{
//         console.log(str+' is not palindrome')
//     }

// }
// var palindromeCheck =prompt('Enter string to check palindrome')
// isPalindrome(palindromeCheck)

// ? Q11)

// function capitalizeWords(str) {

//    var words = str.split(' ');
//    var capitalizedWords = words.map(word =>
//         word.charAt(0).toUpperCase()+ word.slice(1));

//     return capitalizedWords.join(' ');
// }
// var inputStr = 'the quick brown fox';
// var outputStr = capitalizeWords(inputStr);
// document.write(outputStr);

// ? Q12)

// function LongestWord(str) {

//     var words = str.split(' ');
//     var longestWord = '';
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//       }
//     }

//     return longestWord;
//   }
//   var inputStr = 'Web Development Tutorial';
//   var longest = LongestWord(inputStr);
//  document.write(longest);

// ? Q13)

// function count(str, letter) {
//     var countNum = 0;
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             countNum++;
//         }
//     }
//     return countNum;
// }
// var inputstr = 'JSResourceS.com';
// var letter = 'o';
// var result = count(inputstr, letter);
// document.write("Number of occurrences of '" + letter + "': " + result);

// ? Q14)

// function calcCircumference(radius) {
//     if (typeof radius !== 'number' || radius < 0) {
//         return "Invalid input. Please provide a valid positive number for the radius.";
//     }
//     var circumference = 2 * Math.PI * radius;
//     return `The circumference is ${circumference.toFixed(2)}`;
// }

// function calcArea(radius) {
//     if (typeof radius !== 'number' || radius < 0) {
//         return "Invalid input. Please provide a valid positive number for the radius.";
//     }
//     var area = Math.PI * Math.pow(radius, 2);
//     return `The area is ${area.toFixed(2)}`;
// }
// var radius = 8;
// document.write(calcCircumference(radius) + "<br>");
// document.write(calcArea(radius));