/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(256);
console.log(`Sqrt of 256 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(10,5,5498,481,98,191,98,464,86,16,1,81);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(10,5,5498,481,98,191,98,464,86,16,1,81);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2 , 5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Indian Time
let indianTime = new Date().toLocaleTimeString();
console.log(indianTime);

// Get Proper Time
let options = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US',options);
console.log(usaTime);

// get full day of the week using switch statement
let today = new Date().getDay();
let fullDay = 'Today is : ';
switch(today){
    case 0:
        fullDay += 'SUNDAY';
        break;
    case 1:
        fullDay += 'MONDAY';
        break;
    case 2:
        fullDay += 'TUESDAY';
        break;
    case 3:
        fullDay += 'WEDNESDAY';
        break;
    case 4:
        fullDay += 'THURSDAY';
        break;
    case 5:
        fullDay += 'FRIDAY';
        break;
    case 6:
        fullDay += 'SATURDAY';
        break;
    default:
        fullDay += ' - ';
        break;
}
console.log(fullDay);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let str1 = Number.parseInt('123');
console.log(`Value : ${str1} Type : ${typeof str1}`);

let str2 = Number.parseFloat('123.45646');
console.log(`Value : ${str2} Type : ${typeof str2}`);

let num1 = 1000.415;
let newStr = num1.toString();
console.log(`Value : ${num1} Type : ${typeof num1}`);
console.log(`Value : ${newStr} Type : ${typeof newStr}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = 'Good Morning';

// UpperCase
console.log(msg.toUpperCase());

// Lower Case
console.log(msg.toLowerCase());

// Length
console.log(`Length : ${msg.length}`);

// charAt(index)
console.log(msg.charAt(0)); // G

// charCodeAt(index)
console.log(msg.charCodeAt(0)); // 71

// substr(index,no of chars)
console.log(msg.substr(0,4)); // Good

// substr(index)
console.log(msg.substr(5)); // Morning


// Example 1: Count the no of 'n' in the given string
let theMessage = 'Good MORNING';
let countNs = (str) => {
    let count = 0;
    for(let i=0; i<str.length ; i++){
        let ch = str.charAt(i);
        if(ch === 'n' || ch === 'N'){
            count++;
        }
    }
    return count;
};
console.log(countNs(theMessage));

// Example 2 : Reverse String Logic
theMessage = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i = str.length-1 ; i>=0; i--){
        tempString += str.charAt(i);
    }
    return tempString;
};
console.log(reverseString(theMessage));

// Example 3 : isPalindrome or not
theMessage = 'ABA';
let isPalindrome = (str) => {
    return str === reverseString(str);
};
console.log(isPalindrome(theMessage));

// Example 4 : convert to Palindrome String
theMessage = 'BAD';
let convertToPalindrome = (str) => {
    return str + reverseString(str.substr(0,str.length-1));
};
console.log(convertToPalindrome(theMessage));

// Example 5 : 123 -> ONE TWO THREE
theMessage = '01452';
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number.parseInt(str.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};
console.log(convertToWordNumber(theMessage));

 // Example 6 : Convert To Word Number
theMessage = '123';
let array = ['ZERO' , 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
let convertWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};
console.log(convertWordNumber(theMessage));

// Example 7 : Convert to Palindrome Word Number
theMessage = '12';
let convertToPalindromeWordNumber = (str) => {
    return convertWordNumber(convertToPalindrome(str));
};
console.log(convertToPalindromeWordNumber(theMessage));

// Example 8 : Reverse Word Number
theMessage = '569';
let reverseWordNumber = (str) => {
    return convertWordNumber(reverseString(str));
};
console.log(reverseWordNumber(theMessage));

// Example 9 : Triangle One
theMessage = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i = 1 ; i<= str.length ; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theMessage));

// Example 10 : Triangle Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

// Example 11 : Triangle Two
theMessage = 'NAVEEN SAGGAM';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        tempStr += `${addSpace(i)}${str.substr(i)}\n`;
    }
    return tempStr;
};
console.log(triangleTwo(theMessage));

// Example 12 : Triangle Three
theMessage = 'NAVEEN SAGGAM';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)}\n`;
    }
    return tempStr;
};
console.log(triangleThree(theMessage));

// Example 13 : Triangle Four
theMessage = 'NAVEEN SAGGAM';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1 ; i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)}\n`
    }
    return tempStr;
};
console.log(triangleFour(theMessage));

// Example 14 : Word Triangle
let theNumber = 5 ;
let wordTriangle = (theNumber) => {
    let tempStr = '';
    for(let i = 1; i<= theNumber; i++){
        for(let j = 1 ; j<= i ; j++){
            tempStr += `${convertWordNumber(j.toString())}`;
        }
        tempStr += '\n';
    }
    return tempStr;
};
console.log(wordTriangle(theNumber));

// Future Practice
/*
1) https://codingbat.com/java
2) https://www.codechef.com/
3) https://www.hackerrank.com/
4) https://www.hackerearth.com/
5) https://www.codecademy.com/

 */
